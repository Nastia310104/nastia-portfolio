import type { ReactNode } from "react";

type PageSectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
};

export default function PageSection({
  id,
  children,
  className = "",
}: PageSectionProps) {
  return (
    <section
      id={id}
      className={`page-section ${className}`}
    >
      {children}
    </section>
  );
}