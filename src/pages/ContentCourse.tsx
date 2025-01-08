import MagnifyingGlass from "../assets/MagnifyingGlass.svg";
import Navbar from "../components/Navbar";
import Notepad from "../assets/Notepad.svg";
import Content from "../components/Content";
import Camera from "../assets/Camera.svg";
import Notepad2 from "../assets/Notepad2.svg";

const ContentCourse = () => {
  return (
    <div className="flex-6 bg-[#F5F7FA] overflow-x-hidden">
      <Navbar />
      <div className="pt-[41px] bg-white lg:w-[90%] w-[95%] mx-auto mt-[56px]">
        <div className="flex  justify-between items-center w-[90%] mx-auto gap-x-[20px]">
          <div className="searchbox bg-white lg:max-w-[600px]  w-[60%]">
            <div className="flex lg:px-[18px] px-[16px] lg:py-[12px] py-[10px] border-[#E9EAF0] border">
              <img
                src={MagnifyingGlass}
                className="mr-[12px] w-[24px] h-[24px]"
              />
              <input
                type="text"
                placeholder="Search"
                className="w-full h-full border-none outline-none placeholder-[#8C94A3]  text-[16px] leading-[24px] bg-white  "
              />
            </div>
          </div>
          <div className="flex  justify-between  items-center w-[30%] min-w-max gap-x-[14px] ">
            <button className="font-semibold lg:text-[16px] text-[14px] text-white lg:leading-[48px] leading-[40px] bg-[#3A6BE4] lg:px-[24px] px-[18px]">
              Save
            </button>
            <div className="flex lg:gap-[12px] gap-[8px] items-center justify-center font-semibold lg:text-[16px] lg:px-[24px] px-[18px] text-[14px] text-[#000000] lg:leading-[48px] leading-[40px] bg-[#FDFDFD] min-w-max drop-shadow-md">
              <img src={Notepad} alt="" className="" />
              <button className="">Bulk Action</button>
            </div>
          </div>
        </div>

        <div className="w-[90%] mx-auto pb-[100px] ">
          <p className="font-semibold lg:text-[24px] text-[20px] text-[#1D2026] lg:leading-[32px] leading-[28px] p-[24px]">
            Course Content
          </p>
          <div className="min-h-[312px] bg-[#F5F7FA] ">
            <div className="pt-[40px]  pb-[100px] w-[90%] mx-auto">
              <div className="flex lg:gap-x-[40px] gap-x-[20px]">
                <Content />
                <div className="flex flex-col gap-[5px]">
                  <p className="text-[14px] text-[#000000] font-medium lg:leading-[22px] leading-[18px]">
                    ADD CONTENT
                  </p>

                  <div className="bg-white lg:min-w-[170px] min-w-[100px] p-[10px] rounded-[10px] flex gap-x-[4px]">
                    <img src={Camera} className="object-contain"/>
                    <p>Video</p>
                  </div>

                  <div className="bg-white lg:min-w-[170px] min-w-[100px] p-[10px] rounded-[10px] flex gap-x-[4px]">
                    <img src={Notepad2} className="object-contain"/>
                    <p>Notes</p>
                  </div>


                  <div className="bg-white lg:min-w-[170px] min-w-[100px] p-[10px] rounded-[10px] flex gap-x-[4px]">
                    <img src={Camera} className="object-contain"/>
                    <p>Test</p>
                  </div>



                  <div className="bg-white lg:min-w-[170px] min-w-[100px] p-[10px] rounded-[10px] flex gap-x-[4px]">
                    <img src={Camera} className="object-contain"/>
                    <p>DPP</p>
                  </div>



                  <div className="bg-white lg:min-w-[170px] min-w-[100px] p-[10px] rounded-[10px] flex gap-x-[4px]">
                    <img src={Camera} className="object-contain"/>
                    <p>Assignment</p>
                  </div>



                  <div className="bg-white lg:min-w-[170px] min-w-[100px] p-[10px] rounded-[10px] flex gap-x-[4px]">
                    <img src={Camera} className="object-contain"/>
                    <p>Video</p>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCourse;
