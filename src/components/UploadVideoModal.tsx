import { BASE_URL } from "@/constants/url";
import axios from "axios";
// import { set } from "date-fns";
import { X } from "lucide-react";
import { FC, useEffect, useState } from "react";

type UploadVideoModalProps={
    setIsVideo:React.Dispatch<React.SetStateAction<boolean>>
    setVideoData: React.Dispatch<React.SetStateAction<string[] | null>>
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const UploadVideoModal:FC<UploadVideoModalProps> = ({setIsVideo,setVideoData,setIsLoading}) => {

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);


  const uploadVideo = async (file: File | null) => {
    if (!file) return;
    try{
      setIsLoading(true);
      const token = localStorage.getItem("token");
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post(
        `${BASE_URL}/api/v1/assets/upload/video`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return res.data.fileUrl;
    }catch(err){
      console.log(err);
      return null;
    }finally{
      setIsLoading(false);
    }
  };



  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    
    const fileUrl = await uploadVideo(selectedFile);
    if (fileUrl) {
      setVideoData((prev) => [...(prev || []), fileUrl]);
    }

    setIsVideo(false);
  };
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 z-100">
      <div className="bg-white rounded-lg w-[500px] p-6 shadow-xl relative">
        <div className="flex justify-between items-center  mb-4">
          <h1 className="text-xl font-semibold  text-gray-800">Upload Video</h1>
          <X  className="cursor-pointer" onClick={()=>setIsVideo((prev)=>!prev)}/>
        </div>
        <p className="text-sm text-gray-600 mb-4">
          Choose a file to upload as a video.
        </p>
        <input
          type="file"
          accept="video/*"
          className="block w-full px-3 py-2 text-sm text-gray-800 border border-gray-300 rounded-lg bg-gray-50 hover:bg-gray-100  transition"
          onChange={handleFileChange}
        />
        <div className="flex justify-end mt-6">
          <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:outline-none transition" onClick={handleUpload}
            disabled={!selectedFile}>
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadVideoModal;
