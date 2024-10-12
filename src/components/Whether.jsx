import React, { useEffect, useState } from "react";
import PlaceIcon from "@mui/icons-material/Place";
import { fetchWeatherData } from "../utils/fetchWeather";
import { PropagateLoader } from "react-spinners";
import WeatherCards from "./WeatherCards";

const Whether = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchWeatherData(setWeatherData, setLoading, setError);
  }, []);

  return (
    <div className="w-full h-auto overflow-hidden flex flex-wrap  p-1 shadow-box rounded-md bg-white">
      <div className="h-full min-w-[200px] flex-1 flex flex-col items-center">
        <h1 className="font-bold font-inter relative text-[5rem]">
          {weatherData.length === 0
            ? "0"
            : Math.ceil(weatherData[0]?.temperature)}{" "}
          <span className="align-top text-[2rem] absolute top-2">°C</span>
        </h1>
        <div className="flex items-center justify-center">
          <PlaceIcon sx={{ fontSize: 14 }} className="opacity-80" />
          <p className="font-light font-inter opacity-70 text-center text-[.8rem]">
            Kondotty, In
          </p>
        </div>
        <h2 className="font-extrabold font-poiretOne mt-1">Today</h2>
      </div>
      <div className="w-full flex-1">
        <div className="flex no-scrollbar relative w-full min-h-[200px] overflow-x-auto justify-around items-center px-6 gap-10 flex-1 h-full">
          {error && <p>{error}</p>}
          {loading ? (
              <PropagateLoader className="mb-5 opacity-80" />
          ) : (
            weatherData
              .slice(1, 6)
              .map((data, index) => <WeatherCards index={index} data={data} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default Whether;
