
const CreateBanner = () => {
  return (
    <div className="flex-1 flex flex-col min-h-[424px] ">
        <div className="heading  bg-white flex justify-between items-center p-[20px]">
        <p className="text-[#1D2026] md:text-[16px] text-[14px] font-medium md:leading-[22px] leading-[20px]">Add Banner</p>
        <div className="flex  gap-[14px]">
            <button className="bg-[#3A6BE4] text-white rounded-[4px] md:px-[18px] px-[16px] py-[8px] md:text-[14px] text-[12px] font-semibold">Website</button>
            <button className="font-semibold md:text-[14px] text-[12px] md:px-[18px] px-[16px] py-[8px] bg-[#CCCCCC] text-white rounded-[4px]">App</button>
        </div>
        </div>
        <div className="middle flex-3 bg-[#E5E5E5]"></div>
        <div className="bottom flex-1 bg-white flex items-center justify-center h-full">
        <button className="bg-[#3A6BE4] text-white rounded-[6px] px-[24px] w-[384px] h-[48px]">Add New Banner</button>
        </div>
    </div>
  )
}

export default CreateBanner;