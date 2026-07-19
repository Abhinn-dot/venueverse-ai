import Badge from "../common/Badge";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center border-b border-white/10 p-6 bg-[#111827]">

      <div>
        <h2 className="text-2xl font-bold">
          Mission Control
        </h2>

        <p className="text-gray-400">
          FIFA 2026 Stadium Operations
        </p>
      </div>

      <Badge text="🟢 Demo Mode Active" />
    </header>
  );
}