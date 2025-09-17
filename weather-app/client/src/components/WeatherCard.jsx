import React from "react";

const WeatherCard = ({ city, current }) => {
  if (!current) return null;

  return (
    <div className="bg-white/80 rounded-2xl shadow p-6 flex items-center justify-between">
      <div>
        <h2 className="text-xl font-bold">{city}</h2>
        <p className="text-gray-600">Now</p>
      </div>
      <div className="text-right">
        <p className="text-3xl font-bold">{current.temperature}°C</p>
        <p className="text-gray-500">{current.windspeed} km/h wind</p>
      </div>
    </div>
  );
};

export default WeatherCard;
