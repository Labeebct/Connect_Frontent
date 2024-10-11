import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const DashBoard = () => {
  return (
    <div className="flex w-full h-screen relative">
      <Sidebar />
      <div className="h-full fixed right-0 top-0 w-[calc(100vw-60px)] ">
        <Header />
      </div>
    </div>
  );
};

export default DashBoard;
