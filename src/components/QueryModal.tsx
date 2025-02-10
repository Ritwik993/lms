import React, { useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QueryModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [comment, setComment] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-lg font-semibold">Recent Query</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ✕
          </button>
        </div>

        {/* Query Section */}
        <div className="mt-4">
          <p className="text-gray-600">
            <strong>Query:</strong> Lorem ipsum dolor sit amet consectetur. Tempor
            etiam ut quam gravida pellentesque.
          </p>
          <p className="text-right text-sm text-gray-400 mt-2">Today, 10:55:00</p>
        </div>

        {/* Add Comment Button */}
        {!showCommentBox && (
          <div className="mt-4">
            <button
              onClick={() => setShowCommentBox(true)}
              className="bg-[#253483] text-white px-4 py-2 rounded w-full"
            >
              Add Comment
            </button>
          </div>
        )}

        {/* Comment Input Box */}
        {showCommentBox && (
          <div className="mt-4 border p-4 rounded">
            <label className="block text-gray-700 font-semibold mb-2">
              Comment
            </label>
            <textarea
              className="w-full p-2 border rounded"
              placeholder="Add Comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <div className="flex justify-between mt-4">
              <button
                onClick={() => setShowCommentBox(false)}
                className="border border-gray-400 px-4 py-2 rounded w-1/2 mr-2"
              >
                Cancel
              </button>
              <button className="bg-[#253483] text-white px-4 py-2 rounded w-1/2">
                Add Comment
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QueryModal;
