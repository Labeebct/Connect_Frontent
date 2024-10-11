import React, { useEffect, useState } from "react";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import Loading from "./Loading";

const Table = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userDatas, setUserDatas] = useState([]); //State for keeping userDatas

  useEffect(() => {
    const fetchUserDatas = () => {
      fetch("https://jsonplaceholder.typicode.com/users") //Fetching userdatas from jsonplaceholder
        .then((response) => {
          setIsLoading(true);
          return response.json();
        })
        .then((json) => {
          setUserDatas(json); //Keeping data in a state
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("There was an error fetching the user data:", error); //Handling error
          setIsLoading(false); //Handling error
        });
    };
    fetchUserDatas();
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div className="px-6 w-[70%] h-full ">
      <div className="w-full h-auto items-center flex justify-between px-1">
        <h3 className="font-inter my-4">Users List</h3>
        <FileDownloadIcon // Button to export pdf
          sx={{ fontSize: 20 }}
          className="opacity-80 duration-100 transition-all ease-in-out active:scale-[.95] cursor-pointer"
        />
      </div>
      <div className="w-full  h-[430px] pb-2 border-b border-[#aeaeae53] shadow-sm overflow-auto">
        <table className="w-full h-auto border">
          <thead className="sticky">
            <tr>
              <th className="opacity-85 font-medium whitespace-nowrap w-[.8rem] h-auto text-gray-700 bg-slate-200 text-[.75rem] p-2 border">
                ST
              </th>
              <th className="opacity-85 text-start font-medium whitespace-nowrap min-w-[8rem] h-auto text-gray-700 bg-slate-200 text-[.75rem] p-2 border">
                Name
              </th>
              <th className="opacity-85 font-medium text-start whitespace-nowrap min-w-[8rem] h-auto text-gray-700 bg-slate-200 text-[.75rem] p-2 border">
                Email
              </th>
              <th className="opacity-85 font-medium text-start whitespace-nowrap min-w-[8rem] h-auto text-gray-700 bg-slate-200 text-[.75rem] p-2 border">
                Phone
              </th>
              <th className="opacity-85 font-medium text-start whitespace-nowrap min-w-[8rem] h-auto text-gray-700 bg-slate-200 text-[.75rem] p-2 border">
                Company
              </th>
            </tr>
          </thead>
          <tbody>
            {userDatas.slice(0, 9).map(
              (
                data,
                index //Looping user datas in a table
              ) => (
                <tr key={index} className="border">
                  <td className="font-medium text-[.68rem] text-black p-3 border">
                    {data.id}
                  </td>
                  <td className="font-medium text-[.68rem] text-black p-3 border">
                    {data.name}
                  </td>
                  <td className="font-medium text-[.68rem] text-black p-3 border">
                    {data.email}
                  </td>
                  <td className="font-medium text-[.68rem] text-black p-3 border">
                    {data.phone}
                  </td>
                  <td className="font-medium text-[.68rem] text-black p-3 border">
                    {data?.company?.name}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
