import React, { useEffect, useState } from "react";
import ToggleSwitch2 from "./ToggleSwitch2";
import axios from "axios";
import { BASE_URL } from "../constants/url";
import { toast } from "react-toastify";

type CreateTestSeriesPopupProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
};

const CreateTestSeriesPopup = ({
  setIsOpen,
  setSuccess,
}: CreateTestSeriesPopupProps) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);
  const [title, setTitle] = useState<string>("");
  const [actualPrice, setActualPrice] = useState<number>(0);
  const [discountedPrice,setDiscountedPrice]=useState<number>(0);
  const [sortBy, setSortBy] = useState<number>(0);
  const [enabled, setEnabled] = useState<boolean>(false);
  const [description, setDescription] = useState<string>("");
  const [whatYoullGet, setWhatYoullGet] = useState<string[]>([]);
  const [isPaid, setIsPaid] = useState<boolean>(false);

  const whatYoullGetChange = (index: number, value: string) => {
    const updatedwhatYoullGetChange = [...whatYoullGet];
    updatedwhatYoullGetChange[index] = value;
    if (value.length <= 120) {
      setWhatYoullGet(updatedwhatYoullGetChange);
    }
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const userId = localStorage.getItem("userId");

    const testSeriesData = {
      title,
      actualPrice,
      discountedPrice,
      sortBy,
      isPaid,
      createdBy: userId,
      description: description,
      whatYoullGet: whatYoullGet,
      isEnabled: enabled ? 1 : 0,
    };

    const token = localStorage.getItem("token");
    try {
      const res = await axios.post(
        `${BASE_URL}/api/v1/testSeries/addTestSeries`,
        testSeriesData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Test data:", res.data);
      setSuccess((prev) => !prev);
      toast.success("Test Created", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (err) {
      console.error(err);
      toast.error("Error", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }

    console.log("Test Series Data:", testSeriesData);
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-100 ">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 max-h-[90vh] overflow-y-auto">
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

        <div className="flex-1 m-2">
          <label className=" font-semibold text-[13px] block">
            Status
          </label>
          <div className="flex gap-x-4">
            <label className=" font-semibold text-[13px] flex items-center gap-x-1">
              <input
                type="radio"
                value="false"
                name="status"
                onChange={()=>setIsPaid(false)}
              />
              <p>Free</p>
            </label>
            <label className=" font-semibold text-[13px] flex items-center gap-x-1">
              <input
                type="radio"
                value="true"
                name="status"
                onChange={()=>setIsPaid(true)}
              />
              <p>Paid</p>
            </label>
          </div>
        </div>
        {isPaid && <div className="mb-4">
          <label htmlFor="actualPrice" className="block text-sm font-medium mb-1">
            Actual Price
          </label>
          <input
            type="text"
            id="actualPrice"
            value={actualPrice}
            onChange={(e) => setActualPrice(Number(e.target.value))}
            className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>}

        {isPaid && <div className="mb-4">
          <label htmlFor="discountedPrice" className="block text-sm font-medium mb-1">
            Discounted Price
          </label>
          <input
            type="text"
            id="discountedPrice"
            value={discountedPrice}
            onChange={(e) => setDiscountedPrice(Number(e.target.value))}
            className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>}
        <div className="mb-4">
          <label htmlFor="sortBy" className="block text-sm font-medium mb-1">
            Sort By
          </label>
          <input
            type="text"
            id="sortBy"
            value={sortBy}
            onChange={(e) => setSortBy(Number(e.target.value))}
            className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium mb-1"
          >
            Add Description
          </label>
          <textarea
            name="description"
            id="description"
            placeholder="Write the test description here..."
            className="w-full p-2 border rounded-md"
            value={description}
            rows={3}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="mb-4">
          <label
            htmlFor="whatYoullGet"
            className=" text-sm font-medium mb-1 flex justify-between"
          >
            <p className="font-medium lg:text-[18px] text-[16px] text-[#1D2026] lg:leading-[24px] leading-[20px]">
              What you will get ({whatYoullGet.length}/8)
            </p>
            <button
              className="text-[#3A6BE4] lg:text-[14px] text-[12px] lg:leading-[20px] leading-[18px]"
              onClick={(e) => {
                e.preventDefault();
                if (whatYoullGet.length < 8) {
                  setWhatYoullGet((prev) => [...prev, ""]);
                }
              }}
            >
              + Add New
            </button>
          </label>
          {whatYoullGet.map((item, index) => (
            <div key={index} className="w-[100%] mx-auto mb-[24px]">
              <p className="text-[#1D2026] md:text-[14px] text-[12px] mb-[5px]">
                {index + 1}
              </p>
              <div className="relative">
                <input
                  type="text"
                  placeholder="What will be the outcome of this course..."
                  className="placeholder-text-[#8C94A3] border-[#E9EAF0] border w-full outline-none py-[5px] pl-[10px] pr-[80px]"
                  value={item}
                  onChange={(e) => whatYoullGetChange(index, e.target.value)}
                />
                <p className="text-[#4E5566] md:text-[14px] text-[12px] md:leading-[22px] leading-[20px] absolute top-[5px] right-[10px]">
                  {item.length}/120
                </p>
              </div>
            </div>
          ))}
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
            <ToggleSwitch2 />
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
