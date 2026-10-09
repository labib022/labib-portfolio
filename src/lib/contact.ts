import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name (at least 2 characters).").max(100, "Please keep your name under 100 characters."),
  email: z.string().trim().min(1, "Please enter your email address.").email("Please enter a valid email address.").max(254, "Please use a shorter email address."),
  subject: z.string().trim().min(3, "Add a subject with at least 3 characters.").max(150, "Please keep the subject under 150 characters."),
  message: z.string().trim().min(20, "Tell me a little more (at least 20 characters).").max(3000, "Please keep your message under 3,000 characters."),
});

export type ContactValues = z.infer<typeof contactSchema>;
export const contactEndpoint = (import.meta.env.VITE_CONTACT_ENDPOINT ?? "").trim();

export function formatMessage(values: ContactValues) {
  return `CONTACT MESSAGE DRAFT - NOT SENT\n\nFrom: ${values.fullName}\nEmail: ${values.email}\nSubject: ${values.subject}\n\n${values.message}\n`;
}

export async function sendContactMessage(values: ContactValues) {
  if (!contactEndpoint) throw new Error("Message delivery has not been configured.");
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 15000);
  try {
    const response = await fetch(contactEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      credentials: "omit",
      body: JSON.stringify(values),
      signal: controller.signal,
    });
    if (!response.ok) throw new Error(response.status === 429
      ? "Too many requests. Please wait a moment and try again."
      : "Your message could not be sent. Please try again, or download a copy.");
    const result: unknown = await response.json();
    if (typeof result !== "object" || result === null || !("ok" in result) || result.ok !== true) {
      throw new Error("The service did not confirm delivery. Your message has not been marked as sent.");
    }
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") throw new Error("The request timed out. Please try again later.");
    if (error instanceof TypeError) throw new Error("Couldn't reach the message service. Check your connection and try again.");
    if (error instanceof SyntaxError) throw new Error("The service returned an unexpected response. Delivery could not be confirmed.");
    throw error;
  } finally {
    window.clearTimeout(timeout);
  }
}