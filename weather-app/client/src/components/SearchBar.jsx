import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!city) return;

    // Simple geocoding using Open-Meteo's geocoding API
    const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`);
    const data = await res.json();
    if (data.results && data.results.length > 0) {
      const { latitude, longitude, name } = data.results[0];
      onSearch(name, latitude, longitude);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
        className="flex-grow p-2 rounded-xl border shadow"
      />
      <button className="px-4 py-2 bg-blue-600 text-white rounded-xl">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
