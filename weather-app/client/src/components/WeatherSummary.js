import React from "react";

const WeatherSummary = ({ weather }) => {
  if (!weather) return null;

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 mb-6">
      <h2 className="text-xl font-semibold mb-2">Weather Summary</h2>
      <p className="text-gray-700">
        {`Currently in ${weather.city}, it feels like ${Math.round(weather.current.temperature)}°C with ${weather.current.weathercode}.`}
      </p>
      <p className="text-gray-600 mt-2">
        Winds at {weather.current.windspeed} km/h and humidity around {weather.current.relativehumidity_2m}%.
      </p>
    </div>
  );
};

export default WeatherSummary;
