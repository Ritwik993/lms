import React, { useState } from "react";

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type FormData = {
  reviewerName: string;
  review: string;
  rating: string;
  reviewDate: string;
};

const ReviewModal: React.FC<ReviewModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    reviewerName: "",
    review: "",
    rating: "",
    reviewDate: "",
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Review Submitted:", formData);
    onClose(); // Close modal after submission
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
              name="reviewerName"
              className="w-full p-2 border rounded mt-1"
              placeholder="Enter name"
              value={formData.reviewerName}
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
              value={formData.rating}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700">Review Date</label>
            <input
              type="date"
              name="reviewDate"
              className="w-full p-2 border rounded mt-1"
              value={formData.reviewDate}
              onChange={handleChange}
            />
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
