import icon from "../assets/icon1.svg";
import chartBar from "../assets/ChartBar1.svg";
import plusCircle from "../assets/PlusCircle1.svg";
import stack from "../assets/Stack.svg";
import { Book } from "lucide-react";
import chat from "../assets/ChatCircleDots.svg";
import setting from "../assets/Gear.svg";
import signOut from "../assets/SignOut.svg";
import { ChevronDown } from "lucide-react";
import { ChevronUp } from "lucide-react";
import { TvMinimalPlay } from "lucide-react";
import { BadgeIndianRupee } from "lucide-react";
import { Facebook } from 'lucide-react';

import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../utils/store";
import { Menu } from "lucide-react";
import { toggleMenu } from "../utils/appSlice";
import { setActiveTab } from "../utils/activeTabSlice";
import { addEditId } from "../utils/editSlice";
import { emptySection } from "../utils/sectionSlice";

const Sidebar = () => {
  const [active, setActive] = useState(false);
  const isOpen = useSelector((store: RootState) => store.toggle);
  const dispatch = useDispatch();
  // const sections = useSelector((store: RootState) => store.section.sections);

  return (
    <>
      <div className="hidden lg:block  bg-[#1D2026] fixed top-0 bottom-0 w-[250px] z-10 ">
        <div className="header flex gap-[10px] px-[24px] py-[20px] border-b-[2px] border-opacity-30 border-b-[#6E7485] mb-[10px]">
          <img src={icon} alt="icon" className="object-contain" />
          <p className="text-white font-semibold lg:text-[24px] text-[20px]">
            OS Code
          </p>
        </div>
        <div className="listContainer">
          <Link to="/dashboard">
            <div className="flex gap-[12px] text-[#8C94A3]  hover:bg-[#3A6BE4] hover:text-white px-[24px] py-[12px] items-center cursor-pointer group" onClick={()=>dispatch(emptySection())}>
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
              onClick={() => {
                setActive(!active);
                // dispatch(setActiveTab("basic"));
              }}
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
                  <div
                    className="flex gap-[10px] text-[#8C94A3] hover:bg-[#3A6BE4] hover:text-white pl-[50px] py-[12px] items-center cursor-pointer group"
                    onClick={() => {
                      dispatch(setActiveTab("basic"));
                      dispatch(addEditId(null));
                      // dispatch(emptySection());
                    }}
                  >
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
                     
                  <div className="flex gap-[10px] text-[#8C94A3] hover:bg-[#3A6BE4] hover:text-white pl-[50px] py-[12px] items-center cursor-pointer group" onClick={()=>dispatch(emptySection())}>
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

                <Link to="/scheduleClass">
                  {" "}
                  <div className="flex gap-[10px] text-[#8C94A3] hover:bg-[#3A6BE4] hover:text-white pl-[50px] py-[12px] items-center cursor-pointer group" onClick={()=>dispatch(emptySection())}>
                    <TvMinimalPlay
                      size={24}
                      strokeWidth={2}
                      className="object-contain group-hover:filter group-hover:brightness-0 group-hover:invert"
                    />
                    <p className="font-medium md:text-[14px] text-[12px] leading-[20px]">
                      Live Class
                    </p>
                  </div>
                </Link>


                <Link to="/free">
                  {" "}
                  <div className="flex gap-[10px] text-[#8C94A3] hover:bg-[#3A6BE4] hover:text-white pl-[50px] py-[12px] items-center cursor-pointer group" onClick={()=>dispatch(emptySection())}>
                    <Facebook
                      size={24}
                      strokeWidth={2}
                      className="object-contain group-hover:filter group-hover:brightness-0 group-hover:invert"
                    />
                    <p className="font-medium md:text-[14px] text-[12px] leading-[20px]">
                      Free Videos
                    </p>
                  </div>
                </Link>
              </>
            )}
          </div>

          {/* <div className="flex gap-[12px] text-[#8C94A3]  hover:bg-[#3A6BE4] hover:text-white px-[24px] py-[12px] items-center cursor-pointer group">
          <img
            src={chartBar}
            className="object-contain group-hover:filter group-hover:brightness-0 group-hover:invert "
          />
          <p className=" font-medium md:text-[14px] text-[12px] leading-[20px]">
            Management
          </p>
        </div> */}

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
            <div className="flex gap-[12px] text-[#8C94A3]  hover:bg-[#3A6BE4] hover:text-white px-[24px] py-[12px] items-center cursor-pointer group" onClick={()=>dispatch(emptySection())}>
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
            <div className="flex gap-[12px] text-[#8C94A3]  hover:bg-[#3A6BE4] hover:text-white px-[24px] py-[12px] items-center cursor-pointer group" onClick={()=>dispatch(emptySection())}>
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
            <div className="flex gap-[12px] text-[#8C94A3]  hover:bg-[#3A6BE4] hover:text-white px-[24px] py-[12px] items-center  cursor-pointer group" onClick={()=>dispatch(emptySection())}>
              <img
                src={chartBar}
                className="object-contain group-hover:filter group-hover:brightness-0 group-hover:invert"
              />
              <p className=" font-medium md:text-[14px] text-[12px] leading-[20px]">
                Reviews
              </p>
            </div>
          </Link>

          <Link to="/referal">
            <div className="flex gap-[12px] text-[#8C94A3]  hover:bg-[#3A6BE4] hover:text-white px-[24px] py-[12px] items-center  cursor-pointer group" onClick={()=>dispatch(emptySection())}>
              <BadgeIndianRupee
                size={24}
                strokeWidth={2}
                className="object-contain group-hover:filter group-hover:brightness-0 group-hover:invert"
              />
              <p className=" font-medium md:text-[14px] text-[12px] leading-[20px]">
                Referral
              </p>
            </div>
          </Link>

          <Link to="/setting">
            <div className="flex gap-[12px] text-[#8C94A3]  hover:bg-[#3A6BE4] hover:text-white px-[24px] py-[12px] items-center  cursor-pointer group" onClick={()=>dispatch(emptySection())}>
              <img
                src={setting}
                className="object-contain group-hover:filter group-hover:brightness-0 group-hover:invert"
              />
              <p className=" font-medium md:text-[14px] text-[12px] leading-[20px]">
                Settings
              </p>
            </div>
          </Link>

          <div className="flex gap-[12px] text-[#8C94A3]  hover:bg-[#3A6BE4] hover:text-white px-[24px] py-[12px] items-center  cursor-pointer mt-auto group" onClick={()=>dispatch(emptySection())}>
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

      {isOpen && (
        <div className="block lg:hidden    bg-[#1D2026] fixed top-0 bottom-0 w-[250px]  z-10">
          <div className="header flex gap-[10px] px-[24px] py-[20px] border-b-[2px] border-opacity-30 border-b-[#6E7485] mb-[10px] items-center">
            <Menu
              size={24}
              strokeWidth={2}
              className="lg:hidden block mr-[20px] left-[5px] text-white "
              onClick={() => dispatch(toggleMenu(!isOpen))}
            />
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

                  <Link to="/scheduleClass">
                    {" "}
                    <div className="flex gap-[10px] text-[#8C94A3] hover:bg-[#3A6BE4] hover:text-white pl-[50px] py-[12px] items-center cursor-pointer group">
                      <TvMinimalPlay
                        size={24}
                        strokeWidth={2}
                        className="object-contain group-hover:filter group-hover:brightness-0 group-hover:invert"
                      />
                      <p className="font-medium md:text-[14px] text-[12px] leading-[20px]">
                        Live Class
                      </p>
                    </div>
                  </Link>
                </>
              )}
            </div>

            {/* <div className="flex gap-[12px] text-[#8C94A3]  hover:bg-[#3A6BE4] hover:text-white px-[24px] py-[12px] items-center cursor-pointer group">
          <img
            src={chartBar}
            className="object-contain group-hover:filter group-hover:brightness-0 group-hover:invert "
          />
          <p className=" font-medium md:text-[14px] text-[12px] leading-[20px]">
            Management
          </p>
        </div> */}

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

            <Link to="/referal">
              <div className="flex gap-[12px] text-[#8C94A3]  hover:bg-[#3A6BE4] hover:text-white px-[24px] py-[12px] items-center  cursor-pointer group">
                <BadgeIndianRupee
                  size={24}
                  strokeWidth={2}
                  className="object-contain group-hover:filter group-hover:brightness-0 group-hover:invert"
                />
                <p className=" font-medium md:text-[14px] text-[12px] leading-[20px]">
                  Referral
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

            <div className="flex gap-[12px] text-[#8C94A3]  hover:bg-[#3A6BE4] hover:text-white px-[24px] py-[12px] items-center  cursor-pointer mt-auto group">
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
      )}
    </>
  );
};

export default Sidebar;
