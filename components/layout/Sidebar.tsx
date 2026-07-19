"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  IconLayoutDashboard,
  IconBrain,
  IconMap,
  IconSpeakerphone,
} from "@tabler/icons-react";

const items = [
  {
    name: "Dashboard",
    icon: IconLayoutDashboard,
    href: "/dashboard",
  },
  {
    name: "Match Day Copilot",
    icon: IconBrain,
    href: "/commander",
  },
  {
    name: "Smart Navigation",
    icon: IconMap,
    href: "/navigation",
  },
  {
    name: "Announcements",
    icon: IconSpeakerphone,
    href: "/announcements",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 h-screen bg-[#0B1220] border-r border-white/5 px-6 py-8">

      <h1 className="mb-12 text-3xl font-bold tracking-wide">
        <span className="text-cyan-400">VenueVerse </span>
        <span className="text-white">AI</span>
      </h1>

      <nav className="space-y-2">
        {items.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`
                group
                relative
                flex
                items-center
                gap-4
                overflow-hidden
                rounded-xl
                px-4
                py-3
                transition-all
                duration-300

                ${
                  active
                    ? "bg-cyan-500/10 text-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.08)]"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }
              `}
            >
              {/* Left Indicator */}

              <span
                className={`
                  absolute
                  left-0
                  top-2
                  h-8
                  w-1
                  rounded-r-full
                  transition-all
                  duration-300

                  ${
                    active
                      ? "bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]"
                      : "bg-transparent"
                  }
                `}
              />

              <Icon
                size={22}
                className={`
                  transition-all
                  duration-300

                  ${
                    active
                      ? "text-cyan-400"
                      : "text-gray-500 group-hover:text-cyan-300"
                  }
                `}
              />

              <span
                className={`
                  transition-all
                  duration-300

                  ${
                    active
                      ? "font-semibold"
                      : "font-medium"
                  }
                `}
              >
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}