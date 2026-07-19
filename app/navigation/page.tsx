"use client";

import { useState } from "react";
import AILoader from "@/components/common/AILoader";
import AppLayout from "@/components/layout/AppLayout";
import {
  MapPinned,
  Route,
  Clock3,
  Users,
  ShieldCheck,
  Navigation,
  ArrowRight,
  Activity,
} from "lucide-react";

export default function NavigationPage() {
  const [from, setFrom] =useState("Gate B");
  const [to, setTo] = useState("Seat A-203");
  const [route, setRoute] = useState("");
  const [loading, setLoading] = useState(false);

  async function generateRoute() {
    setLoading(true);

    try {
      const res = await fetch("/api/navigation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setRoute(data.result);
      } else {
        setRoute(data.error);
      }
    } catch {
      setRoute("Unable to generate route.");
    }

    setLoading(false);
  }

  return (
    <AppLayout>
      <h1 className="mb-8 text-4xl font-bold text-cyan-400">
        AI Smart Navigation
      </h1>

      <div className="grid xl:grid-cols-2 gap-8">

        {/* LEFT PANEL */}

        <div className="space-y-6">

          <div className="rounded-2xl border border-white/10 bg-[#111827] p-6">

            <h2 className="mb-6 flex items-center gap-2 text-2xl font-semibold">
              <Navigation className="text-cyan-400" />
              Route Planner
            </h2>

            <div className="space-y-6">

              <div>
                <p className="mb-2 text-gray-400">
                  Current Location
                </p>

                <select
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  className="w-full rounded-xl bg-[#1F2937] p-4"
                >
                  <option>Gate A</option>
                  <option>Gate B</option>
                  <option>Gate C</option>
                  <option>Gate D</option>
                  <option>Fan Zone</option>
                  <option>Parking</option>
                </select>
              </div>

              <div>
                <p className="mb-2 text-gray-400">
                  Destination
                </p>

                <select
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  className="w-full rounded-xl bg-[#1F2937] p-4"
                >
                  <option>Seat A-203</option>
                  <option>Seat B-114</option>
                  <option>Food Court</option>
                  <option>Medical Center</option>
                  <option>VIP Area</option>
                  <option>Restroom</option>
                </select>
              </div>

              <button
                onClick={generateRoute}
                disabled={loading}
                className="w-full rounded-xl bg-cyan-500 py-4 font-semibold transition hover:bg-cyan-400 disabled:opacity-50"
              >
                {loading
                  ? "Generating Smart Route..."
                  : "Generate Smart Route"}
              </button>

            </div>

          </div>

          {/* GENERATED ROUTE */}

          {loading ? (
  <AILoader />
) : (
  route && (
    <div className="mt-8 rounded-2xl border border-white/10 bg-[#111827] p-6 whitespace-pre-wrap">
      {route}
    </div>
  )
)}

        </div>

        {/* RIGHT PANEL */}

        <div className="space-y-6">

          {/* STATS */}

          <div className="grid grid-cols-2 gap-4">

            <div className="rounded-xl border border-white/10 bg-[#111827] p-5">
              <Clock3 className="mb-3 text-cyan-400" />
              <p className="text-sm text-gray-400">
                ETA
              </p>
              <h2 className="text-2xl font-bold">
                2 min
              </h2>
            </div>

            <div className="rounded-xl border border-white/10 bg-[#111827] p-5">
              <MapPinned className="mb-3 text-cyan-400" />
              <p className="text-sm text-gray-400">
                Distance
              </p>
              <h2 className="text-2xl font-bold">
                210 m
              </h2>
            </div>

            <div className="rounded-xl border border-white/10 bg-[#111827] p-5">
              <Users className="mb-3 text-yellow-400" />
              <p className="text-sm text-gray-400">
                Crowd
              </p>
              <h2 className="text-2xl font-bold text-green-400">
                LOW
              </h2>
            </div>

            <div className="rounded-xl border border-white/10 bg-[#111827] p-5">
              <ShieldCheck className="mb-3 text-green-400" />
              <p className="text-sm text-gray-400">
                Risk
              </p>
              <h2 className="text-2xl font-bold text-green-400">
                SAFE
              </h2>
            </div>

          </div>

          {/* BEST ROUTE */}

          <div className="rounded-2xl border border-white/10 bg-[#111827] p-6">

            <h2 className="mb-6 flex items-center gap-2 text-xl font-bold">
              <Route className="text-cyan-400" />
              Best Route
            </h2>

            <div className="space-y-3">

              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                {from}
              </div>

              <ArrowRight className="ml-1 text-gray-500" />

              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-cyan-500"></div>
                Food Court
              </div>

              <ArrowRight className="ml-1 text-gray-500" />

              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-cyan-500"></div>
                Block A
              </div>

              <ArrowRight className="ml-1 text-gray-500" />

              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                {to}
              </div>

            </div>

          </div>

          {/* LIVE ROUTE STATUS */}

          <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-6">

            <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-cyan-300">
              <Activity size={22} />
              LIVE ROUTE STATUS
            </h2>

            <div className="space-y-3">

              <div className="flex justify-between">
                <span className="text-gray-400">Route</span>
                <span className="font-semibold text-green-400">
                  OPEN
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">Crowd Density</span>
                <span className="font-semibold text-yellow-400">
                  LOW
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">Security</span>
                <span className="font-semibold text-green-400">
                  CLEAR
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">Last Updated</span>
                <span className="text-white">
                  Just now
                </span>
              </div>

            </div>

          </div>

          {/* AI RECOMMENDATION */}

          <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-6">

            <h2 className="mb-4 text-xl font-bold text-cyan-300">
              AI Recommendation
            </h2>

            <ul className="space-y-2 text-gray-300">

              <li>✅ Fastest available route</li>

              <li>✅ Lowest crowd density</li>

              <li>✅ Security verified</li>

              <li>✅ Wheelchair accessible</li>

            </ul>

          </div>

        </div>

      </div>

    </AppLayout>
  );
}