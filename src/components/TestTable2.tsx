import React from "react";
import arrow from "../assets/Image.svg";
import {
  useTable,
  useSortBy,
  Column,
  // TableInstance,
  usePagination,
} from "react-table";
import { Link } from "react-router-dom";
import ToggleSwitch from "./ToogleSwitch";
import { JSX } from "react/jsx-runtime";
import { useDispatch } from "react-redux";
import { addTestSubject } from "../utils/testSlice";

interface Data {
  serialNo: number;
  title: string;
  logo: string;
  price: number;
  sortBy: number;
}

const data: Data[] = [
  { serialNo: 1, title: "CTET", logo: "Logo1", price: 499, sortBy: 0 },
  { serialNo: 2, title: "Test 1", logo: "Logo2", price: 1000, sortBy: 1 },
  { serialNo: 3, title: "Test 2", logo: "Logo3", price: 750, sortBy: 2 },
  { serialNo: 4, title: "Test 3", logo: "Logo4", price: 1200, sortBy: 3 },
  { serialNo: 5, title: "Test 4", logo: "Logo5", price: 650, sortBy: 4 },
  { serialNo: 6, title: "Test 5", logo: "Logo6", price: 900, sortBy: 5 },
  { serialNo: 7, title: "Test 6", logo: "Logo7", price: 300, sortBy: 6 },
  { serialNo: 8, title: "Test 7", logo: "Logo8", price: 1100, sortBy: 7 },
  { serialNo: 9, title: "Test 8", logo: "Logo9", price: 800, sortBy: 8 },
  { serialNo: 10, title: "Test 9", logo: "Logo10", price: 950, sortBy: 9 },
  { serialNo: 11, title: "Test 10", logo: "Logo11", price: 1250, sortBy: 10 },
  { serialNo: 12, title: "Test 11", logo: "Logo12", price: 450, sortBy: 11 },
  { serialNo: 13, title: "Test 12", logo: "Logo13", price: 550, sortBy: 12 },
  { serialNo: 14, title: "Test 13", logo: "Logo14", price: 600, sortBy: 13 },
  { serialNo: 15, title: "Test 14", logo: "Logo15", price: 700, sortBy: 14 },
  { serialNo: 16, title: "Test 15", logo: "Logo16", price: 850, sortBy: 15 },
  { serialNo: 17, title: "Test 16", logo: "Logo17", price: 950, sortBy: 16 },
  { serialNo: 18, title: "Test 17", logo: "Logo18", price: 400, sortBy: 17 },
  { serialNo: 19, title: "Test 18", logo: "Logo19", price: 1200, sortBy: 18 },
  { serialNo: 20, title: "Test 19", logo: "Logo20", price: 1300, sortBy: 19 },
  { serialNo: 21, title: "Test 20", logo: "Logo21", price: 500, sortBy: 20 },
  { serialNo: 22, title: "Test 21", logo: "Logo22", price: 450, sortBy: 21 },
  { serialNo: 23, title: "Test 22", logo: "Logo23", price: 600, sortBy: 22 },
  { serialNo: 24, title: "Test 23", logo: "Logo24", price: 750, sortBy: 23 },
  { serialNo: 25, title: "Test 24", logo: "Logo25", price: 850, sortBy: 24 },
  { serialNo: 26, title: "Test 25", logo: "Logo26", price: 900, sortBy: 25 },
  { serialNo: 27, title: "Test 26", logo: "Logo27", price: 950, sortBy: 26 },
  { serialNo: 28, title: "Test 27", logo: "Logo28", price: 1000, sortBy: 27 },
  { serialNo: 29, title: "Test 28", logo: "Logo29", price: 1100, sortBy: 28 },
  { serialNo: 30, title: "Test 29", logo: "Logo30", price: 1150, sortBy: 29 },
  { serialNo: 31, title: "Test 30", logo: "Logo31", price: 1200, sortBy: 30 },
  { serialNo: 32, title: "Test 31", logo: "Logo32", price: 1300, sortBy: 31 },
  { serialNo: 33, title: "Test 32", logo: "Logo33", price: 1400, sortBy: 32 },
  { serialNo: 34, title: "Test 33", logo: "Logo34", price: 1500, sortBy: 33 },
  { serialNo: 35, title: "Test 34", logo: "Logo35", price: 1600, sortBy: 34 },
  { serialNo: 36, title: "Test 35", logo: "Logo36", price: 1700, sortBy: 35 },
  { serialNo: 37, title: "Test 36", logo: "Logo37", price: 1800, sortBy: 36 },
  { serialNo: 38, title: "Test 37", logo: "Logo38", price: 1900, sortBy: 37 },
  { serialNo: 39, title: "Test 38", logo: "Logo39", price: 2000, sortBy: 38 },
  { serialNo: 40, title: "Test 39", logo: "Logo40", price: 2100, sortBy: 39 },
  { serialNo: 41, title: "Test 40", logo: "Logo41", price: 2200, sortBy: 40 },
  { serialNo: 42, title: "Test 41", logo: "Logo42", price: 2300, sortBy: 41 },
  { serialNo: 43, title: "Test 42", logo: "Logo43", price: 2400, sortBy: 42 },
  { serialNo: 44, title: "Test 43", logo: "Logo44", price: 2500, sortBy: 43 },
  { serialNo: 45, title: "Test 44", logo: "Logo45", price: 2600, sortBy: 44 },
  { serialNo: 46, title: "Test 45", logo: "Logo46", price: 2700, sortBy: 45 },
  { serialNo: 47, title: "Test 46", logo: "Logo47", price: 2800, sortBy: 46 },
  { serialNo: 48, title: "Test 47", logo: "Logo48", price: 2900, sortBy: 47 },
  { serialNo: 49, title: "Test 48", logo: "Logo49", price: 3000, sortBy: 48 },
  { serialNo: 50, title: "Test 49", logo: "Logo50", price: 3100, sortBy: 49 },
  { serialNo: 51, title: "Test 50", logo: "Logo51", price: 3200, sortBy: 50 },
];

const columns: Column<Data>[] = [
  {
    Header: "S.No.",
    accessor: "serialNo",
  },
  {
    Header: "Title",
    accessor: "title",
  },
  {
    Header: "Logo",
    accessor: "logo",
  },
  {
    Header: "Price",
    accessor: "price",
  },
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
    Cell: ({ row }: { row: { original: Data } }) => {
      const dispatch=useDispatch();
      const handleTest=()=>{
        dispatch(addTestSubject({id:row.original.serialNo,name:row.original.title}))
      }
      return (
        <div className="flex space-x-4 items-center ">
          <Link to={`/createtest/${row.original.serialNo}`}>
            <button
              className="bg-blue-500 text-white px-3 py-1 rounded"
              onClick={handleTest}
            >
              View Tests
            </button>
          </Link>
          <ToggleSwitch />
          {/* <label className="inline-flex items-center">
          <input type="checkbox" className="toggle-checkbox hidden" />
          <span className="toggle-label block w-10 h-6 bg-gray-300 rounded-full"></span>
          <span className="toggle-dot absolute w-4 h-4 bg-white rounded-full transform"></span>
        </label> */}
        </div>
      );
    },
  },
];

const TestTable2: React.FC = () => {
  // const table=useTable({ columns, data },
  //   useSortBy,
  //   usePagination);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    state: { pageIndex },
    pageCount,
  }: any = useTable(
    { columns, data, initialState: { pageSize: 4 } as any },
    useSortBy,
    usePagination
  );

  return (
    <div>
      <table
        {...getTableProps()}
        className="table-auto border-collapse border border-gray-200 w-full"
      >
        <thead>
          {headerGroups.map(
            (headerGroup: {
              getHeaderGroupProps: () => JSX.IntrinsicAttributes &
                React.ClassAttributes<HTMLTableRowElement> &
                React.HTMLAttributes<HTMLTableRowElement>;
              headers: any[];
            }) => (
              <tr
                {...headerGroup.getHeaderGroupProps()}
                className="bg-gray-100 "
              >
                {headerGroup.headers.map((column: any) => (
                  <th
                    {...column.getHeaderProps(
                      column.getSortByToggleProps() // Correct function call
                    )}
                    className="p-2 border"
                  >
                    <div className="flex items-center justify-center gap-x-4">
                      {column.render("Header")}
                      <span>
                        <img src={arrow} />
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            )
          )}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row: any) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="border">
                {row.cells.map((cell: any) => (
                  <td {...cell.getCellProps()} className="p-2 border">
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex justify-between mt-[40px] items-center">
        <p className="text-[#92959A] lg:text-[16px] text-[14px] font-semibold">
          Showing {pageIndex + 1} of {pageCount} enteries
        </p>
        <div>
          <button
            disabled={!canPreviousPage}
            className="lg:px-3 px-1 lg:text-[16px] text-[14px] py-1 bg-gray-200 rounded"
            onClick={previousPage}
          >
            Previous
          </button>
          <button
            disabled={!canNextPage}
            className="lg:px-3 px-1 lg:text-[16px] text-[14px] py-1 bg-gray-200 rounded ml-2"
            onClick={nextPage}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestTable2;
