"use client";

import { History } from "lucide-react";

import { useIncident } from "@/context/IncidentContext";

export default function IncidentHistory() {
  const { history } = useIncident();

  return (
    <div className="rounded-2xl border border-white/10 bg-[#111827] p-6">

      <div className="mb-6 flex items-center gap-3">

        <History
          className="text-cyan-400"
          size={24}
        />

        <h2 className="text-2xl font-bold">
          Incident History
        </h2>

      </div>

      {history.length === 0 ? (
        <p className="text-gray-400">
          No incidents yet.
        </p>
      ) : (
        <div className="space-y-4">

          {history.map((item, index) => (

            <div
              key={index}
              className="rounded-xl border border-white/10 bg-[#1F2937] p-4 transition hover:border-cyan-400/50"
            >

              <div className="flex items-center justify-between">

                <h3 className="font-semibold text-white">
                  {item.type}
                </h3>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-bold ${
                    item.severity === "HIGH"
                      ? "bg-red-500/20 text-red-400"
                      : item.severity === "MEDIUM"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "bg-green-500/20 text-green-400"
                  }`}
                >
                  {item.severity}
                </span>

              </div>

              <p className="mt-2 text-gray-400">
                📍 {item.area}
              </p>

              <p className="text-sm text-gray-500">
                🕒 {item.time}
              </p>

            </div>

          ))}

        </div>
      )}

    </div>
  );
}