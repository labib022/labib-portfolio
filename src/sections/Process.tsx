import { ArrowRight } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { processSteps } from "../data/services";

export function Process() {
  return (
    <section id="process" className="section section-process">
      <div className="container">
        <Reveal><SectionHeading number="06" label="A clear path forward" title="How I work" description="Good results start with a good process. Here's how we get from an idea to something real." /></Reveal>
        <ol className="process-grid">{processSteps.map((step, index) => <li key={step.name}><Reveal delay={index * 0.07}><div className="process-step-top"><span className="process-number">0{index + 1}</span><span className="process-line" />{index < 3 && <ArrowRight size={15} aria-hidden="true" />}</div><h3>{step.name}</h3><p>{step.description}</p></Reveal></li>)}</ol>
      </div>
    </section>
  );
}