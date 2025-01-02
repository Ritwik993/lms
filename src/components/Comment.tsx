import messageIcon from "../assets/message.svg"
const Comment = () => {
  return (
    <div className="flex gap-[12px] px-[20px] py-[12px]  ">
        <div className=" mt-[2px]">
            <img src={messageIcon} className=" object-contain" alt="" />
        </div>
        <div className="flex flex-col justify-start">
            <p>
            <span className="text-[#1D2026] font-semibold md:text-[14px] text-[12px] md:leading-[20px] leading-[18px]">Kevin </span>
            <span className="text-[#4E5566] md:text-[14px] text-[12px] md:leading-[22px] leading-[20px]">comments on your lecture </span>
            <span className="md:text-[14px] text-[12px] text-[#1D2026] md:leading-[22px] leading-[20px]"> “What is ux” in “2021 ui/ux design with figma”</span>
            </p>
            <p className="md:text-[12px] text-[10px] text-[#8C94A3] md:leading-[16px] leading-[14px]">Just now</p>
        </div>
    </div>
  )
}

export default Comment