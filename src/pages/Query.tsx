import DataTable from "../components/DataTable"
import Navbar from "../components/Navbar"

const Query = () => {
  return (
    <div className="flex-1 lg:ml-[250px] bg-[#F5F7FA]">
        <Navbar/>
        <div className="w-[90%] mx-auto mt-[62px]">
          <DataTable/>
        </div>
    </div>
  )
}

export default Query