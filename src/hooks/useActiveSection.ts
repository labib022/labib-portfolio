import { useEffect, useState } from "react";

const allSectionIds = ["home", "about", "skills", "projects", "experience", "services", "process", "contact"];

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 24);
      const threshold = window.innerHeight * 0.35;
      const current = [...allSectionIds].reverse().find((id) => {
        const element = document.getElementById(id);
        return element && element.getBoundingClientRect().top <= threshold;
      });
      const activeId = current === "process" ? "services" : (current ?? "home");
      setActiveSection(activeId);
    };
    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  return { activeSection, scrolled };
}