import Navbar from "../components/Navbar";
import MagnifyingGlass from "../assets/MagnifyingGlass.svg";
import VideoCard from "../components/VideoCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/url";

type VideoDataType = {
  courseThumbnail: string;
  category: string;
  courseDescription: string;
  actualPrice: number;
  discountedPrice: number;
  _id:string;
};

const Courses = () => {
  const [activeCardId, setActiveCardId] = useState<number | null>(null);
  const [videoData, setVideoData] = useState<VideoDataType[]>([]);
  const handleToggle = (id: number | null) => {
    setActiveCardId((prev) => (prev === id ? null : id));
  };
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${BASE_URL}/api/v1/course/getCourses`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const videos = res.data.data;
      const formattedData = videos.map((v: any) => ({
        courseThumbnail: v.courseThumbnail,
        category: v.category,
        courseDescription: v.courseDescription,
        actualPrice: v.actualPrice,
        discountedPrice: v.discountedPrice,
        _id:v._id,
      }));
      setVideoData(formattedData);
      // console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // const getVideos1=async()=>{
  //   try{
  //     const token=localStorage.getItem("token");
  //     const res=await axios.get(`${BASE_URL}/api/v1/course/getWebHomeCourses`,{
  //       headers:{
  //         Authorization:`Bearer ${token}`
  //       }
  //     }); 
  //     console.log("response for getWebHomeCourses",res.data);
  //     const videos = res.data.data;
  //     const formattedData = videos.map((v: VideoDataType) => ({
  //       courseThumbnail: v.courseThumbnail,
  //       category: v.category,
  //       courseDescription: v.courseDescription,
  //       price: v.price || 24,
  //       _id:v._id,
  //     }));
  //   }catch(err){
  //     console.log(err);
  //   }
  // }
  return (
    <div className="flex-1 lg:ml-[250px] bg-[#F5F7FA] overflow-x-hidden pb-[100px]">
      <Navbar />

      <div className=" w-[96%] mx-auto  mt-[80px] pt-[20px]">
        <div className="w-[96%] mx-auto flex gap-x-4 items-center">
          <div className="searchbox  flex-2 ">
            <p className="text-[#6E7485] text-[12px] leading-[16px]">Search:</p>

            <div className="flex px-[18px] lg:py-[12px] bg-white py-[10px] border-[#E9EAF0] border mt-2">
              <img
                src={MagnifyingGlass}
                className="mr-[12px] w-[24px] h-[24px]"
              />
              <input
                type="text"
                placeholder="Search in your courses..."
                className="w-full h-full border-none outline-none placeholder-[#8C94A3]  lg:text-[16px] text-[12px] leading-[24px] bg-white  "
              />
            </div>
          </div>
          <div className="flex-1">
            <p className="text-[#6E7485] text-[12px] leading-[16px]">
              Sort by:
            </p>
            <select className="w-full lg:py-[14px] py-[12px] lg:text-[16px] text-[12px] outline-none mt-2 border-[#E9EAF0] border text-[#8C94A3]">
              <option>Latest</option>
              <option>Popular</option>
            </select>
          </div>

          <div className="flex-1">
            <p className="text-[#6E7485] text-[12px] leading-[16px]">Status:</p>
            <select className="w-full lg:py-[14px] py-[12px] text-[#8C94A3] lg:text-[16px] text-[12px] outline-none mt-2 border-[#E9EAF0] border">
              <option>All Courses</option>
              <option>Web Development</option>
              <option>Android Development</option>
            </select>
          </div>

          <div className="flex-1">
            <p className="text-[#6E7485] text-[12px] leading-[16px]">Rating:</p>
            <select className="w-full lg:py-[14px] py-[12px] text-[#8C94A3] lg:text-[16px] text-[12px] outline-none mt-2 border-[#E9EAF0] border">
              <option>4 stars & up</option>
              <option>3 stars & up</option>
              <option>2 stars & up</option>
              <option>1 stars & up</option>
            </select>
          </div>
        </div>
      </div>

      <div className=" w-[96%] mx-auto  mt-[80px] pt-[20px]">
        <div className="w-[96%] mx-auto grid xl:grid-cols-3 lg:grid-cols-3 grid-cols-2   gap-y-4">
          {/* {[1, 2, 3, 4, 5, 6, 7].map((id) => (
            <VideoCard
              key={id}
              activeCardId={activeCardId}
              onToggle={handleToggle}
              id={id}
            />
          ))} */}
          {
            videoData.map((v,id)=>
            (
              <VideoCard key={id}  data={v} activeCardId={activeCardId}
              onToggle={handleToggle}
              id={id}/>
            )
            )
          }
        </div>

        {/* <div className=" w-[96%] mx-auto flex justify-between mt-[40px] items-center">
        <p className="text-[#92959A] lg:text-[16px] text-[14px] font-semibold">
          Showing 1 of 30 enteries
        </p>
        <div>
          <button className="lg:px-3 px-1 lg:text-[16px] text-[14px] py-1 bg-gray-200 rounded">
            Previous
          </button>
          <button className="lg:px-3 px-1 lg:text-[16px] text-[14px] py-1 bg-gray-200 rounded ml-2">
            Next
          </button>
        </div>
      </div> */}
      </div>
    </div>
  );
};

export default Courses;
