import { formatDate } from "./dateformat";
import axios from "axios";

// Helper function to convert Kelvin to Celsius
const kelvinToCelsius = (kelvin) => {
    return (kelvin - 273.15).toFixed(2);
};


const API_KEY = import.meta.env.VITE_API_KEY;
const CITY_NAME = import.meta.env.VITE_CITY_NAME;

export const fetchWeatherData = async (setWeatherData, setLoading, setError) => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${CITY_NAME}&appid=${API_KEY}`;

    try {
        const response = await axios.get(url);        
        if (response.data.list) {

            const data = response.data.list.slice(0, 10).map((item) => ({
                date: formatDate(item.dt_txt),
                temperature: kelvinToCelsius(item.main.temp),
                humidity: item.main.humidity,
                weatherIcon: item.weather[0]?.icon
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