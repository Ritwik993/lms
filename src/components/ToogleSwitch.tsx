import { useState } from "react";

const ToggleSwitch = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div
      className={`w-[70px] h-[35px] rounded-[20px] cursor-pointer transition-colors duration-300 ${
        isActive ? "bg-blue-500" : "bg-[#ECEDF0]"
      }`}
      onClick={() => setIsActive(!isActive)}
    >
      <div
        className={`h-full rounded-full w-[35px] transform transition-transform duration-300 ${
          isActive
          
            ? "bg-[#ECEDF0] translate-x-[35px]"
            : "bg-blue-500 translate-x-0"
        }`}
      ></div>
    </div>
  );
};

export default ToggleSwitch;
