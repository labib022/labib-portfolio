import { CodeXml } from "lucide-react";
import { site } from "../data/site";

export function Brand() {
  return (
    <a href="#home" className="brand" aria-label={`${site.displayName}.dev home`}>
      <CodeXml className="brand-icon" size={26} strokeWidth={1.8} aria-hidden="true" />
      <span>{site.displayName}<span className="text-accent">{site.brandSuffix}</span></span>
    </a>
  );
}