import React, { useState } from "react";
import fs from "fs";
import model from "./gemini";
import Markdown from "react-markdown";

// type GenerateContentResponse = {
//   response: {
//     text: string;
//   };
// };

// type InlineData = {
//   inlineData: {
//     data: string;
//     mimeType: string;
//   };
// };

const PdfUploader: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [summary, setSummary] = useState<string>("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files ? event.target.files[0] : null;
    setFile(uploadedFile);
  };

  const handleSubmit = async () => {
    if (!file) {
      alert("Please upload a PDF file.");
      return;
    }

    try {
      const reader = new FileReader();

      reader.onload = async (e) => {
        if (!e.target?.result) {
          console.error("Failed to read file content.");
          return;
        }

        const base64Data = (e.target.result as string).split(",")[1];

        const requestData = [
          {
            inlineData: {
              data: base64Data,
              mimeType: "application/pdf",
            },
          },
          `Reply in this format [
    {
      question: "Testing Boss",
      options: [
        {
          name: "A",
          image: "ABCD",
        },
        {
          name: "B",
        },
      ],
      image: "xyz",
      correctAns: "A",
    },
  ]
  Donot apply inverted comma for the key  
  and reply should be as above example format
  `,
        ];

        // Simulating the API call. Replace with actual implementation.
        const result = await model.generateContent(requestData);
        // console.log(result.response);
        setSummary(result.response.text);
        console.log(summary);
      };

      reader.readAsDataURL(file);
    } catch (error) {
      console.error("Error processing the PDF:", error);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Upload a PDF </h1>
      <input
        type="file"
        accept="application/pdf"
        onChange={handleFileChange}
        className="mb-4 border p-2 rounded w-full"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Submit
      </button>

      {summary && (
        <div className="mt-4 p-4 border rounded bg-gray-100">
          <h2 className="font-semibold">Summary:</h2>
          <Markdown>{summary}</Markdown>
        </div>
      )}
    </div>
  );
};

export default PdfUploader;
