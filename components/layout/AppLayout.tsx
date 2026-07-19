"use client";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import PageContainer from "./PageContainer";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-[#030712] text-white">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Navbar />

        <PageContainer>{children}</PageContainer>
      </div>
    </div>
  );
}