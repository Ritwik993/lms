import axios from "axios";
import { FC, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

type FormState = {
  title: string;
  subtitle: string;
  category: string;
  subcategory: string;
  topic: string;
  language: string;
  subtitleLanguage?: string;
  level: string;
  duration: string;
  instructor1: string;
  instructor2: string;
  instructor3?: string;
  instructor4?: string;
};

type Tab = "basic" | "advance" | "curriculum" | "publish";

type BasicInformationProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>; // Use lowercase `number` for TypeScript type
  setActiveTab: React.Dispatch<React.SetStateAction<Tab>>;
};

const uniqueKeys = new Set();
const BasicInformation: FC<BasicInformationProps> = ({
  setCount,
  setActiveTab,
}) => {
  const [formState, setFormState] = useState<FormState>({
    title: "",
    subtitle: "",
    category: "",
    subcategory: "",
    topic: "",
    language: "",
    subtitleLanguage: "",
    level: "",
    duration: "",
    instructor1: "",
    instructor2: "",
    instructor3: "",
    instructor4: "",
  });

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (!uniqueKeys.has(name)) {
      uniqueKeys.add(name);
      setCount(uniqueKeys.size);
    }
    if (value.length <= 80) {
      setFormState((prev) => {
        return { ...prev, [name]: value };
      });
    }
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (!uniqueKeys.has(name)) {
      uniqueKeys.add(name);
      setCount(uniqueKeys.size);
    }
    setFormState((prev) => {
      return { ...prev, [name]: value };
    });
  };



  const handleSubmit=async(e:React.MouseEvent<HTMLButtonElement> )=>{
    e.preventDefault();
    try{
      const res=await axios.post("http://localhost:8080/api/v1/course/addCourse",formState);
      console.log(res.data);
      setActiveTab("advance");
    }catch(err){
      console.error(err);
    }
  }

  
  return (
    <div className="mb-[37px]">
      <div className="heading lg:px-[40px] px-[10px] py-[24px] bg-white flex gap-x-[20px] justify-between items-center border-b-[2px] border-opacity-10 border-b-[#6E7485]">
        <p className="font-semibold text-[#1D2026] lg:text-[24px] text-[18px] md:leading-[32px] leading-[26px] whitespace-nowrap">
          Basic Information
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
      <form className="mt-[32px] flex flex-col gap-y-[24px]">
        <div className="w-[90%] m-auto relative">
          <p className="text-[#1D2026] md:text-[14px] text-[12px] md:leading-[22px] leading-[20px]">
            Title
          </p>
          <input
            placeholder="Your course title"
            className=" placeholder:text-[#8C94A3] border-[#E9EAF0] w-full h-full border-[2px] py-[10px] px-[10px]  outline-none"
            onChange={handleInputChange}
            value={formState.title}
            name="title"
            type="text"
          />
          <span className="text-[#8C94A3] md:text-[14px] text-[12px] absolute right-[20px] bottom-[10px]">
            {Number(formState.title.length)}/80
          </span>
        </div>

        <div className="w-[90%] m-auto relative">
          <p className="text-[#1D2026] md:text-[14px] text-[12px] md:leading-[22px] leading-[20px]">
            Subtitle
          </p>
          <input
            placeholder="Your course subtitle"
            className=" placeholder:text-[#8C94A3] border-[#E9EAF0] w-full h-full border-[2px] py-[10px] px-[10px]  outline-none"
            type="text"
            name="subtitle"
            value={formState.subtitle}
            onChange={handleInputChange}
          />
          <span className="text-[#8C94A3] md:text-[14px] text-[12px] absolute right-[20px] bottom-[10px]">
            {Number(formState.title.length)}/80
          </span>
        </div>

        <div className="w-[90%] m-auto  flex justify-between items-center gap-[10px]">
          <div className="flex-1">
            <p className="text-[#1D2026] lg:text-[14px] text-[12px] md:leading-[22px] leading-[20px]">
              Course Category
            </p>
            <select
              className="border-[#E9EAF0] text-[#8C94A3] w-full  border-[2px] py-[10px] px-[10px]  outline-none"
              onChange={handleSelectChange}
              name="category"
              value={formState.category}
            >
              <option value="">Select</option>
              <option value="course1">Course 1</option>
              <option value="course2">Course 2</option>
              <option value="course3">Course 3</option>
              <option value="course4">Course 4</option>
            </select>
          </div>

          <div className="flex-1">
            <p className="text-[#1D2026] lg:text-[14px] text-[12px] md:leading-[22px] leading-[20px]">
              Course Sub-category
            </p>
            <select
              className="border-[#E9EAF0] text-[#8C94A3] w-full  border-[2px] py-[10px] px-[10px]  outline-none"
              name="subcategory"
              value={formState.subcategory}
              onChange={handleSelectChange}
            >
              <option value="">Select</option>
              <option value="subcourse1">subCourse 1</option>
              <option value="subcourse2">subCourse 2</option>
              <option value="subcourse3">subCourse 3</option>
              <option value="subcourse4">subCourse 4</option>
            </select>
          </div>
        </div>

        <div className="w-[90%] m-auto">
          <p className="text-[#1D2026] lg:text-[14px] text-[12px] md:leading-[22px] leading-[20px]">
            Course Topic
          </p>
          <input
            placeholder="What is primarily taught in your course?"
            className=" placeholder:text-[#8C94A3] border-[#E9EAF0] w-full h-full border-[2px] py-[10px] px-[10px]  outline-none"
            type="text"
            name="topic"
            value={formState.topic}
            onChange={handleInputChange}
          />
        </div>

        <div className="w-[90%] m-auto flex justify-between items-center gap-[10px] flex-wrap">
          <div className="flex-1 min-w-max">
            <p className="text-[#1D2026] lg:text-[14px] text-[12px] md:leading-[22px] leading-[20px]">
              Course Language
            </p>
            <select
              className="border-[#E9EAF0] text-[#8C94A3] w-full  border-[2px] py-[10px] px-[10px]  outline-none"
              value={formState.language}
              name="language"
              onChange={handleSelectChange}
            >
              <option>Select</option>
              <option value="language1">Language 1</option>
              <option value="language2">Language 2</option>
              <option value="language3">Language 3</option>
              <option value="language4">Language 4</option>
            </select>
          </div>

          <div className="flex-1 min-w-max">
            <p className="text-[#1D2026] lg:text-[14px] text-[12px] md:leading-[22px] leading-[20px]">
              Subtitle Language (Optional)
            </p>
            <select
              className="border-[#E9EAF0] text-[#8C94A3] w-full  border-[2px] py-[10px] px-[10px]  outline-none"
              name="subtitleLanguage"
              value={formState.subtitleLanguage}
              onChange={handleSelectChange}
            >
              <option value="">Select</option>
              <option value="subtitleLanguage1">Subtitle Language 1</option>
              <option value="subtitleLanguage2">Subtitle Language 2</option>
              <option value="subtitleLanguage3">Subtitle Language 3</option>
              <option value="subtitleLanguage4">Subtitle Language 4</option>
            </select>
          </div>

          <div className="flex-1 min-w-max">
            <p className="text-[#1D2026] lg:text-[14px] text-[12px] md:leading-[22px] leading-[20px]">
              Course Level
            </p>
            <select
              className="border-[#E9EAF0] text-[#8C94A3] w-full  border-[2px] py-[10px] px-[10px]  outline-none"
              name="level"
              value={formState.level}
              onChange={handleSelectChange}
            >
              <option value="">Select</option>
              <option value="level1">Course Level 1</option>
              <option value="level2">Course Level 2</option>
              <option value="level3">Course Level 3</option>
              <option value="level4">Course Level 4</option>
            </select>
          </div>

          <div className="flex-1 relative min-w-max">
            <p className="text-[#1D2026] lg:text-[14px] text-[12px] md:leading-[22px] leading-[20px]">
              Durations
            </p>
            <select
              className="border-[#E9EAF0] text-[#8C94A3] w-full  border-[2px] py-[10px] px-[10px]  outline-none"
              name="duration"
              value={formState.duration}
              onChange={handleSelectChange}
            >
              <option value="">Select </option>
              <option value="duration1">Durations 1 </option>
              <option value="duration2">Durations 2 </option>
              <option value="duration3">Durations 3</option>
              <option value="duration4">Durations 4 </option>
            </select>
            <span className="text-[#8C94A3] md:text-[14px] text-[12px] absolute right-[20px] bottom-[10px]">
              Day
            </span>
          </div>
        </div>

        <div className="w-[90%] m-auto flex justify-between items-center gap-[10px] flex-wrap">
          <div className="flex-1 min-w-max">
            <p className="text-[#1D2026] lg:text-[14px] text-[12px] md:leading-[22px] leading-[20px]">
              Allot Instructor
            </p>
            <select
              className="border-[#E9EAF0] text-[#8C94A3] w-full  border-[2px] py-[10px] px-[10px]  outline-none"
              name="instructor1"
              value={formState.instructor1}
              onChange={handleSelectChange}
            >
              <option value="">Select</option>
              <option value="instructor1">Allot Instructor 1</option>
              <option value="instructor2">Allot Instructor 2</option>
              <option value="instructor3">Allot Instructor 3</option>
              <option value="instructor4">Allot Instructor 4</option>
            </select>
          </div>

          <div className="flex-1 min-w-max">
            <p className="text-[#1D2026] lg:text-[14px] text-[12px] md:leading-[22px] leading-[20px]">
              Allot Instructor
            </p>
            <select
              className="border-[#E9EAF0] text-[#8C94A3] w-full  border-[2px] py-[10px] px-[10px]  outline-none"
              name="instructor2"
              value={formState.instructor2}
              onChange={handleSelectChange}
            >
              <option value="">Select</option>
              <option value="instructor1">Allot Instructor 1</option>
              <option value="instructor2">Allot Instructor 2</option>
              <option value="instructor3">Allot Instructor 3</option>
              <option value="instructor4">Allot Instructor 4</option>
            </select>
          </div>

          <div className="flex-1 min-w-max">
            <p className="text-[#1D2026] lg:text-[14px] text-[12px] md:leading-[22px] leading-[20px]">
              Allot Instructor (Optional)
            </p>
            <select
              className="border-[#E9EAF0] text-[#8C94A3] w-full  border-[2px] py-[10px] px-[10px]  outline-none"
              name="instructor3"
              value={formState.instructor3}
              onChange={handleSelectChange}
            >
              <option value="">Select</option>
              <option value="instructor1">Allot Instructor 1</option>
              <option value="instructor2">Allot Instructor 2</option>
              <option value="instructor3">Allot Instructor 3</option>
              <option value="instructor4">Allot Instructor 4</option>
            </select>
          </div>

          <div className="flex-1 min-w-max">
            <p className="text-[#1D2026] lg:text-[14px] text-[12px] md:leading-[22px] leading-[20px]">
              Allot Instructor (Optional)
            </p>
            <select
              className="border-[#E9EAF0] text-[#8C94A3] w-full  border-[2px] py-[10px] px-[10px]  outline-none"
              name="instructor4"
              value={formState.instructor4}
              onChange={handleSelectChange}
            >
              <option value="">Select</option>
              <option value="instructor1">Allot Instructor 1</option>
              <option value="instructor2">Allot Instructor 2</option>
              <option value="instructor3">Allot Instructor 3</option>
              <option value="instructor4">Allot Instructor 4</option>
            </select>
          </div>
        </div>

        <div className="flex justify-between items-center mt-[32px] pb-[40px] pt-[60px] w-[90%] m-auto">
          <Link to="/dashboard">
            {" "}
            <button className="text-[#6E7485] lg:text-[18px] text-[14px] font-semibold lg:leading-[56px] leading-[40px] px-[32px] border-[#E9EAF0] border-[1px]">
              Cancel
            </button>
          </Link>
          <button className="lg:text-[18px] text-[14px] font-semibold lg:leading-[56px] leading-[40px] text-white px-[32px] bg-[#3A6BE4]" onClick={(e)=>handleSubmit(e)}>
            Save & next
          </button>
        </div>
      </form>
    </div>
  );
};

export default BasicInformation;
