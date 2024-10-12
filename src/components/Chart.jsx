import React from 'react'
import FileDownloadIcon from "@mui/icons-material/FileDownload";


const Chart = () => {
  return (
    <div className='w-[30%] h-full '>
       <div className="w-full h-auto items-center flex justify-between px-2">
        <h3 className="font-inter my-4">Weather Chart</h3>
        <FileDownloadIcon // Button to export pdf
          sx={{ fontSize: 20 }}
          className="opacity-80 duration-100 transition-all ease-in-out active:scale-[.95] cursor-pointer"
        />
      </div>
    </div>
  )
}

export default Chart