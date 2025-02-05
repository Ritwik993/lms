import { useState } from "react"
import LiveClassModal from "../components/LiveClassModal"
import Navbar from "../components/Navbar"
import ScheduleClassTable from "../components/ScheduleClassTable"

import img1 from "../assets/Course image1.svg";


interface TableData {
  id: string;
  course: string;
  courseId: string;
  userId: string;
  instructors: string;
  googleMeetLink: string;
  image: string;
  startDate:string;
  startTime:string;
  status: string;
}


const ScheduledClass = () => {

  const [data, setData] = useState<TableData[]>([
    {
      id: "",
      course: "",
      courseId: "",
      userId: "",
      instructors: "Shreyas",
      googleMeetLink: "",
      status: "",
      startDate:"",
      startTime:"",
      image: img1,
    },
  ]);

  const [isOpen,setIsOpen]=useState(false);
  return (
    <div className="flex-1 lg:ml-[250px] bg-[#F5F7FA] ">
        <Navbar/>
        <div className="mt-[58px] mb-[44px] w-[90%] mx-auto flex gap-x-[30px] items-center">
            <button className="text-white md:text-[14px] text-[12px] leading-[40px] bg-[#3A6BE4] px-[16px] rounded-[4px]" onClick={()=>setIsOpen(true)}>Create New Live Class</button>
            <button className="text-white md:text-[14px] text-[12px] leading-[40px] bg-[#3A6BE4] px-[16px] rounded-[4px]" onClick={()=>setIsOpen(true)}>Create New Youtube Live Class</button>
        </div>

        {isOpen && <LiveClassModal  setIsOpen={setIsOpen}/>}

        <div className="w-[90%] mx-auto ">
            <p className="text-[#1D2026] font-semibold md:text-[24px] text-[20px] md:leading-[32px] leading-[28px] mb-[24px]">Scheduled Live Classes</p>
            <ScheduleClassTable data={data} setData={setData} isOpen={isOpen}/>
        </div>
    </div>
  )
}

export default ScheduledClass