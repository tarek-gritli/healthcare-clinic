import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, CheckCircle, Clock, XCircle } from "lucide-react";
import { appointments } from "@/data/data";

export default function AppointmentsSummary() {
  const totalAppointments = appointments.length;
  const confirmedAppointments = appointments.filter(
    (appointment) => appointment.status === "Confirmed"
  ).length;
  const pendingAppointments = appointments.filter(
    (appointment) => appointment.status === "Pending"
  ).length;
  return (
    <Card>
      <CardHeader>
        <CardTitle>Appointments Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <CalendarDays className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">
              Total: {totalAppointments}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span className="text-sm font-medium">
              Completed: {confirmedAppointments}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-yellow-500" />
            <span className="text-sm font-medium">
              Pending: {pendingAppointments}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <XCircle className="h-4 w-4 text-red-500" />
            <span className="text-sm font-medium">
              Cancelled:{" "}
              {totalAppointments - confirmedAppointments - pendingAppointments}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
