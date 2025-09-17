import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const HourlyChart = ({ hourly }) => {
  if (!hourly) return null;

  const data = hourly.time.map((t, i) => ({
    time: new Date(t).getHours() + ":00",
    temp: hourly.temperature_2m[i],
  }));

  return (
    <div className="h-72 mt-8 bg-white/80 rounded-2xl shadow p-4">
      <h3 className="text-lg font-semibold mb-2">Hourly Temperature</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis unit="°C" />
          <Tooltip />
          <Line type="monotone" dataKey="temp" stroke="#2563eb" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HourlyChart;
