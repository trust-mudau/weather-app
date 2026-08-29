import React from "react";

const WeatherSummary = ({ weather }) => {
  const current = weather?.current_weather;
  if (!current) return null;

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 mb-6">
      <h2 className="text-xl font-semibold mb-2">Weather Summary</h2>
      <p className="text-gray-700">
        {`Currently in ${weather.city}, it is ${Math.round(current.temperature)}°C (weather code ${current.weathercode}).`}
      </p>
      <p className="text-gray-600 mt-2">
        Winds are {current.windspeed} km/h.
      </p>
    </div>
  );
};

export default WeatherSummary;
