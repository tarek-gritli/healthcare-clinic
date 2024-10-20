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
import { patientAgeDistributionData } from "@/data/data";

export default function PatientAgeDistribution() {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Patient Age Distribution</CardTitle>
        <CardDescription>Distribution of patients by age group</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center items-center">
        <ChartContainer
          config={{
            count: {
              label: "Patient Count",
              color: "hsl(var(--chart-1))",
            },
          }}
          className="h-[300px] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={patientAgeDistributionData}>
              <XAxis dataKey="ageGroup" />
              <YAxis />
              <Tooltip content={<ChartTooltipContent />} />
              <Legend />
              <Bar dataKey="count" fill="var(--color-count)" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
