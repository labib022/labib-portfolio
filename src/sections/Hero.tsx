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
      <div className="container hero-container">
        <m.div
          className="hero-layout"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: reducedMotion ? 0 : 0.09, delayChildren: 0.08 } } }}
        >
          <div className="hero-content">
            <m.p variants={item} className="availability"><span className="status-dot" />{site.availableForOpportunities ? "Available for opportunities" : "Full stack. Thoughtfully built."}</m.p>
            <m.h1 variants={item}>
              <span className="hero-name">Hi, I'm <span className="hero-name-accent">{site.displayName}.</span></span>
              <span className="hero-headline">Full stack developer building fast, reliable<br className="desktop-break" /> <span className="hero-impact">MERN apps.</span></span>
            </m.h1>
            <m.p variants={item} className="hero-description">{site.title} from Dhaka with {site.experience.toLowerCase()} of experience building e-commerce, booking, and dashboard platforms. I work with Next.js, Node.js, and MongoDB.</m.p>
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
          </div>

          <m.div variants={item} className="hero-portrait-wrap">
            <div className="hero-portrait-frame">
              <img
                className="hero-portrait-img"
                src={site.profileImage}
                alt={`${site.displayName}, a full stack developer from Dhaka`}
                width={1856}
                height={2304}
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </m.div>
        </m.div>
      </div>
      <a className="hero-scroll" href="#about" aria-label="Scroll to about me"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a>
    </section>
  );
}