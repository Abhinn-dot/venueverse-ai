type BadgeProps = {
  text: string;
};

export default function Badge({ text }: BadgeProps) {
  return (
    <span className="rounded-full bg-cyan-400/20 px-3 py-1 text-sm font-medium text-cyan-300">
      {text}
    </span>
  );
}