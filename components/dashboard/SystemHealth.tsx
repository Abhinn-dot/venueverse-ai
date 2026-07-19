"use client";

import Card from "@/components/common/Card";
import StatusDot from "@/components/common/StatusDot";
import { Bot } from "lucide-react";

type Props = {
  selectedArea?: string;
};

export default function SystemHealth({
  selectedArea = "Gate B",
}: Props) {
  let status = "ONLINE";
  let uptime = "99.98% Uptime";
  let color: "green" | "yellow" | "red" = "green";

  if (selectedArea === "North") {
    status = "WARNING";
    uptime = "89.64% Stability";
    color = "yellow";
  }

  if (selectedArea === "South") {
    status = "WARNING";
    uptime = "91.20% Stability";
    color = "yellow";
  }

  if (selectedArea === "East") {
    status = "ONLINE";
    uptime = "99.82% Uptime";
    color = "green";
  }

  if (selectedArea === "West") {
    status = "CRITICAL";
    uptime = "72.35% Stability";
    color = "red";
  }

  if (selectedArea === "VIP") {
    status = "ONLINE";
    uptime = "99.99% Uptime";
    color = "green";
  }

  if (selectedArea === "Gate B") {
    status = "CRITICAL";
    uptime = "76.80% Stability";
    color = "red";
  }

  return (
    <Card>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bot className="text-cyan-400" size={22} />

          <h3 className="text-lg font-semibold text-white">
            AI System
          </h3>
        </div>

        <StatusDot color={color} />
      </div>

      <p
        className={`mt-4 text-3xl font-bold ${
          color === "green"
            ? "text-green-400"
            : color === "yellow"
            ? "text-yellow-400"
            : "text-red-400"
        }`}
      >
        {status}
      </p>

      <p className="mt-2 text-gray-400">
        {uptime}
      </p>
    </Card>
  );
}