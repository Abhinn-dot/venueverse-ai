"use client";

import { useEffect, useState } from "react";

import {
  AlertTriangle,
  ShieldCheck,
  MapPin,
  Clock3,
} from "lucide-react";

import { useIncident } from "@/context/IncidentContext";

export default function DashboardBanner() {
  const { incident } = useIncident();

const [liveTime, setLiveTime] = useState("");

useEffect(() => {
  setLiveTime(new Date().toLocaleTimeString());

  const interval = setInterval(() => {
    setLiveTime(new Date().toLocaleTimeString());
  }, 1000);

  return () => clearInterval(interval);
}, []);

  const bannerStyle =
    incident.severity === "HIGH"
      ? "from-red-500/20 to-red-900/20 border-red-500/30"
      : incident.severity === "MEDIUM"
      ? "from-yellow-500/20 to-orange-500/20 border-yellow-500/30"
      : "from-cyan-500/10 to-blue-600/10 border-cyan-400/20";

  const riskColor =
    incident.severity === "HIGH"
      ? "text-red-400"
      : incident.severity === "MEDIUM"
      ? "text-yellow-400"
      : "text-green-400";

  return (
    <div
      className={`mb-8 rounded-2xl border bg-gradient-to-r ${bannerStyle} p-6 shadow-lg transition-all duration-500`}
    >
      <div className="flex items-center justify-between">

        <div>

          <div className="flex items-center gap-3">

            {incident.severity === "LOW" ? (
              <ShieldCheck
                size={30}
                className="text-green-400"
              />
            ) : (
              <AlertTriangle
                size={30}
                className={riskColor}
              />
            )}

            <div>

              <h1 className="text-3xl font-bold text-white">
                FIFA World Cup 2026
              </h1>

              <p className="mt-1 text-gray-300">
                Match Day Operations • MetLife Stadium
              </p>

            </div>

          </div>

          <div className="mt-5 rounded-xl border border-white/10 bg-[#111827]/70 p-4">

            <p className="text-sm text-gray-400">
              LIVE INCIDENT
            </p>

            <h2 className="mt-1 text-xl font-bold text-white">
              {incident.type}
            </h2>

            <div className="mt-3 flex flex-wrap gap-6 text-sm text-gray-300">

              <div className="flex items-center gap-2">
                <MapPin size={16} />
                {incident.area}
              </div>

              <div className="flex items-center gap-2">
  <Clock3 size={16} />
  {liveTime}
</div>

            </div>

          </div>

        </div>

        <div className="text-right">

          <div className="text-sm text-gray-400">
            Overall Risk
          </div>

          <div
            className={`mt-2 text-4xl font-bold ${riskColor}`}
          >
            {incident.severity}
          </div>

        </div>

      </div>
    </div>
  );
}