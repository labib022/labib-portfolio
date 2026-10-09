import { Layers, PanelsTopLeft, Terminal } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { services } from "../data/services";

export function Services() {
  const icons = { frontend: PanelsTopLeft, backend: Terminal, fullstack: Layers };

  return (
    <section id="services" className="section section-services">
      <div className="container">
        <Reveal>
          <SectionHeading
            number="05"
            label="What I bring"
            title="What I bring to a team."
            description="Full stack skills I use to ship features from the interface to the database."
          />
        </Reveal>
        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = icons[service.id];
            return (
              <Reveal key={service.id} delay={index * 0.06}>
                <article className="service-item">
                  <span className="service-top">
                    <Icon size={26} strokeWidth={1.4} />
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}