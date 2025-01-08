import React, { useState } from "react";
import X from "../assets/X1.svg";

const NotificationBoxModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true); // Modal state

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
              >
                <option value="" disabled selected>
                  Select a category
                </option>
                <option>Paid User</option>
                <option>Non-paid User</option>
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
              <button className="py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">
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
