import menu from "../assets/Menu.svg";
import plus from "../assets/Plus.svg";
import pencil from "../assets/PencilLine.svg";
import trash from "../assets/Trash.svg";
import { Link, useLocation } from "react-router-dom";
import DownArrow from "../assets/CaretDown.svg";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { addLecture } from "../utils/lectureSlice";
import {
  addLectureById,
  addSubject,
  deleteLectureById,
  deleteSubject,
  deleteSubjectById,
  updateLectureTitle,
  updateSubjectName,
} from "../utils/subjectSlice";
import { RootState } from "../utils/store";
import axios from "axios";
// import {
//   addSectionRedux,
//   addTopicRedux,
//   deleteSectionRedux,
//   deleteTopicRedux,
//   emptySection,
//   updateSectionNameRedux,
//   updateTopicNameRedux,
// } from "../utils/sectionSlice";
import { setActiveTab } from "../utils/activeTabSlice";
import { BASE_URL } from "../constants/url";
// import { generateUniqueNumber } from "../utils/generateUniqueNumber";
import { nanoid } from "@reduxjs/toolkit";

// type Tab = "basic" | "advance" | "curriculum" | "publish";

// type CurriculumProps = {
//   setActiveTab: React.Dispatch<React.SetStateAction<Tab>>;
// };

// interface Topic {
//   id: number;
//   name: string;
// }

// interface Section {
//   id: number;
//   name: string;
//   topics: Topic[];
// }

type FormData = {
  name: string;
  link: string;
};

interface LectureData {
  lectureTitle: string;
  notes: FormData[];
  dpp: FormData[];
  video: FormData[];
  assignment: FormData[];
  test: FormData[];
}

type ResponseData = {
  subjectTitle: string;
  lectures: LectureData[];
};

const Curriculm = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const inputRef2 = useRef<HTMLInputElement | null>(null);

  const subjects = useSelector((store: RootState) => store.subject.subjects);
  const editId = useSelector((store: RootState) => store.edit.editId);
  const [editNewTopicId, setEditNewTopicId] = useState();
  const [editNewSectionId, setEditNewSectionId] = useState();

  useEffect(() => {
    if (!editId) return;
    dispatch(deleteSubject());
    console.log("editId = " + editId);
    console.log("ritwik useEffect called  !!!");
    getCourseData(editId);
  }, []);

  // const [sections, setSections] = useState<Section[]>([
  //   { id: 1, name: "Section Name", topics: [{ id: 1, name: "Chapter Name" }] },
  // ]);s

  // const sections = useSelector((store: RootState) => store.section.sections);
  // const subjects = useSelector((store: RootState) => store.subject.subjects);
  const [isDisable, setIsDisable] = useState(false);

  const [newSectionName, setNewSectionName] = useState("");
  const [editingSubjectId, setEditingSectionId] = useState<string | null>(null);
  const [editingSectionName, setEditingSectionName] = useState("");
  const [editingTopicId, setEditingTopicId] = useState<string | null>(null);
  const [editingTopicName, setEditingTopicName] = useState<string>("");

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
      console.log("called!!!");
      const result = res.data.data;
      // console.log("data = "+JSON.stringify(result[0],null,2));
      const idArray: string[] = [];

      // console.log("data of subjects= "+JSON.stringify(result[0].subjects,null,2));

      result[0].subjects.map((re: any) => {
        // if (re.lectures.length === 0) {
        //   return;
        // }

        // const id = generateUniqueNumber();
        // const id = Date.now() + index;
        idArray.push(re.id);

        // console.log("called !!!");
        dispatch(
          addSubject({ id: re.id, subjectTitle: re.subjectTitle, lectures: [] })
        );
      });

      result[0].subjects.map((s: any, i: number) => {
        // console.log("u are "+JSON.stringify(s.lectures,null,2));
        s.lectures.map((le: any) => {
          // console.log(le.lectureTitle)
          // const topic = {
          //   id: generateUniqueNumber(),
          //   name: le.lectureTitle,
          // };

          dispatch(
            addLectureById({
              subjectId: idArray[i],
              topicId: le.id,
              lecture: le.lectureTitle,
            })
          );
        });
      });
    } catch (err) {
      console.log(err);
    }
  };

  const addSection = async (newSectionName: string) => {
    if (newSectionName.trim()) {
      // const id = Date.now();
      // // setSections((prev) => [
      // //   ...prev,
      // //   { id, name: newSectionName.trim(), topics: [] },
      // // ]);
      // dispatch(addSectionRedux({ id, name: newSectionName }));

      if (editId) {
        try {
          const token = localStorage.getItem("token");
          const res = await axios.post(
            `${BASE_URL}/api/v1/curriculum/addSubject`,
            { courseId: editId },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log(res.data);

          const res1 = await axios.put(
            `${BASE_URL}/api/v1/curriculum/editSections/${res.data.data._id}`,
            {
              title: newSectionName,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          console.log("after updating the topic name " + res1.data);

          dispatch(
            addSubject({
              id: res.data.data._id,
              subjectTitle: newSectionName.trim(),
              lectures: [],
            })
          );
        } catch (err) {
          console.log(err);
        }
        return;
      }

      dispatch(
        addSubject({
          id: nanoid(),
          subjectTitle: newSectionName.trim(),
          lectures: [],
        })
      );
      setNewSectionName("");
    }
  };

  const deleteSection = (id: string) => {
    // setSections((prev) => prev.filter((section) => section.id !== id));
    // dispatch(deleteSectionRedux(id));
    dispatch(deleteSubjectById(id));
  };

  const updateSectionName = async () => {
    if (editingSubjectId !== null && editingSectionName.trim()) {
      // setSections((prev) =>
      //   prev.map((section) =>
      //     section.id === editingSectionId
      //       ? { ...section, name: editingSectionName.trim() }
      //       : section
      //   )
      // );
      // dispatch(
      //   updateSectionNameRedux({
      //     id: editingSubjectId,
      //     name: editingSectionName,
      //   })
      // );

      if (editId) {
        const token = localStorage.getItem("token");
        const res1 = await axios.put(
          `${BASE_URL}/api/v1/curriculum/editSections/${editingSubjectId}`,
          {
            title: editingSectionName.trim(),
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("after updating the topic name " + res1.data);
      }

      dispatch(
        updateSubjectName({
          subjectId: editingSubjectId,
          subjectName: editingSectionName,
        })
      );

      // dispatch(
      //   addSubject({
      //     id: editingSubjectId,
      //     subjectTitle: editingSectionName,
      //     lectures: [],
      //   })
      // );
    }
    setEditingSectionId(null);
    setEditingSectionName("");
  };

  const addTopic = async (sectionId: string, topicName: string) => {
    // setSections((prev) =>
    //   prev.map((section) =>
    //     section.id === sectionId
    //       ? {
    //           ...section,
    //           topics: [...section.topics, { id: Date.now(), name: topicName }],
    //         }
    //       : section
    //   )
    // );
    // const topic: Topic = { id: Date.now(), name: topicName };
    // dispatch(addTopicRedux({ sectionId, topic }));
    console.log("sectionId=" + sectionId);
    console.log("topicName=" + topicName);

    const token = localStorage.getItem("token");
    if (editId) {
      try {
        const res = await axios.post(
          `${BASE_URL}/api/v1/curriculum/addLecture`,
          {
            subjectId: sectionId,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(
          "data after adding topic " + JSON.stringify(res.data, null, 2)
        );
        setEditNewTopicId(res.data.data._id);

        dispatch(
          addLectureById({
            subjectId: sectionId,
            topicId: res.data.data._id,
            lecture: topicName,
          })
        );
        console.log("new editing topic id is " + editNewTopicId);
      } catch (err) {
        console.log(err);
      }
    } else {
      dispatch(
        addLectureById({
          subjectId: sectionId,
          topicId: nanoid(),
          lecture: topicName,
        })
      );
    }
  };

  const deleteTopic = (sectionId: string, topicId: string) => {
    // setSections((prev) =>
    //   prev.map((section) =>
    //     section.id === sectionId
    //       ? {
    //           ...section,
    //           topics: section.topics.filter((topic) => topic.id !== topicId),
    //         }
    //       : section
    //   )
    // );

    // dispatch(deleteTopicRedux({ sectionId, topicId }));
    dispatch(deleteLectureById({ sectionId, topicId }));
  };

  const editTopicName = (sectionId: string) => {
    if (
      editingTopicId != null &&
      sectionId != null &&
      editingTopicName.trim()
    ) {
      // setSections((prev) =>
      //   prev.map((section) =>
      //     section.id === sectionId
      //       ? {
      //           ...section,
      //           topics: section.topics.map((topic) =>
      //             topic.id === editingTopicId
      //               ? { ...topic, name: editingTopicName.trim() }
      //               : topic
      //           ),
      //         }
      //       : section
      //   )
      // );
      // dispatch(
      //   updateTopicNameRedux({
      //     sectionId,
      //     topicId: editingTopicId,
      //     name: editingTopicName,
      //   })
      // );
      dispatch(
        updateLectureTitle({
          sectionId,
          topicId: editingTopicId,
          name: editingTopicName,
        })
      );
    }

    // dispatch(
    //   addLecture({
    //     id: editingTopicId,
    //     subjectId: sectionId,
    //     lectureTitle: editingTopicName,
    //   })
    // );
    // subjects.map((subject)=>subject.id===sectionId?subject.lectures.push({id:editingTopicId,lectureTitle:editingTopicName}))

    setEditingTopicId(null);
    setEditingTopicName("");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleSubmit = async () => {
    // if(editId){
    // const token = localStorage.getItem("token");
    //   try{
    //     const res=await axios.put(`${BASE_URL}/api/v1/course/updateCourse/${editId}`,{})
    //   }catch(err){
    //     console.log(err);
    //   }
    //   return;
    // }
    const token = localStorage.getItem("token");
    setIsDisable(true);
    console.log({ ...subjects });
    // const {id,...rest}=subjects;
    const filteredSubjects = subjects.map((s) => {
      const { id, ...rest } = s;
      return rest;
    });
    const courseId = localStorage.getItem("courseId");
    const data: ResponseData[] = filteredSubjects;
    console.log("this is subject ritwik" + JSON.stringify(subjects, null, 2));
    try {
      // const {id,lectureTitle,...restform}=subjects
      if (editId) {
        const res = await axios.post(
          `${BASE_URL}/api/v1/curriculum/editCurriculum`,
          { courseId: editId, data: subjects },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("after edit = " + JSON.stringify(res.data, null, 2));
      } else {
        const res = await axios.post(
          `${BASE_URL}/api/v1/curriculum/addCurriculum`,
          { courseId, data },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(res.data);
      }
      // setActiveTab("publish");
      dispatch(setActiveTab("publish"));
    } catch (err) {
      console.error(err);
    } finally {
      setIsDisable(false);
    }
  };

  return (
    <div className="mb-[37px]">
      {false && newSectionName}
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
            Class Details
          </p>
        </div>

        {/* <div className="flex gap-2 lg:p-[24px] p-[12px]">
          <img src={plus} alt="" className="object-contain" />
          <img src={pencil} alt="" className="object-contain" />
          <img src={trash} alt="" className="object-contain" />
        </div> */}
      </div>

      {/*  */}
      {subjects.map((subject, i) => (
        <div
          className="contentBox  mt-[16px] w-[90%] mx-auto min-h-[312px] pb-8 bg-[#F5F7FA]"
          key={i}
        >
          <div className="flex justify-between items-center">
            <div className="flex gap-x-2 lg:p-[24px] p-[12px]">
              <img src={menu} />
              {editingSubjectId === subject.id ? (
                <input
                  ref={inputRef}
                  type="text"
                  value={editingSectionName}
                  onChange={(e) => setEditingSectionName(e.target.value)}
                  onBlur={updateSectionName}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") updateSectionName();
                  }}
                  className="bg-[#F5F7FA] border-b border-gray-400 focus:outline-none"
                  autoFocus
                />
              ) : (
                <p
                  className="text-[#1D2026] font-medium text-[16px] cursor-pointer"
                  onClick={async () => {
                    setEditingSectionId(subject.id);
                    setEditingSectionName(subject.subjectTitle);
                    // const token = localStorage.getItem("token");
                    // const res1 = await axios.put(
                    //   `${BASE_URL}/api/v1/curriculum/editSections/${subject.id}`,
                    //   {
                    //     title: subject.subjectTitle,
                    //   },
                    //   {
                    //     headers: {
                    //       Authorization: `Bearer ${token}`,
                    //     },
                    //   }
                    // );

                    // console.log("after updating the topic name " + res1.data);
                  }}
                >
                  {subject.subjectTitle}
                </p>
              )}
            </div>

            <div className="flex gap-2 lg:p-[24px] p-[12px]">
              <img
                src={plus}
                alt=""
                className="object-contain pointer"
                onClick={() => {
                  addTopic(subject.id, "Chapter Name");
                }}
              />
              <img
                src={pencil}
                alt=""
                className="object-contain"
                onClick={async () => {
                  setEditingSectionId(subject.id);
                  setEditingSectionName(subject.subjectTitle);
                  inputRef.current?.focus();
                  // const token = localStorage.getItem("token");
                  // const res1 = await axios.put(
                  //   `${BASE_URL}/api/v1/curriculum/editSections/${subject.id}`,
                  //   {
                  //     title: subject.subjectTitle,
                  //   },
                  //   {
                  //     headers: {
                  //       Authorization: `Bearer ${token}`,
                  //     },
                  //   }
                  // );

                  // console.log("after updating the topic name " + res1.data);
                }}
              />
              <img
                src={trash}
                alt=""
                className="object-contain cursor-pointer"
                onClick={() => deleteSection(subject.id)}
              />
            </div>
          </div>
          {subject.lectures.map((topic) => (
            <div className="innerContent bg-white w-[95%] mx-auto mb-4">
              <div className="flex justify-between items-center">
                <div className="flex gap-x-2 lg:p-[24px] p-[12px]">
                  <img src={menu} />
                  {editingTopicId === topic.id ? (
                    <input
                      ref={inputRef2}
                      type="text"
                      value={editingTopicName}
                      onChange={(e) => setEditingTopicName(e.target.value)}
                      onBlur={() => editTopicName(subject.id)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") editTopicName(subject.id);
                      }}
                      className="bg-[#F5F7FA] border-b border-gray-400 focus:outline-none"
                      autoFocus
                    />
                  ) : (
                    <p
                      className="text-[#1D2026] font-medium text-[16px] cursor-pointer"
                      onClick={() => {
                        setEditingTopicId(topic.id);
                        setEditingTopicName(topic.lectureTitle);
                      }}
                    >
                      {topic.lectureTitle}
                    </p>
                  )}
                </div>

                <div className="flex gap-2 lg:p-[24px] p-[12px]">
                  <Link
                    to={`/contentcourse/${subject.subjectTitle}/${topic.lectureTitle}/${subject.id}/${topic.id}`}
                  >
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
                    onClick={() => {
                      setEditingTopicId(topic.id);
                      setEditingTopicName(topic.lectureTitle);
                      inputRef2.current?.focus();
                    }}
                  />
                  <img
                    src={trash}
                    alt=""
                    className="object-contain pointer"
                    onClick={() => deleteTopic(subject.id, topic.id)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}

      {/* // */}

      <div className="w-[90%] mx-auto">
        <button
          className="mt-[30px] bg-[#3D70F5] bg-opacity-25 text-[#3A6BE4] font-semibold text-[16px] leading-[48px] w-full text-center"
          onClick={() => addSection("Section Name")}
        >
          Add Sections
        </button>
      </div>

      <div className="flex justify-between items-center mt-[32px] pb-[40px] pt-[60px] w-[90%] m-auto">
        <button
          className="text-[#6E7485] lg:text-[18px] text-[14px] font-semibold lg:leading-[56px] leading-[40px] px-[32px] border-[#E9EAF0] border-[1px]"
          // onClick={() => setActiveTab("advance")}
          onClick={() => dispatch(setActiveTab("advance"))}
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
    </div>
  );
};

export default Curriculm;
