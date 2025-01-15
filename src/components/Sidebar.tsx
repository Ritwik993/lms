import icon from "../assets/icon1.svg";
import chartBar from "../assets/ChartBar1.svg";
import plusCircle from "../assets/PlusCircle1.svg";
import credit from "../assets/CreditCard.svg";
import stack from "../assets/Stack.svg";
import { Book } from "lucide-react";
import chat from "../assets/ChatCircleDots.svg";
import setting from "../assets/Gear.svg";
import signOut from "../assets/SignOut.svg";
import { ChevronDown } from "lucide-react";
import { ChevronUp } from "lucide-react";

import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="hidden lg:block  bg-[#1D2026] fixed top-0 bottom-0 w-[250px]  ">
      <div className="header flex gap-[10px] px-[24px] py-[20px] border-b-[2px] border-opacity-30 border-b-[#6E7485] mb-[10px]">
        <img src={icon} alt="icon" className="object-contain" />
        <p className="text-white font-semibold lg:text-[24px] text-[20px]">
          OS Code
        </p>
      </div>
      <div className="listContainer">
        <Link to="/dashboard">
          <div className="flex gap-[12px] text-[#8C94A3]  hover:bg-[#3A6BE4] hover:text-white px-[24px] py-[12px] items-center cursor-pointer group">
            <img
              src={chartBar}
              className="object-contain group-hover:filter group-hover:brightness-0 group-hover:invert"
            />
            <p className=" font-medium md:text-[14px] text-[12px] leading-[20px]">
              Dashboard
            </p>
          </div>
        </Link>

        <div className="flex flex-col ">
          <div
            className="flex gap-[12px] items-center  text-[#8C94A3] hover:bg-[#3A6BE4] hover:text-white px-[24px] py-[12px]  cursor-pointer group"
            onClick={() => setActive(!active)}
          >
            <Book
              size={24}
              strokeWidth={2}
              className="object-contain group-hover:filter group-hover:brightness-0 group-hover:invert"
            />
            <p className="font-medium md:text-[14px] text-[12px] leading-[20px]">
              Course
            </p>
            <div className="flex-1">
              {active ? (
                <ChevronUp
                  size={24}
                  strokeWidth={2}
                  className=" self-end ml-auto  object-contain group-hover:filter group-hover:brightness-0 group-hover:invert"
                />
              ) : (
                <ChevronDown
                  size={24}
                  strokeWidth={2}
                  className=" self-end ml-auto  object-contain group-hover:filter group-hover:brightness-0 group-hover:invert"
                />
              )}
            </div>
          </div>

          {active && (
            <>
              <Link to="/createcourse">
                <div className="flex gap-[10px] text-[#8C94A3] hover:bg-[#3A6BE4] hover:text-white pl-[50px] py-[12px] items-center cursor-pointer group">
                  <img
                    src={plusCircle}
                    className="object-contain group-hover:filter group-hover:brightness-0 group-hover:invert"
                    alt="Plus Icon"
                  />
                  <p className="font-medium md:text-[14px] text-[12px] leading-[20px] min-w-max">
                    Create Course
                  </p>
                </div>
              </Link>

              <Link to="/course">
                {" "}
                <div className="flex gap-[10px] text-[#8C94A3] hover:bg-[#3A6BE4] hover:text-white pl-[50px] py-[12px] items-center cursor-pointer group">
                  <Book
                    size={24}
                    strokeWidth={2}
                    className="object-contain group-hover:filter group-hover:brightness-0 group-hover:invert"
                  />
                  <p className="font-medium md:text-[14px] text-[12px] leading-[20px]">
                    Course
                  </p>
                </div>
              </Link>
            </>
          )}
        </div>

        <div className="flex gap-[12px] text-[#8C94A3]  hover:bg-[#3A6BE4] hover:text-white px-[24px] py-[12px] items-center cursor-pointer group">
          <img
            src={chartBar}
            className="object-contain group-hover:filter group-hover:brightness-0 group-hover:invert "
          />
          <p className=" font-medium md:text-[14px] text-[12px] leading-[20px]">
            Management
          </p>
        </div>

        {/* <div className="flex gap-[12px] text-[#8C94A3]  hover:bg-[#3A6BE4] hover:text-white px-[24px] py-[12px] items-center cursor-pointer group">
          <img src={stack} className="object-contain group-hover:filter group-hover:brightness-0 group-hover:invert " />
          <p className=" font-medium md:text-[14px] text-[12px] leading-[20px]">
            Students
          </p>
        </div>

        <div className="flex gap-[12px] text-[#8C94A3]  hover:bg-[#3A6BE4] hover:text-white px-[24px] py-[12px] items-center cursor-pointer group">
          <img src={stack} className="object-contain group-hover:filter group-hover:brightness-0 group-hover:invert" />
          <p className=" font-medium md:text-[14px] text-[12px] leading-[20px]">
            Courses
          </p>
        </div> */}

        <Link to="/testseries">
          <div className="flex gap-[12px] text-[#8C94A3]  hover:bg-[#3A6BE4] hover:text-white px-[24px] py-[12px] items-center cursor-pointer group">
            <img
              src={stack}
              className="object-contain group-hover:filter group-hover:brightness-0 group-hover:invert"
            />
            <p className=" font-medium md:text-[14px] text-[12px] leading-[20px]">
              Test Series
            </p>
          </div>
        </Link>

        {/* <div className="flex gap-[12px] text-[#8C94A3]  hover:bg-[#3A6BE4] hover:text-white px-[24px] py-[12px] items-center cursor-pointer group">
          <img src={credit} className="object-contain group-hover:filter group-hover:brightness-0 group-hover:invert" />
          <p className=" font-medium md:text-[14px] text-[12px] leading-[20px]">
            Earnings
          </p>
        </div> */}

        <Link to="/query">
          <div className="flex gap-[12px] text-[#8C94A3]  hover:bg-[#3A6BE4] hover:text-white px-[24px] py-[12px] items-center cursor-pointer group">
            <img
              src={chat}
              className="object-contain group-hover:filter group-hover:brightness-0 group-hover:invert "
            />
            <p className=" font-medium md:text-[14px] text-[12px] leading-[20px]">
              Queries
            </p>
          </div>
        </Link>

        <Link to="/review">
          <div className="flex gap-[12px] text-[#8C94A3]  hover:bg-[#3A6BE4] hover:text-white px-[24px] py-[12px] items-center  cursor-pointer group">
            <img
              src={chartBar}
              className="object-contain group-hover:filter group-hover:brightness-0 group-hover:invert"
            />
            <p className=" font-medium md:text-[14px] text-[12px] leading-[20px]">
              Reviews
            </p>
          </div>
        </Link>

        <Link to="/setting">
          <div className="flex gap-[12px] text-[#8C94A3]  hover:bg-[#3A6BE4] hover:text-white px-[24px] py-[12px] items-center  cursor-pointer group">
            <img
              src={setting}
              className="object-contain group-hover:filter group-hover:brightness-0 group-hover:invert"
            />
            <p className=" font-medium md:text-[14px] text-[12px] leading-[20px]">
              Settings
            </p>
          </div>
        </Link>

        <div className="flex gap-[12px] text-[#8C94A3]  hover:bg-[#3A6BE4] hover:text-white px-[24px] py-[12px] items-center  cursor-pointer mt-[100px] group">
          <img
            src={signOut}
            className="object-contain group-hover:filter group-hover:brightness-0 group-hover:invert"
          />
          <p className=" font-medium md:text-[14px] text-[12px] leading-[20px]">
            Sign out
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
