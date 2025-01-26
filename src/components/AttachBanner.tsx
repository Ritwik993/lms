import axios from "axios";
import React, { useEffect, useState } from "react";

type BannerProps = {
  setIsBannerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setImgURL: React.Dispatch<React.SetStateAction<string[]>>;
};

const AttachFileModal: React.FC<BannerProps> = ({
  setIsBannerOpen,
  setImgURL,
}) => {
  const [file, setFile] = useState<File | null>(null);

  const uploadImage = async (file: File | null) => {
    if (!file) return null;
    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("file", file);
    const res = await axios.post(
      "http://localhost:8080/api/v1/assets/upload/image",
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

  useEffect(() => {
    const fetchImageURL = async () => {
      try {
        const url = await uploadImage(file);
        if (url) {
          setImgURL((prev) => [...prev, url]);
          submitBanner(url);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setFile(null); // Reset the file after uploading
      }
    };

    if (file) {
      fetchImageURL();
    }
  }, [file]);

  const submitBanner = async (url: string) => {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/dashboard/addBanner",
        {
          file: url,
          type: "Website",
          createdBy: userId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

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
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={() => setIsBannerOpen(false)}
          >
            &times;
          </button>
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
          <button
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
            onClick={() => setIsBannerOpen(false)}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            onClick={() => {
              alert(file ? `Attached: ${file.name}` : "No file selected");
              setIsBannerOpen(false);
            }}
          >
            Attach File
          </button>
        </div>
      </div>
    </div>
  );
};

export default AttachFileModal;
