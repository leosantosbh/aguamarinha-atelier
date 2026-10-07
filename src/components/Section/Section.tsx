import type { ReactNode } from "react";
import "./Section.css";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

export function Section({
  id,
  children,
  className = "",
  dark = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`section ${dark ? "section--dark" : ""} ${className}`}
    >
      <div className="section__content">
        {children}
      </div>
    </section>
  );
}