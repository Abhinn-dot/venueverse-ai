import Card from "@/components/common/Card";
import { Users } from "lucide-react";
export default function CrowdCard() {
  return (
    <Card>
      <div className="flex items-center gap-2">
  <Users className="text-cyan-400" size={22} />
  <h3 className="text-lg font-semibold">
    Crowd Density
  </h3>
</div>

      <p className="mt-4 text-4xl font-bold text-yellow-400">
        81%
      </p>

      <p className="mt-3 text-gray-400">
        68,421 / 80,000 spectators
      </p>
    </Card>
  );
}