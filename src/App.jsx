import { useEffect, useState } from "react";
import API_KEY from "../config";
import "./App.css";
import Form from "./components/Form";

function App() {
  const [weather, setWeather] = useState({});
  const [userInput, setUserInput] = useState("London");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  // fetch data from api
  const getUserInput = (input) => {
    setUserInput(input);
  };
  // function to get user Input

  useEffect(() => {
    const fetchWeather = async () => {
      setError(false);
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${userInput}&days=3&aqi=no`
        );
        if (!response.ok) {
          throw new Error("Error in your data");
        }
        const data = await response.json();
        console.log(data);
        setWeather(data);

        setIsLoading(false);
      } catch (e) {
        setError(true);
      } finally {
        // Set loading to false regardless of success or failure

        setIsLoading(false);
      }
    };
    // call the function
    fetchWeather();
  }, [userInput]);
  if (error) {
    return (
      <div className="flex justify-evenly align-top text-white bg-black">
        <p>There was an error</p>{" "}
        <button
          className="bg-green-400 rounded-md p-2"
          onClick={() => {
            setUserInput("London");
          }}
        >
          Try Again
        </button>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className="flex justify-evenly align-top text-white bg-black">
        <img className="bg-black" src="src\assets\loadingAnimation.gif" />
      </div>
    );
  }
  // useeffect to fectch data
  return (
    <div
      className="grid place-items-center"
      style={{ backgroundColor: "#0B131E" }}
    >
      <Form getUserInput={getUserInput} />

      <div className="flex text-white ">
        <div>
          <h1 className="text-3xl weight">{weather?.location?.name}</h1>
          <h1 className="text-3xl mt-3">{weather?.current?.feelslike_f}°F </h1>
        </div>
        <img src={weather.current.condition.icon} alt="" srcSet="" />
      </div>
      {/* today forecast */}
      <div
        className="text-white rounded-lg p-9"
        style={{ backgroundColor: "#19232F" }}
      >
        <p className="mb-7">TODAY'S FORECAST</p>
        <ul className="flex justify-start  ">
          <li className="border-r-2 border-white mr-4 p-4">
            <p>6:00AM</p>
            <img src={weather.current.condition.icon} alt="" srcSet="" />
            <h1>25F</h1>
          </li>
          <li className="border-r-2 border-white mr-4 p-4">
            <p>6:00AM</p>
            <img src={weather.current.condition.icon} alt="" srcSet="" />
            <h1>25F</h1>
          </li>
          <li className="border-r-2 border-white mr-4 p-4">
            <p>6:00AM</p>
            <img src={weather.current.condition.icon} alt="" srcSet="" />
            <h1>25F</h1>
          </li>
          <li className="border-r-2 border-white mr-4 p-4">
            <p>6:00AM</p>
            <img src={weather.current.condition.icon} alt="" srcSet="" />
            <h1>25F</h1>
          </li>{" "}
          <li className="border-r-2 border-white mr-4 p-4">
            <p>6:00AM</p>
            <img src={weather.current.condition.icon} alt="" srcSet="" />
            <h1>25F</h1>
          </li>
        </ul>
      </div>
      {/* air condition */}
      <div
        className="text-white mt-7 p-9 rounded-lg flex flex-col mb-6"
        style={{ backgroundColor: "#19232F", width: "40rem" }}
      >
        <p>AIR CONDITIONS</p>
        <div className="flex justify-between mt-1 mb-3 p-5">
          <div>
            <p>Real Feel</p>
            <h1>30F</h1>
          </div>
          <div>
            <p>Wind</p>
            <h1>.2km/h</h1>
          </div>
        </div>
        <div className="flex justify-between mt-1 mb-3 p-5">
          <div>
            <p>Chanse of rain</p>
            <h1>0%</h1>
          </div>
          <div>
            <p>UV Index</p>
            <h1>3</h1>
          </div>
        </div>
      </div>
      {/* 4-day forecast */}
      <div
        className="text-white mb-6 p-9 rounded-lg flex flex-col"
        style={{ backgroundColor: "#19232F", width: "40rem" }}
      >
        <p>4-DAY FORECAST</p>
        <div className="flex justify-between mt-1 mb-3 p-7 border-b-2">
          <p>Today</p>
          <p className="flex items-center">
            <img src={weather.current.condition.icon} />
            {weather.current.condition.text}
          </p>
          <p>26/22</p>
        </div>
        <div className="flex justify-between mt-1 mb-3 p-7 border-b-2">
          <p className="flex items-center">
            {weather.forecast.forecastday[0].date}
          </p>
          <p className="flex items-center">
            <img src={weather.forecast.forecastday[0].day.condition.icon} />
            {weather.forecast.forecastday[0].day.condition.text}
          </p>
          <p className="flex items-center">
            {weather.forecast.forecastday[0].day.maxtemp_f}F/
            {weather.forecast.forecastday[0].day.mintemp_f}F
          </p>
        </div>
        <div className="flex justify-between mt-1 mb-3 p-7 border-b-2">
          <p className="flex items-center">
            {weather.forecast.forecastday[1].date}
          </p>
          <p className="flex items-center">
            <img src={weather.forecast.forecastday[1].day.condition.icon} />
            {weather.forecast.forecastday[1].day.condition.text}
          </p>
          <p className="flex items-center">
            {weather.forecast.forecastday[1].day.maxtemp_f}F/
            {weather.forecast.forecastday[1].day.mintemp_f}F
          </p>
        </div>
        <div className="flex justify-between mt-1 mb-3 p-7 border-b-2">
          <p className="flex items-center">
            {weather.forecast.forecastday[2].date}
          </p>
          <p className="flex items-center">
            <img src={weather.forecast.forecastday[2].day.condition.icon} />
            {weather.forecast.forecastday[2].day.condition.text}
          </p>
          <p className="flex items-center">
            {weather.forecast.forecastday[2].day.maxtemp_f}F/
            {weather.forecast.forecastday[2].day.mintemp_f}F
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
