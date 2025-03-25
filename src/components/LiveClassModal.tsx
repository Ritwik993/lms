import { BASE_URL } from "@/constants/url";
import axios from "axios";
import React, { useEffect, useState } from "react";

// {
//   "title": "Advanced Physics for JEE",
//   "description": "A live class on thermodynamics covering advanced problems.",
//   "courseId": "67582f5d730ac38366934880",
//   "subjectId": "6759d1539d7668d9b4b71c72",
//   "startTime": "2025-01-20T10:00:00Z",
//   "endTime": "2025-01-20T12:00:00Z",
//   "createdBy": "6751f31ea2712db85bd07dde",
//   "courseCategory": "JEE",
//   "status": "UPCOMING",
//   "thumbNail": "xyz"
// }

interface LiveClassData {
  title: string;
  description: string;
  courseId: string;
  subjectName: string;
  subjectId: string;
  link: string;
  startDate: string;
  startTime: string;
  courseCategory: string;
  status: string;
  lectureId: string;
  thumbNail: string;
}

interface LiveClassModalProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

type Course = {
  _id: string;
  title: string;
  category: string;
};

type Subject = {
  subjectTitle: string;
};

const LiveClassModal: React.FC<LiveClassModalProps> = ({ setIsOpen }) => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>();
  const [lectures, setLectures] = useState<any[]>();
  const [error, setError] = useState<String>();

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  const [formData, setFormData] = useState<LiveClassData>({
    title: "",
    description: "",
    courseId: "",
    subjectName: "",
    subjectId: "",
    link: "",
    startDate: "",
    lectureId: "",
    startTime: "",
    courseCategory: "",
    status: "UPCOMING",
    thumbNail: "xyz",
  });

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get(`${BASE_URL}/api/v1/course/getCourses`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setCourses(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = async (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "courseId") {
      await getSubjectsData(value);
    }

    if (name === "subjectName") {
      await getSubjectId(value);
      // return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const getSubjectId = async (name: string) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${BASE_URL}/api/v1/course/getSubjects`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const foundSubject = res.data.data.find((d: any) => d.title === name);

      if (foundSubject) {
        setFormData((prev) => ({
          ...prev,
          subjectId: foundSubject._id,
        }));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getSubjectsData = async (cid: string) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        `${BASE_URL}/api/v1/course/getCourses?id=${cid}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Ritwik subjects data = " + JSON.stringify(res.data.data[0].subjects, null, 2));
      setSubjects(res.data.data[0].subjects);
      console.log("Ritwik lectures data = " + JSON.stringify(res.data.data[0].subjects[0].lectures, null, 2));

      setLectures(res.data.data[0].subjects.lectures);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");
      const res = await axios.post(
        `${BASE_URL}/api/v1/course/getGoogleMeetLink`,
        { ...formData, createdBy: userId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data);
      setTimeout(() => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
      }, 300);
      setIsOpen(false);
    } catch (err) {
      console.log(err);
      setError("Unable to create Live Class");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6 max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Live Class</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Live Class Title
          </label>
          <input
            type="text"
            name="title"
            placeholder="Write your section name here.."
            value={formData.title}
            onChange={handleChange}
            className="w-full border rounded-md p-2 text-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Live Class Description
          </label>
          <input
            type="text"
            name="description"
            placeholder="Write your description name here.."
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded-md p-2 text-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Select Courses
          </label>
          <select
            name="courseId"
            value={formData.courseId}
            onChange={handleChange}
            className="w-full border rounded-md p-2 text-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Course</option>
            {courses.map((c) => (
              <option key={c._id} value={c._id}>
                {c.title}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Select Subject
          </label>
          <select
            name="subjectName"
            value={formData.subjectName}
            onChange={handleChange}
            className="w-full border rounded-md p-2 text-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Subject</option>
            {subjects?.map((s, i) => (
              <option key={i} value={s.subjectTitle}>
                {s.subjectTitle}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Select Lecture
          </label>
          <select
            name="lectureId"
            value={formData.lectureId}
            onChange={handleChange}
            className="w-full border rounded-md p-2 text-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Lecture</option>
            {lectures?.map((l, i) => (
              <option key={i} value={l._id}>
                {l.lectureTitle}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Select Category
          </label>
          <select
            name="courseCategory"
            value={formData.courseCategory}
            onChange={handleChange}
            className="w-full border rounded-md p-2 text-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Category</option>
            {/* {courses.map((c) => (
              <option key={c._id} value={c._id}>
                {c.category}
              </option>
            ))} */}
            <option value="JEE">JEE</option>
            <option value="NEET">NEET</option>
            <option value="KCET">KCET</option>
            <option value="COMEDK">COMEDK</option>


            {/* <option value="JEE">JEE</option>
            <option value="NEET">NEET</option>
            <option value="KCET">KCET</option>
            <option value="COMEDK">COMEDK</option> */}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Schedule For Later (Date)
          </label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="w-full border rounded-md p-2 text-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Schedule Time */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Start Time</label>
          <input
            type="time"
            name="startTime"
            value={formData.startTime}
            onChange={handleChange}
            className="w-full border rounded-md p-2 text-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Actions */}
        <div className="flex justify-between mt-4">
          <button
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 text-sm text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Save Changes
          </button>
        </div>
        {error && <p className="text-red-800 text-center mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default LiveClassModal;
