import { FC } from "react";
import { DashItem } from "../types/type";
const InformationBox:FC<DashItem> = ({count,title,image}) => {
  return (
    <div className="md:p-[24px] p-[18px]  bg-white flex md:gap-[24px] gap-[16px] items-center md:justify-center">
        <div>
            <img src={image} />
        </div>
        <div>
            <p className="text-[#1D2026] md:text-[24px] text-[20px] md:leading-[32px] leading-[20px] ">{count}</p>
            <p className="md:text-[14px] text-[12px] text-[#4E5566] md:leading-[22px] leading-[18px]">{title}</p>
        </div>
    </div>
  )
}

export default InformationBox