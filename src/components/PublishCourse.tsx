import { FC, useEffect } from "react";
import MagnifyingGlass from "../assets/MagnifyingGlass.svg";
import Instructor from "./Instructor";
import { useLocation } from "react-router-dom";


type Tab = "basic" | "advance" | "curriculum" | "publish";


type PublishCourseProps={
  setCount3:React.Dispatch<React.SetStateAction<number>>
  setActiveTab:React.Dispatch<React.SetStateAction<Tab>>;
}

const PublishCourse:FC<PublishCourseProps> = ({setCount3,setActiveTab}) => {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="mb-[37px]">
      <div className="heading lg:px-[40px] px-[10px] py-[24px] bg-white flex gap-x-[20px] justify-between items-center border-b-[2px] border-opacity-10 border-b-[#6E7485]">
        <p className="font-semibold text-[#1D2026] lg:text-[24px] text-[18px] md:leading-[32px] leading-[26px] whitespace-nowrap">
          Publish Course
        </p>
        <div>
          <button className="bg-[#E8EEFF] text-[#3A6BE4] lg:px-[24px] px-[10px]  lg:text-[16px] text-[14px] font-semibold lg:leading-[48px] leading-[40px]">
            Save
          </button>
          <button className="text-[#3A6BE4] lg:px-[24px] px-[10px] lg:text-[16px] text-[14px] font-semibold lg:leading-[48px] leading-[40px]">
            Save and Preview
          </button>
        </div>
      </div>

      <div className="messageBox lg:w-[90%] w-[95%] mx-auto">
        <div className="mt-[40px] mb-[24px] md:text-[18px] text-[16px] md:leading-[24px] leading-[20px] text-[#1D2026] font-medium">
          Message
        </div>
        <div className="flex justify-between flex-col lg:flex-row gap-x-[24px]">
          <div className="flex-1">
            <p className="md:text-[14px] text-[12px] leading-[22px] mb-2">
              Welcome Message
            </p>
            <textarea
              id="welcomeMessage"
              rows={4}
              placeholder="Enter course starting message here..."
              className="w-full border outline-none placeholder:text-[#8C94A3] px-[18px] py-[13px] text-[16px] resize-none"
            ></textarea>
          </div>
          <div className="flex-1">
            <p className="md:text-[14px] text-[12px] leading-[22px] mb-2">
              Congratulation Message
            </p>
            <textarea
              id="welcomeMessage"
              rows={4}
              cols={10}
              placeholder="Enter course starting message here..."
              className="w-full border outline-none px-[18px] py-[15px] text-[16px] resize-none"
            ></textarea>
          </div>
        </div>
      </div>

      <div className="instructor lg:w-[90%] w-[95%] mx-auto mt-[40px]">
        <p className="font-medium lg:text-[18px] text-[16px] lg:leading-[24px] leading-[20px] mb-[24px]">
          Add Instructor (02)
        </p>
        <div className="searchbox bg-white lg:w-[600px] w-[80%] ">
          <div className="flex px-[18px] py-[12px] border-[#E9EAF0] border">
            <img
              src={MagnifyingGlass}
              className="mr-[12px] w-[24px] h-[24px]"
            />
            <input
              type="text"
              placeholder="Search"
              className="w-full h-full border-none outline-none placeholder-[#8C94A3]  text-[16px] leading-[24px] bg-white  "
            />
          </div>
        </div>
        <div className="mt-[24px]   grid gap-[24px] xl:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          <Instructor />
          <Instructor />
          <Instructor />
        </div>

        <div className="flex justify-between items-center mt-[32px] pb-[40px] pt-[60px] w-[90%] m-auto">
          <button className="text-[#6E7485] lg:text-[18px] text-[14px] font-semibold lg:leading-[56px] leading-[40px] px-[32px] border-[#E9EAF0] border-[1px]" onClick={()=>setActiveTab("curriculum")}>
            Previous
          </button>
          <button className="lg:text-[18px] text-[14px] font-semibold lg:leading-[56px] leading-[40px] text-white px-[32px] bg-[#3A6BE4]">
            Submit For Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default PublishCourse;
