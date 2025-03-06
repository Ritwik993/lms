import { useEffect, useState } from "react";
import CreateBanner from "../components/CreateBanner";
import InformationBox from "../components/InformationBox";
import Navbar from "../components/Navbar";
import Notification from "../components/Notification";
import Rating from "../components/Rating";
import Revenue from "../components/Revenue";
import axios from "axios";
import f1 from "../assets/f1.svg";
import f2 from "../assets/f2.svg";
import f3 from "../assets/f3.svg";
import f4 from "../assets/f4.svg";
import f5 from "../assets/f5.svg";
import f6 from "../assets/f6.svg";
import f7 from "../assets/f7.svg";
import f8 from "../assets/f8.svg";
import { DashItem } from "../types/type";
import { BASE_URL } from "@/constants/url";

type ResponseData = {
  instructors: number;
  students: number;
  onlineCourses: number;
  payment: number;
  onGoingCourses: number;
  endedCourses: number;
  coursesBought: number;
};

const Dashboard = () => {
  const [data, setData] = useState<ResponseData>({
    instructors: 0,
    students: 0,
    onlineCourses: 0,
    payment: 0,
    onGoingCourses: 0,
    endedCourses: 0,
    coursesBought: 0,
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get(
        `${BASE_URL}/api/v1/dashboard/DashboardData`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setData(res.data.data);
      setError(null);
    } catch (err) {
      console.error(err);
      setError("Failed to load dashboard data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
  
  
  const dashItems: DashItem[] = [
    {
      id: 1,
      count: data.onGoingCourses,
      title: "Total Ongoing Courses",
      image: f1,
    },
    { id: 2, count: data.onlineCourses, title: "Currently Active", image: f2 },
    { id: 3, count: data.instructors, title: "Total Instructors", image: f3 },
    { id: 4, count: data.endedCourses, title: "Completed Courses", image: f4 },
    { id: 5, count: data.students, title: "Students", image: f5 },
    { id: 6, count: data.onlineCourses, title: "Online Courses", image: f6 },
    {
      id: 7,
      count: `$ ${data.payment}`,
      title: "USD Total Earning",
      image: f7,
    },
    { id: 8, count: data.coursesBought, title: "Course Sold", image: f8 },
  ];

  return (
    <div className="bg-[#F5F7FA] pb-[100px] min-h-[100vh] flex-1 lg:ml-[250px]">
      <Navbar />
      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div>
          <div className="md:px-[160px] px-[40px] py-[24px] grid gap-[24px] xl:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            {dashItems.map((item) => (
              <InformationBox key={item.id} {...item} />
            ))}
          </div>
          <div className="mt-[24px] md:px-[175px] px-[50px] flex lg:flex-row flex-col gap-[25px]">
            <Notification />
            <CreateBanner />
          </div>
          <div className="mt-[24px] md:px-[175px] px-[50px] flex lg:flex-row flex-col gap-[25px]">
            <Rating />
            <Revenue />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
