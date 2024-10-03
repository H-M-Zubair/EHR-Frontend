# Doctor EHR Management Frontend

This repository contains the **Doctor EHR (Electronic Health Record) Management Frontend**, built as part of the overall healthcare application system. It allows doctors to manage appointments, view patient records, edit assessment forms, and handle various patient interactions.

## Features

### Appointment Management
- **View Appointment Requests**: Doctors can see all the patient requests for appointments.
- **Reschedule Appointments**: Doctors have the ability to reschedule meetings with patients by selecting a new time and date.
  
### Patient Record Management
- **View Filled Assessment Forms**: Doctors can access the assessment forms filled by patients during their appointment requests.
- **Edit Patient Forms**: Doctors can update and modify patient assessment forms as needed for accuracy or additional information.

### Technologies Used
- **React Hook Form (RHF)**: Used for building and managing form inputs in an efficient and flexible way.
- **Zod**: Utilized for schema validation to ensure data integrity and validation within forms.
- **React Query (useQuery)**: Employed to handle asynchronous data fetching, caching, and synchronization of patient data and appointment information.

### Responsive and User-Friendly Interface
- **Responsive UI**: The frontend is designed to provide a smooth and responsive experience across various devices.
- **Notifications and Feedback**: Integrated with **Toaster** to provide quick feedback and alerts for actions such as rescheduling appointments and updating forms.

## Getting Started

### Prerequisites
- Ensure you have Node.js and npm installed on your machine.

### Installation Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/doctor-ehr-frontend.git
   cd doctor-ehr-frontend
