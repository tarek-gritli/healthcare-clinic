import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ResponsiveContainer } from "recharts";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { patientGrowthData } from "@/data/data";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";

export default function PatientGrowth() {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Patient Growth</CardTitle>
        <CardDescription>Monthly patient acquisition</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center items-center">
        <ChartContainer
          config={{
            patients: {
              label: "Patients",
              color: "hsl(var(--chart-1))",
            },
          }}
          className="h-[300px] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={patientGrowthData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip content={<ChartTooltipContent />} />
              <Legend />
              <Line
                type="monotone"
                dataKey="patients"
                stroke="var(--color-patients)"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
