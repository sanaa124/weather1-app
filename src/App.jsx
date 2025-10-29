import React, { useState } from 'react';
import SearchBox from './components/SearchBox';
import WeatherCard from './components/WeatherCard';

const API_KEY = "da61a9c984c023836bdb3a5ea93a2cc2"; 

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    setLoading(true);
    setError(null);
    setWeatherData(null);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!res.ok) throw new Error("City not found");
      const data = await res.json();
      setWeatherData(data);
    } catch (err) {
      setError(err.message || "Failed to fetch weather");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">🌤️ Weather Dashboard</h1>
      <SearchBox onSearch={fetchWeather} loading={loading} error={error} />
      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
}

export default App;

