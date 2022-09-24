import React from "react";

const Status = () => {
  return (
    <div id="status">
      <div id="top">
        <div id="left">23°C</div>
        <div id="right">
          <div className="list">Precipitation: 6%</div>
          <div className="list">Humidity: 80%</div>
          <div className="list">Wind: 16 km/h</div>
        </div>
      </div>
      <div id="bottom">
        <div id="location">17.5186° N, 78.3963° E</div>
      </div>
    </div>
  );
};

export default Status;
