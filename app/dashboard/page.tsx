"use client";

import { useEffect } from "react";

import AppLayout from "@/components/layout/AppLayout";
import LiveStats from "@/components/dashboard/LiveStats";
import DashboardBanner from "@/components/dashboard/DashboardBanner";
import DigitalTwin from "@/components/dashboard/DigitalTwin";
import ActivityFeed from "@/components/dashboard/ActivityFeed";
import SituationRoom from "@/components/dashboard/SituationRoom";
import SystemHealth from "@/components/dashboard/SystemHealth";
import MatchClock from "@/components/dashboard/MatchClock";
import WeatherCard from "@/components/dashboard/WeatherCard";
import CrowdCard from "@/components/dashboard/CrowdCard";
import IncidentHistory from "@/components/dashboard/IncidentHistory";

import { useIncident } from "@/context/IncidentContext";

export default function Dashboard() {
  const { incident, setIncident } = useIncident();

  useEffect(() => {
    // Keeps dashboard synced with Digital Twin selection
  }, [incident]);

  return (
    <AppLayout>
      <DashboardBanner />
      <div className="mb-8">
  <LiveStats />
</div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <SystemHealth selectedArea={incident.area} />
        <MatchClock />
        <WeatherCard />
        <CrowdCard />
      </div>

      <div className="mt-8 grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* LEFT */}
        <div className="xl:col-span-2 space-y-8">
          <DigitalTwin
            selected={incident.area}
            setSelected={(area) =>
              setIncident((prev) => ({
                ...prev,
                area,
              }))
            }
          />

          <ActivityFeed
            selectedArea={incident.area}
          />
        </div>

        {/* RIGHT */}
        <div className="space-y-8">
          <SituationRoom
            selectedArea={incident.area}
          />

          <IncidentHistory />
        </div>
      </div>
    </AppLayout>
  );
}