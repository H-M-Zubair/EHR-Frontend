// app/dashboard/patients/page.tsx
// import PatientsContent from "@/components/PatientsContent";

import PatientsRecord from "@/components/Patients";

export default function PatientsPage() {
  return (
    <div>
      <h1 className="text-lg font-semibold md:text-2xl">Patients</h1>
   <PatientsRecord/>
    </div>
  );
}
