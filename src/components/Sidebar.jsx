import React, { useState } from "react";

//Icons
import HomeIcon from "@mui/icons-material/Home";
import InventoryIcon from "@mui/icons-material/Inventory";
import GroupIcon from "@mui/icons-material/Group";
import AssessmentIcon from "@mui/icons-material/Assessment";
import MessageIcon from "@mui/icons-material/Message";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoIcon from "@mui/icons-material/Info";
import ContactsIcon from "@mui/icons-material/Contacts";
import MenuIcon from "@mui/icons-material/Menu";

const Sidebar = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  return (
    <div
      className={`h-full ${
        isNavOpen ? "w-[250px]" : "w-[60px]"
      } overflow-hidden absolute z-50 transition-all min-w-[60px] ease-linear duration-200  bg-[#05090e]`}
    >
      <div className="flex justify-between -translate-y-8 w-full h-[120px] overflow-hidden">
        <img
          src="../../src/assets/Connect PNG.png"
          alt="connect logo"
          className={`h-44 w-44 ${!isNavOpen && 'hidden' } -translate-y-5`}
        />
        <MenuIcon
          onClick={() => setNavOpen(!isNavOpen)}
          className="mt-14 mr-2 text-gray-400 ml-5 duration-200 ease-in-out transition-all active:scale-[.95] cursor-pointer"
        />
      </div>
      <div className="w-full h-[calc(100vh-120px)] flex flex-col justify-between">
        <ul className="pl-2 flex flex-col gap-1 overflow-hidden">
          <li className="p-4 flex items-center font-inter text-[.9rem] text-black hover:bg-gray-200 hover:text-black bg-gray-200 cursor-pointer rounded-tl-lg rounded-bl-lg transition-all duration-300 ease-out gap-4">
            <HomeIcon sx={{ fontSize: 19 }} />
            Dashboard
          </li>
          <li className="p-4 flex items-center font-inter text-[.9rem] text-gray-400 hover:bg-gray-200 hover:text-black cursor-pointer rounded-tl-lg rounded-bl-lg transition-all duration-300 ease-out gap-4">
            <InventoryIcon sx={{ fontSize: 19 }} />
            Orders
          </li>
          <li className="p-4 flex items-center font-inter text-[.9rem] text-gray-400 hover:bg-gray-200 hover:text-black cursor-pointer rounded-tl-lg rounded-bl-lg transition-all duration-300 ease-out gap-4">
            <GroupIcon sx={{ fontSize: 19 }} />
            Customers
          </li>
          <li className="p-4 flex items-center font-inter text-[.9rem] text-gray-400 hover:bg-gray-200 hover:text-black cursor-pointer rounded-tl-lg rounded-bl-lg transition-all duration-300 ease-out gap-4">
            <AssessmentIcon sx={{ fontSize: 19 }} />
            Report
          </li>
          <li className="p-4 flex items-center font-inter text-[.9rem] text-gray-400 hover:bg-gray-200 hover:text-black cursor-pointer rounded-tl-lg rounded-bl-lg transition-all duration-300 ease-out gap-4">
            <MessageIcon sx={{ fontSize: 19 }} />
            Messages
          </li>
        </ul>
        <ul className="pl-2 flex flex-col gap-1 overflow-hidden mb-6">
          <li className="p-4 flex items-center font-inter text-[.9rem] text-gray-400 hover:bg-gray-200 hover:text-black cursor-pointer rounded-tl-lg rounded-bl-lg transition-all duration-300 ease-out gap-4">
            <SettingsIcon sx={{ fontSize: 20 }} />
            Settings
          </li>
          <li className="p-4 flex items-center font-inter text-[.9rem] text-gray-400 hover:bg-gray-200 hover:text-black cursor-pointer rounded-tl-lg rounded-bl-lg transition-all duration-300 ease-out gap-4">
            <InfoIcon sx={{ fontSize: 20 }} />
            Help
          </li>
          <li className="p-4 flex items-center font-inter text-[.9rem] text-gray-400 hover:bg-gray-200 hover:text-black cursor-pointer rounded-tl-lg rounded-bl-lg transition-all duration-300 ease-out gap-4">
            <ContactsIcon sx={{ fontSize: 18 }} />
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
