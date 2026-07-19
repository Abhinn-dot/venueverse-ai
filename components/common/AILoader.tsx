"use client";

import { Brain, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";

const tasks = [
  "Initializing VenueVerse AI Command Engine...",
  "Collecting CCTV camera feeds...",
  "Gathering IoT sensor data...",
  "Predicting crowd movement...",
  "Analyzing emergency protocols...",
  "Optimizing operational response...",
];

const systems = [
  "CCTV Cameras",
  "IoT Sensors",
  "Security Database",
  "Weather Intelligence",
  "Route Optimizer",
];

export default function AILoader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) return 95;
        return prev + 1;
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  let taskIndex = 0;

  if (progress >= 15) taskIndex = 1;
  if (progress >= 30) taskIndex = 2;
  if (progress >= 50) taskIndex = 3;
  if (progress >= 70) taskIndex = 4;
  if (progress >= 88) taskIndex = 5;

  return (
    <div className="mt-8 overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#111827] shadow-xl">

      {/* Header */}

      <div className="border-b border-white/10 p-6">

        <div className="flex items-center gap-4">

          <div className="rounded-2xl bg-cyan-500/10 p-3">

            <Brain
              size={34}
              className="animate-pulse text-cyan-400"
            />

          </div>

          <div>

            <h2 className="text-2xl font-bold text-white">
              VenueVerse AI Command Engine
            </h2>

            <p className="text-gray-400">
              Multi-Agent Stadium Intelligence
            </p>

          </div>

        </div>

      </div>

      {/* Body */}

      <div className="space-y-8 p-8">

        {/* Progress */}

        <div>

          <div className="mb-3 flex justify-between">

            <span className="font-semibold text-cyan-400">
              AI Processing
            </span>

            <span className="font-bold text-white">
              {progress}%
            </span>

          </div>

          <div className="h-3 overflow-hidden rounded-full bg-gray-700">

            <div
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300"
              style={{
                width: `${progress}%`,
              }}
            />

          </div>

        </div>

        {/* Current Task */}

        <div className="rounded-2xl border border-cyan-500/20 bg-[#030712] p-5">

          <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
            CURRENT TASK
          </p>

          <p className="mt-4 text-lg text-cyan-300">
            {tasks[taskIndex]}
          </p>

        </div>

        {/* Connected Systems */}

        <div>

          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gray-500">
            CONNECTED SYSTEMS
          </p>

          <div className="grid gap-3 md:grid-cols-2">

            {systems.map((system, index) => {

              const active =
                progress >= (index + 1) * 18;

              return (

                <div
                  key={system}
                  className="flex items-center justify-between rounded-xl bg-[#030712] px-4 py-3"
                >

                  <span className="text-gray-300">
                    {system}
                  </span>

                  {active ? (

                    <CheckCircle2
                      size={18}
                      className="text-green-400"
                    />

                  ) : (

                    <div className="h-3 w-3 animate-pulse rounded-full bg-yellow-400" />

                  )}

                </div>

              );
            })}

          </div>

        </div>

        {/* Footer */}

        <div className="border-t border-white/10 pt-5">

          <div className="flex justify-between">

            <span className="text-gray-400">
              Estimated Completion
            </span>

            <span className="font-semibold text-cyan-400">

              {progress < 35
                ? "3 sec"
                : progress < 70
                ? "2 sec"
                : progress < 90
                ? "1 sec"
                : "<1 sec"}

            </span>

          </div>

        </div>

      </div>

    </div>
  );
}