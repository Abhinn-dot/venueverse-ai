"use client";

import { useEffect, useState } from "react";

type Props = {
  selectedArea: string;
};

const activityData: Record<
  string,
  { time: string; event: string }[]
> = {
  North: [
    { time: "09:18", event: "🚑 Medical assistance requested" },
    { time: "09:19", event: "👨‍⚕️ Medical team dispatched" },
    { time: "09:20", event: "🩺 First aid administered" },
    { time: "09:21", event: "🚶 Spectators redirected" },
    { time: "09:22", event: "📹 CCTV monitoring continues" },
    { time: "09:23", event: "✅ Patient stabilized" },
    { time: "09:24", event: "👮 Area declared safe" },
    { time: "09:25", event: "🟢 Normal operations resumed" },
  ],

  South: [
    { time: "09:24", event: "👥 Crowd density increasing" },
    { time: "09:25", event: "🙋 Volunteers redirected spectators" },
    { time: "09:26", event: "🚪 Gate A opened" },
    { time: "09:27", event: "📢 Public guidance announced" },
    { time: "09:28", event: "👮 Security monitoring intensified" },
    { time: "09:29", event: "📹 AI confirms smoother flow" },
    { time: "09:30", event: "✅ Crowd flow normalized" },
    { time: "09:31", event: "🟢 Area operating normally" },
  ],

  East: [
    { time: "09:12", event: "🟢 Routine patrol completed" },
    { time: "09:13", event: "📹 CCTV monitoring active" },
    { time: "09:14", event: "👮 Security checkpoint inspected" },
    { time: "09:15", event: "🚶 Visitor flow normal" },
    { time: "09:16", event: "🤖 AI reports no anomalies" },
    { time: "09:17", event: "🛰 Sensor scan completed" },
    { time: "09:18", event: "✅ No incidents reported" },
    { time: "09:19", event: "🟢 Monitoring continues" },
  ],

  West: [
    { time: "09:41", event: "🚨 Security breach detected" },
    { time: "09:42", event: "👮 Security Team deployed" },
    { time: "09:43", event: "🚔 Police units arrived" },
    { time: "09:44", event: "🚧 Area secured" },
    { time: "09:45", event: "📹 CCTV sweep completed" },
    { time: "09:46", event: "🔍 Secondary inspection started" },
    { time: "09:47", event: "✅ Threat neutralized" },
    { time: "09:48", event: "👥 Spectator movement restored" },
  ],

  VIP: [
    { time: "09:51", event: "🚗 VIP convoy delayed" },
    { time: "09:52", event: "🤝 Escort team notified" },
    { time: "09:53", event: "🚔 Security perimeter established" },
    { time: "09:54", event: "📹 VIP corridor inspected" },
    { time: "09:55", event: "👮 Access restricted temporarily" },
    { time: "09:56", event: "🚶 VIP movement resumed" },
    { time: "09:57", event: "✅ VIP safely escorted" },
    { time: "09:58", event: "🟢 VIP area cleared" },
  ],

  "Gate B": [
    { time: "09:31", event: "🚨 Crowd surge detected" },
    { time: "09:32", event: "👮 Security Team dispatched" },
    { time: "09:33", event: "📢 Announcement broadcast" },
    { time: "09:34", event: "🚪 Gate C opened" },
    { time: "09:35", event: "🙋 Volunteers redirected spectators" },
    { time: "09:36", event: "👥 Crowd density decreasing" },
    { time: "09:37", event: "📹 CCTV confirms normal flow" },
    { time: "09:38", event: "✅ Situation stabilized" },
  ],
};

export default function ActivityFeed({
  selectedArea,
}: Props) {
  const activities = activityData[selectedArea];

  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    setVisibleCount(1);

    const interval = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev >= activities.length) {
          clearInterval(interval);
          return prev;
        }

        return prev + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [selectedArea]);

  return (
    <div className="rounded-2xl border border-white/10 bg-[#111827] p-6">

      <h2 className="mb-6 text-2xl font-bold text-cyan-400">
        Live Activity Feed
      </h2>

      <div className="space-y-5">

        {activities
          .slice(0, visibleCount)
          .map((activity, index) => (
            <div
              key={index}
              className="flex items-start gap-4 border-l-2 border-cyan-400 pl-4 animate-pulse"
            >
              <div className="text-sm font-bold text-cyan-400">
                {activity.time}
              </div>

              <div className="text-gray-300">
                {activity.event}
              </div>
            </div>
          ))}

      </div>

    </div>
  );
}