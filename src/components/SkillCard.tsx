import { CodeXml, Database, GitBranch, Terminal } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { skillCategories } from "../data/skills";
import { TechIcon } from "./Icons";

interface SkillCardProps {
  category: typeof skillCategories[number];
  isFeatured?: boolean;
}

export function SkillCard({ category, isFeatured = false }: SkillCardProps) {
  const categoryIcons: Record<string, LucideIcon> = {
    frontend: CodeXml,
    backend: Terminal,
    database: Database,
    tools: GitBranch,
  };
  const Icon = categoryIcons[category.id] ?? CodeXml;
  return (
    <div className={`skill-category ${isFeatured ? "skill-category-featured" : ""}`}>
      <Icon size={23} strokeWidth={1.5} className="skill-category-icon" aria-hidden="true" />
      <h3>{category.name}</h3>
      <p>{category.description}</p>
      <ul>
        {category.skills.map((skill) => (
          <li key={skill}>
            <TechIcon name={skill} size={19} className="technology-icon" />
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}