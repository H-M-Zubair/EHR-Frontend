import React from 'react';

const DashboardContent: React.FC = () => {
    // Example data
    const totalPatients = 11;
    const upcomingAppointments = 2;
    const recentActivities = [
        "Patient John Doe’s record was updated.",
        "New appointment scheduled with Patient Mary Smith.",
        "New patient registration: Alice Johnson."
    ];
    const tasks = [
        "Review patient records for the upcoming weekly meeting.",
        "Follow up on pending lab results.",
        "Update patient contact information."
    ];
    const notifications = [
        "New patient lab results available.",
        "Upcoming system maintenance scheduled for September 10."
    ];
    const healthInsights = [
        "Weekly patient visit trends.",
        "Common diagnoses and treatment plans."
    ];
    const systemUpdates = [
        "New feature added: Telemedicine Integration.",
        "Performance improvements and bug fixes."
    ];

    return (
        <div className="p-6  min-h-screen">
            <h1 className="text-3xl font-bold mb-6">Welcome, Dr. Kevin!</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                <div className=" p-4 rounded shadow-md">
                    <h2 className="text-xl font-semibold mb-2">Key Metrics Overview</h2>
                    <p>Total Patients: <span className="font-medium">{totalPatients}</span></p>
                    <p>Upcoming Appointments: <span className="font-medium">{upcomingAppointments}</span></p>
                </div>
            </div>

            <div className="  p-4 rounded shadow-md mb-6">
                <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
                <ul className="list-disc list-inside pl-4">
                    {recentActivities.map((activity, index) => (
                        <li key={index} className="mb-2">{activity}</li>
                    ))}
                </ul>
            </div>

           

            {/* <div className="  p-4 rounded shadow-md mb-6">
                <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
                <div className="flex flex-col space-y-2">
                    <a href="#" className="text-blue-500 hover:underline">View Patient Records</a>
                    <a href="#" className="text-blue-500 hover:underline">Schedule Appointments</a>
                    <a href="#" className="text-blue-500 hover:underline">Manage Prescriptions</a>
                    <a href="#" className="text-blue-500 hover:underline">Generate Reports</a>
                </div>
            </div> */}

            <div className="  p-4 rounded shadow-md mb-6">
                <h2 className="text-xl font-semibold mb-4">Notifications</h2>
                <ul className="list-disc list-inside pl-4">
                    {notifications.map((notification, index) => (
                        <li key={index} className="mb-2">{notification}</li>
                    ))}
                </ul>
            </div>

            <div className="  p-4 rounded shadow-md mb-6">
                <h2 className="text-xl font-semibold mb-4">Health Insights</h2>
                <ul className="list-disc list-inside pl-4">
                    {healthInsights.map((insight, index) => (
                        <li key={index} className="mb-2">{insight}</li>
                    ))}
                </ul>
            </div>

            {/* <div className="  p-4 rounded shadow-md mb-6">
                <h2 className="text-xl font-semibold mb-4">System Updates</h2>
                <ul className="list-disc list-inside pl-4">
                    {systemUpdates.map((update, index) => (
                        <li key={index} className="mb-2">{update}</li>
                    ))}
                </ul>
            </div> */}

            <div className="  p-4 rounded shadow-md">
                <h2 className="text-xl font-semibold mb-4">Profile & Settings</h2>
                <div className="flex flex-col space-y-2">
                    <a href="#" className="text-blue-500 hover:underline">Update Profile Information</a>
                    <a href="#" className="text-blue-500 hover:underline">Change Password</a>
                    {/* <a href="#" className="text-blue-500 hover:underline">Customize Dashboard</a> */}
                </div>
            </div>
        </div>
    );
}

export default DashboardContent;
