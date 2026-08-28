import express from "express";
import axios from "axios";
import cors from "cors";
import { validateCoordinates } from "./validation.js";

const app = express();
const allowedOrigins = (process.env.CLIENT_ORIGINS || "http://localhost:5173")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);
app.use(cors({ origin: allowedOrigins }));

const PORT = process.env.PORT || 5000;

app.get("/api/weather", async (req, res) => {
  const { lat, lon } = req.query;
  const coordinates = validateCoordinates(lat, lon);
  if (coordinates.error) return res.status(400).json({ error: coordinates.error });
  const { latitude, longitude } = coordinates;

  try {
    const { data } = await axios.get("https://api.open-meteo.com/v1/forecast", {
      params: {
        latitude,
        longitude,
        hourly: "temperature_2m",
        daily: "temperature_2m_max,temperature_2m_min",
        current_weather: true,
        timezone: "auto",
      },
      timeout: 10000,
    });
    res.json(data);
  } catch (err) {
    console.error("Weather provider request failed:", err.message);
    res.status(502).json({ error: "Weather data is temporarily unavailable" });
  }
});

app.get("/api/health", (_req, res) => res.json({ ok: true }));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
