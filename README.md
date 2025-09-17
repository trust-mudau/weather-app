# 🌦️ Weather App (MERN + Vite + Tailwind)

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
- Lightweight backend proxy (avoids CORS)

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

4. Start frontend:
   ```bash
   npm run dev
   ```

App runs at `http://localhost:5173`

## 📦 Deployment
- **Backend:** Render / Railway / Heroku
- **Frontend:** Vercel / Netlify
- Update API base URL in `client/src/services/api.js` when deployed.

## 📜 License
MIT — free to use and modify.
