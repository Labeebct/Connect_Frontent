import React, { useRef } from "react";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import WeatherChart from "./WeatherChart";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const Chart = () => {
  const chartRef = useRef();

  const handleDownload = async () => {

    try {
      const pdf = new jsPDF("p", "mm", "a4");
      pdf.setFontSize(20);
      pdf.text("Weather Graph", 105, 20, { align: "center" });

      const canvas = await html2canvas(chartRef.current);
      const imgData = canvas.toDataURL("image/png");

      const imgWidth = 190; //Setting graph width
      const imgHeight = (canvas.height * imgWidth) / canvas.width; //Setting graph height

      pdf.addImage(imgData, "PNG", 5, 80, imgWidth, imgHeight);
      pdf.save("weather_graph.pdf"); //For downloading pdf
    } catch (error) {
      console.log("Error in users list PDF downloading", error);
    }
  };

  return (
    <div className="flex-1 shadow-box rounded-md bg-white h-full w-full">
      <div className="w-full h-auto items-center flex justify-between px-4 ">
        <h3 className="font-inter my-4">Weather Chart</h3>
        <FileDownloadIcon
          onClick={handleDownload} // Button to export pdf
          sx={{ fontSize: 20 }}
          className="opacity-80 duration-100 transition-all ease-in-out active:scale-[.95] cursor-pointer"
        />
      </div>
      <div
        ref={chartRef}
        className="flex justify-center items-center h-auto min-h-[410px] max-h-[430px] p-2 shadow-sm overflow-hidden"
      >
        <WeatherChart />
      </div>
    </div>
  );
};

export default Chart;
