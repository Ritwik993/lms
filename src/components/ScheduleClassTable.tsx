import React from 'react';
import { useTable, Column } from 'react-table';
import img1 from '../assets/Course image1.svg';
import img2 from '../assets/Course image 2.svg';
import img3 from '../assets/Course image 3.svg';

interface TableData {
  course: string;
  instructors: string;
  link: string;
  image: string;
}

const ScheduleClassTable: React.FC = () => {
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
        image: img2,
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
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 w-full h-full">
            <img
              src={row.original.image}
              alt="Course Thumbnail"
              className="w-full md:w-[150px] h-[100px] object-cover  shadow-md"
            />
            <div className=' w-full h-full flex flex-col gap-[50px]'>
              <div className="font-bold text-gray-800 text-sm md:text-base">
                {value}
              </div>
              <div className="text-xs md:text-sm text-gray-600 mt-1">
                <span className="font-semibold">Course by:</span>{' '}
                {row.original.instructors}
              </div>
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
            className="text-blue-500 hover:underline font-medium text-sm md:text-base whitespace-nowrap"
          >
            {value}
          </a>
        ),
      },
      {
        Header: 'ACTION',
        Cell: () => (
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
            <button className="px-3 py-2 bg-gray-200 text-gray-700 text-sm  hover:bg-gray-300 whitespace-nowrap">
              Cancel Class
            </button>
            <button className="px-3 py-2 bg-blue-500 text-white text-sm  hover:bg-blue-600 whitespace-nowrap">
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
    <div className="p-4 sm:p-6 bg-white rounded-lg shadow-lg">
      <div className="overflow-x-auto">
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
                    className="text-left p-2 sm:p-4 font-semibold text-gray-700 text-sm md:text-base whitespace-nowrap"
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
                      className="p-2 sm:p-4 text-gray-700 text-sm md:text-base"
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
    </div>
  );
};

export default ScheduleClassTable;
