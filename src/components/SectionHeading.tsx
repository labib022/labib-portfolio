interface SectionHeadingProps {
  number: string;
  label: string;
  title: string;
  description?: string;
}

export function SectionHeading({ number, label, title, description }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="eyebrow"><span>{number}</span><span className="eyebrow-rule" />{label}</p>
      <h2>{title}<span className="text-accent">.</span></h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}