import { useState } from "react";
import { FaClock, FaFolder, FaPlayCircle } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FiFileText } from "react-icons/fi";

interface Lecture {
  title: string;
  type: "video" | "document";
  duration?: string;
  size?: string;
}

interface Section {
  title: string;
  lectures: Lecture[];
  totalLectures: number;
  totalTime: string;
}

const curriculumData: Section[] = [
  {
    title: "Getting Started",
    lectures: [
      { title: "What’s is Webflow?", type: "video", duration: "07:31" },
      { title: "Sign up in Webflow", type: "video", duration: "07:31" },
      { title: "Webflow Terms & Conditions", type: "document", size: "5.3 MB" },
      { title: "Teaser of Webflow", type: "video", duration: "07:31" },
      { title: "Practice Project", type: "document", size: "5.3 MB" },
    ],
    totalLectures: 4,
    totalTime: "51m",
  },
  {
    title: "Secret of Good Design",
    lectures: [],
    totalLectures: 52,
    totalTime: "5h 49m",
  },
  {
    title: "Practice Design Like an Artist",
    lectures: [],
    totalLectures: 43,
    totalTime: "53m",
  },
  {
    title: "Web Development (webflow)",
    lectures: [],
    totalLectures: 137,
    totalTime: "10h 6m",
  },
  {
    title: "Secrets of Making Money Freelancing",
    lectures: [],
    totalLectures: 21,
    totalTime: "38m",
  },
  {
    title: "Advanced",
    lectures: [],
    totalLectures: 39,
    totalTime: "91m",
  },
];

const ViewCurriculum = () => {
  const [openSection, setOpenSection] = useState<string | null>(
    "Getting Started"
  );

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold">Curriculum</h2>
      <div className="flex items-center text-gray-600 text-sm mt-2">
        <FaFolder className="mr-2" /> 6 Sections
        <FaPlayCircle className="mx-4" /> 202 lectures
        <FaClock className="ml-4" /> 19h 37m
      </div>
      <div className="mt-4 border-t">
        {curriculumData.map((section) => (
          <div key={section.title}>
            <div
              className="flex justify-between items-center p-4 cursor-pointer border-b"
              onClick={() =>
                setOpenSection(
                  openSection === section.title ? null : section.title
                )
              }
            >
              <span className="font-medium text-lg">{section.title}</span>
              <div className="flex items-center text-gray-500">
                <FaPlayCircle className="mr-2" /> {section.totalLectures} lectures
                <FaClock className="ml-4" /> {section.totalTime}
                {openSection === section.title ? (
                  <IoIosArrowUp className="ml-4" />
                ) : (
                  <IoIosArrowDown className="ml-4" />
                )}
              </div>
            </div>
            {openSection === section.title && (
              <div className="bg-gray-100 p-4">
                {section.lectures.map((lecture, index) => (
                  <div key={index} className="flex items-center py-2">
                    {lecture.type === "video" ? (
                      <FaPlayCircle className="text-blue-500 mr-2" />
                    ) : (
                      <FiFileText className="text-gray-500 mr-2" />
                    )}
                    <span>{lecture.title}</span>
                    <span className="ml-auto text-gray-500 text-sm">
                      {lecture.duration || lecture.size}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewCurriculum;
