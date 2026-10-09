import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { SkillCard } from "../components/SkillCard";
import { skillCategories } from "../data/skills";

export function Skills() {
  return (
    <section id="skills" className="section section-tinted">
      <div className="container">
        <Reveal><SectionHeading number="02" label="The toolkit" title="The right tools. Thoughtfully used" description="A modern development stack for bringing ideas to life, from the first pixel to the last API endpoint." /></Reveal>
        <div className="skills-grid">{skillCategories.map((category, index) => <Reveal key={category.id} delay={index * 0.06}><SkillCard category={category} /></Reveal>)}</div>
      </div>
    </section>
  );
}