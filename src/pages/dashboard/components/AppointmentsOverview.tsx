import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { appointmentsByDay } from "@/data/data";

const AppointmentsOverview = () => {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Appointments Overview</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center items-center">
        <ChartContainer
          config={{
            appointments: {
              label: "Appointments",
              color: "hsl(var(--chart-1))",
            },
          }}
          className="h-[300px] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={appointmentsByDay}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip content={<ChartTooltipContent />} />
              <Bar dataKey="appointments" fill="var(--color-appointments)" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default AppointmentsOverview;
