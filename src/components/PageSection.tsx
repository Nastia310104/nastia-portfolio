import type { ReactNode } from "react";

type PageSectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  compact?: boolean;
  labelledBy?: string;
};

export default function PageSection({
  id,
  children,
  className = "",
  compact = false,
  labelledBy,
}: PageSectionProps) {
  const classes = [
    compact ? "page-section-compact" : "page-section",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section
      id={id}
      className={classes}
      aria-labelledby={labelledBy}
    >
      {children}
    </section>
  );
}
