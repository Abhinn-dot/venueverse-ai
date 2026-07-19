"use client";

import { useState } from "react";
import AILoader from "@/components/common/AILoader";
import AppLayout from "@/components/layout/AppLayout";
import {
  RadioTower,
  Megaphone,
  Globe,
  Languages,
  Clock3,
  CheckCircle2,
  AlertTriangle,
  Users,
} from "lucide-react";

export default function AnnouncementsPage() {
  const [incident, setIncident] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  async function generateAnnouncement() {
    if (!incident.trim()) return;

    setLoading(true);

    try {
      const res = await fetch("/api/announcement", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ incident }),
      });

      const data = await res.json();

      if (!res.ok) {
        setResult(JSON.stringify(data, null, 2));
      } else {
        setResult(data.result);
      }
    } catch {
      setResult("Something went wrong.");
    }

    setLoading(false);
  }

  return (
    <AppLayout>
      <h1 className="mb-8 text-4xl font-bold text-cyan-400">
        AI Emergency Broadcaster
      </h1>

      <div className="grid xl:grid-cols-2 gap-8">

        {/* LEFT PANEL */}

        <div className="space-y-6">

          <div className="rounded-2xl border border-white/10 bg-[#111827] p-6">

            <h2 className="mb-6 flex items-center gap-2 text-2xl font-semibold">
              <Megaphone className="text-cyan-400" />
              Broadcast Generator
            </h2>

            <textarea
              className="h-56 w-full rounded-xl border border-white/10 bg-[#1F2937] p-5 outline-none"
              placeholder="Example: Heavy rain expected. Gate B overcrowded. Please redirect spectators through Gate C..."
              value={incident}
              onChange={(e) => setIncident(e.target.value)}
            />

            <button
              onClick={generateAnnouncement}
              disabled={loading}
              className="mt-6 w-full rounded-xl bg-cyan-500 py-4 font-semibold transition hover:bg-cyan-400 disabled:opacity-50"
            >
              {loading
                ? "Generating Broadcast..."
                : "Generate AI Announcement"}
            </button>

          </div>

          {loading ? (
  <AILoader />
) : (
  result && (
    <div className="rounded-2xl border border-white/10 bg-[#111827] p-6">

      <h2 className="mb-4 text-xl font-bold text-cyan-400">
        AI Generated Announcement
      </h2>

      <div className="whitespace-pre-wrap leading-7 text-gray-300">
        {result}
      </div>

    </div>
  )
)}

        </div>

        {/* RIGHT PANEL */}

        <div className="space-y-6">

          <div className="grid grid-cols-2 gap-4">

            <div className="rounded-xl border border-white/10 bg-[#111827] p-5">
              <Languages className="mb-3 text-cyan-400" />
              <p className="text-sm text-gray-400">
                Languages
              </p>
              <h2 className="text-2xl font-bold">
                12
              </h2>
            </div>

            <div className="rounded-xl border border-white/10 bg-[#111827] p-5">
              <Users className="mb-3 text-cyan-400" />
              <p className="text-sm text-gray-400">
                Audience
              </p>
              <h2 className="text-2xl font-bold">
                68,421
              </h2>
            </div>

            <div className="rounded-xl border border-white/10 bg-[#111827] p-5">
              <Clock3 className="mb-3 text-yellow-400" />
              <p className="text-sm text-gray-400">
                Delivery Time
              </p>
              <h2 className="text-2xl font-bold">
                4 sec
              </h2>
            </div>

            <div className="rounded-xl border border-white/10 bg-[#111827] p-5">
              <Globe className="mb-3 text-green-400" />
              <p className="text-sm text-gray-400">
                Coverage
              </p>
              <h2 className="text-2xl font-bold text-green-400">
                FULL
              </h2>
            </div>

          </div>

          <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-6">

            <h2 className="mb-4 text-xl font-bold text-cyan-300">
              Broadcast Status
            </h2>

            <div className="space-y-4">

              <div className="flex justify-between">
                <span className="text-gray-400">
                  PA System
                </span>

                <span className="text-green-400 font-semibold">
                  ONLINE
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">
                  Stadium Screens
                </span>

                <span className="text-green-400 font-semibold">
                  READY
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">
                  Mobile Alerts
                </span>

                <span className="text-green-400 font-semibold">
                  ACTIVE
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">
                  Last Broadcast
                </span>

                <span>
                  2 mins ago
                </span>
              </div>

            </div>

          </div>

          <div className="rounded-2xl border border-white/10 bg-[#111827] p-6">

            <h2 className="mb-4 flex items-center gap-2 text-xl font-bold">
              <CheckCircle2 className="text-green-400" />
              AI Checklist
            </h2>

            <div className="space-y-3 text-gray-300">

              <p>✅ Clear and concise wording</p>

              <p>✅ Panic-free communication</p>

              <p>✅ Multilingual ready</p>

              <p>✅ Stadium PA compatible</p>

              <p>✅ Emergency protocol compliant</p>

            </div>

          </div>

          <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-6">

            <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-yellow-300">
              <AlertTriangle />
              AI Recommendation
            </h2>

            <p className="text-gray-300 leading-7">
              Broadcast announcements should remain calm, provide clear
              instructions, avoid technical jargon, and direct spectators
              toward the nearest safe exits or alternative routes when
              necessary.
            </p>

          </div>

        </div>

      </div>

    </AppLayout>
  );
}