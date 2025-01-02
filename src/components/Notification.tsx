import Plus_icon from "../assets/PlusCircle.svg";
import Comment from "./Comment";

const Notification=()=>{
    return(
        <div className="flex-1 bg-white">
            <div className="heading flex justify-between items-center py-[16px] px-[20px] border-b-[2px] border-opacity-30 border-b-[#6E7485]">
                <p className="font-medium text-[#1D2026] md:text-[16px] text-[14px] md:leading-[22px] leading-[18px]">Notifications</p>
                <div className="flex gap-[5px]">
                    <img src={Plus_icon} className=" object-contain" alt="add_icon"/>
                    <select className="text-[#6E7485] border-none outline-none">
                        <option>Today</option>
                        <option>Tomorrow</option>
                        <option>Yesterday</option>
                    </select>
                </div>
            </div>
            <div className="messages">
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </div>
    )
}

export default Notification;