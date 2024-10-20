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
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

import { waitingTimeAnalysisData } from "@/data/data";

export default function WaitingTimeAnalysis() {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Waiting Time Analysis</CardTitle>
        <CardDescription>
          Average waiting time throughout the day
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center items-center">
        <ChartContainer
          config={{
            waitTime: {
              label: "Wait Time (minutes)",
              color: "hsl(var(--chart-1))",
            },
          }}
          className="h-[300px] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={waitingTimeAnalysisData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip content={<ChartTooltipContent />} />
              <Legend />
              <Line
                type="monotone"
                dataKey="waitTime"
                stroke="var(--color-waitTime)"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
