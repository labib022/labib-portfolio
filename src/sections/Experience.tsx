import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { experience } from "../data/experience";
import { ProfileLink } from "../components/Resources";
import { TechIcon } from "../components/Icons";

export function Experience() {
  return (
    <section id="experience" className="section section-tinted">
      <div className="container experience-grid">
        <Reveal className="experience-intro">
          <SectionHeading
            number="04"
            label="Learning. Building. Growing."
            title="Professional journey"
            description="Building real products with the MERN stack, and getting better with every project."
          />
          <ProfileLink kind="resume" className="text-link">
            The full story in my resume <ArrowUpRight size={17} />
          </ProfileLink>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="experience-timeline">
            {experience.map((entry) => (
              <article className="timeline-entry" key={entry.id}>
                <span className="timeline-dot" />
                <p className="eyebrow">{entry.dates}</p>
                <h3>{entry.title}</h3>
                <p className="experience-company">
                  {entry.company} / {entry.location}
                </p>
                <ul className="experience-responsibilities">
                  {entry.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {entry.achievements.length > 0 && (
                  <>
                    <h4>Key achievements</h4>
                    <ul className="experience-responsibilities">
                      {entry.achievements.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </>
                )}
                <div className="inline-technologies">
                  {entry.technologies.map((tech) => (
                    <span key={tech} className="tech-badge">
                      <TechIcon name={tech} size={13} />
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}