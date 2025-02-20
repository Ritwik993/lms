import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../constants/url";
import { toast } from "react-toastify";

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

type FormData = {
  name: string;
  review: string;
  rating: number | null;
  courseId: string;
};

type Course = {
  _id: string;
  title: string;
};

const ReviewModal: React.FC<ReviewModalProps> = ({ isOpen, onClose ,setSuccess}) => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get(`${BASE_URL}/api/v1/course/getCourses`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCourses(res.data.data);
      // setSuccess(true);
      // onClose();
    } catch (err) {
      console.error(err);
    }
  };

  const [formData, setFormData] = useState<FormData>({
    name: "",
    review: "",
    rating: null,
    courseId: "",
  });

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    if (name === "rating") {
      setFormData((prev)=>({...prev,[name]:Number(value)}))
    }else{
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async() => {
    console.log("Review Submitted:", formData);
    try{
      const token=localStorage.getItem("token");
      const res=await axios.post(`${BASE_URL}/api/v1/dashboard/addReview`,formData,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      console.log(res.data.data);
      toast.success('Review Created', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored"
              });
              setSuccess(prev=>!prev);
      onClose();
    }catch(err){
       toast.error("Error", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored"
              });
      // console.log(err);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        {/* Header */}
        <h2 className="text-xl font-semibold mb-4">Add New Review</h2>

        {/* Input Fields */}
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700">Reviewer Name</label>
            <input
              type="text"
              name="name"
              className="w-full p-2 border rounded mt-1"
              placeholder="Enter name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700">Review</label>
            <textarea
              name="review"
              className="w-full p-2 border rounded mt-1"
              placeholder="Write your review"
              value={formData.review}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700">Star Rating</label>
            <input
              type="number"
              name="rating"
              className="w-full p-2 border rounded mt-1"
              placeholder="Upto 5"
              max={5}
              min={1}
              value={formData.rating || ""}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700">Courses</label>
            <select
              name="courseId"
              className="w-full p-2 border rounded mt-1"
              value={formData.courseId}
              onChange={handleChange}
            >
              <option value="">Select a course</option>
              {courses.map((course) => (
                <option key={course._id} value={course._id}>
                  {course.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Add Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;
