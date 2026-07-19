type StatusDotProps = {
  color: "green" | "yellow" | "red";
};

const colors = {
  green: "bg-green-500",
  yellow: "bg-yellow-500",
  red: "bg-red-500",
};

export default function StatusDot({ color }: StatusDotProps) {
  return (
    <span
      className={`inline-block h-3 w-3 rounded-full ${colors[color]} animate-pulse`}
    />
  );
}