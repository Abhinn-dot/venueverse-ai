"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import AILoader from "@/components/common/AILoader";
import AIResponse from "@/components/dashboard/AIResponse";
import IncidentPanel from "@/components/dashboard/IncidentPanel";
import AppLayout from "@/components/layout/AppLayout";

import { useIncident } from "@/context/IncidentContext";

export default function CommanderPage() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const { addIncident } = useIncident();

  async function generatePlan() {
    if (!prompt.trim()) return;

    const lower = prompt.toLowerCase();

    let area = "Gate B";

    if (lower.includes("north")) area = "North";
    else if (lower.includes("south")) area = "South";
    else if (lower.includes("east")) area = "East";
    else if (lower.includes("west")) area = "West";
    else if (lower.includes("vip")) area = "VIP";

    let severity: "LOW" | "MEDIUM" | "HIGH" =
      "LOW";

    if (
      lower.includes("fire") ||
      lower.includes("security")
    ) {
      severity = "HIGH";
    } else if (
      lower.includes("medical") ||
      lower.includes("crowd") ||
      lower.includes("surge") ||
      lower.includes("rain")
    ) {
      severity = "MEDIUM";
    }

    addIncident({
      area,
      type: prompt,
      severity,
      time: new Date().toLocaleTimeString(),
    });

    setLoading(true);

    try {
      const res = await fetch("/api/copilot", {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          prompt,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setResult(
          JSON.stringify(data, null, 2)
        );

        toast.error(
          "AI failed to generate plan."
        );
      } else {
        setResult(data.result);

        toast.success(
          "Operations Plan Generated"
        );
      }
    } catch {
      toast.error(
        "Unable to contact AI."
      );
    }

    setLoading(false);
  }

  return (
    <AppLayout>

      <h1 className="text-4xl font-bold text-cyan-400 mb-8">
        AI Match Day Copilot
      </h1>

      <textarea
        className="w-full h-48 rounded-xl bg-[#111827] border border-white/10 p-5 outline-none"
        placeholder="Describe an incident..."
        value={prompt}
        onChange={(e) =>
          setPrompt(e.target.value)
        }
      />

      <button
        onClick={generatePlan}
        disabled={loading}
        className="mt-6 rounded-xl bg-cyan-500 px-8 py-3 font-semibold hover:bg-cyan-400 disabled:opacity-50"
      >
        {loading
          ? "Generating..."
          : "Generate AI Plan"}
      </button>

      {loading ? (
  <AILoader />
) : (
  <AIResponse response={result} />
)}

      <IncidentPanel
        onSelect={setPrompt}
      />

    </AppLayout>
  );
}