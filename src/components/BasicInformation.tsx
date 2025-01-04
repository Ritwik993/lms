
const BasicInformation = () => {
  return (
    <div className="mb-[37px]">
        <div className="heading px-[40px] py-[24px] bg-white flex justify-between items-center">
            <p className="font-semibold text-[#1D2026] md:text-[24px] text-[20px] md:leading-[32px] leading-[28px]">Basic Information</p>
            <div>
                <button className="bg-[#E8EEFF] text-[#3A6BE4] px-[24px]  md:text-[16px] text-[14px] font-semibold md:leading-[48px] leading-[40px]">Save</button>
                <button className="text-[#3A6BE4] px-[24px] md:text-[16px] text-[14px] font-semibold md:leading-[48px] leading-[40px]">Save and Preview</button>
            </div>
        </div>
        <form className="mt-[32px] flex flex-col gap-y-[24px]">
          <div className="w-[90%] m-auto relative">
          <p className="text-[#1D2026] md:text-[14px] text-[12px] md:leading-[22px] leading-[20px]">Title</p>
          <input placeholder="Your course title" className=" placeholder:text-[#8C94A3] border-[#E9EAF0] w-full h-full border-[2px] py-[10px] px-[10px]  outline-none"/>
          <span className="text-[#8C94A3] md:text-[14px] text-[12px] absolute right-[20px] bottom-[10px]">0/80</span>
          </div>


          <div className="w-[90%] m-auto relative">
          <p className="text-[#1D2026] md:text-[14px] text-[12px] md:leading-[22px] leading-[20px]">Subtitle</p>
          <input placeholder="Your course subtitle" className=" placeholder:text-[#8C94A3] border-[#E9EAF0] w-full h-full border-[2px] py-[10px] px-[10px]  outline-none"/>
          <span className="text-[#8C94A3] md:text-[14px] text-[12px] absolute right-[20px] bottom-[10px]">0/80</span>
          </div>



          <div className="w-[90%] m-auto  flex justify-between items-center gap-[10px]">
            <div className="flex-1">
            <p className="text-[#1D2026] lg:text-[14px] text-[12px] md:leading-[22px] leading-[20px]">Course Category</p>
            <select className="border-[#E9EAF0] text-[#8C94A3] w-full  border-[2px] py-[10px] px-[10px]  outline-none">
                <option>Select</option>
                <option>Course 1</option>
                <option>Course 2</option>
                <option>Course 3</option>
                <option>Course 4</option>
            </select>
            </div>

            <div className="flex-1">
            <p className="text-[#1D2026] lg:text-[14px] text-[12px] md:leading-[22px] leading-[20px]">Course Sub-category</p>
            <select className="border-[#E9EAF0] text-[#8C94A3] w-full  border-[2px] py-[10px] px-[10px]  outline-none">
                <option>Select</option>
                <option>subCourse 1</option>
                <option>subCourse 2</option>
                <option>subCourse 3</option>
                <option>subCourse 4</option>
            </select>
            </div>
          </div>


          <div className="w-[90%] m-auto">
          <p className="text-[#1D2026] lg:text-[14px] text-[12px] md:leading-[22px] leading-[20px]">Course Topic</p>
          <input placeholder="What is primarily taught in your course?" className=" placeholder:text-[#8C94A3] border-[#E9EAF0] w-full h-full border-[2px] py-[10px] px-[10px]  outline-none"/>
          </div>





          <div className="w-[90%] m-auto flex justify-between items-center gap-[10px]">
            <div className="flex-1">
            <p className="text-[#1D2026] lg:text-[14px] text-[12px] md:leading-[22px] leading-[20px]">Course Language</p>
            <select className="border-[#E9EAF0] text-[#8C94A3] w-full  border-[2px] py-[10px] px-[10px]  outline-none">
                <option>Select</option>
                <option>Language 1</option>
                <option>Language 2</option>
                <option>Language 3</option>
                <option>Language 4</option>
            </select>
            </div>

            <div className="flex-1">
            <p className="text-[#1D2026] lg:text-[14px] text-[12px] md:leading-[22px] leading-[20px]">Subtitle Language (Optional)</p>
            <select className="border-[#E9EAF0] text-[#8C94A3] w-full  border-[2px] py-[10px] px-[10px]  outline-none">
                <option>Select</option>
                <option>Subtitle Language 1</option>
                <option>Subtitle Language 2</option>
                <option>Subtitle Language 3</option>
                <option>Subtitle Language 4</option>
            </select>
            </div>


            <div className="flex-1">
            <p className="text-[#1D2026] lg:text-[14px] text-[12px] md:leading-[22px] leading-[20px]">Course Level</p>
            <select className="border-[#E9EAF0] text-[#8C94A3] w-full  border-[2px] py-[10px] px-[10px]  outline-none">
                <option>Select</option>
                <option>Course Level 1</option>
                <option>Course Level 2</option>
                <option>Course Level 3</option>
                <option>Course Level 4</option>
            </select>
            </div>


            <div className="flex-1 relative">
            <p className="text-[#1D2026] lg:text-[14px] text-[12px] md:leading-[22px] leading-[20px]">Durations</p>
            <select className="border-[#E9EAF0] text-[#8C94A3] w-full  border-[2px] py-[10px] px-[10px]  outline-none">
                <option>Select </option>
                <option>Durations 1 </option>
                <option>Durations 2 </option>
                <option>Durations 3</option>
                <option>Durations 4 </option>
            </select>
            <span className="text-[#8C94A3] md:text-[14px] text-[12px] absolute right-[20px] bottom-[10px]">Day</span>
            </div>
          </div>






          <div className="w-[90%] m-auto flex justify-between items-center gap-[10px]">
            <div className="flex-1">
            <p className="text-[#1D2026] lg:text-[14px] text-[12px] md:leading-[22px] leading-[20px]">Allot Instructor</p>
            <select className="border-[#E9EAF0] text-[#8C94A3] w-full  border-[2px] py-[10px] px-[10px]  outline-none">
                <option>Select</option>
                <option>Allot Instructor 1</option>
                <option>Allot Instructor 2</option>
                <option>Allot Instructor 3</option>
                <option>Allot Instructor 4</option>
            </select>
            </div>


            <div className="flex-1">
            <p className="text-[#1D2026] lg:text-[14px] text-[12px] md:leading-[22px] leading-[20px]">Allot Instructor</p>
            <select className="border-[#E9EAF0] text-[#8C94A3] w-full  border-[2px] py-[10px] px-[10px]  outline-none">
                <option>Select</option>
                <option>Allot Instructor 1</option>
                <option>Allot Instructor 2</option>
                <option>Allot Instructor 3</option>
                <option>Allot Instructor 4</option>
            </select>
            </div>

            <div className="flex-1">
            <p className="text-[#1D2026] lg:text-[14px] text-[12px] md:leading-[22px] leading-[20px]">Allot Instructor (Optional)</p>
            <select className="border-[#E9EAF0] text-[#8C94A3] w-full  border-[2px] py-[10px] px-[10px]  outline-none">
                <option>Select</option>
                <option>Allot Instructor 1</option>
                <option>Allot Instructor 2</option>
                <option>Allot Instructor 3</option>
                <option>Allot Instructor 4</option>
            </select>
            </div>



            <div className="flex-1">
            <p className="text-[#1D2026] lg:text-[14px] text-[12px] md:leading-[22px] leading-[20px]">Allot Instructor (Optional)</p>
            <select className="border-[#E9EAF0] text-[#8C94A3] w-full  border-[2px] py-[10px] px-[10px]  outline-none">
                <option>Select</option>
                <option>Allot Instructor 1</option>
                <option>Allot Instructor 2</option>
                <option>Allot Instructor 3</option>
                <option>Allot Instructor 4</option>
            </select>
            </div>
          </div>


          <div className="flex justify-between items-center mt-[32px] mb-[40px] w-[90%] m-auto">
          <button className="text-[#6E7485] text-[18px] font-semibold leading-[56px] px-[32px] border-[#E9EAF0] border-[1px]">Cancel</button>
          <button className="text-[18px] font-semibold leading-[56px] text-white px-[32px] bg-[#3A6BE4]">Save & next</button>
          </div>
        </form>
    </div>
  )
}

export default BasicInformation