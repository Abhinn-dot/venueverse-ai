import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function PageContainer({ children }: Props) {
  return (
    <main className="flex-1 bg-[#030712] p-8 overflow-auto">
      {children}
    </main>
  );
}