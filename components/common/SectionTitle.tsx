type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="mb-6">
      <h2 className="text-3xl font-bold text-white">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-gray-400">{subtitle}</p>
      )}
    </div>
  );
}