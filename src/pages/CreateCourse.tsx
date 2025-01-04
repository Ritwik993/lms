import Navbar from "../components/Navbar"
import stack1 from "../assets/Stack1.svg";
import playCircle from "../assets/PlayCircle.svg";
import clipBoard from "../assets/ClipboardText.svg";
import BasicInformation from "../components/BasicInformation";
import AdvanceInformation from "../components/AdvanceInformation";

const CreateCourse = () => {
  return (
    <div className="flex-6 bg-[#F5F7FA]">
      <Navbar/>
      <div className="heading mx-auto w-[80%] mt-[40px] bg-white ">
        <div className="flex border-b-[2px] border-opacity-10 border-b-[#6E7485]">
        <div className="py-[20px] pl-[20px] xl:pr-[126px] pr-[40px]  flex items-center gap-x-[5px]">
          <img src={stack1} className="object-contain"/>
          <p className="text-[#1D2026] font-medium lg:text-[16px] text-[14px] md:leading-[22px] leading-[20px]">Basic Information</p>
        </div>

        <div className="py-[20px] pl-[20px] xl:pr-[126px] pr-[40px] flex items-center gap-x-[5px]">
          <img src={clipBoard} className="object-contain"/>
          <p className="text-[#1D2026] font-medium lg:text-[16px] text-[14px] md:leading-[22px] leading-[20px]">Advance Information</p>
        </div>


        <div className="py-[20px] pl-[20px] xl:pr-[126px] pr-[40px]  flex items-center gap-x-[5px]">
          <img src={playCircle} className="object-contain"/>
          <p className="text-[#1D2026] font-medium lg:text-[16px] text-[14px] md:leading-[22px] leading-[20px]">Publish a course</p>
        </div>
        </div>
        {/* <BasicInformation/> */}
        <AdvanceInformation/>
      </div>

    </div>
  )
}

export default CreateCourse