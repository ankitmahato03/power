"use client";

import * as React from "react";
import { Brush, CartesianGrid, Line, LineChart, XAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { EXPANDED_DATA } from "@/lib/constant";

export const description = "An interactive line chart";

const chartConfig = {
  sellbid: {
    label: "Sell Bid",
    color: "var(--chart-1)",
  },
  purchasebid: {
    label: "Purchase Bid",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function ActualChart() {
  const [timeRange, setTimeRange] = React.useState("90d");

  const filteredData = React.useMemo(() => {
    if (timeRange === "1d") {
      // Pick the last date in dataset (latest available)
      const latestDate = EXPANDED_DATA[EXPANDED_DATA.length - 1]?.date;
      return EXPANDED_DATA.filter((item) => item.date === latestDate);
    }

    const referenceDate = new Date("2024-06-30");
    let daysToSubtract = 90;
    if (timeRange === "30d") daysToSubtract = 30;
    else if (timeRange === "7d") daysToSubtract = 7;

    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);

    // Group by date (aggregate)
    const grouped: Record<
      string,
      { date: string; sellbid: number; purchasebid: number; count: number }
    > = {};

    EXPANDED_DATA.forEach((item) => {
      const d = new Date(item.date);
      if (d >= startDate) {
        if (!grouped[item.date]) {
          grouped[item.date] = {
            date: item.date,
            sellbid: 0,
            purchasebid: 0,
            count: 0,
          };
        }
        grouped[item.date].sellbid += item.sellbid;
        grouped[item.date].purchasebid += item.purchasebid;
        grouped[item.date].count += 1;
      }
    });

    // Take average per day
    return Object.values(grouped).map((d) => ({
      date: d.date,
      sellbid: d.sellbid / d.count,
      purchasebid: d.purchasebid / d.count,
    }));
  }, [timeRange]);

  return (
    <Card className="pt-0">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle>Actual Data Chart</CardTitle>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="hidden w-[160px] rounded-lg sm:ml-auto sm:flex"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="1d">Last 1 day</SelectItem>
            <SelectItem value="7d">Last 7 days</SelectItem>
            <SelectItem value="30d">Last 30 days</SelectItem>
            <SelectItem value="90d">Last 3 months</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <LineChart
            accessibilityLayer
            data={filteredData}
            margin={{ left: 12, right: 12 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey={timeRange === "1d" ? "timeblock" : "date"}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                if (timeRange === "1d") {
                  return value; // show timeblocks
                }
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="sellbid"
                  labelFormatter={(value) => {
                    if (timeRange === "1d") {
                      return `Time: ${value}`;
                    }
                    const date = new Date(value);
                    return date.toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    });
                  }}
                />
              }
            />
            <Brush
              dataKey="timeblock"
              height={20}
              stroke="#8884d8"
              travellerWidth={10}
              startIndex={0} // show initial range
              endIndex={24} // show first 24 blocks (~6 hours)
            />
            <Line
              dataKey="sellbid"
              type="monotone"
              stroke="var(--chart-1)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="purchasebid"
              type="monotone"
              stroke="var(--chart-2)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
