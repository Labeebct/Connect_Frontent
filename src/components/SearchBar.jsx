import React from 'react'
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <div className="flex bg-white text-[.9rem] w-full p-1 px-2 rounded-sm border border-gray-200 shadow-sm  gap-1">
      <SearchIcon sx={{ color: "gray" }} />
      <input
        type="text"
        placeholder='Search here.....'
        className="outline-none w-full"
      />
    </div>
  )
}

export default SearchBar