import MagnifyingGlass from "../assets/MagnifyingGlass.svg";
import Navbar from "../components/Navbar";
import Notepad from "../assets/Notepad.svg";
import Content from "../components/Content";
import Camera from "../assets/Camera.svg";
import Notepad2 from "../assets/Notepad2.svg";
import { useEffect, useState } from "react";
// import UploadVideoModal from "../components/UploadVideoModal";
import UploadDocumentModal from "../components/UploadDocumentModal";
import UploadTestModal from "../components/UploadTestModal";
import UploadDppModal from "../components/UploadDppModal";
import UploadAssignmentModal from "../components/UploadAssignmentModal";
import { useDispatch, useSelector } from "react-redux";
// import uploadFiles from "../utils/helper";
// import videouploadFiles from "../utils/videohelper";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../utils/store";
// import { updateLecture } from "../utils/lectureSlice";
import { updateSubject } from "../utils/subjectSlice";
import { setActiveTab } from "../utils/activeTabSlice";
import { BASE_URL } from "../constants/url";
import axios from "axios";
import { LoadingSpinner } from "@/custom/loading-spinner";
import UploadVideoModal2 from "@/components/UploadVideoModal2";

type FormData = {
  name: string;
  link: string;
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

// type ContentCourseProps={
//   sections: Section[];
//   setSections: React.Dispatch<React.SetStateAction<Section[]>>;
// }

const ContentCourse = () => {
  const { subject, chapter, id,lectureId } = useParams();
  const decodedChapterName = decodeURIComponent(chapter || "");
  const decodedSubjectName = decodeURIComponent(subject || "");
  console.log(decodedChapterName);
  console.log(decodedSubjectName);
  // const numericId = Number(id);
  // const lectures = useSelector((store: RootState) => store.lecture.lectures);
  const subjects = useSelector((store: RootState) => store.subject.subjects);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isDisable, setIsDisable] = useState(false);
  const [flag, setFlag] = useState(false);
  // const notesUrl: File[] = [];

  const [isVideo, setIsVideo] = useState(false);
  const [videoData, setVideoData] = useState<FormData[] | null>(null);

  const [isNotes, setIsNotes] = useState(false);
  const [notesData, setNotesData] = useState<FormData[] | null>(null);


  const [isTest, setIsTest] = useState(false);
  const [testData, setTestData] = useState<FormData[] | null>(null);

  const [isDpp, setIsDpp] = useState(false);
  const [dppData, setDppData] = useState<FormData[] | null>(null);

  const [isAssignment, setIsAssignment] = useState(false);
  const [assignmentData, setAssignmentData] = useState<FormData[] | null>(null);

  const [videoCount, setVideoCount] = useState(0);
  const [notesCount, setNotesCount] = useState(0);
  const [testCount, setTestCount] = useState(0);
  const [dppCount, setDppCount] = useState(0);
  const [assignmentCount, setAssignmentCount] = useState(0);
  const editId = useSelector((store: RootState) => store.edit.editId);

  useEffect(() => {
    subjects.forEach((subject: any) => {
      if (subject.id === id) {
        // Assuming numericId corresponds to the subject ID
        const lect = subject.lectures.find(
          (lecture: any) => lecture.lectureTitle === decodedChapterName
        );
        console.log("lect=", lect);
       
        setVideoData(lect?.video);
        setVideoCount(lect?.video?.length - 1 || 0);
        setNotesData(lect?.notes);
        setNotesCount(lect?.notes?.length - 1 || 0);
        setTestData(lect?.test);
        setTestCount(lect?.test?.length - 1 || 0);
        setAssignmentData(lect?.assignment);
        setAssignmentCount(lect?.assignment?.length - 1 || 0);
        setDppData(lect?.dpp);
        setDppCount(lect?.dpp?.length - 1 || 0);
      }
    });
  }, []);

  useEffect(() => {
    if (!editId) return;
    // dispatch(emptySection());
    console.log("useEffect called in content course")
    getCourseData(editId);
  }, [editId]);

  useEffect(() => {
    if (videoData) {
      setVideoCount((prev) => prev + 1);
    }
  }, [videoData]);

  useEffect(() => {
    if (notesData) {
      setNotesCount((prev) => prev + 1);
    }
  }, [notesData]);

  useEffect(() => {
    if (testData) {
      setTestCount((prev) => prev + 1);
    }
  }, [testData]);

  useEffect(() => {
    if (dppData) {
      setDppCount((prev) => prev + 1);
    }
  }, [dppData]);

  useEffect(() => {
    if (assignmentData) {
      setAssignmentCount((prev) => prev + 1);
    }
  }, [assignmentData]);

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
      // console.log("result of edit api is "+result)
      // console.log("result of api is "+result[0]);
      // const idArray: number[] = [];

      const ans = result[0].subjects.filter(
        (s: any) => s.subjectTitle === decodedSubjectName
      );
      // console.log("ans=" + JSON.stringify(ans, null, 2));

      // const ans1=ans.lectures?.filter((l:any)=>l.lectureTitle===decodedChapterName);
      // const ans1=ans.lectures;
      const ans1 = ans.map((a: any) =>
        a.lectures?.filter((l: any) => l.lectureTitle === decodedChapterName)
      );
      // console.log("ans1=" + JSON.stringify(ans1, null, 2));

      ans1.map((a: any) => {
        setVideoData(a[0]?.video);
        setVideoCount(a[0]?.video?.length - 1 || 0);
        setNotesData(a[0]?.notes);
        setNotesCount(a[0]?.notes?.length - 1 || 0);
        setTestData(a[0]?.test);
        setTestCount(a[0]?.test?.length - 1 || 0);
        setAssignmentData(a[0]?.assignment);
        setAssignmentCount(a[0]?.assignment?.length - 1 || 0);
        setDppData(a[0]?.dpp);
        setDppCount(a[0]?.dpp?.length - 1 || 0);
      });

      // console.log(JSON.stringify(videoData, null, 2));
    } catch (err) {
      console.log(err);
    }
  };

  // const handleSave = async () => {
  //   const token = localStorage.getItem("token");
  //   if (!token) {
  //     console.error("No token found");
  //     return;
  //   }

  //   try {
  //     // Upload files and get URLs
  //     const notesUrls = await uploadFiles(notesData, token);
  //     const videoUrls = await videouploadFiles(videoData, token);
  //     const testUrls = await uploadFiles(testData, token);
  //     const dppUrls = await uploadFiles(dppData, token);
  //     const assignmentUrls = await uploadFiles(assignmentData, token);

  //     // Prepare the form state
  //     const formState = {
  //       notes: notesUrls,
  //       videos: videoUrls,
  //       tests: testUrls,
  //       dpp: dppUrls,
  //       assignments: assignmentUrls,
  //     };

  //     console.log("Form State with Uploaded URLs:", formState);

  //     // Update lectures
  //     // const updatedLectures = lectures.map((lecture) =>
  //     //   lecture.id === numericId ? { ...lecture, ...formState } : lecture
  //     // );
  //     /*
  //     * Doing this u will not be updating the redux store
  //     */

  //     dispatch(
  //       updateLecture({
  //         id:Number(id), // Match the lecture ID
  //         formState,
  //       })
  //     );

  //     subjects.map((subject)=>subject.id===numericId?dispatch(updateSubject({id:subject.id,lectures[numericId]}):subject))

  //     // dispatch(
  //     //   updateSubject({
  //     //     data
  //     //   })
  //     // )
  //   } catch (err) {
  //     console.error("Error uploading files:", err);
  //   }
  // };

  const handleSave = async () => {
    const token = localStorage.getItem("token");
    setIsDisable(true);
    if (!token) {
      console.error("No token found");
      return;
    }
    console.log("hi");

    if(editId){
      console.log("Inside handle Save")
      try{
        const token=localStorage.getItem("token");
        const res=await axios.put(`${BASE_URL}/api/v1/curriculum/editLectures/${lectureId}`,{
          _id:lectureId,
          subjectId:id,
          title:decodedChapterName,
          notes:notesData,
          dpp:dppData,
          video:videoData,
          assignment:assignmentData,
          test:testData
        },{
          headers:{
            Authorization:`Bearer ${token}`
          }
        })
        console.log("lectures = "+res.data);
      }
      catch(err){
        console.log(err);
      }
    }

    try {
      // Upload files and get URLs
      // const notesUrls = await uploadFiles(notesData, token);
      // const videoUrls = await videouploadFiles(videoData, token);
      // const testUrls = await uploadFiles(testData, token);
      // const dppUrls = await uploadFiles(dppData, token);
      // const assignmentUrls = await uploadFiles(assignmentData, token);

      // Prepare the form state
      // setNotesData1(notesData);
      // const data=notesData;

      // setVideoData(null);
      // setNotesData(null);
      // setTestData(null);
      // setAssignmentData(null);
      // setDppData(null);
      // setVideoCount(0);
      // setNotesCount(0);
      // setTestCount(0);
      // setDppCount(0);
      // setAssignmentCount(0);
      const formState = {
        notes: notesData,
        videos: videoData,
        tests: testData,
        dpp: dppData,
        assignments: assignmentData,
      };

      console.log("Form State with Uploaded URLs:", formState);



      // Update the lecture in the Redux store
      // await dispatch(
      //   updateLecture({
      //     id: Number(id), // Match the lecture ID
      //     formState,
      //   })
      // );

      // Find the corresponding subject and update its lectures
      // const lectureTitle=lectures.

      subjects.forEach((subject: any) => {
        if (subject.id === id) {
          // Assuming numericId corresponds to the subject ID
          // const lect = subject.lectures.find(
          //   (lecture: any) => lecture.lectureTitle === decodedChapterName
          // );
          // console.log("lect=", lect);
          // if (lect) {
          //   if (formState.videos) {
          //     console.log("formState.videos=", formState.videos);
          //     lect.video.push(formState.videos[0]);
          //   }
          //   if (formState.assignments) {
          //     lect.assignment.push(formState.assignments);
          //   }
          //   if (formState.tests) {
          //     lect.test.push(formState.tests);
          //   }
          //   if (formState.dpp) {
          //     lect.dpp.push(formState.dpp);
          //   }
          // } else {
          const updatedLecture = {
            // ...subject,
            lectureTitle: decodedChapterName,
            id,
            notes: formState.notes,
            dpp: formState.dpp,
            video: formState.videos,
            assignment: formState.assignments,
            test: formState.tests,
          };

          // Dispatch updateSubject action with the new lecture data
          dispatch(
            updateSubject({
              id: subject.id,
              cname: decodedChapterName,
              sname: decodedSubjectName,
              data: updatedLecture,
            })
          );
        }
      });
      navigate("/createcourse");
      // setActiveTab("curriculum")
      dispatch(setActiveTab("curriculum"));
    } catch (err) {
      console.error("Error uploading files:", err);
    } finally {
      setIsDisable(false);
    }
  };

  return (
    <div className="flex-1 lg:ml-[250px] bg-[#F5F7FA] overflow-x-hidden">
      <Navbar />
      <div className="pt-[41px] bg-white lg:w-[90%] w-[95%] mx-auto mt-[56px]">
        <LoadingSpinner isLoading={isLoading} />
        <div className="flex  justify-between items-center w-[90%] mx-auto gap-x-[20px]">
          <div className="searchbox bg-white lg:max-w-[600px]  w-[60%]">
            <div className="flex lg:px-[18px] px-[16px] lg:py-[12px] py-[10px] border-[#E9EAF0] border">
              <img
                src={MagnifyingGlass}
                className="mr-[12px] w-[24px] h-[24px]"
              />
              <input
                type="text"
                placeholder="Search"
                className="w-full h-full border-none outline-none placeholder-[#8C94A3]  text-[16px] leading-[24px] bg-white  "
              />
            </div>
          </div>
          <div className="flex  justify-between  items-center w-[30%] min-w-max gap-x-[14px] ">
            <button
              className={`font-semibold text-white text-[14px] lg:text-[16px] px-5 lg:px-6 py-2 lg:py-3 
  bg-[#3A6BE4] rounded-lg transition-all duration-300 
  hover:bg-[#2f5bcc] active:scale-95 
  ${isDisable ? "opacity-50 cursor-not-allowed" : ""}`}
              onClick={handleSave}
              disabled={isDisable}
            >
              {isDisable ? "Saving..." : "Save"}
            </button>
            <div className="flex lg:gap-[12px] gap-[8px] items-center justify-center font-semibold lg:text-[16px] lg:px-[24px] px-[18px] text-[14px] text-[#000000] lg:leading-[48px] leading-[40px] bg-[#FDFDFD] min-w-max drop-shadow-md">
              <img src={Notepad} alt="" className="" />
              <button className="">Bulk Action</button>
            </div>
          </div>
        </div>

        <div className="w-[90%] mx-auto pb-[100px] ">
          <p className="font-semibold lg:text-[24px] text-[20px] text-[#1D2026] lg:leading-[32px] leading-[28px] p-[24px]">
            Course Content
          </p>
          <div className="min-h-[312px] bg-[#F5F7FA] ">
            <div className="pt-[40px]  pb-[100px] w-[90%] mx-auto">
              <div className="flex lg:gap-x-[40px] gap-x-[20px]">
                <Content
                  videoData={videoData}
                  notesData={notesData}
                  testData={testData}
                  dppData={dppData}
                  videoCount={videoCount}
                  notesCount={notesCount}
                  testCount={testCount}
                  dppCount={dppCount}
                  setVideoData={setVideoData}
                  setNotesData={setNotesData}
                  setTestData={setTestData}
                  setDppData={setDppData}
                  setVideoCount={setVideoCount}
                  setNotesCount={setNotesCount}
                  setTestCount={setTestCount}
                  setDppCount={setDppCount}
                  assignmentData={assignmentData}
                  assignmentCount={assignmentCount}
                  setAssignmentData={setAssignmentData}
                  setAssignmentCount={setAssignmentCount}
                  editId={editId}
                  flag={flag}
                />
                <div className="flex flex-col gap-[5px]">
                  <p className="text-[14px] text-[#000000] font-medium lg:leading-[22px] leading-[18px]">
                    ADD CONTENT
                  </p>

                  <div
                    className="bg-white lg:min-w-[170px] min-w-[100px] p-[10px] rounded-[10px] flex gap-x-[4px]"
                    onClick={() => {
                      setIsVideo((prev) => !prev);
                      setFlag(true);
                    }}
                  >
                    <img src={Camera} className="object-contain" />
                    <p>Video</p>
                  </div>

                  {/* {isVideo && (
                    <UploadVideoModal
                    setIsLoading={setIsLoading}
                      setIsVideo={setIsVideo}
                      setVideoData={setVideoData}
                    />
                  )} */}

                  {isVideo && (
                    <UploadVideoModal2
                      setIsVideo={setIsVideo}
                      setVideoData={setVideoData}
                    />
                  )}

                  <div
                    className="bg-white lg:min-w-[170px] min-w-[100px] p-[10px] rounded-[10px] flex gap-x-[4px]"
                    onClick={() => {
                      setIsNotes((prev) => !prev);
                      setFlag(true);
                    }}
                  >
                    <img src={Notepad2} className="object-contain" />
                    <p>Notes</p>
                  </div>

                  {isNotes && (
                    <UploadDocumentModal
                      setIsLoading={setIsLoading}
                      setIsNotes={setIsNotes}
                      setNotesData={setNotesData}
                    />
                  )}

                  <div
                    className="bg-white lg:min-w-[170px] min-w-[100px] p-[10px] rounded-[10px] flex gap-x-[4px]"
                    onClick={() => {
                      setIsTest((prev) => !prev);
                      setFlag(true);
                    }}
                  >
                    <img src={Camera} className="object-contain" />
                    <p>Test</p>
                  </div>

                  {isTest && (
                    <UploadTestModal
                      setIsTest={setIsTest}
                      setTestData={setTestData}
                      setIsLoading={setIsLoading}
                    />
                  )}

                  <div
                    className="bg-white lg:min-w-[170px] min-w-[100px] p-[10px] rounded-[10px] flex gap-x-[4px]"
                    onClick={() => {
                      setIsDpp((prev) => !prev);
                      setFlag(true);
                    }}
                  >
                    <img src={Camera} className="object-contain" />
                    <p>DPP</p>
                  </div>

                  {isDpp && (
                    <UploadDppModal
                      setIsDpp={setIsDpp}
                      setDppData={setDppData}
                      setIsLoading={setIsLoading}
                    />
                  )}

                  <div
                    className="bg-white lg:min-w-[170px] min-w-[100px] p-[10px] rounded-[10px] flex gap-x-[4px]"
                    onClick={() => {
                      setIsAssignment((prev) => !prev);
                      setFlag(true);
                    }}
                  >
                    <img src={Camera} className="object-contain" />
                    <p>Assignment</p>
                  </div>

                  {isAssignment && (
                    <UploadAssignmentModal
                      setIsAssignment={setIsAssignment}
                      setAssignmentData={setAssignmentData}
                      setIsLoading={setIsLoading}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCourse;
