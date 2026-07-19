type Props = {
  onSelect: (incident: string) => void;
};

const incidents = [
  {
    title: "🚨 Gate B Overcrowding",
    prompt:
      "Gate B is overcrowded. Crowd density has exceeded safe limits.",
  },
  {
    title: "🌧 Heavy Rain Alert",
    prompt:
      "Heavy rain expected in 20 minutes. Outdoor queues need shelter.",
  },
  {
    title: "🩺 Medical Emergency",
    prompt:
      "A spectator has collapsed near Section C. Medical assistance required immediately.",
  },
  {
    title: "⭐ VIP Arrival",
    prompt:
      "VIP convoy arriving in 10 minutes. Prepare secure access and crowd control.",
  },
];

export default function IncidentPanel({ onSelect }: Props) {
  return (
    <div className="mt-10 rounded-2xl border border-white/10 bg-[#111827] p-6">
      <h2 className="mb-5 text-2xl font-bold text-cyan-400">
        Live Incident Center
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {incidents.map((incident) => (
          <button
            key={incident.title}
            onClick={() => onSelect(incident.prompt)}
            className="rounded-xl border border-white/10 bg-[#1F2937] p-5 text-left transition hover:border-cyan-400 hover:scale-[1.02]"
          >
            <div className="font-semibold text-lg">
              {incident.title}
            </div>

            <p className="mt-2 text-sm text-gray-400">
              Click to load this incident into the AI Copilot.
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}