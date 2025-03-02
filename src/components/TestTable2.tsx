import React, { FC, useEffect, useState } from "react";
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
import axios from "axios";
import { BASE_URL } from "../constants/url";

interface Data {
  _id:string;
  serialNo: number;
  title: string;
  logo: string;
  price: number;
  actualPrice:number;
  discountedPrice:number;
  sortBy: number;
  isEnabled:boolean;
}

type TableProps={
  success: boolean;
}




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
    Header: "Actual Price",
    accessor: "actualPrice",
  },
  {
    Header: "Discounted Price",
    accessor: "discountedPrice",
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
        dispatch(addTestSubject({id:row.original._id,name:row.original.title}))
      }
      return (
        <div className="flex space-x-4 items-center ">
          <Link to={`/createtest/${row.original._id}`}>
            <button
              className="bg-blue-500 text-white px-3 py-1 rounded"
              onClick={handleTest}
            >
              View Tests
            </button>
          </Link>
          <ToggleSwitch isEnabled={row.original.isEnabled}/>
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

const TestTable2:FC<TableProps> = ({success}) => {
  // const table=useTable({ columns, data },
  //   useSortBy,
  //   usePagination);
  const [data,setData]=useState<Data[]>([]);



  useEffect(()=>{
    getTableData();
  },[success]);

  const getTableData=async()=>{
    try{
      const token=localStorage.getItem("token");
      const res=await axios.get(`${BASE_URL}/api/v1/testSeries/getTestSeries`,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      // console.log(res.data.data);
      const response=res.data.data;
      const formattedData=response.map((r:any,i:number)=>({...r,serialNo:i+1}))
      setData(formattedData);
    }catch(err){
      console.log(err);
    }
  }
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
