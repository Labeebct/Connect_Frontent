import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Whether from "../components/Whether";
import Table from "../components/Table";
import Chart from "../components/Chart";

const DashBoard = () => {
  return (
    <div className="flex w-full h-screen relative">
      <Sidebar />
      <div className="h-full bg-[#d0cece2f] flex flex-col gap-5 fixed right-0 overflow-auto top-0 w-[calc(100vw-60px)] ">
        <Header />
        <div className="px-4 w-full h-auto">
          <Whether />
        </div>
        <div className="w-full h-auto mb-5">
          <div className="w-full px-4 gap-5 flex flex-col lg:flex-row-reverse">
            <Chart />
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
