"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts"
import type React from "react"

import { ChartContainer, ChartTooltip } from "@/components/ui/chart"

const data = [
  {
    date: "Jan",
    energy: 157,
    savings: 245,
  },
  {
    date: "Feb",
    energy: 176,
    savings: 289,
  },
  {
    date: "Mar",
    energy: 187,
    savings: 356,
  },
  {
    date: "Apr",
    energy: 198,
    savings: 423,
  },
  {
    date: "May",
    energy: 210,
    savings: 478,
  },
  {
    date: "Jun",
    energy: 234,
    savings: 567,
  },
]

export function Overview() {
  return (
    <ChartContainer
      config={{
        energy: {
          label: "Energy Output (kWh)",
          color: "hsl(var(--chart-1))",
        },
        savings: {
          label: "Cost Savings ($)",
          color: "hsl(var(--chart-2))",
        },
      }}
      className="h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 10,
            bottom: 0,
          }}
        >
          <Tooltip content={<ChartTooltip />} />
          <Line
            type="monotone"
            dataKey="energy"
            strokeWidth={2}
            activeDot={{
              r: 6,
              style: { fill: "hsl(var(--chart-1))", opacity: 0.8 },
            }}
            style={
              {
                stroke: "hsl(var(--chart-1))",
                opacity: 0.8,
              } as React.CSSProperties
            }
          />
          <Line
            type="monotone"
            dataKey="savings"
            strokeWidth={2}
            activeDot={{
              r: 6,
              style: { fill: "hsl(var(--chart-2))", opacity: 0.8 },
            }}
            style={
              {
                stroke: "hsl(var(--chart-2))",
                opacity: 0.8,
              } as React.CSSProperties
            }
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

