import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { useState } from "react";
import { upcomingAppointmentsData } from "@/data/data";

export default function UpcomingAppointments() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedAppointments, setSelectedAppointments] = useState<any[]>([]);

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    if (selectedDate) {
      const formattedDate = selectedDate.toISOString().split("T")[0];
      setSelectedAppointments(
        upcomingAppointmentsData[
          formattedDate as keyof typeof upcomingAppointmentsData
        ] || []
      );
    } else {
      setSelectedAppointments([]);
    }
  };

  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Upcoming Appointments</CardTitle>
        <CardDescription>
          {selectedAppointments.length > 0
            ? `You have ${
                selectedAppointments.length
              } appointment(s) on ${date?.toDateString()}`
            : "Select a date to view appointments"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row">
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleDateSelect}
            className="rounded-md border mb-4 md:mb-0 md:mr-4"
          />
          <div className="flex-1">
            {selectedAppointments.map((appointment, index) => (
              <div key={index} className="mb-2 p-2 bg-gray-100 rounded">
                <p className="font-bold">{appointment.time}</p>
                <p>{appointment.patient}</p>
                <p className="text-sm text-gray-600">{appointment.reason}</p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
