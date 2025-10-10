import { useEffect, useState } from "react";
import API_KEY from "../config";
import "./App.css";
import Form from "./components/Form";
import HourForcast from "./components/HourForecast";
import FutureForecast from "./components/FutureForecast";
import AirCondition from "./components/AirCondition";
import Nav from "./components/Nav";
import Map from "./components/Map";
function App() {
  const [weather, setWeather] = useState({});
  const [userInput, setUserInput] = useState("London");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const hours = [6, 9, 12, 15, 18, 21];
  const forecastDays = [0, 1, 2];
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
        console.error("Error fetching weather data:", e);
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
        <img className="bg-black" src="src/assets/loadingAnimation.gif" />
      </div>
    );
  }
  // useeffect to fectch data
  return (
    <>
      <Nav />
      <div
        className=" p-9 h-screen"
        style={{ backgroundColor: "#06070A" }}
      >
        <Form getUserInput={getUserInput} className="" />

        <div className="flex justify-between text-white ">
          <div>
            <h1 className="text-3xl weight">{weather?.location?.name}</h1>
            <h1 className="text-3xl mt-3">
              {weather?.current?.feelslike_f}°F{" "}
            </h1>
          </div>
          <img
            className="h-40 w-40"
            src={weather?.current?.condition?.icon}
            alt=""
            srcSet="Weather icon"
          />
        </div>
        <Map />
        {/* today forecast */}
        <HourForcast weather={weather} hours={hours} />
        {/* air condition */}
        <AirCondition weather={weather} />
        {/* 3-day forecast */}
        <FutureForecast weather={weather} forecastDays={forecastDays} />
      </div>
    </>
  );
}

export default App;
