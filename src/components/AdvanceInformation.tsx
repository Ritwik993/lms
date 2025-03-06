import upload from "../assets/UploadSimple.svg";
import left_icon from "../assets/left.svg";
// import video from "../assets/Video.svg";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setActiveTab } from "../utils/activeTabSlice";
import { BASE_URL } from "../constants/url";
import VideoUploader from "@/custom/video-uploader";

// type Tab = "basic" | "advance" | "curriculum" | "publish";

type AdvanceInformationProps = {
  setCount1: React.Dispatch<React.SetStateAction<number>>;
  // setActiveTab: React.Dispatch<React.SetStateAction<Tab>>;
  courseid: string;
  advanceInfo: AdvanceFormState;
  setAdvanceInfo: React.Dispatch<React.SetStateAction<AdvanceFormState>>;
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

const uniqueKeys = new Set();
const AdvanceInformation: FC<AdvanceInformationProps> = ({
  setCount1,
  // setActiveTab
  // courseid,
  advanceInfo,
  setAdvanceInfo,
}) => {
  // const [advanceInfo, setAdvanceInfo] = useState<AdvanceFormState>({
  //   courseThumbnail: null,
  //   courseTrailer: null,
  //   courseDescription: "",
  //   learnings: [""],
  //   targetAudience: [""],
  //   requirements: [""],
  // });
  const [videoUrl, setVideoUrl] = useState("");

  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [isDisable, setIsDisable] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  // const [add1,setAdd1]=useState(0);
  // const [add2,setAdd2]=useState(0);

  // const handleFileChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
  //   if(e.target.files && e.target.files?.length>0){

  //   }
  // }

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: "courseThumbnail" | "courseTrailer"
  ) => {
    if (!uniqueKeys.has(field)) {
      uniqueKeys.add(field);
      setCount1(uniqueKeys.size);
    }
    if (e.target.files && e.target?.files.length > 0) {
      const file = e.target.files[0];
      setAdvanceInfo((prev) => ({ ...prev, [field]: file }));
    }
  };

  // const handleFileChange = (
  //   e: React.ChangeEvent<HTMLInputElement>,
  //   field: "courseThumbnail" | "courseTrailer"
  // ) => {
  //   if (!uniqueKeys.has(field)) {
  //     uniqueKeys.add(field);
  //     setCount1(uniqueKeys.size);
  //   }

  //   if (e.target.files && e.target?.files.length > 0) {
  //     const file = e.target.files[0];

  //     // Convert the file to Base64
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       if (reader.result) {
  //         setFormState((prev) => ({
  //           ...prev,
  //           [field]: reader.result?.toString(),
  //         }));
  //       }
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  const handleDescriptionChange = (value: string) => {
    if (!uniqueKeys.has("courseDescription")) {
      uniqueKeys.add("courseDescription");
      setCount1(uniqueKeys.size);
    }
    setAdvanceInfo((prev) => ({ ...prev, courseDescription: value }));
  };

  const handleTeachChange = (index: number, value: string) => {
    if (!uniqueKeys.has("schedule")) {
      uniqueKeys.add("schedule");
      setCount1(uniqueKeys.size);
    }
    const updatedschedule = [...advanceInfo.schedule];
    updatedschedule[index] = value;
    if (value.length <= 120)
      setAdvanceInfo((prev) => ({ ...prev, schedule: updatedschedule }));
  };

  const handleAudienceChange = (index: number, value: string) => {
    if (!uniqueKeys.has("whatYouWillGet")) {
      uniqueKeys.add("whatYouWillGet");
      setCount1(uniqueKeys.size);
    }
    const updatedwhatYouWillGet = [...advanceInfo.whatYouWillGet];
    updatedwhatYouWillGet[index] = value;
    if (value.length <= 120)
      setAdvanceInfo((prev) => ({
        ...prev,
        whatYouWillGet: updatedwhatYouWillGet,
      }));
  };

  // const handleRequirementChange = (index: number, value: string) => {
  //   if (!uniqueKeys.has("requirements")) {
  //     uniqueKeys.add("requirements");
  //     setCount1(uniqueKeys.size);
  //   }
    const handleRequirementChange = (index: number, field: "question" | "answer", value: string) => {
      const updatedrequirements = [...advanceInfo.faq];
      updatedrequirements[index] = { 
        ...updatedrequirements[index], 
        [field]: value 
      };
    
      if (value.length <= 120) {
        setAdvanceInfo((prev) => ({
          ...prev,
          faq: updatedrequirements,
        }));
      }
    };

  const uploadImage = async (file: File | null) => {
    if (!file) return null;
    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("file", file);
    const res = await axios.post(
      `${BASE_URL}/api/v1/assets/upload/image`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return res.data.fileUrl;
  };

  // const uploadVideo = async (file: File | null) => {
  //   if (!file) return;
  //   const token = localStorage.getItem("token");
  //   const formData = new FormData();
  //   formData.append("file", file);
  //   const res = await axios.post(
  //     `${BASE_URL}/api/v1/assets/upload/video`,
  //     formData,
  //     {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         "Content-Type": "multipart/form-data",
  //       },
  //     }
  //   );
  //   return res.data.fileUrl;
  // };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const cid = localStorage.getItem("courseId");
    setIsDisable(true);

    try {
      const token = localStorage.getItem("token");
      const courseUrl = await uploadImage(advanceInfo.courseThumbnail);
      // const trailerUrl = await uploadVideo(advanceInfo.courseTrailer);
      advanceInfo.courseThumbnail = courseUrl;
      advanceInfo.courseTrailer = videoUrl;
      // Make the request with the token in the headers
      // const { courseThumbnail, courseTrailer, ...restFormState } = formState;

      // If you want to assign new values:
      // const modifiedFormState = {
      //   ...restFormState,
      // };
      const res = await axios.put(
        `${BASE_URL}/api/v1/course/updateCourse/${cid}`,
        { ...advanceInfo, welcomeMsg: "", congratulationsMsg: "" },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(res.data);
      // setActiveTab("curriculum");
      dispatch(setActiveTab("curriculum"));
    } catch (err) {
      console.error(err);
      alert("An error occurred while submitting the form.");
    } finally {
      setIsDisable(false);
    }
  };

  return (
    <div className="mb-[37px] min-h-[100vh]">
      <div className="heading lg:px-[40px] px-[10px] py-[24px] bg-white flex gap-x-[20px] justify-between items-center border-b-[2px] border-opacity-10 border-b-[#6E7485]">
        <p className="font-semibold text-[#1D2026] lg:text-[24px] text-[18px] md:leading-[32px] leading-[26px] whitespace-nowrap">
          Advance Information
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
      <form className="mt-[32px] flex flex-col gap-y-[24px] ">
        <div className="container flex flex-col justify-between items-start gap-4 w-[95%] mx-auto ">
          {/* Course Thumbnail Section */}
          <div className="thumbnail-section flex-1 p-4">
            <p className="section-title text-gray-800 text-lg font-semibold mb-2">
              Course Thumbnail
            </p>
            <div className="content flex flex-col lg:flex-row gap-4">
              <div className="image-container flex-1">
                {/* <img
                  src={
                    advanceInfo.courseThumbnail
                      ? URL.createObjectURL(advanceInfo.courseThumbnail)
                      : left_icon
                  }
                  alt="Course Thumbnail Placeholder"
                  className="object-cover w-full aspect-square"
                /> */}

                <img
                  src={
                    typeof advanceInfo.courseThumbnail === "string"
                      ? advanceInfo.courseThumbnail // Cloudinary URL
                      : advanceInfo.courseThumbnail
                      ? URL.createObjectURL(advanceInfo.courseThumbnail) // Local File
                      : left_icon // Default fallback
                  }
                   alt="Course Thumbnail Placeholder"
                  className="object-cover w-full aspect-video"
                />
              </div>
              <div className="details flex-1">
                <p className="text-gray-600 text-lg leading-6 mb-4">
                  Upload your course Thumbnail here.{" "}
                  <span className="text-gray-800 font-semibold">
                    Important guidelines:
                  </span>{" "}
                  1200x800 pixels or 12:8 Ratio. Supported format:
                  <span className="text-gray-800 font-semibold">
                    {" "}
                    .jpg, .jpeg, or .png
                  </span>
                </p>
                <input
                  type="file"
                  id="imgInput"
                  onChange={(e) => handleFileChange(e, "courseThumbnail")}
                  accept="image/*"
                  className="hidden"
                />
                <label
                  htmlFor="imgInput"
                  className="upload-btn bg-blue-100 text-blue-700 px-4 py-2 text-sm font-medium rounded flex items-center gap-2"
                >
                 <div className="flex justify-center items-center gap-2 w-full">
                 <p className="text-center">Upload Image</p>
                  <img
                    src={upload}
                    alt="Upload Icon"
                    className="w-5 h-5 object-contain"
                  />
                 </div>
                </label>
              </div>
            </div>
          </div>
          

          {/* Course Trailer Section */}
          <div className="trailer-section flex-1  p-4">

          <p className="section-title text-gray-800 text-lg font-semibold mb-2">
              Course Trailer
            </p>
            {/* <p className="section-title text-gray-800 text-sm font-semibold mb-2">
              Course Trailer
            </p>
            <div className="content flex flex-col lg:flex-row gap-4">
              <div className="image-container flex-1">
                
                {advanceInfo.courseTrailer ? (
                
                  <video
                    src={
                      typeof advanceInfo.courseTrailer === "string"
                        ? advanceInfo.courseTrailer // Cloudinary URL
                        : advanceInfo.courseTrailer
                        ? URL.createObjectURL(advanceInfo.courseTrailer) // Local File
                        : "" // Fallback if no video is provided
                    }
                    controls
                    className="object-cover w-full aspect-square"
                  />
                ) : (
                  <img
                    src={video}
                    alt="Course Trailer Placeholder"
                    className="object-cover w-full aspect-square"
                  />
                )}
              </div>
              <div className="details flex-1">
                <p className="text-gray-600 text-sm leading-6 mb-4">
                  Students who watch a well-made promo video are 5X more likely
                  to enroll in your course. We've seen that statistic go up to
                  10X for exceptionally awesome videos.
                </p>
                <input
                  type="file"
                  id="videoInput"
                  className="hidden"
                  accept="video/*"
                  onChange={(e) => handleFileChange(e, "courseTrailer")}
                />
                <label
                  htmlFor="videoInput"
                  className="upload-btn bg-blue-100 text-blue-700 px-4 py-2 text-sm font-medium rounded flex items-center gap-2"
                >
                  <p>Upload Video</p>
                  <img
                    src={upload}
                    alt="Upload Icon"
                    className="w-5 h-5 object-contain"
                  />
                </label>
              </div>
            </div> */}
            <VideoUploader videoUrl={videoUrl} setVideoUrl={setVideoUrl} />
          </div>
        </div>

        <div className="w-[90%] mx-auto h-[250px] bg-white mt-[32px] ">
          <p className="md:text-[18px] text-[16px] md:leading-[24px] leading-[22px] font-medium mb-[16px]">
            Course Descriptions
          </p>
          <ReactQuill
            theme="snow"
            className="w-full h-[200px]"
            placeholder="Enter your course descriptions"
            value={advanceInfo.courseDescription}
            onChange={handleDescriptionChange}
          />
        </div>

        {/* Teaching Points Section */}
        <div className="flex justify-between items-center lg:mt-[32px] mt-[40px] md:mb-[10px] mb-[24px] w-[90%] mx-auto">
          <p className="font-medium lg:text-[18px] text-[16px] text-[#1D2026] lg:leading-[24px] leading-[20px]">
            What is your schedule in this course ({advanceInfo.schedule.length}
            /8)
          </p>
          <button
            className="text-[#3A6BE4] lg:text-[14px] text-[12px] lg:leading-[20px] leading-[18px]"
            onClick={(e) => {
              e.preventDefault();
              if (advanceInfo.schedule.length < 8) {
                setAdvanceInfo((prev) => ({
                  ...prev,
                  schedule: [...prev.schedule, ""],
                }));
              }
            }}
          >
            + Add New
          </button>
        </div>
        {advanceInfo.schedule.map((item, index) => (
          <div key={index} className="w-[90%] mx-auto mb-[24px]">
            <p className="text-[#1D2026] md:text-[14px] text-[12px] mb-[5px]">
              {index + 1}
            </p>
            <div className="relative">
              <input
                type="text"
                placeholder="What is your schedule in this course..."
                className="placeholder-text-[#8C94A3] border-[#E9EAF0] border w-full outline-none py-[5px] pl-[5px] pr-[80px]"
                value={item}
                onChange={(e) => handleTeachChange(index, e.target.value)}
              />
              <p className="text-[#4E5566] md:text-[14px] text-[12px] md:leading-[22px] leading-[20px] absolute top-[5px] right-[10px]">
                {item.length}/120
              </p>
            </div>
          </div>
        ))}

        <div className="flex justify-between items-center lg:mt-[32px] mt-[40px] md:mb-[10px] mb-[24px] w-[90%] mx-auto">
          <p className="font-medium lg:text-[18px] text-[16px] text-[#1D2026] lg:leading-[24px] leading-[20px]">
            What you will get ({advanceInfo.whatYouWillGet.length}/8)
          </p>
          <button
            className="text-[#3A6BE4] lg:text-[14px] text-[12px] lg:leading-[20px] leading-[18px]"
            onClick={(e) => {
              e.preventDefault();
              if (advanceInfo.whatYouWillGet.length < 8) {
                setAdvanceInfo((prev) => ({
                  ...prev,
                  whatYouWillGet: [...prev.whatYouWillGet, ""],
                }));
              }
            }}
          >
            + Add New
          </button>
        </div>

        {advanceInfo.whatYouWillGet.map((item, index) => (
          <div key={index} className="w-[90%] mx-auto mb-[24px]">
            <p className="text-[#1D2026] md:text-[14px] text-[12px] mb-[5px]">
              {index + 1}
            </p>
            <div className="relative">
              <input
                type="text"
                placeholder="What will be the outcome of this course..."
                className="placeholder-text-[#8C94A3] border-[#E9EAF0] border w-full outline-none py-[5px] pl-[10px] pr-[80px]"
                value={item}
                onChange={(e) => handleAudienceChange(index, e.target.value)}
              />
              <p className="text-[#4E5566] md:text-[14px] text-[12px] md:leading-[22px] leading-[20px] absolute top-[5px] right-[10px]">
                {item.length}/120
              </p>
            </div>
          </div>
        ))}

        <div className="flex justify-between items-center lg:mt-[32px] mt-[40px] md:mb-[10px] mb-[24px] w-[90%] mx-auto">
          <p className="font-medium lg:text-[18px] text-[16px] text-[#1D2026] lg:leading-[24px] leading-[20px]">
            FAQ ({advanceInfo.faq.length}/8)
          </p>
          <button
            className="text-[#3A6BE4] lg:text-[14px] text-[12px] lg:leading-[20px] leading-[18px]"
            onClick={(e) => {
              e.preventDefault();
              if (advanceInfo.faq.length < 8) {
                setAdvanceInfo((prev) => ({
                  ...prev,
                  faq: [...prev.faq, {question:"",answer:""}],
                }));
              }
            }}
          >
            + Add New
          </button>
        </div>

        {advanceInfo.faq.map((desc, index) => (
          <div className="w-[90%] mx-auto mb-[24px]">
            <p className="text-[#1D2026] md:text-[14px] text-[12px] mb-[5px]">
              {index + 1}
            </p>
            <div className="relative">
              <input
                type="text"
                placeholder="Question...."
                value={desc.question}
                className="placeholder-text-[#8C94A3] border-[#E9EAF0] border w-full outline-none py-[5px] pl-[10px] pr-[80px]"
                onChange={(e) => handleRequirementChange(index, "question",e.target.value)}
              />
              <p className="text-[#4E5566] md:text-[14px] text-[12px] md:leading-[22px] leading-[20px] absolute top-[5px] right-[10px]">
                {desc.question?.length}/120
              </p>
            </div>

            <div className="relative mt-4">
              <input
                type="text"
                placeholder="Answer"
                value={desc.answer}
                className="placeholder-text-[#8C94A3] border-[#E9EAF0] border w-full outline-none py-[5px] pl-[10px] pr-[80px]"
                onChange={(e) => handleRequirementChange(index,"answer", e.target.value)}
              />
              <p className="text-[#4E5566] md:text-[14px] text-[12px] md:leading-[22px] leading-[20px] absolute top-[5px] right-[10px]">
                {desc.answer?.length}/120
              </p>
            </div>
          </div>
        ))}

        <div className="flex justify-between items-center mt-[32px] pb-[40px] pt-[60px] w-[90%] m-auto">
          <button
            className="text-[#6E7485] lg:text-[18px] text-[14px] font-semibold lg:leading-[56px] leading-[40px] px-[32px] border-[#E9EAF0] border-[1px]"
            // onClick={() => setActiveTab("basic")}
            onClick={() => dispatch(setActiveTab("basic"))}
          >
            Previous
          </button>
          <button
            className={`text-white font-semibold text-[14px] lg:text-[18px] px-5 lg:px-8 py-2 lg:py-3 
  bg-[#3A6BE4] rounded-lg transition-all duration-300 
  hover:bg-[#2f5bcc] active:scale-95 focus:outline-none 
  ${isDisable ? "opacity-50 cursor-not-allowed hover:bg-[#3A6BE4]" : ""}`}
            onClick={handleSubmit}
            disabled={isDisable}
          >
            {isDisable ? "Saving..." : "Save & Next"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdvanceInformation;
