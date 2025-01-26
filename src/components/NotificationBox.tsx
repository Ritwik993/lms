import React, { useState } from "react";
import X from "../assets/X1.svg";
import axios from "axios";

type FormData = {
  message: string;
  to: string;
  createdBy: string;
};

const NotificationBoxModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true); // Modal state
  const [formData, setFormData] = useState<FormData>({
    message: "",
    to: "",
    createdBy: "",
  });

  const handleSubmit = async () => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/dashboard/addNotification",
        { ...formData, createdBy: userId },
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          {/* Modal Box */}
          <div className="p-6 bg-white shadow-md rounded-lg w-full max-w-sm mx-auto relative">
            {/* Header */}
            <div className="flex justify-between border-b-[2px] border-opacity-5 border-b-[#6E7485] mb-[30px]">
              <h2 className="text-lg font-medium">Notification Details</h2>
              <button onClick={closeModal}>
                <img src={X} alt="Close" className="w-4 h-4 object-contain" />
              </button>
            </div>

            {/* Notification Input */}
            <div className="mb-4">
              <label
                htmlFor="sectionName"
                className="block text-sm font-medium text-gray-700"
              >
                Notification
              </label>
              <input
                type="text"
                placeholder="Write your section name here.."
                className="mt-1 block w-full border-[#E9EAF0] border shadow-sm p-[10px] outline-none rounded-md"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
              />
            </div>

            {/* Select Category */}
            <div className="mb-4">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700"
              >
                Select Category
              </label>
              <select
                id="category"
                className="mt-1 block w-full border-[#E9EAF0] border shadow-sm p-[10px] outline-none rounded-md"
                name="to"
                value={formData.to}
                onChange={handleSelectChange}
              >
                <option value="" disabled selected>
                  Select a category
                </option>
                <option value="Paid">Paid User</option>
                <option value="Non Paid">Non-paid User</option>
              </select>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between items-center">
              <button
                onClick={closeModal}
                className="py-2 px-4 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                className="py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                onClick={handleSubmit}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NotificationBoxModal;
