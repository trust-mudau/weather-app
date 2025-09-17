export async function fetchWeather(lat, lon) {
  const res = await fetch(`http://localhost:5000/api/weather?lat=${lat}&lon=${lon}`);
  return await res.json();
}
