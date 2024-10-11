import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Whether from "../components/Whether";
import Table from "../components/Table";
import Chart from "../components/Chart";

const DashBoard = () => {
  return (
    <div className="flex w-full h-screen relative">
      <Sidebar />
      <div className="h-full fixed right-0 top-0 w-[calc(100vw-60px)] ">
        <Header />
        <Whether />
        <div className="w-full h-[calc(100vh-260px)] flex">
          <Table />
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
