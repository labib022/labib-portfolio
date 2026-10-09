import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, Check, CheckCircle2, Copy, Download, FileCheck2, Info, LoaderCircle, Mail, MapPin } from "lucide-react";
import { Github, Linkedin } from "../components/Icons";
import { Reveal } from "../components/Reveal";
import { ProfileLink } from "../components/Resources";
import { site } from "../data/site";
import { contactEndpoint, contactSchema, formatMessage, sendContactMessage, type ContactValues } from "../lib/contact";
import { downloadText } from "../lib/download";
import type { ServiceInquiry } from "../types";

export function Contact({ inquiry }: { inquiry: ServiceInquiry | null }) {
  const { register, handleSubmit, setValue, reset, getValues, formState: { errors, isSubmitting } } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    mode: "onTouched",
    defaultValues: { fullName: "", email: "", subject: "", message: "" },
  });
  const [result, setResult] = useState<{ mode: "draft" | "sent"; values: ContactValues } | null>(null);
  const [submitError, setSubmitError] = useState("");
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">("idle");
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inquiry) {
      setResult(null);
      setValue("subject", inquiry.subject, { shouldValidate: false });
    }
  }, [inquiry, setValue]);

  useEffect(() => { if (result) successRef.current?.focus({ preventScroll: true }); }, [result]);

  const onSubmit = async (values: ContactValues) => {
    setSubmitError("");
    setCopyState("idle");
    if (!contactEndpoint) {
      setResult({ mode: "draft", values });
      return;
    }
    try {
      await sendContactMessage(values);
      setResult({ mode: "sent", values });
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Something went wrong. Your message was not sent.");
    }
  };

  const copyMessage = async () => {
    if (!result) return;
    try {
      await navigator.clipboard.writeText(formatMessage(result.values));
      setCopyState("copied");
    } catch {
      setCopyState("error");
    }
  };

  return (
    <section id="contact" className="section section-contact">
      <div className="container contact-grid">
        <Reveal className="contact-intro">
          <p className="eyebrow"><span>07</span><span className="eyebrow-rule" />Let's make it happen</p>
          <h2>Let's build<br />something <span>great.</span><br />Together.</h2>
          <p className="contact-description">Have an idea, a project, or an opportunity? I'd love to hear about it. Let's turn your ideas into useful digital experiences.</p>
          <div className="contact-links">
            <ProfileLink kind="email" className="contact-link"><Mail size={20} /><span><span className="contact-link-label">Drop me a line</span><span>{site.email || "Email address to be added"}</span></span><ArrowUpRight size={17} /></ProfileLink>
            <ProfileLink kind="github" className="contact-link"><Github size={20} /><span><span className="contact-link-label">Explore the code</span><span>GitHub profile</span></span><ArrowUpRight size={17} /></ProfileLink>
            <ProfileLink kind="linkedin" className="contact-link"><Linkedin size={19} /><span><span className="contact-link-label">Let's connect</span><span>LinkedIn profile</span></span><ArrowUpRight size={17} /></ProfileLink>
          </div>
          <p className="contact-location"><MapPin size={15} /> Based in {site.location}{site.isExampleIdentity && <span className="location-note">(editable)</span>}</p>
        </Reveal>
        <Reveal className="contact-form-wrap" delay={0.1}>
          {result ? (
            <div className="contact-result" ref={successRef} tabIndex={-1}>
              <div className="result-icon">{result.mode === "sent" ? <CheckCircle2 size={35} /> : <FileCheck2 size={35} />}</div>
              <p className="eyebrow">{result.mode === "sent" ? "Message received" : "Your words, ready to go"}</p>
              <h3>{result.mode === "sent" ? "Thanks for reaching out." : "Your draft is ready."}</h3>
              <p role="status">{result.mode === "sent" ? "The message service confirmed your submission. Thank you for starting the conversation." : "Your message has not been sent. Email delivery isn't connected to this portfolio yet, but you can keep a copy of your message."}</p>
              <div className="message-summary"><span>SUBJECT</span><p>{result.values.subject}</p><span>FROM</span><p>{result.values.fullName} / {result.values.email}</p></div>
              {result.mode === "draft" && <div className="draft-actions"><button type="button" className="button button-primary" onClick={() => downloadText("contact-message-draft.txt", formatMessage(result.values))}><Download size={16} /> Download draft</button><button type="button" className="button button-secondary" onClick={copyMessage}>{copyState === "copied" ? <Check size={16} /> : <Copy size={16} />}{copyState === "copied" ? "Copied" : "Copy text"}</button></div>}
              {copyState === "error" && <p className="field-error" role="alert">Clipboard access isn't available. Please use Download draft instead.</p>}
              <button type="button" className="text-link" onClick={() => { if (result.mode === "sent") reset(); setResult(null); }}>{result.mode === "sent" ? "Write another message" : "Back to edit your draft"} <ArrowUpRight size={16} /></button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate aria-label="Contact form">
              <h3>Tell me what you have in mind.</h3>
              <div className="form-row">
                <div className="form-field"><label htmlFor="contact-name">Full name <span>*</span></label><input id="contact-name" autoComplete="name" placeholder="Your name" maxLength={100} {...register("fullName")} aria-required="true" aria-invalid={Boolean(errors.fullName)} aria-describedby={errors.fullName ? "name-error" : undefined} />{errors.fullName && <p id="name-error" className="field-error">{errors.fullName.message}</p>}</div>
                <div className="form-field"><label htmlFor="contact-email">Email address <span>*</span></label><input id="contact-email" type="email" autoComplete="email" placeholder="you@example.com" maxLength={254} {...register("email")} aria-required="true" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} />{errors.email && <p id="email-error" className="field-error">{errors.email.message}</p>}</div>
              </div>
              <div className="form-field"><label htmlFor="contact-subject">Subject <span>*</span></label><input id="contact-subject" placeholder="What's on your mind?" maxLength={150} {...register("subject")} aria-required="true" aria-invalid={Boolean(errors.subject)} aria-describedby={errors.subject ? "subject-error" : undefined} />{errors.subject && <p id="subject-error" className="field-error">{errors.subject.message}</p>}</div>
              <div className="form-field"><label htmlFor="contact-message">Message <span>*</span></label><textarea id="contact-message" rows={5} placeholder="A little about your idea, goals, and what you're looking for..." maxLength={3000} {...register("message")} aria-required="true" aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} />{errors.message && <p id="message-error" className="field-error">{errors.message.message}</p>}</div>
              {!contactEndpoint && <div className="form-notice"><Info size={15} /><p>Preview mode. Messages aren't sent. Prepare a draft to download or copy instead.</p></div>}
              {submitError && <div className="form-error" role="alert"><p>{submitError}</p><button type="button" className="text-link" onClick={() => downloadText("contact-message-draft.txt", formatMessage(getValues()))}>Download a copy <Download size={14} /></button></div>}
              <button type="submit" className="button button-primary submit-button" disabled={isSubmitting}>{isSubmitting ? <><LoaderCircle size={17} className="spinner" /> Sending message...</> : <>{contactEndpoint ? "Send Message" : "Prepare Message"}<ArrowUpRight size={18} /></>}</button>
              <p className="form-privacy">{contactEndpoint ? "Your details are used only to respond to your inquiry." : "Your draft stays on this page. Nothing is sent to a server."}</p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}