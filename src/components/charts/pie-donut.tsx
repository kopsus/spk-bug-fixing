"use client";

import * as React from "react";
import { Label, Pie, PieChart } from "recharts";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useQuerBugs } from "@/api/bug/queries";

export function PieChartDonut() {
  const { dataBugs } = useQuerBugs();

  const totalBugs = React.useMemo(() => {
    return dataBugs?.length;
  }, [dataBugs?.length]);

  const fixedBugs = React.useMemo(() => {
    return dataBugs?.filter((bug) => bug.status === "Fixed").length;
  }, [dataBugs]);

  const notFixedBugs = React.useMemo(() => {
    return dataBugs?.filter((bug) => bug.status === "Process").length;
  }, [dataBugs]);

  const chartData = [
    { status: "fixed", amount: fixedBugs, fill: "#99C281" },
    { status: "not fixed", amount: notFixedBugs, fill: "#F98486" },
  ];

  const chartConfig = {
    fixed: {
      label: "Fixed",
      color: "#99C281",
    },
    notFixed: {
      label: "Not fixed",
      color: "#F98486",
    },
  } satisfies ChartConfig;

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Bug fixed</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="amount"
              nameKey="status"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {fixedBugs}/{totalBugs?.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          bug fixed
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex justify-center gap-5 text-sm">
        <div className="flex gap-2 items-center">
          <div className="size-5 rounded-full bg-[#99C281]" />
          <p>Fixed</p>
        </div>
        <div className="flex gap-2 items-center">
          <div className="size-5 rounded-full bg-[#F98486]" />
          <p>Not fixed</p>
        </div>
      </CardFooter>
    </Card>
  );
}
