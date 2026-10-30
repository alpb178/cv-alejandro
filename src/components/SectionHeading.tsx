export default function SectionHeading({
  id,
  number,
  title,
}: {
  id?: string;
  number: string;
  title: string;
}) {
  return (
    <header id={id} className="mb-6 flex items-baseline gap-3 border-b border-line pb-3">
      <span className="font-serif text-sm italic text-accent">{number}.</span>
      <h2 className="text-xl font-semibold tracking-tight text-fg sm:text-2xl">{title}</h2>
    </header>
  );
}
