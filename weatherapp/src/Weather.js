import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
function Weather() {
  return (
    <div className="col-md-12">
      <div className="weatherBg">
        <h1 className="heading">Weather</h1>
        <div className="d-grid col-4 mt-4 gap-3">
          <input type="text" className="form-control" />
          <button className="btn btn-primary">Search</button>
        </div>
      </div>

      <div className="col-md-12 text-center mt-5">
        <div className="shadow rounded weatherResultBox">
          <img
            className="weathericon"
            src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png"
            alt="imageicon"
          />
          <h5 className="weathercity">Delhi</h5>
          <div className="weathertemp">20°C</div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
