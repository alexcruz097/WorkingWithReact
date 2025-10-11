import React from "react";

function FutureForecast({ weather, forecastDays }) {
  return (
    <div
      className="text-white mb-6 p-9 rounded-lg order-1 row-span-6 self-stretch"
      style={{ backgroundColor: "#111115", width: "40rem" }}
    >
      {/* iterate thru Forecast */}
      {forecastDays.map((day, index) => {
        return (
          <div
            key={index}
            className="flex justify-between    border-b-2"
          >
            <p className="flex items-center">
              {weather?.forecast?.forecastday[day]?.date}
            </p>
            <p className="flex items-center">
              <img
                src={weather?.forecast?.forecastday[day]?.day?.condition?.icon}
                alt="weather icon"
              />
              {weather?.forecast?.forecastday[day]?.day?.condition?.text}
            </p>
            <p className="flex items-center">
              {weather?.forecast?.forecastday[day]?.day?.maxtemp_f}F/
              {weather?.forecast?.forecastday[day]?.day?.mintemp_f}F
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default FutureForecast;
