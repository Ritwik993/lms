// import { useState } from "react";

import QuizModal from "@/custom/quiz-modal";
import { useSearchParams } from "react-router-dom";
import { Button } from "./ui/button";
import { BASE_URL } from "@/constants/url";
import axios from "axios";

// const SectionForm = () => {
//   const [sections, setSections] = useState([
//     { section: "", maxQuestions: -1, partTitle: "", cutoffScore: 0, isOptional: true, fixedTiming: false },
//   ]);

//   const handleAddSection = () => {
//     setSections([
//       ...sections,
//       { section: "", maxQuestions: -1, partTitle: "", cutoffScore: 0, isOptional: true, fixedTiming: false },
//     ]);
//   };

//   // const handleChange = (index, field, value) => {
//   //   const updatedSections = sections.map((section, idx) =>
//   //     idx === index ? { ...section, [field]: value } : section
//   //   );
//   //   setSections(updatedSections);
//   // };

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       <h1 className="text-xl font-bold mb-4">Sections</h1>
//       {sections.map((section, index) => (
//         <div key={index} className="grid grid-cols-6 gap-4 mb-4 p-4 bg-white rounded shadow">
//           {/* Select Section */}
//           <select
//             className="border rounded p-2 col-span-1"
//             value={section.section}
//             // onChange={(e) => handleChange(index, "section", e.target.value)}
//           >
//             <option value="">Select Section</option>
//             <option value="Section 1">Section 1</option>
//             <option value="Section 2">Section 2</option>
//             <option value="Section 3">Section 3</option>
//           </select>

//           {/* Max Questions */}
//           <input
//             type="number"
//             className="border rounded p-2 col-span-1"
//             placeholder="Max Questions"
//             value={section.maxQuestions}
//             // onChange={(e) => handleChange(index, "maxQuestions", parseInt(e.target.value))}
//           />

//           {/* Part Title */}
//           <input
//             type="text"
//             className="border rounded p-2 col-span-1"
//             placeholder="Part Title"
//             value={section.partTitle}
//             // onChange={(e) => handleChange(index, "partTitle", e.target.value)}
//           />

//           {/* Cutoff Score */}
//           <input
//             type="number"
//             className="border rounded p-2 col-span-1"
//             placeholder="Cutoff Score"
//             value={section.cutoffScore}
//             // onChange={(e) => handleChange(index, "cutoffScore", parseInt(e.target.value))}
//           />

//           {/* Is Optional */}
//           <div className="flex items-center col-span-1">
//             <input
//               type="checkbox"
//               className="mr-2"
//               checked={section.isOptional}
//               // onChange={(e) => handleChange(index, "isOptional", e.target.checked)}
//             />
//             <label>Is Optional</label>
//           </div>

//           {/* Fixed Timing */}
//           <div className="flex items-center col-span-1">
//             <input
//               type="checkbox"
//               className="mr-2"
//               checked={section.fixedTiming}
//               // onChange={(e) => handleChange(index, "fixedTiming", e.target.checked)}
//             />
//             <label>Fixed Timing</label>
//           </div>
//         </div>
//       ))}

//       <button
//         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         onClick={handleAddSection}
//       >
//         + Add More
//       </button>
//     </div>
//   );
// };

// export default SectionForm;

// import axios from "axios";
// import React, { useState } from "react";

interface Section {
  title: string;
  marksPerQuestion: number | null;
  pdf: File | null;
  negativeMarking: 1 | 0;
  isOptional: number;
  isFixedTiming: number;
  questions: [];
  edit: boolean;
}

type SectionProps = {
  sections: Section[];
  setSections: React.Dispatch<React.SetStateAction<Section[]>>;
};

const SectionForm: React.FC<SectionProps> = ({ sections, setSections }) => {
  const [searchParams] = useSearchParams();
  const editValue = searchParams.get("edit") === "true";
  const editId = searchParams.get("editId");


  const handleChange = async(
    index: number,
    field: keyof Section,
    value: string | number | boolean
  ) => {
    const updatedSections = sections.map((section, i) =>
      i === index ? { ...section, [field]: value } : section
    );
    setSections(updatedSections);
    if(editId) {
    const token=localStorage.getItem("token");
    const res =await axios.put(`${BASE_URL}/api/v1/testSeries/updateTestSections/${editId}`,{...sections},{
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
    console.log(res.data);
  }
  };

  const handleFileChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const updatedSections = sections.map((section, i) =>
        i === index ? { ...section, pdf: file } : section
      );
      setSections(updatedSections);
    }
  };

  const addSection = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSections([
      ...sections,
      {
        title: "",
        marksPerQuestion: -1,
        pdf: null,
        negativeMarking: 0,
        isOptional: 1,
        isFixedTiming: 0,
        questions: [],
        edit: false,
      },
    ]);
  };

  return (
    <div className="py-6">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 text-[#6D6F71] p-2 ">
              Section *
            </th>
            <th className="border border-gray-300 text-[#6D6F71] p-2">
              Max Questions
            </th>
            <th className="border border-gray-300 text-[#6D6F71] p-2">
              Upload Pdf
            </th>

            <th className="border border-gray-300 text-[#6D6F71] p-2">
              Negative Marking
            </th>
            <th className="border border-gray-300 text-[#6D6F71] p-2">
              Is Optional
            </th>
            <th className="border border-gray-300 text-[#6D6F71] p-2">
              Fixed Timing
            </th>
            {editValue && (
              <th className="border border-gray-300 text-[#6D6F71] p-2">
                View Pdf
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {sections.map((section, index) => {
            console.log("sectionData= " + JSON.stringify(section, null, 2));
            return (
              <tr key={index}>
                <td className="border border-gray-300 p-2">
                  <select
                    value={section.title}
                    onChange={(e) =>
                      handleChange(index, "title", e.target.value)
                    }
                    className="border border-gray-300 rounded w-full p-1 text-[#B4B4B4]"
                  >
                    <option value="">Select Section</option>
                    {sections.map((_, i) => (
                      <option value={`Section ${i + 1}`}>
                        Section {i + 1}
                      </option>
                    ))}
                    {/* <option value="Section 2">Section 2</option>
                  <option value="Section 3">Section 3</option> */}
                  </select>
                </td>
                <td className="border border-gray-300 p-2">
                  <input
                    type="number"
                    value={section.marksPerQuestion || ""}
                    onChange={(e) =>
                      handleChange(
                        index,
                        "marksPerQuestion",
                        parseInt(e.target.value)
                      )
                    }
                    className="border border-gray-300 rounded w-full p-1 text-[#B4B4B4]"
                  />
                </td>
                <td className="border border-gray-300 p-2">
                  <input
                    id="title"
                    type="file"
                    placeholder="No file chosen"
                    name="pdf"
                    onChange={(e) => handleFileChange(index, e)}
                    className="text-[#979DA2] font-semibold text-[12px] w-full p-2 outline-none border-[#CED4DA] border-2 border-opacity-50"
                  />
                </td>
                <td className="border border-gray-300 p-2">
                  <input
                    type="number"
                    value={section.negativeMarking}
                    onChange={(e) =>
                      handleChange(
                        index,
                        "negativeMarking",
                        parseInt(e.target.value)
                      )
                    }
                    className="border border-gray-300 rounded w-full p-1 text-[#B4B4B4]"
                  />
                </td>
                <td className="border border-gray-300 p-2 text-center">
                  <input
                    type="checkbox"
                    checked={section.isOptional === 1 ? true : false}
                    onChange={(e) =>
                      handleChange(
                        index,
                        "isOptional",
                        e.target.checked ? 1 : 0
                      )
                    }
                  />
                </td>
                <td className="border border-gray-300 p-2 text-center">
                  <input
                    type="checkbox"
                    checked={section.isFixedTiming === 1 ? true : false}
                    onChange={(e) =>
                      handleChange(
                        index,
                        "isFixedTiming",
                        e.target.checked ? 1 : 0
                      )
                    }
                  />
                </td>
                {editValue && (
                  <td className="border border-gray-300 p-2">
                    {section.questions.length > 0 ? (
                      <QuizModal questions={section.questions} />
                    ) : (
                  <div className="flex justify-center">
                        <Button
                        size="lg"
                        className="font-medium bg-blue-500 hover:bg-blue-300"
                        disabled={true}
                      >
                        No Pdf
                      </Button>
                  </div>
                    )}
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
      <button
        onClick={addSection}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        + Add More
      </button>
    </div>
  );
};

export default SectionForm;
