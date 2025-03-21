import React, { useEffect } from "react";
import { useTable, Column } from "react-table";
import img1 from "../assets/Course image1.svg";
// import img2 from '../assets/Course image 2.svg';
// import img3 from '../assets/Course image 3.svg';
import axios from "axios";
import { BASE_URL } from "@/constants/url";
// import { Link } from "react-router-dom";

interface TableData {
  id: string;
  course: string;
  courseId: string;
  userId: string;
  instructors: string;
  googleMeetLink: string;
  image: string;
  startDate:string;
  startTime:string;
  status: string;
}

type ScheduleClassTableProps={
  data: TableData[];
  setData: React.Dispatch<React.SetStateAction<TableData[]>>;
  isOpen: boolean;
}

const ScheduleClassTable: React.FC<ScheduleClassTableProps> = ({data,setData,isOpen}) => {
  // Define table data

  // const [data, setData] = useState<TableData[]>([
  //   {
  //     id: "",
  //     course: "",
  //     courseId: "",
  //     userId: "",
  //     instructors: "Shreyas",
  //     googleMeetLink: "",
  //     status: "",
  //     startDate:"",
  //     startTime:"",
  //     image: img1,
  //   },
  // ]);

  useEffect(() => {
    getLiveClasses();
  }, [isOpen]);

  const getLiveClasses = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        `${BASE_URL}/api/v1/course/getLiveClasses`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(res.data);

      // Extract live class data
      const liveClasses = res.data.data;

      // Fetch instructor details for each userId
      const instructorPromises = liveClasses.map(async (item: any) => {
        try {
          const instructorRes = await axios.get(
            `${BASE_URL}/api/v1/auth/getUsers?userId=${item.createdBy}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log(instructorRes.data.data[0]);
          return instructorRes.data.data[0].firstName;
        } catch (error) {
          console.error("Error fetching instructor:", error);
          return "Unknown";
        }
      });

      // Resolve all instructor fetches
      const instructors = await Promise.all(instructorPromises);
      console.log("The data is");

      console.log(JSON.stringify(instructors, null, 2));

      // Format the data
      const formattedData = liveClasses.map((item: any, index: number) => ({
        id: item._id,
        course: item.title,
        courseId: item.courseId,
        userId: item.createdBy,
        instructors: instructors[index], // Assign fetched instructor names
        googleMeetLink: item.googleMeetLink,
        status: item.status,
        startDate:item.startDate,
        startTime:item.startTime,
        image: img1,
      }));

      setData(formattedData);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(JSON.stringify(data, null, 2));

  const handleCancel = async (id: string) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.put(
        `${BASE_URL}/api/v1/course/updateLiveClass/${id}?status=CLOSED`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // getLiveClasses();

      // Update the table state after the API call
      setData((prevData) => prevData.filter((item) => item.id !== id));
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(data);

  // const getLiveClasses = async () => {
  //   try {
  //     const token = localStorage.getItem("token");
  //     const res = await axios.get(
  //       "http://localhost:8080/api/v1/course/getLiveClasses",
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  //     console.log(res.data);

  //     const formattedData = res.data.data.map((item: any) => ({
  //       course: item.title,
  //       courseId: item.courseId,
  //       userId:item.createdBy,
  //       instructors: "Shreyas",
  //       googleMeetLink: item.googleMeetLink,
  //       image: img1,
  //     }));

  //     setData(formattedData);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // console.log(JSON.stringify(data,null,2));

  //   const getUserName = async (userId: string) => {
  //     try {
  //       const token = localStorage.getItem("token");
  //       const res = await axios.get(
  //         `http://localhost:8080/api/v1/auth/getUsers?userId=${userId}`,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         }
  //       );
  //       setData((prev) =>
  //         prev.map((d) =>
  //           d.userId === userId ? { ...d, instructors: res.data.data.firstName } : d
  //         )
  //       );
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   data.forEach((d) => {
  //     getUserName(d.userId);
  //  });

  // const data: TableData[] = React.useMemo(

  //   () => [
  //     {
  //       course: 'The Ultimate Drawing Course - Beginner to Advanced',
  //       instructors: 'Harry Potter + John Wick',
  //       link: 'Class Link',
  //       image: img1,
  //     },
  //     {
  //       course: 'Digital Marketing Masterclass - 23 Courses in 1',
  //       instructors: 'Nobody',
  //       link: 'Class Link',
  //       image: img2,
  //     },
  //     {
  //       course: 'Angular - The Complete Guide (2021 Edition)',
  //       instructors: 'Harsh Kumar',
  //       link: 'Class Link',
  //       image: img3,
  //     },
  //     {
  //       course: 'Angular - The Complete Guide (2021 Edition)',
  //       instructors: 'Harsh Kumar',
  //       link: 'View Detail',
  //       image: img3,
  //     },
  //   ],
  //   []
  // );

  // Define table columns
  const columns: Column<TableData>[] = React.useMemo(
    () => [
      {
        Header: "COURSE",
        accessor: "course", // accessor is the key in the data
        Cell: ({ value, row }: { value: string; row: any }) => (
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 w-full h-full">
            <img
              src={row.original.image}
              alt="Course Thumbnail"
              className="w-full md:w-[150px] aspect-square h-full object-cover  shadow-md"
            />
            <div className=" w-full h-full flex flex-col gap-[30px]">
              <div className="font-bold text-gray-800 text-sm md:text-base">
                {value}
              </div>
              <div className="text-xs md:text-sm text-gray-600 mt-1">
                <span className="font-semibold">Course by:</span>{" "}
                {row.original.instructors}
              </div>

              <div className="text-xs md:text-sm text-gray-600 mt-1 ">
                <span className="font-semibold">Status:</span>{" "}
                {row.original.status}
              </div>
            </div>
          </div>
        ),
      },
      {
        Header: "Date and Time",
        accessor: "startDate",
        Cell: ({ value,row }: { value: string ,row:any}) => (
          // <a
          //   href={value}
          //   className="text-blue-500 hover:underline font-medium text-sm md:text-base whitespace-nowrap"
          //   target="_blank"
          // >
          //   Link
          //   {/* {value} */}
          // </a>
          <div className=" w-full h-full flex flex-col gap-[30px]">
          {/* <div className="font-bold text-gray-800 text-sm md:text-base">
            {value}
          </div> */}
          <div className="text-xs md:text-sm text-gray-600 mt-1">
            <span className="font-semibold">Date :</span>{" "}
            {value}
          </div>

          <div className="text-xs md:text-sm text-gray-600 mt-1 ">
            <span className="font-semibold">Time :</span>{" "}
            {row.original.startTime}
          </div>
        </div>
          
        ),
      },
      {
        Header: "ACTION",
        accessor: "id",
        Cell: ({ value, row }: { value: string; row: any }) => (
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
            <button
              className="px-3 py-2 bg-gray-200 text-gray-700 text-sm  hover:bg-gray-300 whitespace-nowrap"
              onClick={() => handleCancel(value)}
            >
              Cancel Class
            </button>
            <a href={row.original.googleMeetLink} target="_blank">
              <button className="px-3 py-2 bg-blue-500 text-white text-sm  hover:bg-blue-600 whitespace-nowrap">
                Start Now
              </button>
            </a>
          </div>
        ),
      },
    ],
    []
  );

  // const handleCancel = async (id: string) => {
  //   try {
  //     const token = localStorage.getItem("token");
  //     const res = await axios.put(
  //       `http://localhost:8080/api/v1/course/updateLiveClass/${id}?status=CLOSED`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );

  //     // getLiveClasses();

  //      // Update the table state after the API call
  //      setData((prevData) =>
  //     prevData.map((item) =>
  //       item.id === id ? { ...item, status: "CLOSED" } : item
  //     )
  //   );
  //     console.log(res.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // console.log(data);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<TableData>({ columns, data });

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
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  className="border-b hover:bg-gray-50"
                >
                  {row.cells.map((cell) => (
                    <td
                      {...cell.getCellProps()}
                      className="p-2 sm:p-4 text-gray-700 text-sm md:text-base"
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
    </div>
  );
};

export default ScheduleClassTable;
