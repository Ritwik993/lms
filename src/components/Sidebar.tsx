import icon from "../assets/icon1.svg";
import chartBar from "../assets/ChartBar1.svg";
import plusCircle from "../assets/PlusCircle1.svg";
import credit from "../assets/CreditCard.svg";
import stack from "../assets/Stack.svg";
import chat from "../assets/ChatCircleDots.svg";
import setting from "../assets/Gear.svg";
import signOut from "../assets/SignOut.svg";

const Sidebar = () => {
  return (
    <div className="hidden xl:block flex-1  bg-[#1D2026]">
      <div className="header flex gap-[10px] px-[24px] py-[20px] border-b-[2px] border-opacity-30 border-b-[#6E7485] mb-[10px]">
        <img src={icon} alt="icon" className="object-contain" />
        <p className="text-white font-semibold lg:text-[24px] text-[20px]">
          OS Code
        </p>
      </div>
      <div className="listContainer">
        <div className="flex gap-[12px] text-[#8C94A3]  hover:bg-[#3A6BE4] hover:text-white px-[24px] py-[12px] items-center cursor-pointer group">
          <img src={chartBar} className="object-contain group-hover:filter group-hover:brightness-0 group-hover:invert" />
          <p className=" font-medium md:text-[14px] text-[12px] leading-[20px]">
            Dashboard
          </p>
        </div>

        <div className="flex gap-[12px] text-[#8C94A3] hover:bg-[#3A6BE4] hover:text-white px-[24px] py-[12px] items-center cursor-pointer group">
          <img
            src={plusCircle}
            className="object-contain group-hover:filter group-hover:brightness-0 group-hover:invert"
            alt="Plus Icon"
          />
          <p className="font-medium md:text-[14px] text-[12px] leading-[20px]">
            Create New Course
          </p>
        </div>

        <div className="flex gap-[12px] text-[#8C94A3]  hover:bg-[#3A6BE4] hover:text-white px-[24px] py-[12px] items-center cursor-pointer group">
          <img src={chartBar} className="object-contain group-hover:filter group-hover:brightness-0 group-hover:invert " />
          <p className=" font-medium md:text-[14px] text-[12px] leading-[20px]">
            Instructors
          </p>
        </div>

        <div className="flex gap-[12px] text-[#8C94A3]  hover:bg-[#3A6BE4] hover:text-white px-[24px] py-[12px] items-center cursor-pointer group">
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
        </div>

        <div className="flex gap-[12px] text-[#8C94A3]  hover:bg-[#3A6BE4] hover:text-white px-[24px] py-[12px] items-center cursor-pointer group">
          <img src={stack} className="object-contain group-hover:filter group-hover:brightness-0 group-hover:invert" />
          <p className=" font-medium md:text-[14px] text-[12px] leading-[20px]">
            Students
          </p>
        </div>

        <div className="flex gap-[12px] text-[#8C94A3]  hover:bg-[#3A6BE4] hover:text-white px-[24px] py-[12px] items-center cursor-pointer group">
          <img src={credit} className="object-contain group-hover:filter group-hover:brightness-0 group-hover:invert" />
          <p className=" font-medium md:text-[14px] text-[12px] leading-[20px]">
            Earnings
          </p>
        </div>

        <div className="flex gap-[12px] text-[#8C94A3]  hover:bg-[#3A6BE4] hover:text-white px-[24px] py-[12px] items-center cursor-pointer group">
          <img src={chat} className="object-contain group-hover:filter group-hover:brightness-0 group-hover:invert " />
          <p className=" font-medium md:text-[14px] text-[12px] leading-[20px]">
            Queries
          </p>
        </div>

        <div className="flex gap-[12px] text-[#8C94A3]  hover:bg-[#3A6BE4] hover:text-white px-[24px] py-[12px] items-center  cursor-pointer group">
          <img src={chartBar} className="object-contain group-hover:filter group-hover:brightness-0 group-hover:invert" />
          <p className=" font-medium md:text-[14px] text-[12px] leading-[20px]">
            Reviews
          </p>
        </div>

        <div className="flex gap-[12px] text-[#8C94A3]  hover:bg-[#3A6BE4] hover:text-white px-[24px] py-[12px] items-center  cursor-pointer group">
          <img src={setting} className="object-contain group-hover:filter group-hover:brightness-0 group-hover:invert" />
          <p className=" font-medium md:text-[14px] text-[12px] leading-[20px]">
            Settings
          </p>
        </div>

        <div className="flex gap-[12px] text-[#8C94A3]  hover:bg-[#3A6BE4] hover:text-white px-[24px] py-[12px] items-center  cursor-pointer mt-[400px] group">
          <img src={signOut} className="object-contain group-hover:filter group-hover:brightness-0 group-hover:invert" />
          <p className=" font-medium md:text-[14px] text-[12px] leading-[20px]">
            Sign out
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
