import { BASE_URL } from "@/constants/url";
import axios from "axios";
import { X } from "lucide-react";
import { FC, useEffect, useState } from "react";

type FormData = {
  name: string;
  link: string;
};

type UploadDocumentModalProps = {
  setIsNotes: React.Dispatch<React.SetStateAction<boolean>>;
  setNotesData: React.Dispatch<React.SetStateAction<FormData[] | null>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const UploadDocumentModal: FC<UploadDocumentModalProps> = ({
  setIsNotes,
  setNotesData,
  setIsLoading,
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [formData, setFormData] = useState<FormData>({ name: "", link: "" });
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  const uploadImage = async (file: File | null) => {
    if (!file) return null;
    try {
      setIsLoading(true);
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
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setSelectedFile(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    const fileUrl = await uploadImage(selectedFile);
    if (fileUrl) {
      setNotesData((prev) => [...(prev || []), {link:fileUrl,name:formData.name}]);
    }
    setIsNotes(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 z-100">
      <div className="bg-white rounded-lg w-[500px] p-6 shadow-xl relative">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-semibold text-gray-800">
            Upload Document
          </h1>
          <X
            className="cursor-pointer"
            onClick={() => setIsNotes((prev) => !prev)}
          />
        </div>

        <p className="text-sm text-gray-600 mb-4">
          Enter the name
        </p>
        <input
          type="text"
          name="name"
          value={formData.name || "" } 
          className="block w-full px-3 py-2 text-sm text-gray-800 border border-gray-300 rounded-lg bg-gray-50 hover:bg-gray-100  transition"
          onChange={(e)=>{
            const {name,value}=e.target;
            setFormData((prev)=>({
              ...prev,
              [name]:value
            }))
          }}
        />


        <p className="text-sm text-gray-600 mb-4">
          Choose a file to upload as a document.
        </p>
        <input
          type="file"
          accept=".pdf,.doc,.docx,.txt,.xlsx,.ppt,.pptx"
          className="block w-full px-3 py-2 text-sm text-gray-800 border border-gray-300 rounded-lg bg-gray-50 hover:bg-gray-100 transition"
          onChange={handleFileChange}
        />
        <div className="flex justify-end mt-6">
          <button
            className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            onClick={handleUpload}
            disabled={!selectedFile}
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadDocumentModal;
