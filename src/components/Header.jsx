import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className="flex justify-between pr-10 items-center w-full h-[60px] shadow-sm bg-slate-200">
      <div>
      <img
          src="../../src/assets/Connect PNG.png"
          alt="connect logo"
          className={`h-32 min-w-32`}
        />
      </div>
      <ul className="flex items-center gap-5 md:gap-6">
        <li>
          <SearchBar />
        </li>
        <li>
          <CalendarMonthIcon
            sx={{ fontSize: 20 }}
            className="opacity-80 cursor-pointer"
          />
        </li>
        <li>
          <NotificationsIcon
            sx={{ fontSize: 21 }}
            className="opacity-80 cursor-pointer"
          />
        </li>
        <li className="flex justify-center items-center gap-2">
          <img
            src="../../src/assets/labio.jpg"
            className="min-w-6 h-6 outline outline-2 outline-green-600 bg-red-200 rounded-full"
            alt=""
          />
          <h4 className="font-inter text-[.8rem] hidden md:block">Labeeb ct</h4>
        </li>
      </ul>
    </div>
  );
};

export default Header;
