"use client";

import { useState } from "react";

export default function CopilotWidget() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  async function generatePlan() {
    if (!prompt.trim()) return;

    setLoading(true);

    try {
      const res = await fetch("/api/copilot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();

      console.log(data);
console.log(typeof data.result);

      if (!res.ok) {
        setResult(JSON.stringify(data, null, 2));
      } else {
        try {
  const parsed = JSON.parse(data.result);

  console.log("Parsed Result:", parsed);

  setResult(parsed);
} catch (err) {
  console.error("JSON Parse Error:", err);
  console.error("Raw AI Response:", data.result);

  setResult({
    error: "AI returned an invalid response.",
  });
}
      }
    } catch {
      setResult("Something went wrong.");
    }

    setLoading(false);
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-[#111827] p-6">
      <h2 className="text-2xl font-bold text-cyan-400 mb-4">
        🤖 AI Match Copilot TEST 123
      </h2>

<div className="mb-4 flex flex-wrap gap-2">

  {[
    "Crowd surge at Gate B",
    "Heavy rain before kickoff",
    "Medical emergency in North Stand",
    "VIP security incident",
  ].map((item) => (
    <button
      key={item}
      onClick={() => setPrompt(item)}
      className="rounded-full border border-cyan-400 px-3 py-1 text-sm text-cyan-300 hover:bg-cyan-500 hover:text-black transition"
    >
      {item}
    </button>
  ))}

</div>

      <textarea
        className="w-full h-32 rounded-xl bg-[#1F2937] p-4 outline-none"
        placeholder="Describe a stadium incident..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        onClick={generatePlan}
        disabled={loading}
        className="mt-4 rounded-xl bg-cyan-500 px-6 py-3 hover:bg-cyan-400 disabled:opacity-50"
      >
        {loading ? "🤖 Analyzing Situation..." : "Generate AI Response"}
      </button>

      {result && !result.error && (
  <div className="mt-5 space-y-4">

    <div className="rounded-xl bg-[#1F2937] p-4 border border-red-500/20">
      <p className="text-gray-400">🚨 Risk Level</p>
      <p className="text-xl font-bold text-red-400">
        {result.riskLevel}
      </p>
    </div>

    <div className="grid grid-cols-2 gap-4">

      <div className="rounded-xl bg-[#1F2937] p-4">
        <p className="text-gray-400">🎯 Confidence</p>
        <p className="text-green-400 font-bold">
          {result.confidence}
        </p>
      </div>

      <div className="rounded-xl bg-[#1F2937] p-4">
        <p className="text-gray-400">⏱ ETA</p>
        <p className="text-yellow-400 font-bold">
          {result.estimatedResolution}
        </p>
      </div>

    </div>

    <div className="rounded-xl bg-[#1F2937] p-4">
      <h3 className="font-semibold text-cyan-400 mb-3">
        👮 Resources
      </h3>

      <p>Security Teams: {result.resources.securityTeams}</p>
      <p>Medical Teams: {result.resources.medicalTeams}</p>
      <p>Volunteers: {result.resources.volunteers}</p>
      <p>Police Units: {result.resources.policeUnits}</p>
    </div>

    <div className="rounded-xl bg-[#1F2937] p-4">
      <h3 className="font-semibold text-cyan-400 mb-3">
        📋 AI Action Plan
      </h3>

      <ul className="list-disc ml-6 space-y-2">
        {result.actionPlan.map((item: string, index: number) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>

    <div className="rounded-xl bg-[#1F2937] p-4">
      <h3 className="font-semibold text-cyan-400 mb-3">
        📢 Public Announcement
      </h3>

      <p>{result.publicAnnouncement}</p>
    </div>

  </div>
)}

{result?.error && (
  <div className="mt-5 rounded-xl bg-red-500/10 border border-red-500/30 p-4 text-red-300">
    {result.error}
  </div>
)}
    </div>
  );
}