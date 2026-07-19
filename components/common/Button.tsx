import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition-all duration-200";

  const styles =
    variant === "primary"
      ? "bg-cyan-400 hover:bg-cyan-300 text-black shadow-lg"
      : "bg-[#1F2937] hover:bg-[#374151] text-white";

  if (href) {
    return (
      <Link href={href} className={`${base} ${styles}`}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${base} ${styles}`}>
      {children}
    </button>
  );
}