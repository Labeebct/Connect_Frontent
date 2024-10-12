import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import PlaceIcon from '@mui/icons-material/Place';
import { PuffLoader } from "react-spinners";

// Helper function to convert Kelvin to Celsius
const kelvinToCelsius = (kelvin) => {
  return (kelvin - 273.15).toFixed(2);
};

// Helper function to format date
const formatDate = (dateString) => {
  const options = {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  return new Date(dateString).toLocaleString(undefined, options);
};

const WeatherChart = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = import.meta.env.VITE_API_KEY;
  const CITY_NAME = import.meta.env.VITE_CITY_NAME;

  useEffect(() => {
    const fetchWeatherData = async () => {
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${CITY_NAME}&appid=${API_KEY}`;

      try {
        const response = await axios.get(url);

        if (response.data.list) {
          const data = response.data.list.slice(0, 10).map((item) => ({
            date: formatDate(item.dt_txt),
            temperature: kelvinToCelsius(item.main.temp),
            humidity: item.main.humidity,
          }));
          setWeatherData(data);
        } else {
          setError(new Error("No weather data available"));
        }
      } catch (error) {
        console.log("Error in fetching weather data", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  if (loading) return <PuffLoader className="mb-16" />;
  if (error)
    return (
      <p className="font-medium text-center font-inter text-red-500">
        Error in fetching weather data <br />
        <span className="text-center text-[.9rem]">{error.message}</span>
      </p>
    );

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={weatherData}>
          <XAxis dataKey="date" tick={{ fontSize: 12 }} />
          <YAxis domain={[0, "dataMax + 10"]} tick={{ fontSize: 12 }} />
          <Tooltip
            formatter={(value, name) => [
              `${value} ${name === "temperature" ? "°C" : "%"}`,
              name,
            ]}
          />
          <Legend />
          <Bar dataKey="temperature" fill="#ff7f50" barSize={20} />
          <Bar dataKey="humidity" fill="#82ca9d" barSize={20} />
        </BarChart>
      </ResponsiveContainer>
      <div className="flex items-center gap-1 justify-center">
      <PlaceIcon sx={{fontSize:16}} className="opacity-80" />
      <p className="font-medium font-poppins opacity-70 text-center text-[.8rem]">
        Kondotty, In
      </p>
      </div>
    </div>
  );
};

export default WeatherChart;
