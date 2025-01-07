import Navbar from "../components/Navbar"
import ScheduleClassTable from "../components/ScheduleClassTable"

const ScheduledClass = () => {
  return (
    <div className="flex-6 bg-[#F5F7FA] ">
        <Navbar/>
        <div className="mt-[58px] mb-[44px] w-[90%] mx-auto">
            <button className="text-white md:text-[14px] text-[12px] leading-[40px] bg-[#3A6BE4] px-[16px] rounded-[4px]">Create New Live Class</button>
        </div>

        <div className="w-[90%] mx-auto ">
            <p className="text-[#1D2026] font-semibold md:text-[24px] text-[20px] md:leading-[32px] leading-[28px] mb-[24px]">Scheduled Live Classes</p>
            <ScheduleClassTable/>
        </div>
    </div>
  )
}

export default ScheduledClass