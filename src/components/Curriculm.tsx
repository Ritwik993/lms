import menu from "../assets/Menu.svg";
import plus from "../assets/Plus.svg";
import pencil from "../assets/PencilLine.svg";
import trash from "../assets/Trash.svg";
import { Link, useLocation } from "react-router-dom";
import DownArrow from "../assets/CaretDown.svg";
import { FC, useEffect, useRef, useState } from "react";

type Tab = "basic" | "advance" | "curriculum" | "publish";

type CurriculumProps = {
  setCount2: React.Dispatch<React.SetStateAction<number>>;
  setActiveTab: React.Dispatch<React.SetStateAction<Tab>>;
};

type formData = {
  subjectTitle: string;
  lectures: string[];
};

const Curriculm: FC<CurriculumProps> = ({ setCount2, setActiveTab }) => {
  const [lectureCount, setLectureCount] = useState<number[]>([]);
  const [addSection, setAddSection] = useState(1);
  // const [lectureTitle, setLectureTitle] = useState("Lecture name");
  const [sectionName, setSectionName] = useState("Section Name");
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingSection, setIsEditingSection] = useState(false);
  // const [formData,setFormData]=useState<formData>({
  //   welcomeMsg:"",
  //   congratulationsMsg:"",
  // })

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // const inputRef = useRef<HTMLInputElement>(null);
  const [lectureTitles, setLectureTitles] = useState<string[]>(
    Array(lectureCount.length).fill("Lecture Name")
  );
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const inputRef2 = useRef<HTMLInputElement>(null);

  // const handleClick = () => {
  //   setIsEditing(true);
  //   setTimeout(() => {
  //     inputRef.current?.focus(); // Focus on the input box after it appears
  //   }, 0);
  // };

  const handleSectionClick = () => {
    setIsEditingSection(true);
    setTimeout(() => {
      inputRef2.current?.focus(); // Focus on the input box after it appears
    }, 0);
  };

  return (
    <div className="mb-[37px]">
      <div className="heading lg:px-[40px] px-[10px] py-[24px] bg-white flex gap-x-[20px] justify-between items-center border-b-[2px] border-opacity-10 border-b-[#6E7485]">
        <p className="font-semibold text-[#1D2026] lg:text-[24px] text-[18px] md:leading-[32px] leading-[26px] whitespace-nowrap">
          Course Curriculum
        </p>
        <div>
          <button className="bg-[#E8EEFF] text-[#3A6BE4] lg:px-[24px] px-[10px]  lg:text-[16px] text-[14px] font-semibold lg:leading-[48px] leading-[40px]">
            Save
          </button>
          <button className="text-[#3A6BE4] lg:px-[24px] px-[10px] lg:text-[16px] text-[14px] font-semibold lg:leading-[48px] leading-[40px]">
            Save and Preview
          </button>
        </div>
      </div>

      <div className="mt-[33px] w-[90%] mx-auto flex justify-between items-center ">
        <div className="flex gap-x-2 lg:p-[24px] p-[12px]">
          <img src={menu} />
          <p className="text-[#1D2026] font-medium text-[16px]">
            Live Class Details
          </p>
        </div>

        <div className="flex gap-2 lg:p-[24px] p-[12px]">
          <img src={plus} alt="" className="object-contain" />
          <img src={pencil} alt="" className="object-contain" />
          <img src={trash} alt="" className="object-contain" />
        </div>
      </div>

      {Array.from({ length: addSection }, (_, i) => (
        <div
          className="contentBox  mt-[16px] w-[90%] mx-auto min-h-[312px] pb-8 bg-[#F5F7FA]"
          key={i}
        >
          <div className="flex justify-between items-center">
            <div className="flex gap-x-2 lg:p-[24px] p-[12px]">
              <img src={menu} />
              <label className="text-[#1D2026] font-medium text-[16px]">
                {!isEditingSection && sectionName}
                {isEditingSection && (
                  <input
                    type="text"
                    ref={inputRef2}
                    className="border border-black absolute "
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        setIsEditingSection(false);
                      }
                    }}
                    onBlur={() => setIsEditingSection(false)}
                    onChange={(e) => {
                      setSectionName(e.target.value);
                    }}
                  />
                )}
              </label>
            </div>

            <div className="flex gap-2 lg:p-[24px] p-[12px]">
              <img
                src={plus}
                alt=""
                className="object-contain pointer"
                onClick={() => {
                  const updatedLectureCount = [...lectureCount];
                  updatedLectureCount[i] = (lectureCount[i] || 0) + 1;
                  setLectureCount(updatedLectureCount);
                }}
              />
              <img
                src={pencil}
                alt=""
                className="object-contain"
                onClick={handleSectionClick}
              />
              <img
                src={trash}
                alt=""
                className="object-contain"
                onClick={() => {
                  const updatedLectureCount = [...lectureCount];
                  if (lectureCount[i] > 0)
                    updatedLectureCount[i] = lectureCount[i] - 1;
                  setLectureCount(updatedLectureCount);
                }}
              />
            </div>
          </div>

          {Array.from({ length: lectureCount[i] }, (_, idx) => {
             
            return (
              
              <div
                className="innerContent bg-white w-[95%] mx-auto mb-4"
                key={idx}
              >
               
                <div className="flex justify-between items-center">
                  <div className="flex gap-x-2 lg:p-[24px] p-[12px]">
                    <img src={menu} />
                    <label className="text-[#1D2026] font-medium lg:text-[16px] text-[14px] relative">
                      {!isEditing ? (lectureTitles[idx] || "Lecture Name")
                      : (
                        <input
                          type="text"
                          value={lectureTitles[idx]}
                          ref={(el) => (inputRefs.current[idx] = el)}
                          className="absolute "
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              setIsEditing(false);
                            }
                          }}
                          onBlur={() => setIsEditing(false)}
                          onChange={(e) => {
                            const updatedTitles = [...lectureTitles];
                            updatedTitles[idx] = e.target.value;
                            setLectureTitles(updatedTitles);
                          }}
                        />
                      )}
                    </label>
                  </div>

                  <div className="flex gap-2 lg:p-[24px] p-[12px]">
                    <Link to="/contentcourse">
                      <div className="flex bg-[#3D70F5] bg-opacity-25 lg:px-[16px] px-[10px]  gap-x-[4px]">
                        <p className=" text-[#3A6BE4] font-semibold lg:text-[14px] text-[12px] lg:leading-[40px] leading-[35px]  ">
                          Contents
                        </p>
                        <img src={DownArrow} className="object-contain " />
                      </div>
                    </Link>
                    {/* <img src={plus} alt="" className="object-contain" /> */}
                    <img
                      src={pencil}
                      alt=""
                      className="object-contain pointer"
                      onClick={(e) => {
                        setIsEditing(true);
                        setTimeout(() => {
                          inputRefs.current[idx]?.focus();// Focus on the input box after it appears
                        }, 0);
                      }}
                    />
                    <img
                      src={trash}
                      alt=""
                      className="object-contain pointer"
                      // onClick={() => setLectureCount(lectureCount[i] - 1)}
                      onClick={() => {
                        const updatedLectureCount = [...lectureCount];
                        updatedLectureCount[i] = lectureCount[i] - 1;
                        setLectureCount(updatedLectureCount);
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}

          {/* 
         
          */}
        </div>
      ))}

      <div className="w-[90%] mx-auto">
        <button
          className="mt-[30px] bg-[#3D70F5] bg-opacity-25 text-[#3A6BE4] font-semibold text-[16px] leading-[48px] w-full text-center"
          onClick={() => setAddSection(addSection + 1)}
        >
          Add Sections
        </button>
      </div>

      <div className="flex justify-between items-center mt-[32px] pb-[40px] pt-[60px] w-[90%] m-auto">
        <button
          className="text-[#6E7485] lg:text-[18px] text-[14px] font-semibold lg:leading-[56px] leading-[40px] px-[32px] border-[#E9EAF0] border-[1px]"
          onClick={() => setActiveTab("advance")}
        >
          Previous
        </button>
        <button
          className="lg:text-[18px] text-[14px] font-semibold lg:leading-[56px] leading-[40px] text-white px-[32px] bg-[#3A6BE4]"
          onClick={() => setActiveTab("publish")}
        >
          Save & next
        </button>
      </div>
    </div>
  );
};

export default Curriculm;
