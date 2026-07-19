"use client";

import {
  Brain,
  CheckCircle2,
  Shield,
  Users,
  Timer,
} from "lucide-react";

const stats = [
  {
    title: "AI Decisions Today",
    value: "247",
    icon: Brain,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },

  {
    title: "Incidents Resolved",
    value: "39",
    icon: CheckCircle2,
    color: "text-green-400",
    bg: "bg-green-500/10",
  },

  {
    title: "Active Personnel",
    value: "184",
    icon: Shield,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
  },

  {
    title: "Stadium Occupancy",
    value: "68,421",
    icon: Users,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },

  {
    title: "Avg Response",
    value: "18 sec",
    icon: Timer,
    color: "text-red-400",
    bg: "bg-red-500/10",
  },
];

export default function LiveStats() {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">

      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="group rounded-2xl border border-white/10 bg-[#111827] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]"
          >
            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-gray-400">
                  {stat.title}
                </p>

                <h2 className="mt-3 text-3xl font-bold text-white">
                  {stat.value}
                </h2>

              </div>

              <div
                className={`rounded-xl ${stat.bg} p-3`}
              >
                <Icon
                  className={stat.color}
                  size={24}
                />
              </div>

            </div>
          </div>
        );
      })}
    </div>
  );
}