// import { useState } from "react";

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

import React, { useState } from "react";

interface Section {
  section: string;
  maxQuestions: number;
  pdf: string;
  cutoffScore: number;
  isOptional: boolean;
  fixedTiming: boolean;
}

const SectionForm: React.FC = () => {
  const [sections, setSections] = useState<Section[]>([
    {
      section: "",
      maxQuestions: -1,
      pdf: "",
      cutoffScore: 0,
      isOptional: true,
      fixedTiming: false,
    },
    {
      section: "",
      maxQuestions: 10,
      pdf: "",
      cutoffScore: 50,
      isOptional: true,
      fixedTiming: false,
    },
    {
      section: "",
      maxQuestions: 20,
      pdf: "",
      cutoffScore: 100,
      isOptional: true,
      fixedTiming: false,
    },
  ]);

  const handleChange = (
    index: number,
    field: keyof Section,
    value: string | number | boolean
  ) => {
    const updatedSections = sections.map((section, i) =>
      i === index ? { ...section, [field]: value } : section
    );
    setSections(updatedSections);
  };

  const addSection = () => {
    setSections([
      ...sections,
      {
        section: "",
        maxQuestions: -1,
        pdf: "",
        cutoffScore: 0,
        isOptional: true,
        fixedTiming: false,
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
              Cutoff Score
            </th>
            <th className="border border-gray-300 text-[#6D6F71] p-2">
              Is Optional
            </th>
            <th className="border border-gray-300 text-[#6D6F71] p-2">
              Fixed Timing
            </th>
          </tr>
        </thead>
        <tbody>
          {sections.map((section, index) => (
            <tr key={index}>
              <td className="border border-gray-300 p-2">
                <select
                  value={section.section}
                  onChange={(e) =>
                    handleChange(index, "section", e.target.value)
                  }
                  className="border border-gray-300 rounded w-full p-1 text-[#B4B4B4]"
                >
                  <option value="">Select Section</option>
                  <option value="Section 1">Section 1</option>
                  <option value="Section 2">Section 2</option>
                  <option value="Section 3">Section 3</option>
                </select>
              </td>
              <td className="border border-gray-300 p-2">
                <input
                  type="number"
                  value={section.maxQuestions}
                  onChange={(e) =>
                    handleChange(
                      index,
                      "maxQuestions",
                      parseInt(e.target.value)
                    )
                  }
                  className="border border-gray-300 rounded w-full p-1 text-[#B4B4B4]"
                />
              </td>
              <td className="border border-gray-300 p-2">
                {/* <input
                  type="text"
                  value={section.partTitle}
                  onChange={(e) =>
                    handleChange(index, "partTitle", e.target.value)
                  }
                  className="border border-gray-300 rounded w-full p-1 text-[#B4B4B4]"
                /> */}

                {/* <label
                  htmlFor="title"
                  className="text-[#757678] font-semibold text-[13px]"
                >
                  Attach PDF
                </label> */}
                <input
                  id="title"
                  type="file"
                  placeholder="No file chosen"
                  value={section.pdf}
                  onChange={(e) =>
                    handleChange(index, "pdf", e.target.value)
                  }
                  className="text-[#979DA2] font-semibold text-[12px] w-full p-2 outline-none border-[#CED4DA] border-2 border-opacity-50"
                />
              </td>
              <td className="border border-gray-300 p-2">
                <input
                  type="number"
                  value={section.cutoffScore}
                  onChange={(e) =>
                    handleChange(index, "cutoffScore", parseInt(e.target.value))
                  }
                  className="border border-gray-300 rounded w-full p-1 text-[#B4B4B4]"
                />
              </td>
              <td className="border border-gray-300 p-2 text-center">
                <input
                  type="checkbox"
                  checked={section.isOptional}
                  onChange={(e) =>
                    handleChange(index, "isOptional", e.target.checked)
                  }
                />
              </td>
              <td className="border border-gray-300 p-2 text-center">
                <input
                  type="checkbox"
                  checked={section.fixedTiming}
                  onChange={(e) =>
                    handleChange(index, "fixedTiming", e.target.checked)
                  }
                />
              </td>
            </tr>
          ))}
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
