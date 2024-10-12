import React from "react";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import WeatherChart from "./WeatherChart";

const Chart = () => {
  return (
    <div className="flex-1 h-full pr-2">
      <div className="w-full h-auto items-center flex justify-between px-4 ">
        <h3 className="font-inter my-4">Weather Chart</h3>
        <FileDownloadIcon // Button to export pdf
          sx={{ fontSize: 20 }}
          className="opacity-80 duration-100 transition-all ease-in-out active:scale-[.95] cursor-pointer"
        />
      </div>
      <div className="flex justify-center items-center md:min-w-[500px]  h-[430px] p-2 shadow-sm overflow-hidden">
        <WeatherChart />
      </div>
    </div>
  );
};

export default Chart;
