import CourseImage from "../assets/Course Images.svg";
import Star from "../assets/Star.svg";
import User from "../assets/User.svg";
import Dot from "../assets/DotsThree1.svg";
import { useState } from "react";

const VideoCard = () => {
  const [isVisible,setIsVisible]=useState(false);
  return (
    <div className="bg-white w-[250px] ">
      <div>
        <img src={CourseImage} className="object-contain w-full" />
      </div>
      <div className="mt-2 p-4 border-b-[2px] border-opacity-10 border-b-[#6E7485]">
        <p className="text-[#342F98] bg-[#EBEBFF] text-[10px] font-medium leading-[12px] max-w-min p-2 mb-2">
          Developments
        </p>
        <p className="text-[#1D2026] font-medium text-[16px] leading-[22px] ">
          Premiere Pro CC for Beginners: Video Editing in Premiere
        </p>
      </div>

      <div className="px-4 py-2 flex justify-between items-center  border-b-[2px] border-opacity-10 border-b-[#6E7485]">
        <div className="flex items-center gap-x-1">
          <img src={Star} className="object-contain" />
          <span className="text-[#4E5566] text-[14px] leading-[20px]">4.9</span>
        </div>
        <div className="flex items-center gap-x-1">
          <img src={User} className="object-contain" />
          <span className="text-[#4E5566] text-[14px] leading-[20px] mr-1">
            982,941
          </span>
          <span className="text-[#8C94A3] text-[14px] leading-[20px]">
            Students
          </span>
        </div>
      </div>

      <div className="px-4 py-4 flex justify-between items-center">
        <p className="text-[#3A6BE4] text-[18px] font-semibold leading-[24px]">Rs 24.00</p>
        <div className="relative">
        <img src={Dot} className="object-contain " onClick={()=>setIsVisible((prev)=>!prev)}/>
        {isVisible && <div className="absolute p-2 bg-white  rounded-[4px] ">
        <p className="text-[#4E5566]  leading-[20px]  whitespace-nowrap border-b-[2px] border-opacity-10 border-b-[#6E7485] cursor-pointer hover:bg-slate-100 p-1">View Details</p>
          <p className="text-[#4E5566]  leading-[20px]  whitespace-nowrap border-b-[2px] border-opacity-10 border-b-[#6E7485] cursor-pointer hover:bg-slate-100 p-1">Edit Course</p>
          <p className="text-[#4E5566] leading-[20px]  whitespace-nowrap cursor-pointer hover:bg-slate-100 p-1">Student Details</p>
        </div>}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
