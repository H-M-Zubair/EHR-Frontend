// app/dashboard/page.tsx

import DashboardContent from "../../components/DashboardContent";


export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
      <DashboardContent />
    </div>
  );
}
