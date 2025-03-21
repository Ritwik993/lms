// import React, { useState } from "react";
// import { useTable, Column } from "react-table";

// interface RowData {
//   srNo: number;
//   name: string;
//   contact: string;
//   email: string;
//   queryDate: string;
// }

// const DataTable: React.FC = () => {
//   const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());

//   // Table data
//   const data: RowData[] = React.useMemo(
//     () => [
//       {
//         srNo: 1,
//         name: "Test Data 1",
//         contact: "91xxxx xxxxx",
//         email: "ABC@gmail.com",
//         queryDate: "29/09/24, 10:20:00 AM",
//       },
//       {
//         srNo: 2,
//         name: "Test Data 2",
//         contact: "91xxxx xxxxx",
//         email: "DEF@gmail.com",
//         queryDate: "29/09/24, 11:20:00 AM",
//       },
//       {
//         srNo: 3,
//         name: "Test Data 3",
//         contact: "91xxxx xxxxx",
//         email: "GHI@gmail.com",
//         queryDate: "29/09/24, 12:20:00 PM",
//       },
//     ],
//     []
//   );

//   // Table columns
//   const columns: Column<RowData>[] = React.useMemo(
//     () => [
//       {
//         Header: (
//           <input
//             type="checkbox"
//             className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
//             onChange={(e) => {
//               if (e.target.checked) {
//                 setSelectedRows(new Set(data.map((row) => row.srNo)));
//               } else {
//                 setSelectedRows(new Set());
//               }
//             }}
//             checked={selectedRows.size === data.length && data.length > 0}
//           />
//         ),
//         id: "checkbox", // Unique ID for the checkbox column
//         Cell: ({ row }: { row: any }) => (
//           <input
//             type="checkbox"
//             className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
//             onChange={() => {
//               const newSelectedRows = new Set(selectedRows);
//               if (selectedRows.has(row.original.srNo)) {
//                 newSelectedRows.delete(row.original.srNo);
//               } else {
//                 newSelectedRows.add(row.original.srNo);
//               }
//               setSelectedRows(newSelectedRows);
//             }}
//             checked={selectedRows.has(row.original.srNo)}
//           />
//         ),
//       },
//       {
//         Header: "Sr.No",
//         accessor: "srNo",
//       },
//       {
//         Header: "Name",
//         accessor: "name",
//       },
//       {
//         Header: "Contact",
//         accessor: "contact",
//       },
//       {
//         Header: "Email ID",
//         accessor: "email",
//       },
//       {
//         Header: "Query Date",
//         accessor: "queryDate",
//       },
//       {
//         Header: "Recent Query",
//         id: "recentQuery", // Unique ID for this column
//         Cell: () => (
//           <button className="bg-[#253483] text-white px-4 py-1 rounded w-full">
//             View
//           </button>
//         ),
//       },
//       {
//         Header: "View",
//         id: "viewDetails", // Unique ID for this column
//         Cell: () => (
//           <button className="bg-[#253483] text-white px-4 py-1 rounded  whitespace-nowrap">
//             View Details
//           </button>
//         ),
//       },
//     ],
//     [data, selectedRows]
//   );

//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     rows,
//     prepareRow,
//   } = useTable<RowData>({ columns, data });

//   return (
//     <div className="overflow-x-auto">
//       <table
//         {...getTableProps()}
//         className="w-full text-sm text-left text-gray-500 border border-gray-200"
//       >
//         <thead className="text-xs text-gray-700 uppercase bg-gray-100">
//           {headerGroups.map((headerGroup) => (
//             <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
//               {headerGroup.headers.map((column) => (
//                 <th
//                   {...column.getHeaderProps()}
//                   className="px-6 py-3 border-b border-gray-300"
//                 >
//                   {column.render("Header")}
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody
//           {...getTableBodyProps()}
//           className="bg-white divide-y divide-gray-200"
//         >
//           {rows.map((row) => {
//             prepareRow(row);
//             return (
//               <tr {...row.getRowProps()} key={row.id} className="hover:bg-gray-50">
//                 {row.cells.map((cell) => (
//                   <td
//                     {...cell.getCellProps()}
//                     className="px-6 py-4 text-gray-900 border-b border-gray-300"
//                   >
//                     {cell.render("Cell")}
//                   </td>
//                 ))}
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DataTable;


import React, { useState, useEffect } from "react";
import { useTable, Column } from "react-table";
import axios from "axios";
import QueryModal from "./QueryModal";
import { BASE_URL } from "@/constants/url";

interface RowData {
  _id: string;
  name: string;
  studentPhone: number;
  description: string;
  image: string;
}

const DataTable: React.FC = () => {
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());
  const [data, setData] = useState<RowData[]>([]);
  const[isOpen,setIsOpen]=useState(false);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/v1/dashboard/getQueries`)
      .then((response) => {
        if (response.data.success) {
          setData(response.data.data);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const columns: Column<RowData>[] = React.useMemo(
    () => [
      {
        Header: (
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            onChange={(e) => {
              if (e.target.checked) {
                setSelectedRows(new Set(data.map((row) => row._id)));
              } else {
                setSelectedRows(new Set());
              }
            }}
            checked={selectedRows.size === data.length && data.length > 0}
          />
        ),
        id: "checkbox",
        Cell: ({ row }: { row: any }) => (
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            onChange={() => {
              const newSelectedRows = new Set(selectedRows);
              if (selectedRows.has(row.original._id)) {
                newSelectedRows.delete(row.original._id);
              } else {
                newSelectedRows.add(row.original._id);
              }
              setSelectedRows(newSelectedRows);
            }}
            checked={selectedRows.has(row.original._id)}
          />
        ),
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Contact",
        accessor: "studentPhone",
      },
      {
        Header: "Description",
        accessor: "description",
      },
      {
        Header: "Image",
        accessor: "image",
      },
      {
        Header: "Actions",
        id: "actions",
        Cell: () => (
          <button className="bg-[#253483] text-white px-4 py-1 rounded w-full" onClick={()=>setIsOpen(true)}>
            View
          </button>
        ),
      },
    ],
    [data, selectedRows]
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<RowData>({ columns, data });

  return (
    <div className="overflow-x-auto">
      <table
        {...getTableProps()}
        className="w-full text-sm text-left text-gray-500 border border-gray-200"
      >
        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
          {isOpen && <QueryModal isOpen={isOpen} onClose={()=>setIsOpen(false)}/>}
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className="px-6 py-3 border-b border-gray-300"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody
          {...getTableBodyProps()}
          className="bg-white divide-y divide-gray-200"
        >
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={row.original._id} className="hover:bg-gray-50">
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    className="px-6 py-4 text-gray-900 border-b border-gray-300"
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;

