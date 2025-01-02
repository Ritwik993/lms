import CreateBanner from "../components/CreateBanner"
import InformationBox from "../components/InformationBox"
import Navbar from "../components/Navbar"
import Notification from "../components/Notification"
import Rating from "../components/Rating"
import Revenue from "../components/Revenue"
import { dashItems } from "../constants/dummydata"

const Dashboard = () => {
  return (
    <div className="bg-[#F5F7FA]  pb-[100px] min-h-[100vh] flex-6">
        <Navbar/>
        <div className="md:px-[160px] px-[40px] py-[24px] grid gap-[24px] xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 ">
          {dashItems.map((item)=>{
            return <InformationBox key={item.id} {...item}/>
          })}
        </div>

        <div className="mt-[24px] md:px-[175px] px-[50px] flex lg:flex-row flex-col gap-[25px]">
        <Notification/>
        <CreateBanner/>
        </div>

        <div className="mt-[24px] md:px-[175px] px-[50px] flex lg:flex-row flex-col gap-[25px]">
          <Rating/>
          <Revenue/>
        </div>
    </div>
  )
}

export default Dashboard