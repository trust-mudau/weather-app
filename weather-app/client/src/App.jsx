import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ForecastGrid from "./components/ForecastGrid";
import HourlyChart from "./components/HourlyChart";
import { fetchWeather } from "./services/api";

function App() {
  const [weather, setWeather] = useState(null);

  const handleSearch = async (city, lat, lon) => {
    const data = await fetchWeather(lat, lon);
    setWeather({ city, ...data });
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">🌦️ Weather App</h1>
        <SearchBar onSearch={handleSearch} />
        {weather && (
          <>
            <WeatherCard city={weather.city} current={weather.current_weather} />
            <ForecastGrid daily={weather.daily} />
            <HourlyChart hourly={weather.hourly} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
