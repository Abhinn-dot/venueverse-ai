
type Props = {
  selectedArea: string;
};

const incidentData: Record<
  string,
  {
    priority: string;
    incident: string;
    recommendation: string;
    confidence: string;
    eta: string;
    teams: string;

    security: string;
    volunteers: string;
    medical: string;
    police: string;

    spectators: string;
    evacuation: string;
    alternative: string;
  }
> = {
  North: {
    priority: "MEDIUM PRIORITY",
    incident: "Medical Assistance Requested",
    recommendation:
      "Dispatch the nearest medical team and guide spectators away from the area.",
    confidence: "91%",
    eta: "3 min",
    teams: "2 Medical Teams",

    security: "2",
    volunteers: "5",
    medical: "2",
    police: "1",

    spectators: "1,250",
    evacuation: "No",
    alternative: "Gate A",
  },

  South: {
    priority: "MEDIUM PRIORITY",
    incident: "Crowd Density Increasing",
    recommendation:
      "Redirect spectators to Gate A and monitor crowd movement.",
    confidence: "92%",
    eta: "5 min",
    teams: "6 Volunteers",

    security: "3",
    volunteers: "6",
    medical: "1",
    police: "2",

    spectators: "1,900",
    evacuation: "No",
    alternative: "Gate A",
  },

  East: {
    priority: "LOW PRIORITY",
    incident: "Normal Operations",
    recommendation: "Continue routine monitoring.",
    confidence: "99%",
    eta: "-",
    teams: "Monitoring",

    security: "2",
    volunteers: "4",
    medical: "1",
    police: "1",

    spectators: "950",
    evacuation: "No",
    alternative: "-",
  },

  West: {
    priority: "HIGH PRIORITY",
    incident: "Security Breach Detected",
    recommendation:
      "Deploy security personnel immediately and secure the area.",
    confidence: "96%",
    eta: "2 min",
    teams: "4 Security Teams",

    security: "6",
    volunteers: "10",
    medical: "2",
    police: "4",

    spectators: "2,850",
    evacuation: "Yes",
    alternative: "Gate D",
  },

  VIP: {
    priority: "LOW PRIORITY",
    incident: "VIP Entry Delay",
    recommendation:
      "Coordinate with escort staff and clear the access route.",
    confidence: "90%",
    eta: "6 min",
    teams: "VIP Staff",

    security: "5",
    volunteers: "2",
    medical: "1",
    police: "3",

    spectators: "180",
    evacuation: "No",
    alternative: "VIP Entrance",
  },

  "Gate B": {
    priority: "HIGH PRIORITY",
    incident: "Crowd Surge at Gate B",
    recommendation:
      "Open Gate C immediately and redirect spectators using multilingual announcements.",
    confidence: "94%",
    eta: "4 min",
    teams: "8 Volunteers",

    security: "4",
    volunteers: "8",
    medical: "1",
    police: "2",

    spectators: "2,450",
    evacuation: "No",
    alternative: "Gate C",
  },
};

export default function SituationRoom({ selectedArea }: Props) {
  const data = incidentData[selectedArea];

  return (
    <div className="rounded-2xl border border-white/10 bg-[#1F2937] p-6 shadow-lg">

      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">
          🚨 AI Situation Room
        </h2>

        <span className="rounded-full bg-red-500/20 px-3 py-1 text-red-400 font-semibold">
          {data.priority}
        </span>
      </div>

      <div className="mt-6 space-y-6">

        <div>
          <p className="text-gray-400">Active Incident</p>

          <h3 className="text-xl font-semibold text-white">
            {data.incident}
          </h3>
        </div>

        <div>
          <p className="text-gray-400">AI Recommendation</p>

          <p className="text-cyan-300">
            {data.recommendation}
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-[#111827] p-4">
          <h3 className="text-lg font-semibold text-cyan-400">
            Incident Status
          </h3>

          <div className="mt-3 flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>

            <span className="font-semibold text-red-400">
              Active
            </span>
          </div>

<p>
  Last Updated: 09:42:16 AM
</p>

          <p className="text-gray-400">
            Reported By: AI CCTV Detection
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6">

          <div>
            <p className="text-gray-400">Confidence</p>

            <p className="font-bold text-green-400">
              {data.confidence}
            </p>

            <div className="mt-2 h-2 w-full rounded-full bg-gray-700">
              <div
                className="h-2 rounded-full bg-green-500"
                style={{ width: data.confidence }}
              />
            </div>
          </div>

          <div>
            <p className="text-gray-400">ETA</p>

            <p className="font-bold text-yellow-400">
              {data.eta}
            </p>
          </div>

          <div>
            <p className="text-gray-400">Teams</p>

            <p className="font-bold text-white">
              {data.teams}
            </p>
          </div>

        </div>

        <div className="rounded-xl border border-white/10 bg-[#111827] p-4">

          <h3 className="text-lg font-semibold text-cyan-400">
            Resources Deployed
          </h3>

          <div className="mt-4 grid grid-cols-2 gap-4">

            <div>
              <p className="text-gray-400">👮 Security Teams</p>
              <p className="font-bold text-white">
                {data.security}
              </p>
            </div>

            <div>
              <p className="text-gray-400">🙋 Volunteers</p>
              <p className="font-bold text-white">
                {data.volunteers}
              </p>
            </div>

            <div>
              <p className="text-gray-400">🚑 Medical Teams</p>
              <p className="font-bold text-white">
                {data.medical}
              </p>
            </div>

            <div>
              <p className="text-gray-400">🚔 Police Units</p>
              <p className="font-bold text-white">
                {data.police}
              </p>
            </div>

          </div>

        </div>

        <div className="rounded-xl border border-white/10 bg-[#111827] p-4">

          <h3 className="text-lg font-semibold text-cyan-400">
            Impact Assessment
          </h3>

          <div className="mt-4 space-y-2">

            <p>
              <span className="text-gray-400">
                Affected Area:
              </span>{" "}
              {selectedArea}
            </p>

            <p>
              <span className="text-gray-400">
                Estimated Spectators:
              </span>{" "}
              {data.spectators}
            </p>

            <p>
              <span className="text-gray-400">
                Evacuation Required:
              </span>{" "}
              {data.evacuation}
            </p>

            <p>
              <span className="text-gray-400">
                Alternative Route:
              </span>{" "}
              {data.alternative}
            </p>

          </div>

        </div>

      </div>

      <div className="mt-8 border-t border-white/10 pt-4 text-sm text-gray-400">

        <p>
          Last Updated: 09:42:16 AM
        </p>

        <p>
          Auto Refresh: Every 30 seconds
        </p>

      </div>

    </div>
  );
}