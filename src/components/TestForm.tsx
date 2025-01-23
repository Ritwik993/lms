import { useState } from "react";
import Navbar from "./Navbar";
import SectionForm from "./SectionForm";

type FormState = {
  title: string;
  testDescription: string;
  testStatus: string;
  status: string;
  testSeriesId: string;
  noOfQuestions: number;
  totalMarks: number;
  totalDuration: number;
  sortingOrder: number;
  allowPdfMaterialDownload: number;
  startDate: string;
  endDate: string;
  testMaterial: string;
};

const TestForm = () => {
  const [formState, setFormState] = useState<FormState>({
    title: "",
    testDescription: "",
    testStatus: "",
    status: "",
    testSeriesId: "",
    noOfQuestions: 0,
    totalMarks: 0,
    totalDuration: 0,
    sortingOrder: 0,
    allowPdfMaterialDownload: 0,
    startDate: "",
    endDate: "",
    testMaterial: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleDescription = (value: string) => {
    setFormState((prev) => ({ ...prev, testDescription: value }));
  };
  return (
    <div className="flex-1 lg:ml-[250px] bg-[#F5F7FA] overflow-x-hidden ">
      <Navbar />
      <div className="w-[90%] mx-auto mt-[60px] p-[40px]  bg-white">
        <div className="w-[98%] mx-auto pt-[40px] h-full shadow-md pb-[40px]">
          <div className="w-full  border-b-[2px] border-opacity-10 border-b-[#6E7485] pb-[5px]">
            <div className="heading flex gap-x-4 w-[95%] mx-auto">
              <p className="text-[#7896E4] font-semibold lg:text-[14px] text-[12px]">
                Basic
              </p>
              {/* <p className="text-[#7896E4] font-semibold lg:text-[14px] text-[12px]">
                Advanced
              </p> */}
            </div>
          </div>

          <div>
            <form className="w-[95%] mx-auto">
              <div className="flex w-full items-center">
                <div className="w-[60%]">
                  {" "}
                  <label
                    htmlFor="title"
                    className="text-[#757678] font-semibold text-[13px]"
                  >
                    Title *
                  </label>
                  <input
                    id="title"
                    placeholder="Enter title"
                    className="text-[#979DA2] font-semibold text-[12px] w-[95%] p-2 outline-none border-[#CED4DA] border-2 border-opacity-50"
                    name="title"
                    value={formState?.title}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="flex-1 ">
                  <label className="text-[#757678] font-semibold text-[13px] block">
                    Status
                  </label>
                  <div className="flex gap-x-4">
                    <label className="text-[#757678] font-semibold text-[13px] flex items-center gap-x-1">
                      <input
                        type="radio"
                        value="Free"
                        name="status"
                        onChange={() =>
                          setFormState((prev) => ({ ...prev, status: "Free" }))
                        }
                      />
                      <p>Free</p>
                    </label>
                    <label className="text-[#757678] font-semibold text-[13px] flex items-center gap-x-1">
                      <input
                        type="radio"
                        value="Paid"
                        name="status"
                        onChange={() =>
                          setFormState((prev) => ({ ...prev, status: "Paid" }))
                        }
                      />
                      <p>Paid</p>
                    </label>
                  </div>
                </div>
              </div>

              <p className="text-[#757678] font-semibold text-[13px] mt-2">
                Test Instructions *
              </p>
              <label className="text-[#757678]  font-semibold text-[12px]  mt-2">
                Add Description
                <textarea
                  name="testDescription"
                  placeholder="Write the test description here..."
                  className="w-full p-2 border rounded-md"
                  rows={3}
                  value={formState.testDescription}
                  onChange={(e) => handleDescription(e.target.value)}
                ></textarea>
              </label>
              <p className="text-[#757678] font-semibold text-[13px] mt-2">
                Test Series *
              </p>

              <div className="lg:w-[60%] w-full relative">
                <input
                  id="test"
                  placeholder="Test details"
                  className="text-[#979DA2] font-semibold text-[12px] w-[95%] p-2 outline-none border-[#CED4DA] border-2 border-opacity-50"
                />
                <button className="bg-[#E4E4E4] border-[#939091] text-[#787D82] border font-semibold text-[12px] p-1 absolute min-w-max top-[4px] left-[8px]">
                  {" "}
                  <span>x</span> Test 2
                </button>
              </div>

              <div className="flex md:flex-row flex-col justify-between items-center flex-wrap gap-x-2 mt-4 border-b-[2px] border-opacity-10 border-b-[#6E7485] pb-[6px]">
                <div className="w-full min-w-max flex-1">
                  <label
                    htmlFor="questions"
                    className="text-[#757678] font-semibold text-[13px]"
                  >
                    No. of Questions *
                  </label>
                  <input
                    id="questions"
                    placeholder="Enter no. of questions"
                    className="text-[#979DA2] font-semibold text-[12px] w-full p-2 outline-none border-[#CED4DA] border-2 border-opacity-50"
                    name="noOfQuestions"
                    value={formState.noOfQuestions}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="w-full min-w-max flex-1">
                  <label
                    htmlFor="marks"
                    className="text-[#757678] font-semibold text-[13px]"
                  >
                    Total Marks *
                  </label>
                  <input
                    id="marks"
                    placeholder="Enter total marks"
                    className="text-[#979DA2] font-semibold text-[12px] w-full p-2 outline-none border-[#CED4DA] border-2 border-opacity-50"
                    name="totalMarks"
                    value={formState.totalMarks}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="w-full md:min-w-max flex-1 md:max-w-[50%]">
                  <label
                    htmlFor="durations"
                    className="text-[#757678] font-semibold text-[13px]"
                  >
                    Total Duration (in minutes) *
                  </label>
                  <input
                    id="durations"
                    placeholder="Enter duration in minutes"
                    className="text-[#979DA2] font-semibold text-[12px] w-full p-2 outline-none border-[#CED4DA] border-2 border-opacity-50 "
                    name="totalDuration"
                    value={formState.totalDuration}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="w-full md:min-w-max flex-1 md:max-w-[50%]">
                  <label
                    htmlFor="sorting"
                    className="text-[#757678] font-semibold text-[13px]"
                  >
                    Sorting Order *
                  </label>
                  <input
                    id="sorting"
                    value={0.0}
                    name="sortingOrder"
                    className="text-[#979DA2] font-semibold text-[12px] w-full p-2 outline-none border-[#CED4DA] border-2 border-opacity-50 "
                    onChange={handleInputChange}
                  />
                </div>

                {/* <SectionForm/> */}
              </div>

              <div className="border-b-[2px] border-opacity-10 border-b-[#6E7485] pb-[4px]">
                <p className="font-semibold lg:text-[18px] text-[15px] text-[#636567] mt-4">
                  Start Dates
                </p>

                <div className="flex md:flex-row flex-col justify-between items-center flex-wrap gap-x-2 mt-4">
                  <div className="w-full min-w-max flex-1">
                    <label
                      htmlFor="startDate"
                      className="text-[#757678] font-semibold text-[13px]"
                    >
                      Start Date
                    </label>
                    <input
                      id="startDate"
                      placeholder="2024-11-2013:41:38"
                      className="text-[#979DA2] font-semibold text-[12px] w-full p-2 outline-none border-[#CED4DA] border-2 border-opacity-50"
                      name="startDate"
                      value={formState.startDate}
                      onChange={handleInputChange}
                    />
                    <p className="text-[#9FA5AA] text-[10px] font-semibold">
                      Test will be active for attempts from the selected date
                    </p>
                  </div>

                  <div className="w-full min-w-max flex-1">
                    <label
                      htmlFor="endDate"
                      className="text-[#757678] font-semibold text-[13px]"
                    >
                      End Date *
                    </label>
                    <input
                      id="endDate"
                      placeholder="2024-11-20 13:41:38"
                      className="text-[#979DA2] font-semibold text-[12px] w-full p-2 outline-none border-[#CED4DA] border-2 border-opacity-50"
                      name="endDate"
                      value={formState.endDate}
                      onChange={handleInputChange}
                    />
                    <p className="text-[#9FA5AA] text-[10px] font-semibold">
                      Attempts wont be allowed after the selected date
                    </p>
                  </div>
                </div>
              </div>

              <SectionForm />

              <div className="border-b-[2px] border-opacity-10 border-b-[#6E7485] pb-[4px]">
                <p className="font-semibold lg:text-[18px] text-[15px] text-[#636567] mt-4">
                  Test Materials
                </p>

                <div className="flex md:flex-row flex-col justify-between items-center flex-wrap gap-x-2 mt-4">
                  <div className="w-full min-w-max flex-1">
                    <label
                      htmlFor="pdf"
                      className="text-[#757678] font-semibold text-[13px]"
                    >
                      Attach PDF
                    </label>
                    <input
                      id="pdf"
                      type="file"
                      placeholder="No file chosen"
                      className="text-[#979DA2] font-semibold text-[12px] w-full p-2 outline-none border-[#CED4DA] border-2 border-opacity-50"
                    />
                    <p className="text-[#9FA5AA] text-[10px] font-semibold">
                      Test will be active for attempts from the selected date
                    </p>
                  </div>

                  <div className="w-full min-w-max flex-1">
                    <label className="text-[#757678] font-semibold text-[13px]">
                      Allow PDF Download *
                    </label>
                    <select
                      className="text-[#979DA2] font-semibold text-[12px] w-full p-2 outline-none border-[#CED4DA] border-2 border-opacity-50"
                      value={formState.allowPdfMaterialDownload}
                      name="allowPdfMaterialDownload"
                      onChange={(e) =>
                        setFormState((prev) => ({
                          ...prev,
                          allowPdfMaterialDownload: Number(e.target.value),
                        }))
                      }
                    >
                      <option value={1}>Yes</option>
                      <option value={0}>No</option>
                    </select>
                    <p className="text-[#9FA5AA] text-[10px] font-semibold">
                      Attempts wont be allowed after the selected date
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <button className="text-[#B5C5F0] bg-[#3F6AD8] font-semibold text-[12px] p-[10px] rounded-[5px] mt-2">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestForm;
