import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

import { IncidentProvider } from "@/context/IncidentContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "VenueVerse AI",
  description:
    "AI-powered Stadium Operations Platform for FIFA World Cup 2026",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#030712]">

        <IncidentProvider>

          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4500,
              style: {
                background: "#111827",
                color: "#fff",
                border:
                  "1px solid rgba(34,211,238,0.3)",
                borderRadius: "14px",
                padding: "16px",
                boxShadow:
                  "0 10px 30px rgba(0,0,0,0.35)",
              },
            }}
          />

          {children}

        </IncidentProvider>

      </body>
    </html>
  );
}