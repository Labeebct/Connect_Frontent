import React from "react";

const WeatherCards = ({ data, index }) => {
  
  const getDayName = (dateStr) => {
    const date = new Date(dateStr);
    const options = { weekday: "long" };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  const dayName = getDayName(data.date); // Get the day name
  const iconURL = `https://openweathermap.org/img/wn/${data.weatherIcon}@2x.png`;

  const colors = ['#E3F4F4','#fef2dc','#def7e7','#F1EAFF','#F1F1F1']
  const cardColor = colors[index % colors.length]; 

  return (
    <div
      key={index}
      style={{ backgroundColor: cardColor }}
      className='w-40 h-[9.8rem] shadow-box duration-300 transition-all ease-in-out cursor-pointer hover:scale-[1.06] shrink-0 flex flex-col items-center justify-center rounded-xl relative'
    >
      <img
        src={iconURL}
        className="w-14 absolute text-red-500 bg-[#3db0c9] rounded-full -top-2"
        alt="Weather Icon"
      />
      <h1 className="font-bold mt-8 font-inter relative text-[1.8rem]">
        {Math.ceil(data.temperature)}
        <span className="align-top text-[1rem] absolute top-2">°C</span>
      </h1>
      <h2 className="font-medium font-inter text-[.9rem] mt-1">{dayName}</h2>
      <p className="font-medium font-inter text-[.7rem] opacity-70 text-center">
        {data.date}
      </p>
    </div>
  );
};

export default WeatherCards;
