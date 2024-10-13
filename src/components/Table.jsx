import React, { useEffect, useRef, useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { SyncLoader } from "react-spinners";

const Table = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userDatas, setUserDatas] = useState([]); //State for keeping userDatas
  const tableRef = useRef(null);

  useEffect(() => {
    const fetchUserDatas = () => {
      fetch("https://jsonplaceholder.typicode.com/users") //Fetching userdatas from jsonplaceholder
        .then((response) => {
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

  const handleDownload = async (userDatas) => {
    try {
      const doc = new jsPDF();

      // Defining the columns and the rows for the table
      const columns = ["SI", "Name", "Email", "Phone", "Company"];
      const rows = userDatas.slice(0,20).map((data) => [
        data.id,
        data.name,
        data.email,
        data.phone,
        data.company?.name || "N/A",
      ]);

      //Heading text
      doc.text("Users List", 105, 20, { align: "center" });

      doc.autoTable({
        startY: 40,
        head: [columns],
        body: rows,
        theme: "striped",
        headStyles: { fillColor: [22, 120, 133] },
        bodyStyles: {
          fontSize: 8,
          cellPadding: 3,
        },
      });

      doc.save("users_list.pdf");
    } catch (error) {
      console.log("Error in users list PDF downloading", error);
    }
  };

  return (
    <div className="bg-white shadow-box rounded-sm px-4 w-full h-full flex-1">
      <div className="w-full h-auto items-center flex justify-between px-1">
        <h3 className="font-inter my-4">Users List</h3>
        <FileDownloadIcon // Button to export pdf
          onClick={() => handleDownload(userDatas)}
          sx={{ fontSize: 20 }}
          className="opacity-80 duration-100 mr-2 transition-all ease-in-out active:scale-[.95] cursor-pointer"
        />
      </div>
      <div
        ref={tableRef}
        className="w-full h-auto border relative border-[#aeaeae53] max-h-[400px] min-h-[400px] mb-4 no-scrollbar overflow-auto"
      >
        <table className="w-full h-auto">
          <thead className="sticky">
            <tr>
              <th className="opacity-85 font-medium whitespace-nowrap w-[.8rem] h-auto text-gray-700 bg-[#6e74df3f] text-[.75rem] p-2 border">
                SI
              </th>
              <th className="opacity-85 text-start font-medium whitespace-nowrap min-w-[8rem] h-auto text-gray-700 bg-[#6e74df3f] text-[.75rem] p-2 border">
                Name
              </th>
              <th className="opacity-85 font-medium text-start whitespace-nowrap min-w-[8rem] h-auto text-gray-700 bg-[#6e74df3f] text-[.75rem] p-2 border">
                Email
              </th>
              <th className="opacity-85 font-medium text-start whitespace-nowrap min-w-[8rem] h-auto text-gray-700 bg-[#6e74df3f] text-[.75rem] p-2 border">
                Phone
              </th>
              <th className="opacity-85 font-medium text-start whitespace-nowrap min-w-[8rem] h-auto text-gray-700 bg-[#6e74df3f] text-[.75rem] p-2 border">
                Company
              </th>
            </tr>
          </thead>
          {isLoading ? (
            <SyncLoader className="mb-16 absolute top-[190px] opacity-70 left-[300px]" />
          ) : (
            <tbody>
              {userDatas.slice(0, 10).map(
                (
                  data,
                  index //Looping user datas in a table
                ) => (
                  <tr
                    key={index}
                    className="border cursor-pointer hover:bg-slate-100"
                  >
                    <td className="font-medium text-[.7rem] text-black p-3 border">
                      {data.id}
                    </td>
                    <td className="font-medium text-[.7rem] text-black p-3 border">
                      {data.name}
                    </td>
                    <td className="font-medium text-[.7rem] text-black p-3 border">
                      {data.email}
                    </td>
                    <td className="font-medium text-[.7rem] text-black p-3 border">
                      {data.phone}
                    </td>
                    <td className="font-medium text-[.7rem] text-black p-3 border">
                      {data?.company?.name}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default Table;
