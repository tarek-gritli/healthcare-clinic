import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import { doctorPerformanceData } from "@/data/data";

export default function DoctorPerformance() {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Doctor Performance</CardTitle>
        <CardDescription>
          Patient count and satisfaction rating by doctor
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center items-center">
        <ChartContainer
          config={{
            patients: {
              label: "Patients Seen",
              color: "hsl(var(--chart-1))",
            },
            satisfaction: {
              label: "Satisfaction Rating",
              color: "hsl(var(--chart-2))",
            },
          }}
          className="h-[300px] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={doctorPerformanceData}>
              <XAxis dataKey="name" />
              <YAxis
                yAxisId="left"
                orientation="left"
                stroke="var(--color-patients)"
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                stroke="var(--color-satisfaction)"
              />
              <Tooltip content={<ChartTooltipContent />} />
              <Legend />
              <Bar
                yAxisId="left"
                dataKey="patients"
                fill="var(--color-patients)"
              />
              <Bar
                yAxisId="right"
                dataKey="satisfaction"
                fill="var(--color-satisfaction)"
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
