"use client";

import { addMinutes, eachDayOfInterval, format } from "date-fns";
import { useMemo, useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// Dropdown options
const TIME_BLOCKS = [
  { label: "15 Minutes", value: "15min" },
  { label: "1 Hour", value: "1h" },
  { label: "Day", value: "day" },
  { label: "Week", value: "week" },
];

// Generate time blocks
function generateBlocks(startDate: Date, endDate: Date, block: string) {
  const data: { time: string; value: number }[] = [];
  const days = eachDayOfInterval({ start: startDate, end: endDate });
  days.forEach((date) => {
    if (block === "15min") {
      let current = new Date(date);
      current.setHours(0, 0, 0, 0); // start at 00:00
      for (let i = 0; i < 96; i++) {
        // 96 blocks of 15 min
        data.push({
          time: format(current, "HH:mm"),
          value: Math.floor(Math.random() * 100), // demo value
        });
        current = addMinutes(current, 15);
      }
    } else if (block === "1h") {
      let current = new Date(date);
      current.setHours(0, 0, 0, 0);
      for (let i = 0; i < 24; i++) {
        data.push({
          time: format(current, "HH:mm"),
          value: Math.floor(Math.random() * 100),
        });
        current = addMinutes(current, 60);
      }
    } else if (block === "day") {
      data.push({
        time: format(date, "dd-MM"),
        value: Math.floor(Math.random() * 100),
      });
    } else if (block === "week") {
      // week label, e.g., "Week 1"
      const weekNum = Math.ceil((date.getDate() + 6 - date.getDay()) / 7);
      data.push({
        time: `Week ${weekNum}`,
        value: Math.floor(Math.random() * 100),
      });
    }
  });

  return data;
}

export default function TimeBlockChart() {
  const current_date = new Date();
  const [timeBlock, setTimeBlock] = useState("15min");
  const [startDate, setStartDate] = useState(new Date(current_date));
  const [endDate, setEndDate] = useState(
    new Date(current_date.setDate(current_date.getDate() + 15))
  );
  const [blockWidth, setBlockWidth] = useState(20); // default 10px per block

  const chartData = useMemo(() => {
    return generateBlocks(startDate, endDate, timeBlock);
  }, [startDate, endDate, timeBlock]);

  return (
    <div className="p-4 space-y-4">
      {/* Controls */}
      <div className="flex space-x-4 items-center">
        {/* Date range selector */}
        <div>
          <label className="mr-2">Start:</label>
          <input
            type="date"
            value={format(startDate, "yyyy-MM-dd")}
            onChange={(e) => setStartDate(new Date(e.target.value))}
            className="border rounded p-1"
          />
        </div>
        <div>
          <label className="mr-2">End:</label>
          <input
            type="date"
            value={format(endDate, "yyyy-MM-dd")}
            onChange={(e) => setEndDate(new Date(e.target.value))}
            className="border rounded p-1"
          />
        </div>

        {/* Time block dropdown */}
        <select
          value={timeBlock}
          onChange={(e) => setTimeBlock(e.target.value)}
          className="border rounded p-1"
        >
          {TIME_BLOCKS.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>

        <div className="flex space-x-2 items-center mt-2">
          <button
            onClick={() => setBlockWidth(blockWidth + 10)}
            className="border px-2 rounded"
          >
            Zoom In
          </button>
          <button
            onClick={() => setBlockWidth(Math.max(10, blockWidth - 10))}
            className="border px-2 rounded"
          >
            Zoom Out
          </button>
          <span>Block Width: {blockWidth}px</span>
        </div>
      </div>

      {/* Chart */}
      <div className="max-w-[80%]">
        <div className="overflow-x-auto  border p-2">
          <LineChart
            // width={96 * 50}
            width={chartData.length * blockWidth}
            height={300}
            data={chartData}
            margin={{ left: 20, right: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" tick={{ fontSize: 12 }} />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#4f46e5"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </div>
      </div>
    </div>
  );
}
