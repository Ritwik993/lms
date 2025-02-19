import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { setActiveTab } from "../utils/activeTabSlice";
import { BASE_URL } from "../constants/url";

type BasicFormState = {
  title: string;
  subTitle: string;
  category: string;
  subCategory: string;
  topic: string;
  language: string;
  subtitleLanguage?: string;
  courseLevels: string;
  courseDurations: string;
  instructor1: string;
  instructor2: string;
  instructor3?: string;
  instructor4?: string;
  courseId?: string;
  paid:boolean;
  instructor?: string[];
  featured: boolean;
};

type User = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
  isAdmin: boolean;
  isActive: boolean;
  gender: string;
  phoneNumber: string;
};

// type Tab = "basic" | "advance" | "curriculum" | "publish";

type BasicInformationProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>; // Use lowercase `number` for TypeScript type
  // setActiveTab: React.Dispatch<React.SetStateAction<Tab>>;
  setCourseid: React.Dispatch<React.SetStateAction<string>>;
  basicInfo: BasicFormState;
  setBasicInfo: React.Dispatch<React.SetStateAction<BasicFormState>>;
};

const uniqueKeys = new Set();
const BasicInformation: FC<BasicInformationProps> = ({
  setCount,
  setCourseid,
  basicInfo,
  setBasicInfo,
}) => {
  // const [basicInfo, setBasicInfo] = useState<FormState>({
  //   title: "",
  //   subTitle: "",
  //   category: "",
  //   subCategory: "",
  //   topic: "",
  //   language: "",
  //   subtitleLanguage: "",
  //   courseLevels: "",
  //   courseDurations: "",
  //   instructor1: "",
  //   instructor2: "",
  //   instructor3: "",
  //   instructor4: "",
  //   instructor: ["6751f31ea2712db85bd07dde"],
  //   featured: false,
  //   courseId: "",
  // });

  const dispatch = useDispatch();
  const [isDisable, setIsDisable] = useState(false);

  const { pathname } = useLocation();

  // console.log(pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUsers();
    getCourseId();
  }, []);

  const getCourseId = async () => {
    const token = localStorage.getItem("token");

    try {
      const res = await axios.get(`${BASE_URL}/api/v1/course/getCourseId`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      basicInfo.courseId = res.data.data;
      setCourseid(res.data.data);
      // console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchUsers = async () => {
    // Retrieve the token from localStorage
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get(`${BASE_URL}/api/v1/auth/getUsers`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res.data.data);

      setUsers(res.data.data);

      // console.log("users : " + JSON.stringify(users));
    } catch (err) {
      console.error(err);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (!uniqueKeys.has(name)) {
      uniqueKeys.add(name);
      setCount(uniqueKeys.size);
    }
    if (value.length <= 80) {
      setBasicInfo((prev) => {
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
    if(name==='paid'){
      setBasicInfo((prev) => {
        return { ...prev, [name]: value?true:false };
      });
      return;
    }
    setBasicInfo((prev) => {
      return { ...prev, [name]: value };
    });
  };

  // const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   try {
  //     const { instructor1, instructor2, instructor3, instructor4, ...restFormState } = formState;
  //     console.log("RestForm = "+JSON.stringify(restFormState));
  //     const res = await axios.post(
  //       "http://localhost:8080/api/v1/course/addCourse",
  //       restFormState
  //     );
  //     console.log(res.data);
  //     setActiveTab("advance");
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsDisable(true);
    if (basicInfo.instructor1)
      basicInfo.instructor?.push(basicInfo.instructor1);
    if (basicInfo.instructor2)
      basicInfo.instructor?.push(basicInfo.instructor2);
    if (basicInfo.instructor3)
      basicInfo.instructor?.push(basicInfo.instructor3);
    if (basicInfo.instructor4)
      basicInfo.instructor?.push(basicInfo.instructor4);

    try {
      const {
        instructor1,
        instructor2,
        instructor3,
        instructor4,
        ...restFormState
      } = basicInfo;
      // Prepare the form data
      // restFormState.instructor = [instructor1, instructor2, instructor3, instructor4].filter(Boolean);

      // Retrieve the token from localStorage
      const token = localStorage.getItem("token");
      console.log(token);

      // Make the request with the token in the headers
      const res = await axios.post(
        `${BASE_URL}/api/v1/course/addCourse`,
        restFormState,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      localStorage.setItem("courseId", res.data.data._id);

      console.log(res.data);

      // setActiveTab("advance");
      dispatch(setActiveTab("advance"));
    } catch (err) {
      console.error(err);
      alert("An error occurred while submitting the form.");
    } finally {
      setIsDisable(false);
    }
  };

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
            className=" placeholder:text-[#8C94A3] border-[#E9EAF0] text-[#8C94A3] w-full h-full border-[2px] py-[10px] px-[10px]  outline-none"
            onChange={handleInputChange}
            value={basicInfo.title}
            name="title"
            type="text"
          />
          <span className="text-[#8C94A3] md:text-[14px] text-[12px] absolute right-[20px] bottom-[10px]">
            {Number(basicInfo.title.length)}/80
          </span>
        </div>

        <div className="w-[90%] m-auto relative">
          <p className="text-[#1D2026] md:text-[14px] text-[12px] md:leading-[22px] leading-[20px]">
            Subtitle
          </p>
          <input
            placeholder="Your course subtitle"
            className=" placeholder:text-[#8C94A3] border-[#E9EAF0] text-[#8C94A3] w-full h-full border-[2px] py-[10px] px-[10px]  outline-none"
            type="text"
            name="subTitle"
            value={basicInfo.subTitle}
            onChange={handleInputChange}
          />
          <span className="text-[#8C94A3] md:text-[14px] text-[12px] absolute right-[20px] bottom-[10px]">
            {Number(basicInfo.subTitle.length)}/80
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
              value={basicInfo.category}
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
              name="subCategory"
              value={basicInfo.subCategory}
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
            className=" placeholder:text-[#8C94A3]  border-[#E9EAF0] text-[#8C94A3] w-full h-full border-[2px] py-[10px] px-[10px]  outline-none"
            type="text"
            name="topic"
            value={basicInfo.topic}
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
              value={basicInfo.language}
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
              value={basicInfo.subtitleLanguage}
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
              name="courseLevels"
              value={basicInfo.courseLevels}
              onChange={handleSelectChange}
            >
              <option value="">Select</option>
              <option value="courseLevels1">courseLevels 1</option>
              <option value="courseLevels2">courseLevels 2</option>
              <option value="courseLevels3">courseLevels 3</option>
              <option value="courseLevels4">courseLevels 4</option>
            </select>
          </div>

          <div className="flex-1 relative min-w-max">
            <p className="text-[#1D2026] lg:text-[14px] text-[12px] md:leading-[22px] leading-[20px]">
              Durations
            </p>
            <select
              className="border-[#E9EAF0] text-[#8C94A3] w-full  border-[2px] py-[10px] px-[10px]  outline-none"
              name="courseDurations"
              value={basicInfo.courseDurations}
              onChange={handleSelectChange}
            >
              <option value="">Select </option>
              <option value="courseDurations1">courseDurations 1 </option>
              <option value="courseDurations2">courseDurations 2 </option>
              <option value="courseDurations3">courseDurations 3</option>
              <option value="courseDurations4">courseDurations 4 </option>
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
              value={basicInfo.instructor1}
              onChange={handleSelectChange}
            >
              <option value="" disabled>
                Select
              </option>

              {/* <option value="">Select</option>
              <option value="instructor1">Allot Instructor 1</option>
              <option value="instructor2">Allot Instructor 2</option>
              <option value="instructor3">Allot Instructor 3</option>
              <option value="instructor4">Allot Instructor 4</option> */}

              {/* {users.length > 0  && users[0].firstName} */}

              {users.length > 0 &&
                users.map((user) => (
                  <option key={user._id} value={user._id}>
                    {user.firstName} {user.lastName}
                  </option>
                ))}

              {/* <option value="">Select</option>
              <option value="instructor1">Allot Instructor 1</option>
              <option value="instructor2">Allot Instructor 2</option>
              <option value="instructor3">Allot Instructor 3</option>
              <option value="instructor4">Allot Instructor 4</option> */}
            </select>
          </div>

          <div className="flex-1 min-w-max">
            <p className="text-[#1D2026] lg:text-[14px] text-[12px] md:leading-[22px] leading-[20px]">
              Allot Instructor
            </p>
            <select
              className="border-[#E9EAF0] text-[#8C94A3] w-full  border-[2px] py-[10px] px-[10px]  outline-none"
              name="instructor2"
              value={basicInfo.instructor2}
              onChange={handleSelectChange}
            >
              <option value="" disabled>
                Select
              </option>
              {users.length > 0 &&
                users.map((user) => (
                  <option key={user._id} value={user._id}>
                    {user.firstName} {user.lastName}
                  </option>
                ))}
            </select>
          </div>

          <div className="flex-1 min-w-max">
            <p className="text-[#1D2026] lg:text-[14px] text-[12px] md:leading-[22px] leading-[20px]">
              Allot Instructor (Optional)
            </p>
            <select
              className="border-[#E9EAF0] text-[#8C94A3] w-full  border-[2px] py-[10px] px-[10px]  outline-none"
              name="instructor3"
              value={basicInfo.instructor3}
              onChange={handleSelectChange}
            >
              <option value="" disabled>
                Select
              </option>
              {/* <option value="instructor1">Allot Instructor 1</option>
              <option value="instructor2">Allot Instructor 2</option>
              <option value="instructor3">Allot Instructor 3</option>
              <option value="instructor4">Allot Instructor 4</option> */}
              {users.length > 0 &&
                users.map((user) => (
                  <option key={user._id} value={user._id}>
                    {user.firstName} {user.lastName}
                  </option>
                ))}
            </select>
          </div>

          <div className="flex-1 min-w-max">
            <p className="text-[#1D2026] lg:text-[14px] text-[12px] md:leading-[22px] leading-[20px]">
              Allot Instructor (Optional)
            </p>
            <select
              className="border-[#E9EAF0] text-[#8C94A3] w-full  border-[2px] py-[10px] px-[10px]  outline-none"
              name="instructor4"
              value={basicInfo.instructor4}
              onChange={handleSelectChange}
            >
              <option value="" disabled>
                Select
              </option>
              {users.length > 0 &&
                users.map((user) => (
                  <option key={user._id} value={user._id}>
                    {user.firstName} {user.lastName}
                  </option>
                ))}
            </select>
          </div>


          <div className="flex-1 min-w-max">
            <p className="text-[#1D2026] lg:text-[14px] text-[12px] md:leading-[22px] leading-[20px]">
              Paid
            </p>
            <select
              className="border-[#E9EAF0] text-[#8C94A3] w-full  border-[2px] py-[10px] px-[10px]  outline-none"
              name="paid"
              value={basicInfo.paid?.toString()||""}
              onChange={handleSelectChange}
            >
              <option value="" disabled>
                Select
              </option>
              <option value="true">True</option>
              <option value="false">False</option>
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
          <button
            className={`text-white font-semibold text-[14px] lg:text-[18px] px-6 lg:px-8 py-2 lg:py-3 
  bg-[#3A6BE4] rounded-lg transition-all duration-300 
  hover:bg-[#2f5bcc] active:scale-95 focus:outline-none 
  ${isDisable ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={(e) => {
              if (!isDisable) {
                handleSubmit(e);
              }
            }}
            disabled={isDisable}
          >
            {isDisable ? "Saving..." : "Save & Next"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BasicInformation;
