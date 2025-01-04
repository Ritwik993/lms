// Import required dependencies
import React from 'react';
import { useTable, Column } from 'react-table';
import img1 from "../assets/Course image1.svg";
import img2 from "../assets/Course image 2.svg";
import img3 from "../assets/Course image 3.svg";

interface TableData {
  course: string;
  instructors: string;
  link: string;
  image: string;
}

const TableComponent: React.FC = () => {
  // Define table data
  const data: TableData[] = React.useMemo(
    () => [
      {
        course: 'The Ultimate Drawing Course - Beginner to Advanced',
        instructors: 'Harry Potter + John Wick',
        link: 'Class Link',
        image: img1,
      },
      {
        course: 'Digital Marketing Masterclass - 23 Courses in 1',
        instructors: 'Nobody',
        link: 'Class Link',
        image:img2,
      },
      {
        course: 'Angular - The Complete Guide (2021 Edition)',
        instructors: 'Harsh Kumar',
        link: 'Class Link',
        image: img3,
      },
      {
        course: 'Angular - The Complete Guide (2021 Edition)',
        instructors: 'Harsh Kumar',
        link: 'View Detail',
        image: img3,
      },
    ],
    []
  );

  // Define table columns
  const columns: Column<TableData>[] = React.useMemo(
    () => [
      {
        Header: 'COURSE',
        accessor: 'course', // accessor is the key in the data
        Cell: ({ value, row }: { value: string; row: any }) => (
          <div className="flex items-start gap-4">
            <img
              src={row.original.image} // Dynamic image source
              alt="Course Thumbnail"
              className="w-1/2 h-1/2 object-cover rounded"
            />
            <div>
              <div className="font-semibold">{value}</div>
              <div className="text-sm text-gray-500 mt-[53px]">Course by: {row.original.instructors}</div>
            </div>
          </div>
        ),
      },
      {
        Header: 'CLASS LINK',
        accessor: 'link',
        Cell: ({ value }: { value: string }) => (
          <a
            href="#"
            className="text-blue-500 hover:underline font-medium"
          >
            {value}
          </a>
        ),
      },
      {
        Header: 'ACTION',
        Cell: () => (
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
              Cancel Class
            </button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Start Now
            </button>
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
  } = useTable<TableData>({ columns, data });

  return (
    <div className="p-6 bg-white rounded shadow">
      <table
        {...getTableProps()}
        className="w-full border-collapse border border-gray-200"
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              className="bg-gray-100 border-b border-gray-200"
            >
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className="text-left p-4 font-semibold text-gray-700"
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="border-b hover:bg-gray-50">
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    className="p-4 text-gray-600"
                  >
                    {cell.render('Cell')}
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

export default TableComponent;
