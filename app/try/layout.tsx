// /app/dashboard/layout.tsx
import React from 'react';
import Link from 'next/link';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><Link href="/dashboard">Dashboard Home</Link></li>
            <li><Link href="/dashboard/patientss">Patients</Link></li>
            {/* Add more links as needed */}
          </ul>
        </nav>
      </header>
      <main>
        {children} {/* This will render the content of the nested routes */}
      </main>
    </div>
  );
}
