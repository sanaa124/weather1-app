import React from 'react';

function WeatherCard({ data }) {
  const {
    name,
    sys: { country },
    main: { temp, humidity },
    wind: { speed },
    weather,
  } = data;

  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  return (
    <div className="card mx-auto" style={{ maxWidth: 400 }}>
      <div className="card-body text-center">
        <h3 className="card-title">{name}, {country}</h3>
        <img src={iconUrl} alt={weather[0].description} />
        <h4 className="card-subtitle mb-2 text-muted">{weather[0].main}</h4>
        <p className="card-text">
          🌡️ Temp: {temp}°C <br />
          💧 Humidity: {humidity}% <br />
          🌬️ Wind: {speed} m/s
        </p>
      </div>
    </div>
  );
}

export default WeatherCard;
