import React from "react";
import { useSelector } from "react-redux";
const Weather = () => {
  const weather = useSelector((state) => state.fetc);
  return (
    <div>
      <div className="weather_container">
        <img src={weather.icon} alt="" />
        <h1>{weather.temp_c}°C</h1>
        <p>{weather.text}</p>
        <h3>{weather.info}</h3>
        <div className="row_list">
          <div className="cols">
            <p>wind Now</p>
            <h3>{weather.wind_kph}</h3>
          </div>
          <div className="cols">
            <p>Humidity</p>
            <h3>{weather.humidity}%</h3>
          </div>
          <div className="cols">
            <p>Precipitation</p>
            <h3>{weather.precip_mm}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
