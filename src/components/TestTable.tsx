import React, { useMemo } from "react";
import { useTable, useSortBy, Column, TableInstance } from "react-table";
import "tailwindcss/tailwind.css";

interface Data {
  serialNo: number;
  title: string;
  logo: string;
  price: number;
  sortBy: number;
}

const TestTable: React.FC = () => {
  const data: Data[] = useMemo(
    () => [
      { serialNo: 1, title: "CTET", logo: "Logo1", price: 499, sortBy: 0 },
      { serialNo: 2, title: "Test 1", logo: "Logo2", price: 1000, sortBy: 1 },
    ],
    []
  );

  const columns: Column<Data>[] = useMemo(
    () => [
      { Header: "S. No.", accessor: "serialNo" },
      { Header: "Title", accessor: "title" },
      {
        Header: "Logo",
        accessor: "logo",
        Cell: ({ value }: { value: string }) => (
          <div className="text-center">{value}</div>
        ),
      },
      { Header: "Price", accessor: "price" },
      {
        Header: "Sort By",
        accessor: "sortBy",
        Cell: ({ value }: { value: number }) => (
          <button className="bg-blue-500 text-white px-3 py-1 rounded">
            {value.toFixed(2)}
          </button>
        ),
      },
      {
        Header: "Actions",
        Cell: () => (
          <div className="flex space-x-2 items-center ">
            <button className="bg-blue-500 text-white px-3 py-1 rounded">
              View Tests
            </button>
            <label className="inline-flex items-center">
              <input type="checkbox" className="toggle-checkbox hidden" />
              <span className="toggle-label block w-10 h-6 bg-gray-300 rounded-full"></span>
              <span className="toggle-dot absolute w-4 h-4 bg-white rounded-full transform"></span>
            </label>
          </div>
        ),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  }: TableInstance<Data> = useTable({ columns, data }, useSortBy);

  return (
    <div className="p-4">
      <table
        {...getTableProps()}
        className="table-auto border-collapse w-full text-sm"
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className="border p-2 bg-gray-100"
                >
                  {column.render("Header")}
                  {/* <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span> */}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} className="border p-2">
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-4">
        <span>Showing {rows.length} entries</span>
        <div>
          <button className="px-3 py-1 bg-gray-200 rounded">Previous</button>
          <button className="px-3 py-1 bg-gray-200 rounded ml-2">Next</button>
        </div>
      </div>
    </div>
  );
};

export default TestTable;
