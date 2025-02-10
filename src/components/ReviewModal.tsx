import React, { useState } from "react";

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReviewModal: React.FC<ReviewModalProps> = ({ isOpen, onClose }) => {
  const [reviewerName, setReviewerName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");
  const [reviewDate, setReviewDate] = useState("");

  if (!isOpen) return null;

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
              className="w-full p-2 border rounded mt-1"
              placeholder="Enter name"
              value={reviewerName}
              onChange={(e) => setReviewerName(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-700">Review</label>
            <textarea
              className="w-full p-2 border rounded mt-1"
              placeholder="Write your review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-700">Star Rating</label>
            <input
              type="number"
              className="w-full p-2 border rounded mt-1"
              placeholder="Upto 5"
              max={5}
              min={1}
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-700">Review Date</label>
            <input
              type="date"
              className="w-full p-2 border rounded mt-1"
              value={reviewDate}
              onChange={(e) => setReviewDate(e.target.value)}
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
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Add Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;
