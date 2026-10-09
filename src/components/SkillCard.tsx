import { CodeXml, Database, GitBranch, Terminal } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { skillCategories } from "../data/skills";
import { TechIcon } from "./Icons";

export function SkillCard({ category }: { category: typeof skillCategories[number] }) {
  const categoryIcons: Record<string, LucideIcon> = { frontend: CodeXml, backend: Terminal, database: Database, tools: GitBranch };
  const Icon = categoryIcons[category.id];
  return (
    <div className="skill-category">
      <Icon size={23} strokeWidth={1.5} className="skill-category-icon" aria-hidden="true" />
      <h3>{category.name}</h3>
      <p>{category.description}</p>
      <ul>{category.skills.map((skill) => <li key={skill}><TechIcon name={skill} size={19} className="technology-icon" /><span>{skill}</span></li>)}</ul>
    </div>
  );
}