import type { ReactNode } from "react";

type SectionProps = {
  title?: string;
  children: ReactNode;
  id?: string;
};

export function Section({ title, children, id }: SectionProps) {
  return (
    <section className="section" id={id}>
      {title ? <h2>{title}</h2> : null}
      {children}
    </section>
  );
}
