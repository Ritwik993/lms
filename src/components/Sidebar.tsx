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
import { Facebook } from "lucide-react";
import { UserCog } from "lucide-react";

import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../utils/store";
import { Menu } from "lucide-react";
import { toggleMenu } from "../utils/appSlice";
import { setActiveTab } from "../utils/activeTabSlice";
import { addEditId } from "../utils/editSlice";
import { emptySection } from "../utils/sectionSlice";
import { deleteSubject } from "@/utils/subjectSlice";

const Sidebar = () => {
  const [active, setActive] = useState(false);
  // const [showMgmt, setShowMgmt] = useState(false);
  const isOpen = useSelector((store: RootState) => store.toggle);
  const dispatch = useDispatch();
  // const sections = useSelector((store: RootState) => store.section.sections);

  return (
    <div className="sidebar ">
      <div className="hidden lg:block  bg-[#1D2026] fixed top-0 bottom-0 w-[250px] z-10  overflow-y-scroll  scrollbar-hidden ">
        <div className="header flex gap-[10px] px-[24px] py-[20px] border-b-[2px] border-opacity-30 border-b-[#6E7485] mb-[10px]">
          <img src={icon} alt="icon" className="object-contain" />
          <p className="text-white font-semibold lg:text-[24px] text-[20px]">
            OS Code
          </p>
        </div>
        <div className="listContainer">
          <Link to="/dashboard">
            <div
              className="flex gap-[12px] text-[#8C94A3]  hover:bg-[#3A6BE4] hover:text-white px-[24px] py-[12px] items-center cursor-pointer group"
              onClick={() => {
                dispatch(emptySection());
                dispatch(deleteSubject());
              }}
            >
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
                      dispatch(emptySection());
                      dispatch(deleteSubject());
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
                  <div
                    className="flex gap-[10px] text-[#8C94A3] hover:bg-[#3A6BE4] hover:text-white pl-[50px] py-[12px] items-center cursor-pointer group"
                    onClick={() => {
                      dispatch(emptySection());
                      dispatch(deleteSubject());
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
                  </div>
                </Link>

                <Link to="/scheduleClass">
                  {" "}
                  <div
                    className="flex gap-[10px] text-[#8C94A3] hover:bg-[#3A6BE4] hover:text-white pl-[50px] py-[12px] items-center cursor-pointer group"
                    onClick={() => {
                      dispatch(emptySection());
                      dispatch(deleteSubject());
                    }}
                  >
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
                  <div
                    className="flex gap-[10px] text-[#8C94A3] hover:bg-[#3A6BE4] hover:text-white pl-[50px] py-[12px] items-center cursor-pointer group"
                    onClick={() => {
                      dispatch(emptySection());
                      dispatch(deleteSubject());
                    }}
                  >
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
            <div
              className="flex gap-[12px] text-[#8C94A3]  hover:bg-[#3A6BE4] hover:text-white px-[24px] py-[12px] items-center cursor-pointer group"
              onClick={() => {
                dispatch(emptySection());
                dispatch(deleteSubject());
              }}
            >
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
            <div
              className="flex gap-[12px] text-[#8C94A3]  hover:bg-[#3A6BE4] hover:text-white px-[24px] py-[12px] items-center cursor-pointer group"
              onClick={() => {
                dispatch(emptySection());
                dispatch(deleteSubject());
              }}
            >
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
            <div
              className="flex gap-[12px] text-[#8C94A3]  hover:bg-[#3A6BE4] hover:text-white px-[24px] py-[12px] items-center  cursor-pointer group"
              onClick={() => {
                dispatch(emptySection());
                dispatch(deleteSubject());
              }}
            >
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
            <div
              className="flex gap-[12px] text-[#8C94A3]  hover:bg-[#3A6BE4] hover:text-white px-[24px] py-[12px] items-center  cursor-pointer group"
              onClick={() => {
                dispatch(emptySection());
                dispatch(deleteSubject());
              }}
            >
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
            <div
              className="flex gap-[12px] text-[#8C94A3]  hover:bg-[#3A6BE4] hover:text-white px-[24px] py-[12px] items-center  cursor-pointer group"
              onClick={() => {
                dispatch(emptySection());
                dispatch(deleteSubject());
                // setShowMgmt((prev) => !prev);
              }}
            >
              <img
                src={setting}
                className="object-contain group-hover:filter group-hover:brightness-0 group-hover:invert"
              />
              <p className=" font-medium md:text-[14px] text-[12px] leading-[20px]">
                Settings
              </p>
            </div>
          </Link>

          <Link to="/management">
            <div
              className="flex gap-[12px] text-[#8C94A3]  hover:bg-[#3A6BE4] hover:text-white px-[24px] py-[12px] items-center  cursor-pointer group"
              onClick={() => {
                dispatch(emptySection());
                dispatch(deleteSubject());
                // setShowMgmt((prev) => !prev);
              }}
            >
              <UserCog className="object-contain group-hover:filter group-hover:brightness-0 group-hover:invert" />
              <p className="font-medium md:text-[14px] text-[12px] leading-[20px] min-w-max">
                Management
              </p>
            </div>
          </Link>

          <div
            className="flex gap-[12px] text-[#8C94A3]  hover:bg-[#3A6BE4] hover:text-white px-[24px] py-[12px] items-center  cursor-pointer mt-auto group"
            onClick={() => {
              dispatch(emptySection());
              dispatch(deleteSubject());
            }}
          >
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
              <div
                className="flex gap-[12px] text-[#8C94A3]  hover:bg-[#3A6BE4] hover:text-white px-[24px] py-[12px] items-center cursor-pointer group"
                onClick={() => {
                  dispatch(emptySection());
                  dispatch(deleteSubject());
                }}
              >
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
                    <div
                      className="flex gap-[10px] text-[#8C94A3] hover:bg-[#3A6BE4] hover:text-white pl-[50px] py-[12px] items-center cursor-pointer group"
                      onClick={() => {
                        dispatch(setActiveTab("basic"));
                        dispatch(addEditId(null));
                        dispatch(emptySection());
                        dispatch(deleteSubject());
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
                    <div
                      className="flex gap-[10px] text-[#8C94A3] hover:bg-[#3A6BE4] hover:text-white pl-[50px] py-[12px] items-center cursor-pointer group"
                      onClick={() => {
                        dispatch(emptySection());
                        dispatch(deleteSubject());
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
                    </div>
                  </Link>

                  <Link to="/scheduleClass">
                    {" "}
                    <div
                      className="flex gap-[10px] text-[#8C94A3] hover:bg-[#3A6BE4] hover:text-white pl-[50px] py-[12px] items-center cursor-pointer group"
                      onClick={() => {
                        dispatch(emptySection());
                        dispatch(deleteSubject());
                      }}
                    >
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
                    <div
                      className="flex gap-[10px] text-[#8C94A3] hover:bg-[#3A6BE4] hover:text-white pl-[50px] py-[12px] items-center cursor-pointer group"
                      onClick={() => {
                        dispatch(emptySection());
                        dispatch(deleteSubject());
                      }}
                    >
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
              <div
                className="flex gap-[12px] text-[#8C94A3]  hover:bg-[#3A6BE4] hover:text-white px-[24px] py-[12px] items-center cursor-pointer group"
                onClick={() => {
                  dispatch(emptySection());
                  dispatch(deleteSubject());
                }}
              >
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
              <div
                className="flex gap-[12px] text-[#8C94A3]  hover:bg-[#3A6BE4] hover:text-white px-[24px] py-[12px] items-center cursor-pointer group"
                onClick={() => {
                  dispatch(emptySection());
                  dispatch(deleteSubject());
                }}
              >
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
              <div
                className="flex gap-[12px] text-[#8C94A3]  hover:bg-[#3A6BE4] hover:text-white px-[24px] py-[12px] items-center  cursor-pointer group"
                onClick={() => {
                  dispatch(emptySection());
                  dispatch(deleteSubject());
                }}
              >
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
              <div
                className="flex gap-[12px] text-[#8C94A3]  hover:bg-[#3A6BE4] hover:text-white px-[24px] py-[12px] items-center  cursor-pointer group"
                onClick={() => {
                  dispatch(emptySection());
                  dispatch(deleteSubject());
                }}
              >
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
              <div
                className="flex gap-[12px] text-[#8C94A3]  hover:bg-[#3A6BE4] hover:text-white px-[24px] py-[12px] items-center  cursor-pointer group"
                onClick={() => {
                  dispatch(emptySection());
                  dispatch(deleteSubject());
                }}
              >
                <img
                  src={setting}
                  className="object-contain group-hover:filter group-hover:brightness-0 group-hover:invert"
                />
                <p className=" font-medium md:text-[14px] text-[12px] leading-[20px]">
                  Settings
                </p>
              </div>
            </Link>

            <Link to="/management">
            <div
              className="flex gap-[12px] text-[#8C94A3]  hover:bg-[#3A6BE4] hover:text-white px-[24px] py-[12px] items-center  cursor-pointer group"
              onClick={() => {
                dispatch(emptySection());
                dispatch(deleteSubject());
                // setShowMgmt((prev) => !prev);
              }}
            >
              <UserCog className="object-contain group-hover:filter group-hover:brightness-0 group-hover:invert" />
              <p className="font-medium md:text-[14px] text-[12px] leading-[20px] min-w-max">
                Management
              </p>
            </div>
          </Link>

            <div
              className="flex gap-[12px] text-[#8C94A3]  hover:bg-[#3A6BE4] hover:text-white px-[24px] py-[12px] items-center  cursor-pointer mt-auto group"
              onClick={() => {
                dispatch(emptySection());
                dispatch(deleteSubject());
              }}
            >
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
    </div>
  );
};

export default Sidebar;

// import icon from "../assets/icon1.svg"
// import chartBar from "../assets/ChartBar1.svg"
// import plusCircle from "../assets/PlusCircle1.svg"
// import stack from "../assets/Stack.svg"
// import { Book } from "lucide-react"
// import chat from "../assets/ChatCircleDots.svg"
// import setting from "../assets/Gear.svg"
// import signOut from "../assets/SignOut.svg"
// import { ChevronDown } from "lucide-react"
// import { ChevronUp } from "lucide-react"
// import { MonitorPlayIcon as TvMinimalPlay } from "lucide-react"
// import { BadgeIndianRupee } from "lucide-react"
// import { Facebook } from "lucide-react"

// import { useState } from "react"
// import { Link } from "react-router-dom"
// import { useDispatch, useSelector } from "react-redux"
// import type { RootState } from "../utils/store"
// import { Menu } from "lucide-react"
// import { toggleMenu } from "../utils/appSlice"
// import { setActiveTab } from "../utils/activeTabSlice"
// import { addEditId } from "../utils/editSlice"
// import { emptySection } from "../utils/sectionSlice"
// import { deleteSubject } from "@/utils/subjectSlice"

// const Sidebar = () => {
//   const [active, setActive] = useState(false)
//   const isOpen = useSelector((store: RootState) => store.toggle)
//   const dispatch = useDispatch()
//   // const sections = useSelector((store: RootState) => store.section.sections);

//   return (
//     <>
//       <div className="hidden lg:flex flex-col h-screen bg-[#1D2026] fixed top-0 bottom-0 w-[250px] z-10 shadow-xl">
//         {/* Header */}
//         <div className="header flex items-center gap-3 px-6 py-5 border-b border-[#6E7485]/30">
//           <img src={icon || "/placeholder.svg"} alt="icon" className="w-8 h-8 object-contain" />
//           <p className="text-white font-semibold text-xl lg:text-2xl">OS Code</p>
//         </div>

//         {/* Menu items container */}
//         <div className="flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-[#6E7485]/20 scrollbar-track-transparent">
//           <Link to="/dashboard">
//             <div
//               className="flex items-center gap-3 text-[#8C94A3] hover:bg-[#3A6BE4] hover:text-white px-6 py-3 cursor-pointer transition-colors duration-200 group rounded-md"
//               onClick={() => {
//                 dispatch(emptySection())
//                 dispatch(deleteSubject())
//               }}
//             >
//               <img
//                 src={chartBar || "/placeholder.svg"}
//                 className="w-5 h-5 object-contain group-hover:filter group-hover:brightness-0 group-hover:invert"
//               />
//               <p className="font-medium text-sm leading-5">Dashboard</p>
//             </div>
//           </Link>

//           <div className="flex flex-col ">
//             <div
//               className="flex items-center gap-3 text-[#8C94A3] hover:bg-[#3A6BE4] hover:text-white px-6 py-3 cursor-pointer transition-colors duration-200 group"
//               onClick={() => {
//                 setActive(!active)
//                 // dispatch(setActiveTab("basic"));
//               }}
//             >
//               <Book
//                 size={20}
//                 className="object-contain group-hover:filter group-hover:brightness-0 group-hover:invert"
//               />
//               <p className="font-medium text-sm leading-5">Course</p>
//               <div className="flex-1">
//                 {active ? (
//                   <ChevronUp
//                     size={18}
//                     className="ml-auto object-contain group-hover:filter group-hover:brightness-0 group-hover:invert"
//                   />
//                 ) : (
//                   <ChevronDown
//                     size={18}
//                     className="ml-auto object-contain group-hover:filter group-hover:brightness-0 group-hover:invert"
//                   />
//                 )}
//               </div>
//             </div>

//             {active && (
//               <>
//                 <Link to="/createcourse">
//                   <div
//                     className="flex items-center gap-3 text-[#8C94A3] hover:bg-[#3A6BE4] hover:text-white pl-12 pr-6 py-3 cursor-pointer transition-colors duration-200 group border-l border-[#6E7485]/20 ml-6"
//                     onClick={() => {
//                       dispatch(setActiveTab("basic"))
//                       dispatch(addEditId(null))
//                       dispatch(emptySection())
//                       dispatch(deleteSubject())
//                     }}
//                   >
//                     <img
//                       src={plusCircle || "/placeholder.svg"}
//                       className="w-5 h-5 object-contain group-hover:filter group-hover:brightness-0 group-hover:invert"
//                       alt="Plus Icon"
//                     />
//                     <p className="font-medium text-sm leading-5 min-w-max">Create Course</p>
//                   </div>
//                 </Link>

//                 <Link to="/course">
//                   {" "}
//                   <div
//                     className="flex items-center gap-3 text-[#8C94A3] hover:bg-[#3A6BE4] hover:text-white pl-12 pr-6 py-3 cursor-pointer transition-colors duration-200 group border-l border-[#6E7485]/20 ml-6"
//                     onClick={() => {
//                       dispatch(emptySection())
//                       dispatch(deleteSubject())
//                     }}
//                   >
//                     <Book
//                       size={20}
//                       className="object-contain group-hover:filter group-hover:brightness-0 group-hover:invert"
//                     />
//                     <p className="font-medium text-sm leading-5">Course</p>
//                   </div>
//                 </Link>

//                 <Link to="/scheduleClass">
//                   {" "}
//                   <div
//                     className="flex items-center gap-3 text-[#8C94A3] hover:bg-[#3A6BE4] hover:text-white pl-12 pr-6 py-3 cursor-pointer transition-colors duration-200 group border-l border-[#6E7485]/20 ml-6"
//                     onClick={() => {
//                       dispatch(emptySection())
//                       dispatch(deleteSubject())
//                     }}
//                   >
//                     <TvMinimalPlay
//                       size={20}
//                       className="object-contain group-hover:filter group-hover:brightness-0 group-hover:invert"
//                     />
//                     <p className="font-medium text-sm leading-5">Live Class</p>
//                   </div>
//                 </Link>

//                 <Link to="/free">
//                   {" "}
//                   <div
//                     className="flex items-center gap-3 text-[#8C94A3] hover:bg-[#3A6BE4] hover:text-white pl-12 pr-6 py-3 cursor-pointer transition-colors duration-200 group border-l border-[#6E7485]/20 ml-6"
//                     onClick={() => {
//                       dispatch(emptySection())
//                       dispatch(deleteSubject())
//                     }}
//                   >
//                     <Facebook
//                       size={20}
//                       className="object-contain group-hover:filter group-hover:brightness-0 group-hover:invert"
//                     />
//                     <p className="font-medium text-sm leading-5">Free Videos</p>
//                   </div>
//                 </Link>
//               </>
//             )}
//           </div>

//           <Link to="/testseries">
//             <div
//               className="flex items-center gap-3 text-[#8C94A3] hover:bg-[#3A6BE4] hover:text-white px-6 py-3 cursor-pointer transition-colors duration-200 group rounded-md"
//               onClick={() => {
//                 dispatch(emptySection())
//                 dispatch(deleteSubject())
//               }}
//             >
//               <img
//                 src={stack || "/placeholder.svg"}
//                 className="w-5 h-5 object-contain group-hover:filter group-hover:brightness-0 group-hover:invert"
//               />
//               <p className="font-medium text-sm leading-5">Test Series</p>
//             </div>
//           </Link>

//           <Link to="/query">
//             <div
//               className="flex items-center gap-3 text-[#8C94A3] hover:bg-[#3A6BE4] hover:text-white px-6 py-3 cursor-pointer transition-colors duration-200 group rounded-md"
//               onClick={() => {
//                 dispatch(emptySection())
//                 dispatch(deleteSubject())
//               }}
//             >
//               <img
//                 src={chat || "/placeholder.svg"}
//                 className="w-5 h-5 object-contain group-hover:filter group-hover:brightness-0 group-hover:invert"
//               />
//               <p className="font-medium text-sm leading-5">Queries</p>
//             </div>
//           </Link>

//           <Link to="/review">
//             <div
//               className="flex items-center gap-3 text-[#8C94A3] hover:bg-[#3A6BE4] hover:text-white px-6 py-3 cursor-pointer transition-colors duration-200 group rounded-md"
//               onClick={() => {
//                 dispatch(emptySection())
//                 dispatch(deleteSubject())
//               }}
//             >
//               <img
//                 src={chartBar || "/placeholder.svg"}
//                 className="w-5 h-5 object-contain group-hover:filter group-hover:brightness-0 group-hover:invert"
//               />
//               <p className="font-medium text-sm leading-5">Reviews</p>
//             </div>
//           </Link>

//           <Link to="/referal">
//             <div
//               className="flex items-center gap-3 text-[#8C94A3] hover:bg-[#3A6BE4] hover:text-white px-6 py-3 cursor-pointer transition-colors duration-200 group rounded-md"
//               onClick={() => {
//                 dispatch(emptySection())
//                 dispatch(deleteSubject())
//               }}
//             >
//               <BadgeIndianRupee
//                 size={20}
//                 className="object-contain group-hover:filter group-hover:brightness-0 group-hover:invert"
//               />
//               <p className="font-medium text-sm leading-5">Referral</p>
//             </div>
//           </Link>

//           <Link to="/setting">
//             <div
//               className="flex items-center gap-3 text-[#8C94A3] hover:bg-[#3A6BE4] hover:text-white px-6 py-3 cursor-pointer transition-colors duration-200 group rounded-md"
//               onClick={() => {
//                 dispatch(emptySection())
//                 dispatch(deleteSubject())
//               }}
//             >
//               <img
//                 src={setting || "/placeholder.svg"}
//                 className="w-5 h-5 object-contain group-hover:filter group-hover:brightness-0 group-hover:invert"
//               />
//               <p className="font-medium text-sm leading-5">Settings</p>
//             </div>
//           </Link>
//         </div>

//         {/* Sign out button */}
//         <div className="mt-auto pt-4 border-t border-[#6E7485]/20 mx-4 mb-4">
//           <div
//             className="flex items-center gap-3 text-[#8C94A3] hover:bg-[#3A6BE4] hover:text-white px-6 py-3 cursor-pointer transition-colors duration-200 group rounded-md"
//             onClick={() => {
//               dispatch(emptySection())
//               dispatch(deleteSubject())
//             }}
//           >
//             <img
//               src={signOut || "/placeholder.svg"}
//               className="w-5 h-5 object-contain group-hover:filter group-hover:brightness-0 group-hover:invert"
//             />
//             <p className="font-medium text-sm leading-5">Sign out</p>
//           </div>
//         </div>
//       </div>

//       {isOpen && (
//         <div className="block lg:hidden bg-[#1D2026] fixed top-0 bottom-0 w-[250px] z-10 shadow-xl animate-in slide-in-from-left duration-300">
//           <div className="header flex items-center gap-3 px-6 py-5 border-b border-[#6E7485]/30 mb-3">
//             <Menu
//               size={24}
//               strokeWidth={2}
//               className="lg:hidden block text-white cursor-pointer hover:text-[#3A6BE4] transition-colors duration-200"
//               onClick={() => dispatch(toggleMenu(!isOpen))}
//             />
//             <img src={icon || "/placeholder.svg"} alt="icon" className="w-8 h-8 object-contain" />
//             <p className="text-white font-semibold text-xl lg:text-2xl">OS Code</p>
//           </div>
//           <div className="listContainer">
//             <Link to="/dashboard">
//               <div
//                 className="flex items-center gap-3 text-[#8C94A3] hover:bg-[#3A6BE4] hover:text-white px-6 py-3 cursor-pointer transition-colors duration-200 group rounded-md"
//                 onClick={() => {
//                   dispatch(emptySection())
//                   dispatch(deleteSubject())
//                 }}
//               >
//                 <img
//                   src={chartBar || "/placeholder.svg"}
//                   className="w-5 h-5 object-contain group-hover:filter group-hover:brightness-0 group-hover:invert"
//                 />
//                 <p className="font-medium text-sm leading-5">Dashboard</p>
//               </div>
//             </Link>

//             <div className="flex flex-col ">
//               <div
//                 className="flex items-center gap-3 text-[#8C94A3] hover:bg-[#3A6BE4] hover:text-white px-6 py-3 cursor-pointer transition-colors duration-200 group"
//                 onClick={() => setActive(!active)}
//               >
//                 <Book
//                   size={20}
//                   className="object-contain group-hover:filter group-hover:brightness-0 group-hover:invert"
//                 />
//                 <p className="font-medium text-sm leading-5">Course</p>
//                 <div className="flex-1">
//                   {active ? (
//                     <ChevronUp
//                       size={18}
//                       className="ml-auto object-contain group-hover:filter group-hover:brightness-0 group-hover:invert"
//                     />
//                   ) : (
//                     <ChevronDown
//                       size={18}
//                       className="ml-auto object-contain group-hover:filter group-hover:brightness-0 group-hover:invert"
//                     />
//                   )}
//                 </div>
//               </div>

//               {active && (
//                 <>
//                   <Link to="/createcourse">
//                     <div
//                       className="flex items-center gap-3 text-[#8C94A3] hover:bg-[#3A6BE4] hover:text-white pl-12 pr-6 py-3 cursor-pointer transition-colors duration-200 group border-l border-[#6E7485]/20 ml-6"
//                       onClick={() => {
//                         dispatch(setActiveTab("basic"))
//                         dispatch(addEditId(null))
//                         dispatch(emptySection())
//                         dispatch(deleteSubject())
//                       }}
//                     >
//                       <img
//                         src={plusCircle || "/placeholder.svg"}
//                         className="w-5 h-5 object-contain group-hover:filter group-hover:brightness-0 group-hover:invert"
//                         alt="Plus Icon"
//                       />
//                       <p className="font-medium text-sm leading-5 min-w-max">Create Course</p>
//                     </div>
//                   </Link>

//                   <Link to="/course">
//                     {" "}
//                     <div
//                       className="flex items-center gap-3 text-[#8C94A3] hover:bg-[#3A6BE4] hover:text-white pl-12 pr-6 py-3 cursor-pointer transition-colors duration-200 group border-l border-[#6E7485]/20 ml-6"
//                       onClick={() => {
//                         dispatch(emptySection())
//                         dispatch(deleteSubject())
//                       }}
//                     >
//                       <Book
//                         size={20}
//                         className="object-contain group-hover:filter group-hover:brightness-0 group-hover:invert"
//                       />
//                       <p className="font-medium text-sm leading-5">Course</p>
//                     </div>
//                   </Link>

//                   <Link to="/scheduleClass">
//                     {" "}
//                     <div
//                       className="flex items-center gap-3 text-[#8C94A3] hover:bg-[#3A6BE4] hover:text-white pl-12 pr-6 py-3 cursor-pointer transition-colors duration-200 group border-l border-[#6E7485]/20 ml-6"
//                       onClick={() => {
//                         dispatch(emptySection())
//                         dispatch(deleteSubject())
//                       }}
//                     >
//                       <TvMinimalPlay
//                         size={20}
//                         className="object-contain group-hover:filter group-hover:brightness-0 group-hover:invert"
//                       />
//                       <p className="font-medium text-sm leading-5">Live Class</p>
//                     </div>
//                   </Link>

//                   <Link to="/free">
//                     {" "}
//                     <div
//                       className="flex items-center gap-3 text-[#8C94A3] hover:bg-[#3A6BE4] hover:text-white pl-12 pr-6 py-3 cursor-pointer transition-colors duration-200 group border-l border-[#6E7485]/20 ml-6"
//                       onClick={() => {
//                         dispatch(emptySection())
//                         dispatch(deleteSubject())
//                       }}
//                     >
//                       <Facebook
//                         size={20}
//                         className="object-contain group-hover:filter group-hover:brightness-0 group-hover:invert"
//                       />
//                       <p className="font-medium text-sm leading-5">Free Videos</p>
//                     </div>
//                   </Link>
//                 </>
//               )}
//             </div>

//             <Link to="/testseries">
//               <div
//                 className="flex items-center gap-3 text-[#8C94A3] hover:bg-[#3A6BE4] hover:text-white px-6 py-3 cursor-pointer transition-colors duration-200 group rounded-md"
//                 onClick={() => {
//                   dispatch(emptySection())
//                   dispatch(deleteSubject())
//                 }}
//               >
//                 <img
//                   src={stack || "/placeholder.svg"}
//                   className="w-5 h-5 object-contain group-hover:filter group-hover:brightness-0 group-hover:invert"
//                 />
//                 <p className="font-medium text-sm leading-5">Test Series</p>
//               </div>
//             </Link>

//             <Link to="/query">
//               <div
//                 className="flex items-center gap-3 text-[#8C94A3] hover:bg-[#3A6BE4] hover:text-white px-6 py-3 cursor-pointer transition-colors duration-200 group rounded-md"
//                 onClick={() => {
//                   dispatch(emptySection())
//                   dispatch(deleteSubject())
//                 }}
//               >
//                 <img
//                   src={chat || "/placeholder.svg"}
//                   className="w-5 h-5 object-contain group-hover:filter group-hover:brightness-0 group-hover:invert"
//                 />
//                 <p className="font-medium text-sm leading-5">Queries</p>
//               </div>
//             </Link>

//             <Link to="/review">
//               <div
//                 className="flex items-center gap-3 text-[#8C94A3] hover:bg-[#3A6BE4] hover:text-white px-6 py-3 cursor-pointer transition-colors duration-200 group rounded-md"
//                 onClick={() => {
//                   dispatch(emptySection())
//                   dispatch(deleteSubject())
//                 }}
//               >
//                 <img
//                   src={chartBar || "/placeholder.svg"}
//                   className="w-5 h-5 object-contain group-hover:filter group-hover:brightness-0 group-hover:invert"
//                 />
//                 <p className="font-medium text-sm leading-5">Reviews</p>
//               </div>
//             </Link>

//             <Link to="/referal">
//               <div
//                 className="flex items-center gap-3 text-[#8C94A3] hover:bg-[#3A6BE4] hover:text-white px-6 py-3 cursor-pointer transition-colors duration-200 group rounded-md"
//                 onClick={() => {
//                   dispatch(emptySection())
//                   dispatch(deleteSubject())
//                 }}
//               >
//                 <BadgeIndianRupee
//                   size={20}
//                   className="object-contain group-hover:filter group-hover:brightness-0 group-hover:invert"
//                 />
//                 <p className="font-medium text-sm leading-5">Referral</p>
//               </div>
//             </Link>

//             <Link to="/setting">
//               <div
//                 className="flex items-center gap-3 text-[#8C94A3] hover:bg-[#3A6BE4] hover:text-white px-6 py-3 cursor-pointer transition-colors duration-200 group rounded-md"
//                 onClick={() => {
//                   dispatch(emptySection())
//                   dispatch(deleteSubject())
//                 }}
//               >
//                 <img
//                   src={setting || "/placeholder.svg"}
//                   className="w-5 h-5 object-contain group-hover:filter group-hover:brightness-0 group-hover:invert"
//                 />
//                 <p className="font-medium text-sm leading-5">Settings</p>
//               </div>
//             </Link>

//             <div
//               className="flex items-center gap-3 text-[#8C94A3] hover:bg-[#3A6BE4] hover:text-white px-6 py-3 cursor-pointer transition-colors duration-200 group rounded-md"
//               onClick={() => {
//                 dispatch(emptySection())
//                 dispatch(deleteSubject())
//               }}
//             >
//               <img
//                 src={signOut || "/placeholder.svg"}
//                 className="w-5 h-5 object-contain group-hover:filter group-hover:brightness-0 group-hover:invert"
//               />
//               <p className="font-medium text-sm leading-5">Sign out</p>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   )
// }

// export default Sidebar
