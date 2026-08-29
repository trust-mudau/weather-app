# 🌦️ Weather App

A full-stack weather application built with:

- **Backend:** Node.js, Express, Axios
- **Frontend:** React (Vite), Tailwind CSS, Recharts
- **API:** [Open-Meteo](https://open-meteo.com/) (no API key required)

## 🚀 Features
- Search weather by city
- Current temperature & conditions
- 7-day forecast grid
- Hourly temperature chart
- Responsive Tailwind UI
- Validated backend proxy with upstream timeouts and clear errors
- Loading, empty-result, and failure states
- Environment-based deployment configuration

## 🛠️ Setup & Run
1. Clone this repo:
   ```bash
   git clone https://github.com/your-username/weather-app.git
   cd weather-app
   ```

2. Install dependencies:
   ```bash
   cd server && npm install
   cd ../client && npm install
   ```

3. Start backend:
   ```bash
   npm start
   ```

4. Copy `client/.env.example` to `client/.env`, then start the frontend:
   ```bash
   npm run dev
   ```

App runs at `http://localhost:5173`

## 📦 Deployment
- **Backend:** Render / Railway / Heroku
- **Frontend:** Vercel / Netlify
- Set `VITE_API_URL` for the deployed API URL.
- Set the server's comma-separated `CLIENT_ORIGINS` value to the deployed frontend origins.

## 📜 License
MIT — free to use and modify.
