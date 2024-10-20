import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ResponsiveContainer } from "recharts";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";
import { COLORS, departmentData } from "@/data/data";
import { ChartContainer } from "@/components/ui/chart";

export default function Departments() {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Departments</CardTitle>
        <CardDescription>Distribution of departments</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            departments: {
              label: "Departments",
              color: "hsl(var(--chart-1))",
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={departmentData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {departmentData.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend
                layout="vertical"
                align="right"
                verticalAlign="middle"
                iconSize={10}
                iconType="circle"
              />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
