import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const query = city.trim();
    if (!query) return;

    setLoading(true);
    setError("");
    try {
      const params = new URLSearchParams({ name: query, count: "1", language: "en", format: "json" });
      const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?${params}`);
      if (!res.ok) throw new Error("City search is temporarily unavailable");
      const data = await res.json();
      if (!data.results?.length) throw new Error(`No location found for “${query}”`);

      const { latitude, longitude, name, country } = data.results[0];
      await onSearch(country ? `${name}, ${country}` : name, latitude, longitude);
    } catch (searchError) {
      setError(searchError.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mb-6">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <label htmlFor="city-search" className="sr-only">City</label>
        <input
          id="city-search"
          type="search"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          maxLength={100}
          className="flex-grow p-2 rounded-xl border shadow"
        />
        <button disabled={loading} className="px-4 py-2 bg-blue-600 text-white rounded-xl disabled:opacity-60">
          {loading ? "Searching…" : "Search"}
        </button>
      </form>
      {error && <p className="mt-2 text-sm text-red-700" role="alert">{error}</p>}
    </div>
  );
};

export default SearchBar;
