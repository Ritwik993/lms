import React, { useState } from "react";

const AttachFileModal: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      setFile(event.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="bg-white rounded-lg w-[500px] p-6 shadow-lg relative">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-lg font-medium">Attach File</h2>
          <button className="text-gray-500 hover:text-gray-700">&times;</button>
        </div>

        {/* File Drop Area */}
        <div
          className="mt-4 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer"
          onDrop={handleFileDrop}
          onDragOver={handleDragOver}
        >
          {file ? (
            <p className="text-gray-600">{file.name}</p>
          ) : (
            <>
              <p className="text-gray-700 font-medium">Attach File</p>
              <p className="text-gray-500">
                Drag and drop a file or{" "}
                <label
                  htmlFor="fileInput"
                  className="text-blue-500 hover:underline cursor-pointer"
                >
                  browse file
                </label>
              </p>
              <input
                id="fileInput"
                type="file"
                className="hidden"
                onChange={handleFileSelect}
              />
            </>
          )}
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-end gap-4">
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            onClick={() => alert(file ? `Attached: ${file.name}` : "No file selected")}
          >
            Attach File
          </button>
        </div>
      </div>
    </div>
  );
};

export default AttachFileModal;
