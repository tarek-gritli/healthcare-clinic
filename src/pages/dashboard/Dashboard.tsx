import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, LogOut } from "lucide-react";
import { patients, doctors, appointments } from "@/data/data";
import autoTable from "jspdf-autotable";
import {
  AppointmentsOverview,
  UpcomingAppointments,
  MedicalStaff,
  Departments,
  RecentPatients,
  PendingAppointments,
  TaxiBookings,
  PatientGrowth,
  Revenue,
  GeneralStats,
  PatientAgeDistribution,
  DoctorPerformance,
  WaitingTimeAnalysis,
  StaffAvailability,
  AppointmentsSummary,
  PatientSatisfactionSmall,
  EquipmentStatus,
  ResourceUtilization,
} from "./components";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const downloadReport = () => {
    const doc = new jsPDF();

    // Add title
    doc.setFontSize(18);
    doc.text("Hospital Dashboard Report", 14, 22);

    // Add date
    doc.setFontSize(11);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 14, 30);

    // Add statistics
    doc.setFontSize(14);
    doc.text("Statistics:", 14, 40);
    doc.setFontSize(10);
    doc.text(`Total Patients: ${patients.length}`, 14, 50);
    doc.text(`Total Doctors: ${doctors.length}`, 14, 56);
    doc.text(`Total Appointments: ${appointments.length}`, 14, 62);
    doc.text(
      `Pending Appointments: ${
        appointments.filter((a) => a.status === "Pending").length
      }`,
      14,
      68
    );

    if (appointments.length > 0) {
      doc.setFontSize(14);
      doc.text("Recent Appointments:", 14, 80);

      // Get the most recent appointments (e.g., last 5)
      const recentAppointments = appointments.slice(-5);

      // Create the appointments table
      autoTable(doc, {
        startY: 85,
        head: [["Patient", "Doctor", "Date", "Time", "Status"]],
        body: recentAppointments.map((a) => [
          a.patient || "N/A",
          a.doctor || "N/A",
          a.date || "N/A",
          a.time || "N/A",
          a.status || "N/A",
        ]),
      });
    } else {
      doc.text("No recent appointments available.", 14, 85);
    }

    // Save the PDF
    doc.save("hospital_dashboard_report.pdf");
  };

  const handleLogout = () => {
    setIsLoggingOut(true);
    setTimeout(() => {
      localStorage.removeItem("isAuthenticated");
      navigate("/login");
    }, 1000); // Delay for 1 second
  };

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center space-x-2">
          <Button onClick={downloadReport}>
            <Download className="mr-2 h-4 w-4" />
            Download Report
          </Button>
          <Button
            variant="outline"
            onClick={handleLogout}
            disabled={isLoggingOut}
          >
            <LogOut className="mr-2 h-4 w-4" />
            {isLoggingOut ? "Logging out..." : "Logout"}
          </Button>
        </div>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <GeneralStats />
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-8">
            <AppointmentsOverview />
            <PendingAppointments />
            <UpcomingAppointments />
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <MedicalStaff />
            <Departments />
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-8">
            <RecentPatients />
            <TaxiBookings />
          </div>
        </TabsContent>
        <TabsContent value="analytics" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <EquipmentStatus />
            <PatientSatisfactionSmall />
            <StaffAvailability />
            <AppointmentsSummary />
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-8">
            <PatientGrowth />
            <ResourceUtilization />
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-8">
            <Revenue />
            <DoctorPerformance />
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-8">
            <PatientAgeDistribution />
            <WaitingTimeAnalysis />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
