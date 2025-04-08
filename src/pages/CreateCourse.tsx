import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import stack1 from "../assets/Stack1.svg";
import playCircle from "../assets/PlayCircle.svg";
import clipBoard from "../assets/ClipboardText.svg";
import monitor from "../assets/MonitorPlay.svg";
import BasicInformation from "../components/BasicInformation";
import AdvanceInformation from "../components/AdvanceInformation";
import Curriculm from "../components/Curriculm";
import PublishCourse from "../components/PublishCourse";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../utils/store";
import { setActiveTab } from "../utils/activeTabSlice";
import { BASE_URL } from "../constants/url";
import axios from "axios";
// import { emptySection } from "../utils/sectionSlice";

// type Tab = "basic" | "advance" | "curriculum" | "publish";

type BasicFormState = {
  title: string;
  subTitle: string;
  category: string;
  subCategory: string;
  topic: string;
  language: string;
  subtitleLanguage?: string;
  courseLevels: string;
  courseDurations: number|null;
  instructor1: string;
  instructor2: string;
  instructor3?: string;
  instructor4?: string;
  courseId?: string;
  instructor?: string[];
  startDate:Date;
  endDate:Date;
  actualPrice:number|null;
  discountedPrice:number|null;
  isPaid:boolean;
  featured: boolean;
};


type FAQ={
  question:string;
  answer:string;
}

type AdvanceFormState = {
  courseThumbnail: File | null;
  courseTrailer: string | null;
  courseDescription: string;
  schedule: string[];
  whatYouWillGet: string[];
  faq: FAQ[];
};

type PublishFormState = {
  welcomeMsg: string;
  congratulationsMsg: string;
};

// interface Topic {
//   id: number;
//   name: string;
// }

// interface Section {
//   id: number;
//   name: string;
//   topics: Topic[];
// }

// interface Lecture {
//   id: string;
//   lectureTitle: string;
//   notes: string[];
//   dpp: string[];
//   video: string[];
//   assignment: string[];
//   test: string[];
// }

// type CreateCourseProps={
//   sections: Section[];
//   setSections: React.Dispatch<React.SetStateAction<Section[]>>;
// }

const CreateCourse = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector((store: RootState) => store.tabSelect.tab);
  const editId = useSelector((store: RootState) => store.edit.editId);

  useEffect(() => {
      if (!editId) return; 
      // dispatch(emptySection());
      getCourseData(editId);
    }, [editId]);


    // const getUserName=async(id:string)=>{
    //   const res=await axios.get(`${BASE_URL}/api/v1/auth/getUsers?userId=${id}`,{
    //     headers:{
    //       Authorization:`Bearer ${localStorage.getItem("token")}`
    //     }
    //   })
    //   console.log(res.data.data);
    //   return res.data.data.firstName+" "+res.data.data.lastName;
    // }


    const getCourseData = async (editId: string | null) => {
      if (editId === null || editId === "") {
        return;
      }
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
          `${BASE_URL}/api/v1/course/getCourses?id=${editId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const result = res.data.data;
        console.log("Ritwik here data of course is "+JSON.stringify(result[0],null,2));
        console.log("Ritwik here data is "+JSON.stringify((result[0].instructors),null,2));

        // Await instructor names before setting the state
    // const [
    //   instructor1,
    //   instructor2,
    //   instructor3,
    //   instructor4,
    //   instructor
    // ] = await Promise.all([
    //   getUserName(result[0].instructor1),
    //   getUserName(result[0].instructor2),
    //   getUserName(result[0].instructor3),
    //   getUserName(result[0].instructor4),
    //   getUserName(result[0].instructor),
    // ]);

        const basicData={
          title: result[0].title,
          subTitle: result[0].subTitle,
          category: result[0].category,
          subCategory: result[0].subCategory,
          topic: result[0].topic,
          language: result[0].language,
          subtitleLanguage: result[0].subtitleLanguage,
          courseLevels: result[0].courseLevels,
          courseDurations: result[0].courseDurations,
          instructor1:(result[0].instructors)[0]._id||"",
          instructor2:(result[0].instructors)[1]._id||"",
          instructor3: (result[0].instructors)[2]._id||"",
          instructor4: (result[0].instructors)[3]._id||"",
          instructor: result[0].instructors,
          isPaid:result[0].isPaid,
          startDate:result[0].startDate||new Date(),
          endDate:result[0].endDate||new Date(),
          actualPrice:result[0].actualPrice,
          discountedPrice:result[0].discountedPrice,
          featured: false,
          courseId: result[0].courseId,
        }
        setBasicInfo(basicData);

        const advanceData={
          courseThumbnail: result[0].courseThumbnail,
          courseTrailer: result[0].courseTrailer,
          courseDescription: result[0]. courseDescription,
          schedule: result[0].schedule,
          whatYouWillGet:result[0].whatYouWillGet,
          faq: result[0].faq,
        }

        setAdvanceInfo(advanceData);

        const publishData = {
          welcomeMsg: result[0]. welcomeMsg,
          congratulationsMsg: result[0].congratulationsMsg,
        };

        setPublishFormState(publishData);


      } catch (err) {
        console.log(err);
      }
    };
  
  const [basicInfo, setBasicInfo] = useState<BasicFormState>({
    title: "",
    subTitle: "",
    category: "",
    subCategory: "",
    topic: "",
    language: "",
    subtitleLanguage: "",
    courseLevels: "",
    courseDurations: null,
    instructor1: "",
    instructor2: "",
    instructor3: "",
    instructor4: "",
    instructor: [],
    isPaid:false,
    actualPrice:null,
    discountedPrice:null,
    startDate:new Date(),
    endDate:new Date(),
    featured: false,
    courseId: "",
  });

  const [publishFormState, setPublishFormState] = useState<PublishFormState>({
    welcomeMsg: "",
    congratulationsMsg: "",
  });

  const [advanceInfo, setAdvanceInfo] = useState<AdvanceFormState>({
    courseThumbnail: null,
    courseTrailer: null,
    courseDescription: "",
    schedule: [""],
    whatYouWillGet: [""],
    faq: [{question:"",answer:""}],
  });

  // const [activeTab, setActiveTab] = useState<Tab>("basic");
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  // const [count2, setCount2] = useState(0);
  // const [count3, setCount3] = useState(0);
  const [courseid, setCourseid] = useState("");

  // const renderTabContent = () => {
  //   switch (activeTab) {
  //     case "basic":
  //       return (
  //         <BasicInformation
  //           setCount={setCount}
  //           setActiveTab={setActiveTab}
  //           setCourseid={setCourseid}
  //         />
  //       );
  //     case "advance":
  //       return (
  //         <AdvanceInformation
  //           setCount1={setCount1}
  //           setActiveTab={setActiveTab}
  //           courseid={courseid}
  //         />
  //       );
  //     case "curriculum":
  //       return <Curriculm setCount2={setCount2} setActiveTab={setActiveTab} />;
  //     case "publish":
  //       return (
  //         <PublishCourse setCount3={setCount3} setActiveTab={setActiveTab} />
  //       );\
  //     default:
  //       return null;
  //   }
  // };

  return (
    <div className=" bg-[#F5F7FA] flex-1 lg:ml-[250px] overflow-x-hidden">
      <Navbar />
      <div className="heading mx-auto lg:w-[80%] w-[90%] mt-[40px] bg-white">
        <div className="overflow-x-auto overflow-y-hidden scrollbar-hidden px-[10px]">
          <div className="flex justify-around border-b-[2px] border-opacity-10 border-b-[#6E7485] min-w-max gap-x-[10px]">
            <div
              className={`py-[20px] flex items-center gap-x-2 min-w-0 cursor-pointer ${
                activeTab === "basic" ? "border-b-2 border-[#1D2026]" : ""
              }`}
              // onClick={() => setActiveTab("basic")}
              onClick={() => dispatch(setActiveTab("basic"))}
            >
              <img src={stack1} className="object-contain" />
              <p className="text-[#1D2026] font-medium lg:text-[16px] text-[14px] md:leading-[22px] leading-[20px]">
                Basic Information
              </p>
              {activeTab === "basic" && (
                <span className="text-[#23BD33] text-[12px] font-medium mr-1">
                  {count}/13
                </span>
              )}
            </div>

            <div
              className={`py-[20px] flex items-center gap-x-2 min-w-0 cursor-pointer ${
                activeTab === "advance" ? "border-b-2 border-[#1D2026]" : ""
              }`}
              // onClick={() => setActiveTab("advance")}
              onClick={() => dispatch(setActiveTab("advance"))}
            >
              <img src={clipBoard} className="object-contain" />
              <p className="text-[#1D2026] font-medium lg:text-[16px] text-[14px] md:leading-[22px] leading-[20px]">
                Advance Information
              </p>
              {activeTab === "advance" && (
                <span className="text-[#23BD33] text-[12px] font-medium mr-1">
                  {count1}/6
                </span>
              )}
            </div>

            <div
              className={`py-[20px] flex items-center gap-x-2 min-w-0 cursor-pointer ${
                activeTab === "curriculum" ? "border-b-2 border-[#1D2026]" : ""
              }`}
              // onClick={() => setActiveTab("curriculum")}
              onClick={() => dispatch(setActiveTab("curriculum"))}
            >
              <img src={monitor} className="object-contain" />
              <p className="text-[#1D2026] font-medium lg:text-[16px] text-[14px] md:leading-[22px] leading-[20px]">
                Curriculum
              </p>
              {/* {activeTab === "curriculum" && (
                <span className="text-[#23BD33] text-[12px] font-medium mr-1">
                  {count2}/13
                </span>
              )} */}
            </div>

            <div
              className={`py-[20px] flex items-center gap-x-2 min-w-0 cursor-pointer ${
                activeTab === "publish" ? "border-b-2 border-[#1D2026]" : ""
              }`}
              // onClick={() => setActiveTab("publish")}
              onClick={() => dispatch(setActiveTab("publish"))}
            >
              <img src={playCircle} className="object-contain" />
              <p className="text-[#1D2026] font-medium lg:text-[16px] text-[14px] md:leading-[22px] leading-[20px]">
                Publish a Course
              </p>
              {/* {activeTab === "publish" && (
                <span className="text-[#23BD33] text-[12px] font-medium mr-1">
                  {count3}/13
                </span>
              )} */}
            </div>
          </div>
        </div>
        <div className="p-5">
          {" "}
          {activeTab === "basic" && (
            <BasicInformation
              basicInfo={basicInfo}
              setBasicInfo={setBasicInfo}
              setCount={setCount}
              // setActiveTab={setActiveTab}
              setCourseid={setCourseid}
            />
          )}
          {activeTab === "advance" && (
            <AdvanceInformation
              advanceInfo={advanceInfo}
              setAdvanceInfo={setAdvanceInfo}
              setCount1={setCount1}
              // setActiveTab={setActiveTab}
              courseid={courseid}
            />
          )}
          {activeTab === "curriculum" && (
            <Curriculm />
          )}
          {activeTab === "publish" && (
            <PublishCourse
              // setActiveTab={setActiveTab}
              publishFormState={publishFormState}
              setPublishFormState={setPublishFormState}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateCourse;
