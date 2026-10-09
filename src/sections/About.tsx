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
      await navigator.clipboard.writeText(JSON.stringify({ role: site.title, experience: site.experience, stack: site.primaryStack, location: site.location }, null, 2));
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
            <p>My focus is the MERN stack: responsive frontends, well-structured REST APIs, and databases that make sense. From authentication to performance, I care about the details that make an application work better.</p>
            <p>Always learning. Always building. Always looking for a better way.</p>
          </div>
          <a className="text-link about-link" href="#contact">Let's get to know each other <ArrowUpRight size={17} /></a>
        </Reveal>
        <Reveal className="profile-code" delay={0.12}>
          <div className="code-file-header"><span><TypeScriptIcon size={16} /> developer.ts</span><button type="button" className="icon-button" onClick={copyProfile} aria-label="Copy example profile information">{copyState === "copied" ? <Check size={16} className="text-accent" /> : <Copy size={15} />}</button></div>
          <div className="code-body" aria-label="Example profile information">
            <div><span className="code-purple">const</span> <span className="code-white">developer</span> <span className="code-muted">= {"{"}</span></div>
            <dl>
              <div><dt>role:</dt><dd>"{site.title}",</dd></div>
              <div><dt>experience:</dt><dd>"{site.experience}",</dd></div>
              <div><dt>stack:</dt><dd>"{site.primaryStack}",</dd></div>
              <div><dt>location:</dt><dd>"{site.location}",</dd></div>
              <div><dt>mindset:</dt><dd>"Always learning"</dd></div>
            </dl>
            <div className="code-muted">{"};"}</div>
            <div className="code-comment">// Built with curiosity. Refined with care.</div>
          </div>
          <p className="profile-note" role="status">{copyState === "copied" ? "Example profile copied to clipboard." : copyState === "error" ? "Clipboard unavailable. You can select and copy the text above." : "Example profile. Personal details are editable."}</p>
        </Reveal>
      </div>
    </section>
  );
}