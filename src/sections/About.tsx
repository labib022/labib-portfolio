import { useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { site } from "../data/site";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { TypeScriptIcon } from "../components/Icons";

export function About() {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">("idle");
  const copyProfile = async () => {
    try {
      await navigator.clipboard.writeText(
        JSON.stringify(
          {
            role: site.title,
            experience: site.experience,
            stack: site.primaryStack,
            location: site.location,
            learning: "Docker, Redis, JWT",
            openTo: "Full-time, Remote",
          },
          null,
          2
        )
      );
      setCopyState("copied");
    } catch {
      setCopyState("error");
    }
  };

  return (
    <section id="about" className="section section-about">
      <div className="container about-grid">
        <Reveal>
          <SectionHeading number="01" label="Behind the code" title="A little about me" />
          <div className="about-copy">
            <p>I like turning complex problems into <span className="text-foreground">simple, useful digital experiences.</span> For me, good development is equal parts thoughtful design and dependable engineering.</p>
            <p>I'm a MERN stack developer based in Dhaka with {site.experience.toLowerCase()} of experience, including a role as Junior MERN Stack Developer at Betopia Group, where I worked on e-commerce and booking platforms. I care about the details that make an application work better, from authentication to performance.</p>
            <p>Right now I'm learning Docker, Redis, and JWT-based authentication to build more secure and scalable backends. Outside of code, you'll find me playing football. I'm open to full-time and remote opportunities.</p>
          </div>
          <a className="text-link about-link" href="#contact">Let's get to know each other <ArrowUpRight size={17} /></a>
        </Reveal>
        <Reveal className="profile-code" delay={0.12}>
          <div className="code-file-header"><span><TypeScriptIcon size={16} /> developer.ts</span><button type="button" className="icon-button" onClick={copyProfile} aria-label="Copy profile information">{copyState === "copied" ? <Check size={16} className="text-accent" /> : <Copy size={15} />}</button></div>
          <div className="code-body" aria-label="Developer profile">
            <div><span className="code-purple">const</span> <span className="code-white">developer</span> <span className="code-muted">= {"{"}</span></div>
            <dl>
              <div><dt>role:</dt><dd>"{site.title}",</dd></div>
              <div><dt>experience:</dt><dd>"{site.experience}",</dd></div>
              <div><dt>stack:</dt><dd>"{site.primaryStack}",</dd></div>
              <div><dt>location:</dt><dd>"{site.location}",</dd></div>
              <div><dt>learning:</dt><dd>"Docker, Redis, JWT",</dd></div>
              <div><dt>openTo:</dt><dd>"Full-time, Remote"</dd></div>
            </dl>
            <div className="code-muted">{"};"}</div>
            <div className="code-comment">// Built with curiosity. Refined with care.</div>
          </div>
          <p className="profile-note" role="status">{copyState === "copied" ? "Profile copied to clipboard." : copyState === "error" ? "Clipboard unavailable. You can select and copy the text above." : ""}</p>
        </Reveal>
      </div>
    </section>
  );
}