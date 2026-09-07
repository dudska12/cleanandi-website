export function SectionHeading({
  eyebrow,
  title,
  description,
  headingId,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  headingId: string;
}) {
  return (
    <div className="max-w-2xl">
      <div className="mb-4 flex items-center gap-3">
        <span aria-hidden className="inline-block h-0.5 w-6 bg-brand" />
        <span className="text-xs font-extrabold tracking-[0.14em] text-brand">
          {eyebrow}
        </span>
      </div>
      <h2
        id={headingId}
        className="text-[clamp(1.75rem,3.8vw,2.75rem)] font-extrabold leading-[1.24] tracking-[-0.02em] text-ink"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-[17px] leading-[1.72] text-muted">{description}</p>
      ) : null}
    </div>
  );
}
