import axios from "axios";
import React, { useEffect, useState } from "react";

type FormData = {
  code: string;
  discountPer: number | null;
  discountAmount: number | null;
  courseId: string;
  createdBy: string;
};

type Course = {
  _id: string;
  title: string;
};

const CreateCouponForm: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [formData, setFormData] = useState<FormData>({
    code: "",
    discountPer: null,
    discountAmount: null,
    courseId: "",
    createdBy: "",
  });

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get(
        "http://localhost:8080/api/v1/course/getCourses",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCourses(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "discountPer" || name === "discountAmount"
          ? Number(value)
          : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/coupan/addCoupan",
        { ...formData, createdBy:userId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-white p-6 shadow rounded">
      <h2 className="text-2xl font-bold mb-2">Make a Coupon Code</h2>
      <p className="text-gray-600 mb-4">Create a custom referral code.</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Referral Code
          </label>
          <input
            type="text"
            className="mt-1 block w-full p-2 border rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter your referral code"
            name="code"
            value={formData.code}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Discount Percentage
          </label>
          <input
            type="number"
            className="mt-1 block w-full p-2 border rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter discount percentage"
            name="discountPer"
            value={formData.discountPer || ""}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Discount Amount
          </label>
          <input
            type="number"
            className="mt-1 block w-full p-2 border rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter discount amount"
            name="discountAmount"
            value={formData.discountAmount || ""}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Course
          </label>
          <select
            className="mt-1 block w-full p-2 border rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
            name="courseId"
            value={formData.courseId}
            onChange={handleInputChange}
          >
            <option value="">Select a course</option>
            {courses.map((course) => (
              <option key={course._id} value={course._id}>
                {course.title}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-900 transition"
        >
          Create Referral
        </button>
      </form>
    </div>
  );
};

export default CreateCouponForm;
