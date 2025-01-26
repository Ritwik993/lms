import React, { useState } from "react";

interface LiveClassData {
  title: string;
  courses: string;
  link: string;
  date: string;
  time: string;
}

interface LiveClassModalProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const LiveClassModal: React.FC<LiveClassModalProps> = ({  setIsOpen}) => {
  const [formData, setFormData] = useState<LiveClassData>({
    title: "",
    courses: "",
    link: "",
    date: "",
    time: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6">
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
            Select Courses
          </label>
          <input
            type="text"
            name="courses"
            placeholder="Name Of Courses Selected"
            value={formData.courses}
            onChange={handleChange}
            className="w-full border rounded-md p-2 text-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Link for live class
          </label>
          <input
            type="text"
            name="link"
            placeholder="Link for live class"
            value={formData.link}
            onChange={handleChange}
            className="w-full border rounded-md p-2 text-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Schedule For Later (Date)
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border rounded-md p-2 text-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Schedule Time */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Schedule For Later (Time)
          </label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full border rounded-md p-2 text-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Actions */}
        <div className="flex justify-between mt-4">
          <button
            onClick={()=>setIsOpen(false)}
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
      </div>
    </div>
  );
};

export default LiveClassModal;
