import Navbar from "../components/Navbar";
import menu from "../assets/FolderNotchOpen1.svg";
import plus from "../assets/Plus.svg";
import pencil from "../assets/PencilLine.svg";
import trash from "../assets/Trash.svg";
import { Link } from "react-router-dom";
import DownArrow from "../assets/Arrow - Down 2.svg";

const AddTest = () => {
  
  return (
    <div className="flex-1 lg:ml-[250px] bg-[#F5F7FA] h-[100vh] overflow-x-hidden">
      <Navbar />
      <div className="contentBox  mt-[100px] w-[90%] mx-auto min-h-[312px] bg-white ">
        <div className="flex justify-between items-center">
          <div className="flex gap-x-2 lg:p-[24px] p-[12px]">
            <img src={menu} />
            <p className="text-[#1D2026] font-medium text-[16px]">CTET</p>
          </div>

          <div className="flex gap-2 lg:p-[24px] p-[12px]">
            <img src={plus} alt="" className="object-contain" />
            {/* <img src={pencil} alt="" className="object-contain" /> */}
            <img src={trash} alt="" className="object-contain" />
          </div>
        </div>

        <div className="innerContent bg-white w-[95%] mx-auto border-[#989898] border-[2px] rounded-[13px]">
          <div className="flex justify-between items-center">
            <div className="flex gap-x-2 lg:p-[24px] p-[12px]">
              {/* <img src={menu} /> */}
              <p className="text-[#1D2026] font-medium lg:text-[16px] text-[14px]">
                New Test
              </p>
            </div>

            <div className="flex gap-2 lg:p-[24px] p-[12px]">
              <Link to="/contentcourse">
                <div className="flex bg-[#EBEBEB] bg-opacity-25 lg:px-[16px] px-[10px]  gap-x-[4px]">
                  <Link to="/testform">
                    <p className=" text-[#000000] font-semibold lg:text-[14px] text-[12px] lg:leading-[40px] leading-[35px]  ">
                      Add Details
                    </p>
                  </Link>
                  <img src={DownArrow} className="object-contain " />
                </div>
              </Link>
              {/* <img src={plus} alt="" className="object-contain" /> */}
              <img src={pencil} alt="" className="object-contain" />
              <img src={trash} alt="" className="object-contain" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTest;
