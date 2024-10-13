import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import PlaceIcon from "@mui/icons-material/Place";
import { PuffLoader } from "react-spinners";
import { fetchWeatherData } from "../utils/fetchWeather";

const WeatherChart = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() =>{ fetchWeatherData(setWeatherData, setLoading, setError)}, [])

  if (loading) return <PuffLoader className="mb-16" />;
  if (error)
    return (
      <p className="font-medium text-center font-inter text-red-500">
        Error in fetching weather data <br />
        <span className="text-center text-[.9rem]">{error.message}</span>
      </p>
    );

  return (
    <div  style={{ width: "100%", height: "100%" }}>
      <ResponsiveContainer  width="100%" height={380}>
        <BarChart style={{ cursor: 'pointer' }} data={weatherData}>
          <XAxis dataKey="date" tick={{ fontSize: 12 }} />
          <YAxis domain={[0, "dataMax + 10"]} tick={{ fontSize: 12 }} />
          <Tooltip
            formatter={(value, name) => [
              `${value} ${name === "temperature" ? "°C" : "%"}`,
              name,
            ]}
          />
          <Legend />
          <Bar dataKey="temperature" fill="#f9329c" barSize={20} />
          <Bar dataKey="humidity" fill="#222b88" barSize={20} />
        </BarChart>
      </ResponsiveContainer>
      <div className="flex items-center  gap-1 justify-center">
        <PlaceIcon sx={{ fontSize: 16 }} className="opacity-80" />
        <p className="font-medium font-poppins opacity-70  text-center text-[.8rem]">
          Kondotty, In
        </p>
      </div>
    </div>
  );
};

export default WeatherChart;
