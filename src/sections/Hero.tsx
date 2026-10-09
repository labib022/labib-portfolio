import { m, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download, Mail } from "lucide-react";
import { site } from "../data/site";
import { ProfileLink } from "../components/Resources";
import { Github, Linkedin } from "../components/Icons";

export function Hero() {
  const reducedMotion = useReducedMotion();
  const item = {
    hidden: { opacity: 0, y: reducedMotion ? 0 : 16 },
    visible: { opacity: 1, y: 0, transition: { duration: reducedMotion ? 0 : 0.6 } },
  };

  return (
    <section id="home" className="hero" aria-label="Introduction">
      <div className="hero-image-plane" aria-hidden="true">
        <m.img className="hero-image" src="/images/developer-workspace.jpg" alt="" width="1568" height="880" fetchPriority="high" initial={{ scale: reducedMotion ? 1 : 1.035 }} animate={{ scale: 1 }} transition={{ duration: 1.8 }} />
      </div>
      <div className="hero-shade" aria-hidden="true" />
      <div className="container hero-container">
        <m.div className="hero-content" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: reducedMotion ? 0 : 0.09, delayChildren: 0.08 } } }}>
          <m.p variants={item} className="availability"><span className="status-dot" />{site.availableForOpportunities ? "Available for opportunities" : "Full stack. Thoughtfully built."}</m.p>
          <m.h1 variants={item}>
            <span className="hero-name">{site.displayName}<span>{site.brandSuffix}</span></span>
            <span className="hero-headline">Building digital experiences<br className="desktop-break" /> that make an <span className="hero-impact">impact.</span></span>
          </m.h1>
          <m.p variants={item} className="hero-description">I'm a {site.title} with {site.experience.toLowerCase()} of experience building responsive, user-friendly, and scalable web applications using modern frontend and backend technologies.</m.p>
          <m.div variants={item} className="hero-actions">
            <a href="#projects" className="button button-primary">Explore My Work <ArrowUpRight size={18} /></a>
            <ProfileLink kind="resume" className="button button-secondary"><Download size={16} /> Download Resume</ProfileLink>
          </m.div>
          <m.div variants={item} className="hero-socials">
            <span className="hero-social-label">Find me on</span>
            <span className="social-rule" />
            <ProfileLink kind="github" label="View GitHub profile" className="social-link"><Github size={18} /></ProfileLink>
            <ProfileLink kind="linkedin" label="View LinkedIn profile" className="social-link"><Linkedin size={18} /></ProfileLink>
            <ProfileLink kind="email" label="Get in touch by email" className="social-link"><Mail size={19} /></ProfileLink>
          </m.div>
        </m.div>
      </div>
      <a className="hero-scroll" href="#about" aria-label="Scroll to about me"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a>
    </section>
  );
}