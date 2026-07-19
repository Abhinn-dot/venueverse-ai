import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <ShieldCheck className="text-cyan-400 w-8 h-8" />
          <span className="font-bold text-2xl">
            VenueVerse AI
          </span>
        </div>

        <div className="hidden md:flex gap-8 text-gray-300">
          <a href="#">Features</a>
          <a href="#">Technology</a>
          <a href="#">About</a>
        </div>

        <Link
          href="/dashboard"
          className="bg-cyan-500 hover:bg-cyan-400 transition px-5 py-3 rounded-xl font-semibold"
        >
          Dashboard
        </Link>
      </nav>

      {/* Hero */}

      <section className="max-w-7xl mx-auto px-8 py-28 text-center">

        <p className="uppercase tracking-[6px] text-cyan-400">
          FIFA 2026 • AI Stadium Operations
        </p>

        <h1 className="text-7xl font-black mt-8 leading-tight">
          Run Stadiums
          <br />
          Smarter with AI
        </h1>

        <p className="max-w-3xl mx-auto mt-8 text-gray-400 text-xl leading-9">
          VenueVerse AI empowers organizers, volunteers and on-ground staff with
          Generative AI for crowd intelligence, smart navigation,
          incident response and real-time operational decision making.
        </p>

        <Link
          href="/dashboard"
          className="inline-flex items-center gap-3 mt-12 bg-cyan-500 hover:bg-cyan-400 transition px-8 py-4 rounded-2xl text-lg font-semibold"
        >
          Launch Command Center

          <ArrowRight size={22} />
        </Link>

      </section>
    </main>
  );
}