import Navbar from "../components/Navbar";
import MagnifyingGlass from "../assets/MagnifyingGlass.svg";
import TestTable2 from "../components/TestTable2";
import CreateTestSeriesPopup from "../components/CreateTestSeriesPopup";
import { useState } from "react";

const TestSeries = () => {
  const [isOpen,setIsOpen]=useState(false);
  return (
    <div className=" flex-1 bg-[#F5F7FA] overflow-x-hidden lg:ml-[250px] mx-auto">
      <Navbar />
      <div className="bg-[#ECEDF0] mt-[82px] w-[90%] mx-auto   py-[35px] ">
        <div className="flex justify-between items-center w-[90%] mx-auto  bg-white  pt-[20px] pb-[30px] px-[20px] mb-[28px]">
          <p className="font-semibold text-[#90949A] lg:text-[18px] text-[14px]">
            TEST SERIES
          </p>
          <button className="hover:text-[#B7C4E9] text-white font-semibold lg:text-[15px] text-[12px] min-w-max bg-[#4969D1] p-[10px]" onClick={()=>setIsOpen((prev)=>!prev)}>
            Create Test Series
          </button>
          {isOpen && <CreateTestSeriesPopup setIsOpen={setIsOpen}/>}
        </div>

        <div className="bg-white w-[90%] mx-auto pb-[40px] ">
          <div className="p-[20px] mb-[20px] flex gap-x-[12px]">
            <p className="font-semibold lg:text-[16px] text-[14px] hover:text-[#889EE0] text-[#8E9297]">
              Test Series
            </p>
            <p className="font-semibold lg:text-[16px] text-[14px] hover:text-[#889EE0] text-[#8E9297]">
              Test Result
            </p>
            <p className="font-semibold lg:text-[16px] text-[14px] hover:text-[#889EE0] text-[#8E9297]">
              Global Library
            </p>
          </div>

          <div className="w-[90%] mx-auto shadow-md ">
            <div className="flex lg:gap-x-[20px] gap-x-[10px] w-[90%] mx-auto py-[14px]">
              <label className="text-[#8B8F94] lg:text-[16px] text-[14px] font-semibold block w-[40%] ">
                Paid/Free
                <select className="block outline-none  border-[#ECEDF0] border p-[5px] mt-[4px] w-full">
                  <option>All</option>
                  <option>Paid</option>
                  <option>Free</option>
                </select>
              </label>

              <label className="text-[#8B8F94] lg:text-[16px] text-[14px] font-semibold block w-[40%]  ">
                Enable/Disable
                <select className="block outline-none w-full border-[#ECEDF0] border p-[5px] mt-[4px]">
                  <option>All</option>
                  <option>Enable</option>
                  <option>Disable</option>
                </select>
              </label>
            </div>

            <div className="w-[90%] mx-auto mt-[40px] flex md:flex-row flex-col justify-between lg:items-center gap-4">
              <div>
                <span className="text-[#8D9196] font-semibold lg:text-[16px] text-[14px] ml-[4px]">
                  Show
                </span>
                <input
                  type="number"
                  value={10}
                  className="w-[75px] text-[#8D9196] font-semibold lg:text-[16px] text-[14px] ml-[4px] border border-opacity-20 border-[#6E7485] outline-none"
                />
                <span className="text-[#8D9196] font-semibold lg:text-[16px] text-[14 px] ml-[4px]">
                  enteries
                </span>
              </div>

              <div className="searchbox bg-white  md:w-[40%] w-[80%]  ">
                <div className="flex lg:px-[10px] px-[5px] lg:py-[10px] py-[5px] border-[#E9EAF0] border">
                  <img
                    src={MagnifyingGlass}
                    className="mr-[12px] object-cover hidden lg:block"
                  />
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full h-full border-none outline-none placeholder-[#8C94A3]  lg:text-[16px] text-[14px] lg:leading-[24px] leading-[18px] bg-white  "
                  />
                </div>
              </div>
            </div>

            <div className="pb-[100px] w-[90%] mx-auto pt-[40px]">
              <TestTable2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestSeries;
