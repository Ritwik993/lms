import Navbar from "../components/Navbar";
import left_icon from "../assets/left.svg";
import upload from "../assets/UploadSimple.svg";

const Setting = () => {
  return (
    <div className="flex-6 bg-[#F5F7FA]">
      <Navbar />
      <div className="mt-[24px] w-[90%] mx-auto bg-white h-[200px]">
        <p className="pt-[40px] font-semibold lg:text-[24px] text-[20px] leading-[28px] lg:leading-[32px] text-[#1D2026] w-[90%] mx-auto">
          Account Settings
        </p>
        <div className="flex">
          <div className="bg-blue-950 w-[70%] h-[100px]"></div>
          <div className="bg-black w-[30%] h-[100px]">
            <div className="w-full h-full bg-[#F5F7FA] flex flex-col items-center relative">
              <img
                src={left_icon}
                alt="Course Thumbnail Placeholder"
                className="object-contain w-full h-full "
              />
               <button className="upload-btn bg-[#F5F7FA]  text-black px-4 py-2 text-sm font-medium rounded flex items-center gap-2 absolute bottom-0">
                  <p>Upload Image</p>
                  <img
                    src={upload}
                    alt="Upload Icon"
                    className="w-5 h-5 object-contain"
                  />
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
