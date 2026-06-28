const items = [
  "Dashboard",
  "Games",
  "Upload",
  "Downloads",
  "Community",
  "Discord",
  "Profile",
  "Settings",
];

export default function Sidebar() {
  return (
    <div className="w-64 bg-black/40 border-r border-white/10 p-4">
      <h2 className="text-xl font-bold mb-6 text-primary">TLEAN</h2>

      <nav className="space-y-2">
        {items.map((item) => (
          <div
            key={item}
            className="p-2 rounded hover:bg-white/10 cursor-pointer"
          >
            {item}
          </div>
        ))}
      </nav>
    </div>
  );
}
