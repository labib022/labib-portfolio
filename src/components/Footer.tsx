import { ArrowUpRight } from "lucide-react";
import { site } from "../data/site";
import { Brand } from "./Brand";
import { ProfileLink } from "./Resources";
import { Github, Linkedin } from "./Icons";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div><Brand /><p>Designed with purpose. Built with code.</p></div>
          <nav className="footer-nav" aria-label="Footer navigation"><a href="#about">About</a><a href="#projects">Projects</a><a href="#contact">Contact</a></nav>
          <div className="footer-socials"><ProfileLink kind="github" label="GitHub profile" className="social-link"><Github size={19} /></ProfileLink><ProfileLink kind="linkedin" label="LinkedIn profile" className="social-link"><Linkedin size={19} /></ProfileLink><a href="#home" className="back-top" aria-label="Back to top"><ArrowUpRight size={20} /></a></div>
        </div>
        <div className="footer-bottom"><p>&copy; {new Date().getFullYear()} {site.displayName}{site.brandSuffix}. All rights reserved.</p><p>Built with React, TypeScript & a little curiosity.</p></div>
      </div>
    </footer>
  );
}