import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
} from "recharts";

import colors from "tailwindcss/colors";

const data = [
  {
    date: "10/12",
    revenue: 232,
  },
  {
    date: "11/12",
    revenue: 1200,
  },
  {
    date: "12/12",
    revenue: 456,
  },
  {
    date: "13/12",
    revenue: 1222,
  },
  {
    date: "14/12",
    revenue: 678,
  },
  {
    date: "15/12",
    revenue: 876,
  },
  {
    date: "16/12",
    revenue: 908,
  },
];

export function RevenueChart() {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Income during the period
          </CardTitle>
          <CardDescription>Daily income during the period</CardDescription>
        </div>
      </CardHeader>

      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={data} style={{ fontSize: 12 }}>
            <XAxis dataKey="date" tickLine={false} axisLine={false} dy={16} />

            <YAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              width={80}
              tickFormatter={(value: number) =>
                value.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })
              }
            />

            <CartesianGrid vertical={false} />

            <Line
              type="linear"
              strokeWidth={2}
              dataKey="revenue"
              stroke={colors.violet["500"]}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
