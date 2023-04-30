import React, { useState } from "react";
import "./index.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
function Weather() {
  const apiKey = "";
  // f56f24967aaf51182d1d4df628297c6d; //api key
  const [inputCity, setInputCity] = useState("");
  const [data, setData] = useState([]);
  const getWeatherDetails = (cityName) => {
    if (!cityName) return;
    const apiURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=" +
      apiKey;

    axios
      .get(apiURL)
      .then((res) => {
        console.log("response", res.data);
        setData(res.data);
      })
      .catch((err) => console.log("error", err));
  };

  const handleSearch = () => {
    getWeatherDetails(inputCity);
  };
  return (
    <div className="col-md-12">
      <div className="weatherBg">
        <h1 className="heading">Weather</h1>
        <div className="d-grid col-4 mt-4 gap-3">
          <input
            type="text"
            className="form-control"
            value={inputCity}
            onChange={(event) => {
              setInputCity(event.target.value);
            }}
          />
          <button className="btn btn-primary" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>

      <div className="col-md-12 text-center mt-5">
        <div className="shadow rounded weatherResultBox">
          <img
            className="weathericon"
            src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png"
            alt="imageicon"
          />
          <h5 className="weathercity">{data?.name}</h5>
          <div className="weathertemp">
            {(data?.main?.temp - 273.15).toFixed(2)}°C
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
