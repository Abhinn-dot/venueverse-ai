"use client";
import { useEffect, useState } from "react";
import { Activity, AlertTriangle } from "lucide-react";

type Props = {
  selected: string;
  setSelected: (area: string) => void;
};

type Stand = {
  name: string;
  occupancy: number;
  status: "Normal" | "Busy" | "Incident";
  incident?: string;
};

const stands: Stand[] = [
  {
    name: "North",
    occupancy: 68,
    status: "Normal",
  },
  {
    name: "South",
    occupancy: 82,
    status: "Busy",
    incident: "Heavy Crowd",
  },
  {
    name: "East",
    occupancy: 61,
    status: "Normal",
  },
  {
    name: "West",
    occupancy: 91,
    status: "Incident",
    incident: "Security Breach",
  },
  {
    name: "VIP",
    occupancy: 44,
    status: "Incident",
    incident: "VIP Movement",
  },
  {
    name: "Gate B",
    occupancy: 88,
    status: "Busy",
    incident: "Crowd Surge",
  },
];

function StandCard({
  stand,
  selected,
  onClick,
}: {
  stand: Stand;
  selected: boolean;
  onClick: () => void;
}) {
  const colors =
    stand.status === "Incident"
      ? {
          border: "border-red-500/40",
          text: "text-red-400",
          dot: "bg-red-500",
        }
      : stand.status === "Busy"
      ? {
          border: "border-yellow-500/40",
          text: "text-yellow-300",
          dot: "bg-yellow-400",
        }
      : {
          border: "border-cyan-500/30",
          text: "text-green-400",
          dot: "bg-green-500",
        };

const [lastUpdated, setLastUpdated] = useState("");

useEffect(() => {
  setLastUpdated(new Date().toLocaleTimeString());

  const interval = setInterval(() => {
    setLastUpdated(new Date().toLocaleTimeString());
  }, 1000);

  return () => clearInterval(interval);
}, []);

  return (
    <button
  onClick={onClick}
  className={`
  w-[260px]
  h-[210px]
  rounded-2xl
  border
  ${colors.border}
  bg-[#111827]
  p-4
  flex
  flex-col
  transition-all
  duration-300
  hover:-translate-y-1
  hover:shadow-xl
  ${selected ? "ring-2 ring-cyan-400 scale-[1.03]" : ""}
`}
>
      <div className="flex items-center justify-between">

  <div className="flex items-center gap-2">

    <div
      className={`h-2.5 w-2.5 rounded-full ${colors.dot} ${
        stand.status === "Incident" ? "animate-pulse" : ""
      }`}
    />

    <span className="text-lg font-semibold text-white">
      {stand.name}
    </span>

  </div>

  {stand.status === "Incident" ? (
    <AlertTriangle
      size={18}
      className="text-red-400"
    />
  ) : (
    <Activity
      size={18}
      className="text-cyan-400"
    />
  )}

</div>

<div className="flex-1 flex flex-col items-center justify-center">
  <p className="text-xs text-gray-500">
    Crowd Occupancy
  </p>

  <p className="mt-2 text-2xl font-bold text-white">
    {stand.occupancy}%
  </p>
</div>

<div className="flex flex-col items-center">
  <div
    className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${colors.text}`}
  >
    {stand.status}
  </div>

  {stand.incident && (
    <p className="mt-2 text-sm text-gray-400">
      {stand.incident}
    </p>
  )}
</div>
    </button>
  );
}

export default function DigitalTwin({
  selected,
  setSelected,
}: Props) {

  const north = stands.find((s) => s.name === "North")!;
  const south = stands.find((s) => s.name === "South")!;
  const east = stands.find((s) => s.name === "East")!;
  const west = stands.find((s) => s.name === "West")!;
  const vip = stands.find((s) => s.name === "VIP")!;
  const gateB = stands.find((s) => s.name === "Gate B")!;

const [lastUpdated, setLastUpdated] = useState("");

useEffect(() => {
  setLastUpdated(new Date().toLocaleTimeString());

  const interval = setInterval(() => {
    setLastUpdated(new Date().toLocaleTimeString());
  }, 1000);

  return () => clearInterval(interval);
}, []);

    return (
    <div className="rounded-3xl border border-cyan-500/20 bg-[#0B1120] p-8 shadow-xl">

      {/* Header */}

      <div className="mb-10 flex items-center justify-between">

        <div>

          <h2 className="text-3xl font-bold text-cyan-400">
            Stadium Digital Twin
          </h2>

          <p className="mt-2 text-gray-400">
            Live Stadium Monitoring
          </p>

        </div>

        <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/10 px-4 py-2">

          <span className="font-medium text-cyan-300">
            ● Live
          </span>

        </div>

      </div>

{/* ================= Stadium ================= */}

<div className="mt-6 px-6 flex flex-col items-center">

  {/* NORTH */}
  <div className="mb-6 flex justify-center">
    <StandCard
      stand={north}
      selected={selected === "North"}
      onClick={() => setSelected("North")}
    />
  </div>

  {/* WEST | STADIUM | EAST */}
  <div className="flex items-center justify-center gap-8">

    {/* WEST */}
    <StandCard
      stand={west}
      selected={selected === "West"}
      onClick={() => setSelected("West")}
    />

    {/* STADIUM */}
    <div className="relative h-[210px] w-[300px] overflow-hidden rounded-3xl border border-green-500/40 bg-gradient-to-b from-green-700 to-green-900">

      {/* Halfway Line */}
      <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-white/40" />

      {/* Centre Circle */}
      <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white/40" />

      {/* Left Penalty Area */}
      <div className="absolute left-4 top-1/2 h-16 w-10 -translate-y-1/2 border-2 border-white/40 border-l-0" />

      {/* Right Penalty Area */}
      <div className="absolute right-4 top-1/2 h-16 w-10 -translate-y-1/2 border-2 border-white/40 border-r-0" />

      {/* Match */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">

        <div className="animate-pulse text-5xl">
          ⚽
        </div>

        <h3 className="mt-2 text-2xl font-bold text-white">
          LIVE MATCH
        </h3>

        <p className="mt-2 text-base text-green-100">
          Argentina
          <span className="mx-2 font-bold text-white">
            2 - 1
          </span>
          France
        </p>

        <div className="mt-3 rounded-full bg-black/20 px-4 py-2 text-sm text-white">
          ⏱ 70' Minute
        </div>

      </div>

    </div>

    {/* EAST */}
    <div className="h-[210px]">
  <StandCard
    stand={east}
    selected={selected === "East"}
    onClick={() => setSelected("East")}
  />
</div>

  </div>

  {/* SOUTH */}
  <div className="mt-6 flex justify-center">
    <StandCard
      stand={south}
      selected={selected === "South"}
      onClick={() => setSelected("South")}
    />
  </div>

  {/* VIP + GATE B */}
  <div className="mt-8 flex justify-center gap-6">

    <StandCard
      stand={vip}
      selected={selected === "VIP"}
      onClick={() => setSelected("VIP")}
    />

    <StandCard
      stand={gateB}
      selected={selected === "Gate B"}
      onClick={() => setSelected("Gate B")}
    />

  </div>

</div>

{/* Footer */}


      <div className="mt-8 border-t border-white/10 pt-6">

        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">

          <div className="flex items-center gap-2">

            <Activity
              size={16}
              className="animate-pulse text-green-400"
            />

            <span className="text-sm text-gray-400">
              Live Digital Twin synchronized with AI Command Center
            </span>

          </div>

          <div className="flex items-center gap-6">

           <span className="text-sm text-gray-400">
  Last Updated: {lastUpdated}
</span>

            <span className="text-sm font-semibold text-cyan-400">
              Powered by VenueVerse AI
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}