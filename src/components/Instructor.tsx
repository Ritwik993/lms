 import img1 from "../assets/Ellipse 300.svg";
 import cross from "../assets/X.svg";
const Instructor = () => {
  return (
    <div className="bg-[#F5F7FA] flex justify-between items-center p-[16px] min-w-[300px] w-auto">
        <div className="flex gap-x-[12px]">
            <div className="imageContainer">
                <img src={img1} className="object-contain"/>
            </div>
            <div>
                <p className="text-[14px] font-semibold leading-[20px] mb-[5px]">Username</p>
                <p className="text-[#6E7485] text-[14px] leading-[20px]">UI/UX Designer</p>
            </div>
        </div>
        <div>
            <img src={cross} className="object-contain"/>
        </div>
    </div>
  )
}

export default Instructor