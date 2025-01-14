import React, { useState } from "react";
import ToggleSwitch from "./ToogleSwitch";
import ToggleSwitch2 from "./ToggleSwitch2";

type CreateTestSeriesPopupProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CreateTestSeriesPopup = ({ setIsOpen }: CreateTestSeriesPopupProps) => {
  const [title, setTitle] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [sortBy, setSortBy] = useState<number>(0);
  const [enabled, setEnabled] = useState<boolean>(false);

  const handleSubmit = () => {
    const testSeriesData = {
      title,
      price,
      sortBy,
      enabled,
    };
    console.log("Test Series Data:", testSeriesData);
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold">Create New Test Series</h2>
          <button
            className="text-gray-500 text-xl hover:text-gray-700"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            &times;
          </button>
        </div>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter test series title"
            className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium mb-1">
            Price
          </label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="sortBy" className="block text-sm font-medium mb-1">
            Sort By
          </label>
          <input
            type="number"
            id="sortBy"
            value={sortBy}
            onChange={(e) => setSortBy(Number(e.target.value))}
            className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6 flex items-center gap-3">
          <span className="text-sm font-medium">Enabled</span>
          <label className="relative inline-block w-10 h-6">
            <input
              type="checkbox"
              checked={enabled}
              onChange={() => setEnabled(!enabled)}
              className="hidden"
            />
            <ToggleSwitch2/>
            {/* <span className="absolute inset-0 bg-gray-300 rounded-full cursor-pointer transition-all duration-300 before:absolute before:w-4 before:h-4 before:bg-white before:rounded-full before:top-1 before:left-1 before:transition-transform before:duration-300 checked:bg-blue-500 checked:before:translate-x-4"></span> */}
          </label>
        </div>
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          Add Test Series
        </button>
      </div>
    </div>
  );
};

export default CreateTestSeriesPopup;
