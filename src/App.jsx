import { useEffect, useState } from "react";
import API_KEY from "../config";
import "./App.css";
import Form from "./components/Form";

function App() {
  const [weather, setWeather] = useState({});
  const [userInput, setUserInput] = useState("London");
  const [error, setError] = useState(false);
  const [errorMSG, setErrorMSG] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  // fetch data from api
  const getUserInput = (input) => {
    setUserInput(input);
  };
  // function to get user Input

  useEffect(() => {
    const fetchWeather = async () => {
      setError(false);
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${userInput}&days=3&aqi=no`
        );
        const data = await response.json();
        console.log(data);
        setWeather(data);

        setIsLoading(false);
      } catch (error) {
        setError(true);
        setErrorMSG(error);
        console.log("Error fetching weather data:", error);
      } finally {
        // Set loading to false regardless of success or failure

        setIsLoading(false);
      }
    };
    // call the function
    fetchWeather();
  }, [userInput]);
  if (error) {
    return <div>There was an error: {errorMSG}. Please Try Again. </div>;
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
    <div className="" style={{ backgroundColor: "#0B131E" }}>
      <Form getUserInput={getUserInput} />

      <div className="flex justify-evenly align-top text-white">
        <div>
          <h1 className="text-3xl weight">{weather.location.name}</h1>
          <h1 className="text-3xl mt-3">{weather.current.feelslike_f}°F </h1>
        </div>
        <img src={weather.current.condition.icon} alt="" srcset="" />{" "}
      </div>
    </div>
  );
}

export default App;
