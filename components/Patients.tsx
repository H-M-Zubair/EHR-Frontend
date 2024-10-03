"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

// Define the type for a patient
interface Patient {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export default function PatientsRecord() {
  // State to store the fetched patients data
  const [patients, setPatients] = useState<Patient[]>([]);

  // useEffect to fetch data when the component is mounted
  useEffect(() => {
    // Define an async function to fetch data using axios
    const fetchPatients = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/get-users");
        // Assuming the response structure contains 'data' with patients
        const patientsData: Patient[] = response.data.data; 
        console.log(patientsData)
        setPatients(patientsData); 
      } catch (error) {
        console.error("Error fetching patients data:", error);
      }
    };

    fetchPatients(); // Call the fetch function
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">
        A list of your website&apos;s users
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {patients.length > 0 ? (
          patients.map((patient) => (
            <div
              key={patient._id}
              className="border p-4 rounded-lg shadow-md space-y-2"
            >
              <p className="font-medium">First Name: {patient.firstName}</p>
              <p>Last Name: {patient.lastName}</p>
              <p>Email: {patient.email}</p>
              <p>Phone Number: {patient.phone}</p>
              <div>
                <Link
                  href={`/dashboard/patients/${patient._id}`}
                  className="text-blue-500 hover:underline"
                >
                  View Patient Details
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full">No patients found.</p>
        )}
      </div>
    </div>
  );
}
