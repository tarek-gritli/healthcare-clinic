import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { appointments } from "@/data/data";

export default function PendingAppointments() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Pending Appointments</CardTitle>
        <CardDescription>Appointments waiting for confirmation</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px]">
          {appointments
            .filter((a) => a.status === "Pending")
            .map((appointment) => (
              <div
                key={appointment.id}
                className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
              >
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {appointment.patient}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {appointment.doctor} on {appointment.date} at{" "}
                    {appointment.time}
                  </p>
                </div>
              </div>
            ))}
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
