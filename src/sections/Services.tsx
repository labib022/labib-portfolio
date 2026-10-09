import { ArrowUpRight, Layers, PanelsTopLeft, Terminal, Wrench } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { services } from "../data/services";

export function Services({ onInquiry }: { onInquiry: (subject: string) => void }) {
  const icons = { frontend: PanelsTopLeft, fullstack: Layers, backend: Terminal, maintenance: Wrench };
  return (
    <section id="services" className="section section-services">
      <div className="container">
        <Reveal><SectionHeading number="05" label="Built around your goals" title="What I can help you build" description="From a first idea to a better existing product. Let's build something that works beautifully." /></Reveal>
        <div className="services-grid">{services.map((service, index) => {
          const Icon = icons[service.id];
          return <Reveal key={service.id} delay={index * 0.06}><a href="#contact" className="service-item" onClick={() => onInquiry(`Project inquiry: ${service.title}`)}><span className="service-top"><Icon size={26} strokeWidth={1.4} /><ArrowUpRight size={19} className="service-arrow" /></span><h3>{service.title}</h3><p>{service.description}</p><span className="service-link">Let's talk <span aria-hidden="true">/</span></span></a></Reveal>;
        })}</div>
      </div>
    </section>
  );
}