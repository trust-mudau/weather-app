export async function fetchWeather(lat, lon) {
  const apiBase = (import.meta.env.VITE_API_URL || "").replace(/\/$/, "");
  const query = new URLSearchParams({ lat: String(lat), lon: String(lon) });
  const res = await fetch(`${apiBase}/api/weather?${query}`);
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || "Unable to load weather data");
  return data;
}
