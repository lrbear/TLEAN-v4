import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold">TLEAN v4 Dashboard</h1>

        <div className="mt-6 grid grid-cols-3 gap-4">
          <Card title="Games" />
          <Card title="Uploads" />
          <Card title="Community" />
        </div>
      </div>
    </div>
  );
}

function Card({ title }: { title: string }) {
  return (
    <div className="bg-white/10 backdrop-blur p-4 rounded-xl border border-white/10">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-sm text-gray-300 mt-2">
        Manage your {title.toLowerCase()} here
      </p>
    </div>
  );
}
