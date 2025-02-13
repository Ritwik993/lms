import React, { useState } from "react";
import X from "../assets/X1.svg";
import axios from "axios";
import {  toast } from 'react-toastify';

type NotificationType = {
  _id: string;
  message: string;
  to: string;
  status: string;
  createdBy: string;
  createdAt:string;
  userName:string;
};

type FormData = {
  message: string;
  to: string;
  createdBy: string;
};

type NotificationBoxModalProps={
  setNotificationData: React.Dispatch<React.SetStateAction<NotificationType[]>>;
}

const NotificationBoxModal: React.FC<NotificationBoxModalProps> = ({setNotificationData}) => {
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

      const name =await getUser(res.data.data.createdBy);
      setNotificationData((prev)=>([{...res.data.data,userName:name},...prev]));
      console.log(res.data);
      setIsOpen(false);
      toast.success('Notification created', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored"
              });
    } catch (err) {
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
      console.error(err);
    }
  };

  const getUser = async (name: string): Promise<string> => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        `http://localhost:8080/api/v1/auth/getUsers?userId=${name}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log("name = "+res.data.data[0].firstName)
      return res.data.data[0].firstName;
    } catch (err) {
      console.log(err);
      
      return "Anonymous";
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
