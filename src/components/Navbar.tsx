import { useEffect, useRef, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { navigation } from "../data/site";
import { useActiveSection } from "../hooks/useActiveSection";
import { Brand } from "./Brand";
import { ProfileLink } from "./Resources";

export function Navbar() {
  const { activeSection, scrolled } = useActiveSection();
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onResize = () => { if (window.innerWidth >= 1024) setMenuOpen(false); };
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [menuOpen]);

  return (
    <header className={`site-header ${scrolled || menuOpen ? "is-scrolled" : ""}`}>
      <div className="container nav-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.id} href={`#${item.id}`} className={`nav-link ${activeSection === item.id ? "is-active" : ""}`} aria-current={activeSection === item.id ? "location" : undefined}>{item.label}</a>
          ))}
        </nav>
        <div className="nav-actions">
          <ProfileLink kind="resume" label="Download resume" className="button button-nav"><Download size={15} /> <span>Download Resume</span></ProfileLink>
          <button id="mobile-nav-toggle" ref={toggleRef} type="button" className="icon-button menu-toggle" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-controls={menuOpen ? "mobile-navigation" : undefined} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <>
            <m.button className="mobile-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} aria-label="Close navigation menu" tabIndex={-1} onClick={() => setMenuOpen(false)} />
            <m.nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}>
              {navigation.map((item, index) => <a key={item.id} className={activeSection === item.id ? "is-active" : ""} aria-current={activeSection === item.id ? "location" : undefined} href={`#${item.id}`} onClick={() => setMenuOpen(false)}><span className="mono">0{index + 1}</span>{item.label}</a>)}
              <div className="mobile-resume" onClick={() => setMenuOpen(false)}><ProfileLink kind="resume" className="button button-primary"><Download size={16} /> Download Resume</ProfileLink></div>
            </m.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}