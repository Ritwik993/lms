import React, { useState } from "react";
import Navbar from "../components/Navbar";
import stack1 from "../assets/Stack1.svg";
import playCircle from "../assets/PlayCircle.svg";
import clipBoard from "../assets/ClipboardText.svg";
import monitor from "../assets/MonitorPlay.svg";
import BasicInformation from "../components/BasicInformation";
import AdvanceInformation from "../components/AdvanceInformation";
import Curriculm from "../components/Curriculm";
import PublishCourse from "../components/PublishCourse";

type Tab = "basic" | "advance" | "curriculum" | "publish";

const CreateCourse: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>("basic");
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const renderTabContent = () => {
    switch (activeTab) {
      case "basic":
        return <BasicInformation setCount={setCount} />;
      case "advance":
        return <AdvanceInformation setCount1={setCount1} />;
      case "curriculum":
        return <Curriculm setCount2={setCount2} />;
      case "publish":
        return <PublishCourse setCount3={setCount3} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex-6 bg-[#F5F7FA] overflow-x-hidden">
      <Navbar />
      <div className="heading mx-auto lg:w-[80%] w-[90%] mt-[40px] bg-white">
        <div className="overflow-x-auto overflow-y-hidden scrollbar-hidden px-[10px]">
          <div className="flex justify-around border-b-[2px] border-opacity-10 border-b-[#6E7485] min-w-max gap-x-[10px]">
            <div
              className={`py-[20px] flex items-center gap-x-2 min-w-0 cursor-pointer ${
                activeTab === "basic" ? "border-b-2 border-[#1D2026]" : ""
              }`}
              onClick={() => setActiveTab("basic")}
            >
              <img src={stack1} className="object-contain" />
              <p className="text-[#1D2026] font-medium lg:text-[16px] text-[14px] md:leading-[22px] leading-[20px]">
                Basic Information
              </p>
              {activeTab === "basic" && <span className="text-[#23BD33] text-[12px] font-medium mr-1">
                {count}/13
              </span>}
            </div>

            <div
              className={`py-[20px] flex items-center gap-x-2 min-w-0 cursor-pointer ${
                activeTab === "advance" ? "border-b-2 border-[#1D2026]" : ""
              }`}
              onClick={() => setActiveTab("advance")}
            >
              <img src={clipBoard} className="object-contain" />
              <p className="text-[#1D2026] font-medium lg:text-[16px] text-[14px] md:leading-[22px] leading-[20px]">
                Advance Information
              </p>
              {activeTab === "advance" && <span className="text-[#23BD33] text-[12px] font-medium mr-1">
                {count1}/13
              </span>}
            </div>

            <div
              className={`py-[20px] flex items-center gap-x-2 min-w-0 cursor-pointer ${
                activeTab === "curriculum" ? "border-b-2 border-[#1D2026]" : ""
              }`}
              onClick={() => setActiveTab("curriculum")}
            >
              <img src={monitor} className="object-contain" />
              <p className="text-[#1D2026] font-medium lg:text-[16px] text-[14px] md:leading-[22px] leading-[20px]">
                Curriculum
              </p>
              {activeTab === "curriculum" && <span className="text-[#23BD33] text-[12px] font-medium mr-1">
                {count2}/13
              </span>}
            </div>

            <div
              className={`py-[20px] flex items-center gap-x-2 min-w-0 cursor-pointer ${
                activeTab === "publish" ? "border-b-2 border-[#1D2026]" : ""
              }`}
              onClick={() => setActiveTab("publish")}
            >
              <img src={playCircle} className="object-contain" />
              <p className="text-[#1D2026] font-medium lg:text-[16px] text-[14px] md:leading-[22px] leading-[20px]">
                Publish a Course
              </p>
              {activeTab === "publish" && <span className="text-[#23BD33] text-[12px] font-medium mr-1">
                {count3}/13
              </span>}
            </div>
          </div>
        </div>
        <div className="p-5">{renderTabContent()}</div>
      </div>
    </div>
  );
};

export default CreateCourse;
