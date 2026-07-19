"use client";

import { useEffect, useState } from "react";
import Card from "@/components/common/Card";
import { Timer } from "lucide-react";

export default function MatchClock() {
  const [minute, setMinute] = useState(67);

  useEffect(() => {
    const interval = setInterval(() => {
      setMinute((prev) => {
        if (prev >= 90) return 90;
        return prev + 1;
      });
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card>
      <div className="flex items-center gap-2">
        <Timer className="text-cyan-400" size={22} />

        <h3 className="text-lg font-semibold">
          Current Match
        </h3>
      </div>

      <p className="mt-5 text-4xl font-bold">
        {minute}'
      </p>

      <p className="mt-3 text-gray-400">
        Argentina vs France •{" "}
        {minute >= 90 ? "Full Time" : "Second Half"}
      </p>

      <div className="mt-5 h-2 w-full rounded-full bg-gray-700">
        <div
          className="h-2 rounded-full bg-cyan-400 transition-all duration-700"
          style={{
            width: `${(minute / 90) * 100}%`,
          }}
        />
      </div>
    </Card>
  );
}