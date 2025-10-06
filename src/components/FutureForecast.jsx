import React from "react";

function FutureForecast({ weather, forecastDays }) {
  return (
    <div
      className="text-white mb-6 p-9 rounded-lg order-1 row-span-6 self-stretch"
      style={{ backgroundColor: "#19232F", width: "40rem" }}
    >
      <p>3-DAY FORECAST</p>
      {/* iterate thru Forecast */}
      {forecastDays.map((day, index) => {
        return (
          <div
            key={index}
            className="flex justify-between mt-1 mb-3 p-7 border-b-2"
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
