import Navbar from "@/components/Navbar"
import FacultyManagement from "@/custom/faculty-management"

const Management = () => {
  return (
    <div className="flex-1 lg:ml-[250px] bg-[#F5F7FA] h-[100vh]">
      <Navbar />
      <div className=" mt-[150px] bg-white">

      <FacultyManagement/>
      </div>
      </div>
  )
}

export default Management