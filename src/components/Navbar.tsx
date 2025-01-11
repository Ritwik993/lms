import MagnifyingGlass from "../assets/MagnifyingGlass.svg";
import Bell from "../assets/Bell.svg";
import person from "../assets/p.svg";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const routeNames: Record<string, string> = {
    "/": "Home",
    "/dashboard": "Dashboard",
    "/createcourse": "Create a new course",
    "/query": "Query",
    "/scheduleClass": "Schedule Class",
    "/setting": "Setting",
    "/contentcourse": "Create a new course",
    "/testseries": "Add a New Test Series",
    "/addTest": "Add a New Test Series",
    "/testform": "Add a New Test Series",
    "/createtest": "Add a New Test Series",
    "/course": "My Courses",
  };

  const currentPage = routeNames[location.pathname] || "Unkown Page";
  return (
    <div className="font-sans flex xl:px-[160px] md:px-[80px] px-[40px] justify-between items-center md:py-[24px] py-[16px] bg-white">
      <div className="bg-white">
        <p className="text-[#6E7485] font-medium md:text-[14px] text-[10px] md:leading-[20px] leading:[16px] font-sans">
          Good Morning
        </p>
        <p className="font-semibold md:text-[20px] text-[14px] md:leading-[26px] leading-[20px] text-[#1D2026] font-sans">
          {currentPage}
        </p>
      </div>
      <div className="flex md:gap-x-[16px] gap-x-[10px]">
        <div className="hidden md:block searchbox bg-[#F5F7FA] w-[312px] ">
          <div className="flex px-[18px] py-[12px]">
            <img
              src={MagnifyingGlass}
              className="mr-[12px] w-[24px] h-[24px]"
            />
            <input
              type="text"
              placeholder="Search"
              className="w-full h-full border-none outline-none placeholder-[#8C94A3]  text-[16px] leading-[24px] bg-[#F5F7FA] "
            />
          </div>
        </div>

        <div className="md:p-[12px] p-[8px] sm:block hidden bg-[#F5F7FA]">
          <img src={Bell} alt="bell_img" />
        </div>

        <img src={person} className="w-[48px] h-[48px]" />
      </div>
    </div>
  );
};

export default Navbar;
