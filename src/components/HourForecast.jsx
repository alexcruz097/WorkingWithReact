import React from "react";

function HourForcast({ weather, hours }) {
  return (
    <div
      className="text-white rounded-lg p-9 order-2 row-span-2 overflow-auto"
      style={{ backgroundColor: "#19232F", width: "40rem" }}
    >
      <p className="mb-7">TODAY'S FORECAST</p>
      <ul className="flex justify-start  ">
        {/* iterate thru map */}
        {hours.map((hour, index) => {
          return (
            <li
              key={index}
              className="border-r-2 border-white mr-4 p-4 flex flex-col items-center"
            >
              <p>
                {hour}:00{hour < 12 ? "AM" : "PM"}
              </p>
              <img
                className="mt-3 mb-3"
                src={
                  weather?.forecast?.forecastday[0]?.hour[hour]?.condition?.icon
                }
                alt="weather icon"
                srcSet=""
              />
              <h1>
                {weather?.forecast?.forecastday[0]?.hour[hour]?.feelslike_f}F
              </h1>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default HourForcast;
