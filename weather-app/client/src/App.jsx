import React, { lazy, Suspense, useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ForecastGrid from "./components/ForecastGrid";
import { fetchWeather } from "./services/api";

const HourlyChart = lazy(() => import("./components/HourlyChart"));

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (city, lat, lon) => {
    setLoading(true);
    try {
      const data = await fetchWeather(lat, lon);
      setWeather({ city, ...data });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto" aria-busy={loading}>
        <h1 className="text-3xl font-bold mb-6">🌦️ Weather App</h1>
        <SearchBar onSearch={handleSearch} />
        {loading && <p className="mb-4 text-slate-600" role="status">Loading forecast…</p>}
        {weather && (
          <>
            <WeatherCard city={weather.city} current={weather.current_weather} />
            <ForecastGrid daily={weather.daily} />
            <Suspense fallback={<p className="mt-8 text-slate-600">Loading chart…</p>}>
              <HourlyChart hourly={weather.hourly} />
            </Suspense>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
