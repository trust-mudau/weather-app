import React from "react";

const ForecastGrid = ({ daily }) => {
  if (!daily) return null;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 mt-6">
      {daily.time.map((date, idx) => (
        <div
          key={date}
          className="p-4 bg-white/80 rounded-2xl shadow text-center hover:scale-105 transition"
        >
          <p className="text-gray-600 text-sm">
            {new Date(date).toLocaleDateString("en-US", {
              weekday: "short",
            })}
          </p>
          <p className="text-lg font-bold">{daily.temperature_2m_max[idx]}°</p>
          <p className="text-sm text-gray-500">
            {daily.temperature_2m_min[idx]}°
          </p>
        </div>
      ))}
    </div>
  );
};

export default ForecastGrid;
