import menu from "../assets/Menu.svg";
import plus from "../assets/Plus.svg";
import pencil from "../assets/PencilLine.svg";
import trash from "../assets/Trash.svg";
import { Link } from "react-router-dom";
import DownArrow from "../assets/CaretDown.svg";

const Curriculm = () => {
  return (
    <div className="mb-[37px]">
      <div className="heading lg:px-[40px] px-[10px] py-[24px] bg-white flex gap-x-[20px] justify-between items-center border-b-[2px] border-opacity-10 border-b-[#6E7485]">
        <p className="font-semibold text-[#1D2026] lg:text-[24px] text-[18px] md:leading-[32px] leading-[26px] whitespace-nowrap">
          Course Curriculum
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

      <div className="mt-[33px] w-[90%] mx-auto flex justify-between items-center ">
        <div className="flex gap-x-2 lg:p-[24px] p-[12px]">
          <img src={menu} />
          <p className="text-[#1D2026] font-medium text-[16px]">
            Live Class Details
          </p>
        </div>

        <div className="flex gap-2 lg:p-[24px] p-[12px]">
          <img src={plus} alt="" className="object-contain" />
          <img src={pencil} alt="" className="object-contain" />
          <img src={trash} alt="" className="object-contain" />
        </div>
      </div>

      <div className="contentBox  mt-[16px] w-[90%] mx-auto min-h-[312px] bg-[#F5F7FA]">
        <div className="flex justify-between items-center">
          <div className="flex gap-x-2 lg:p-[24px] p-[12px]">
            <img src={menu} />
            <p className="text-[#1D2026] font-medium text-[16px]">Physics</p>
          </div>

          <div className="flex gap-2 lg:p-[24px] p-[12px]">
            <img src={plus} alt="" className="object-contain" />
            {/* <img src={pencil} alt="" className="object-contain" /> */}
            <img src={trash} alt="" className="object-contain" />
          </div>
        </div>

        <div className="innerContent bg-white w-[95%] mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex gap-x-2 lg:p-[24px] p-[12px]">
              <img src={menu} />
              <p className="text-[#1D2026] font-medium lg:text-[16px] text-[14px]">
                Electromagnetism
              </p>
            </div>

            <div className="flex gap-2 lg:p-[24px] p-[12px]">
              <Link to="/contentcourse">
                <div className="flex bg-[#3D70F5] bg-opacity-25 lg:px-[16px] px-[10px]  gap-x-[4px]">
                <p className=" text-[#3A6BE4] font-semibold lg:text-[14px] text-[12px] lg:leading-[40px] leading-[35px]  ">
                  Contents
                </p>
                  <img src={DownArrow} className="object-contain "/>
                </div>
              </Link>
              {/* <img src={plus} alt="" className="object-contain" /> */}
              <img src={pencil} alt="" className="object-contain" />
              <img src={trash} alt="" className="object-contain" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-[90%] mx-auto">
        <button className="mt-[30px] bg-[#3D70F5] bg-opacity-25 text-[#3A6BE4] font-semibold text-[16px] leading-[48px] w-full text-center">
          Add Sections
        </button>
      </div>

      <div className="flex justify-between items-center mt-[32px] pb-[40px] pt-[60px] w-[90%] m-auto">
        <button className="text-[#6E7485] lg:text-[18px] text-[14px] font-semibold lg:leading-[56px] leading-[40px] px-[32px] border-[#E9EAF0] border-[1px]">
          Previous
        </button>
        <button className="lg:text-[18px] text-[14px] font-semibold lg:leading-[56px] leading-[40px] text-white px-[32px] bg-[#3A6BE4]">
          Save & next
        </button>
      </div>
    </div>
  );
};

export default Curriculm;
