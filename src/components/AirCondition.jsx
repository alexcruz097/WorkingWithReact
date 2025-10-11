import React from "react";

function AirCondition({ weather }) {
  return (
    <div
      className="text-white mt-7 p-9 rounded-lg order-2 row-span-2 overflow-auto"
      style={{ backgroundColor: "#111115"}}
    >
      <p>AIR CONDITIONS</p>
      <div className="flex justify-between mt-1 mb-3 p-5 order-2">
        <div>
          <p>Real Feel</p>
          <h1>{weather.current.feelslike_f}F</h1>
        </div>
        <div>
          <p>Wind</p>
          <h1>{weather.current.wind_mph}/MPH</h1>
        </div>
      </div>
      <div className="flex justify-between mt-1 mb-3 p-5">
        <div>
          <p>chance of rain</p>
          <h1>{weather.forecast.forecastday[0]?.day?.daily_chance_of_rain}%</h1>
        </div>
        <div>
          <p>UV Index</p>
          <h1>{weather?.current?.uv}</h1>
        </div>
      </div>
    </div>
  );
}

export default AirCondition;
