import React, { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Trailer from "../assets/Trailer.svg";
import ViewCurriculum from "../components/ViewCurriculum";
// import { Button } from "@/components/ui/button";

const ViewDetails: React.FC = () => {
    useEffect(()=>{
        window.scrollTo(0,0);
    },[])
  return (
    <div className=" bg-[#F5F7FA] flex-1 lg:ml-[250px] overflow-x-hidden ">
      <Navbar />
      {/* <div className="heading mx-auto lg:w-[80%] w-[90%] mt-[40px] bg-white"> */}
      <div className="bg-gray-100 min-h-screen p-6 w-[90%] mx-auto">
        <nav className="text-gray-600 text-sm mb-4">
          <span>Home &gt; Development &gt; Web Development &gt; Webflow</span>
        </nav>

        {/* Course Header */}
        <h1 className="text-3xl font-bold mb-2">
          Complete Website Responsive Design: from Figma to Webflow to Website
          Design
        </h1>
        <p className="text-gray-700 mb-4">
          3 in 1 Course: Learn to design websites with Figma, build with
          Webflow, and make a living freelancing.
        </p>

        <div className="flex justify-between mt-4">
          <div className="text-gray-800 font-semibold">
            Dianne Russell &bull; Kristin Watson
          </div>

          {/* Rating */}
          <div className="flex items-center text-yellow-500 mb-6">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
            <span className="text-gray-700 ml-2 text-sm">
              4.8 (451,444 Rating)
            </span>
          </div>
        </div>

        {/* Creator Info */}
        <div className="heading mx-auto lg:w-[80%] w-[90%] mt-[40px] bg-white">
          <div className="flex items-center gap-2 mb-4">
            <img src={Trailer} alt="Creator" className="" />
          </div>
        </div>
      <ViewCurriculum/>
      </div>
    </div>
  );
};

export default ViewDetails;
