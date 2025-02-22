import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import AddCartItemModal from "../components/freeVideoModal";

type FormData={
  description: string;
  freeVideos: string;
  thumbnailLink: string;
  videoLink: string;
}

const FreeVideos: React.FC = () => {
  const [success,setSuccess]=useState(false);

  const [formData,setFormData]=useState<FormData>({
    description:"",
    freeVideos: "",
    thumbnailLink: "",
    videoLink: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [youtubeLink, setYoutubeLink] = useState("");
  const [link,setLink]=useState("");
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [videoList, setVideoList] = useState<
    { id: number; link: string; date: string }[]
  >([]);


  


  const handleUploadThumbnail = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setThumbnail(event.target.files[0]);
    }
  };

  useEffect(()=>{
    console.log("useEffect called")
    // setYoutubeLink(formData.videoLink);

    // if(youtubeLink){
      console.log("videoLink = "+formData.videoLink);
      console.log("utube link= "+youtubeLink);
      handleCreate();
      setYoutubeLink("");
  },[link])

  useEffect(()=>{
    setYoutubeLink(formData.videoLink);
    setLink(formData.videoLink);
  },[success])

 





  const handleCreate = () => {
    setYoutubeLink(formData.videoLink);
    if (!youtubeLink) return;
    

    const newEntry = {
      id: videoList.length + 1,
      link: youtubeLink,
      date: new Date().toISOString().split("T")[0],
    };

    setVideoList([...videoList, newEntry]);
    setYoutubeLink("");
    setThumbnail(null);
  };

  return (
    <div className=" bg-[#F5F7FA] flex-1 lg:ml-[250px] overflow-x-hidden">
      <Navbar />
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        {/* Form Section */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              YouTube Link *
            </label>
            <input
              type="text"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Paste YouTube Link"
              value={youtubeLink}
              onChange={(e) => setYoutubeLink(e.target.value)}
            />
          </div>
          <div className="border-2 border-dashed border-gray-300 p-4 flex flex-col items-center justify-center rounded-lg">
            {thumbnail ? (
              <img
                src={URL.createObjectURL(thumbnail)}
                alt="Thumbnail"
                className="w-32 h-20 object-cover rounded"
              />
            ) : (
              <p className="text-gray-500">No thumbnail uploaded</p>
            )}
            <label className="mt-2 bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">
              Upload Thumbnail
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleUploadThumbnail}
              />
            </label>
          </div>
        </div>

        <button
          className="mt-6 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          onClick={handleCreate}
        >
          Create
        </button>


        <button onClick={() => setIsModalOpen(true)} className="ml-2 px-4 py-2 bg-blue-500 text-white rounded">Open Modal</button>
      {isModalOpen && <AddCartItemModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} formData={formData} setFormData={setFormData} success={success} setSuccess={setSuccess}/>}

        {/* Table Section */}
        <div className="mt-6">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-blue-100">
                <th className="border border-gray-300 px-4 py-2">Sno</th>
                <th className="border border-gray-300 px-4 py-2">YouTube Link</th>
                <th className="border border-gray-300 px-4 py-2">Date</th>
                <th className="border border-gray-300 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {videoList.map((video, index) => (
                <tr key={video.id} className="text-center">
                  <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                  <td className="border border-gray-300 px-4 py-2 text-blue-500">
                    <a href={video.link} target="_blank" rel="noopener noreferrer">
                      Click here
                    </a>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">{video.date}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button className="text-gray-500 hover:text-gray-700">⋮</button>
                  </td>
                </tr>
              ))}
              {videoList.length === 0 && (
                <tr>
                  <td colSpan={4} className="text-center py-4 text-gray-500">
                    No data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FreeVideos;
