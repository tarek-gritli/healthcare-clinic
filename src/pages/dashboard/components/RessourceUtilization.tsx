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
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
  Tooltip,
} from "recharts";
import { ressourceUtilizationData } from "@/data/data";

export default function ResourceUtilization() {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Resource Utilization</CardTitle>
        <CardDescription>
          Utilization percentage of various hospital resources
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center items-center">
        <ChartContainer
          config={{
            utilization: {
              label: "Utilization (%)",
              color: "hsl(var(--chart-1))",
            },
          }}
          className="h-[300px] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart
              cx="50%"
              cy="50%"
              outerRadius="80%"
              data={ressourceUtilizationData}
            >
              <PolarGrid />
              <PolarAngleAxis dataKey="resource" />
              <PolarRadiusAxis angle={30} domain={[0, 100]} />
              <Radar
                name="Utilization"
                dataKey="utilization"
                stroke="var(--color-utilization)"
                fill="var(--color-utilization)"
                fillOpacity={0.6}
              />
              <Legend />
              <Tooltip content={<ChartTooltipContent />} />
            </RadarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
