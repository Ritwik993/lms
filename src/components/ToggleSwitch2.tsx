import { useState } from "react";

const ToggleSwitch2 = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div
      className={`w-[50px] h-[25px] rounded-[20px] cursor-pointer transition-colors duration-300 ${
        isActive ? "bg-blue-500" : "bg-[#ECEDF0]"
      }`}
      onClick={() => setIsActive(!isActive)}
    >
      <div
        className={`h-full rounded-full w-[25px] transform transition-transform duration-300 ${
          isActive
          
            ? "bg-[#ECEDF0] translate-x-[25px]"
            : "bg-blue-500 translate-x-0"
        }`}
      ></div>
    </div>
  );
};

export default ToggleSwitch2;
