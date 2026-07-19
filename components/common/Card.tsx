import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

export default function Card({ children }: CardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#1F2937] p-6 shadow-lg">
      {children}
    </div>
  );
}