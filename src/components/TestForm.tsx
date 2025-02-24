import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import SectionForm from "./SectionForm";
import axios from "axios";
import { toast } from "react-toastify";
import moment from "moment";
import { useParams, useSearchParams } from "react-router-dom";
import { BASE_URL } from "../constants/url";


type FormState = {
  title: string;
  testDescription: string;
  testStatus: string;
  status: string;
  testSeriesId: string;
  noOfQuestions: number | null;
  totalMarks: number | null;
  totalDuration: number | null;
  sortingOrder: 0 | 1;
  allowPdfMaterialDownload: number;
  startDate: Date;
  endDate: Date;
  testMaterial: File | string | null;
};

// type Option = {
//   name?: string;
//   image?: string;
// };

// type QuestionsForm = {
//   question: string;
//   options: Option[];
//   image: string;
//   correctAns: string;
// };

interface Section {
  title: string;
  marksPerQuestion: number | null;
  pdf: File | null;
  negativeMarking: 1 | 0;
  isOptional: number;
  isFixedTiming: number;
  questions: [];
}

const TestForm = () => {
  const [formState, setFormState] = useState<FormState>({
    title: "",
    testDescription: "",
    testStatus: "",
    status: "",
    testSeriesId: "",
    noOfQuestions: null,
    totalMarks: null,
    totalDuration: null,
    sortingOrder: 0,
    allowPdfMaterialDownload: 0,
    startDate: new Date(),
    endDate: new Date(),
    testMaterial: null,
  });
  const [searchParams] = useSearchParams();
  console.log("searchParams = "+searchParams.toString())
  const editValue = searchParams.get("edit")==="true"; //converting to boolean
  const editId = searchParams.get("editId");

  const { id } = useParams();
  // const tests = useSelector((store: RootState) => store.test.tests);
  // let testData:any[]=[];
  // if(test){
    
  //   tests=tests.filter((t)=>t.testId===Number(test))
  // }

  // console.log(testData);

  useEffect(() => {
    if (editValue) {

      getTestData();
    
    }
  }, [editValue]);

  const getTestData=async()=>{
    try{
      const token=localStorage.getItem("token");
      const res=await axios.get(`${BASE_URL}/api/v1/testSeries/getTestSeries?id=${id}`,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })

      console.log("Test data = "+JSON.stringify(res.data.data[0].tests,null,2));
      const testData=res.data.data[0].tests;
      console.log("final="+JSON.stringify(testData,null,2));
      // console.log("editId="+editId);
      // console.log("edit Value ="+editValue);
      const response=testData.filter((t:any)=>t._id===editId);


      console.log("Final = "+JSON.stringify(response[0],null,2));
      console.log("sortingOrder="+response[0].sortingOrder);

      setFormState({
        title: response[0].testTitle,
        testDescription: response[0].testDescription,
        testStatus: response[0].status,
        status: response[0].status,
        testSeriesId: response[0].testSeriesId,
        noOfQuestions: response[0].noOfQuestions,
        totalMarks: response[0].totalMarks,
        totalDuration: response[0].totalDuration,
        sortingOrder: response[0].sortingOrder?1:0,
        allowPdfMaterialDownload: response[0].allowPdfMaterialDownload,
        startDate: response[0].startDate,
        endDate: response[0].endDate,
        testMaterial: response[0].testMaterial,
      });
      console.log("section="+JSON.stringify(response[0].testSections,null,2));
      setSections(response[0].testSections);
    }catch(err){
      console.log(err);
    }
  }

  const [sections, setSections] = useState<Section[]>([
    {
      title: "",
      marksPerQuestion: null,
      pdf: null,
      negativeMarking: 0,
      isOptional: 0,
      isFixedTiming: 0,
      questions: [],
    },
    // {
    //   title: "",
    //   marksPerQuestion: 10,
    //   pdf: null,
    //   negativeMarking: 50,
    //   isOptional: 1,
    //   isFixedTiming: 0,
    //   questions:[]
    // },
    // {
    //   title: "",
    //   marksPerQuestion: 20,
    //   pdf: null,
    //   negativeMarking: 100,
    //   isOptional: 1,
    //   isFixedTiming: 0,
    //   questions:[],
    // },
  ]);

  // const [questions, Setquestions] = useState<QuestionsForm[]>([
  //   {
  //     question: "Testing Boss",
  //     options: [
  //       {
  //         name: "A",
  //         image: "ABCD",
  //       },
  //       {
  //         name: "B",
  //       },
  //     ],
  //     image: "xyz",
  //     correctAns: "A",
  //   },
  // ]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, type } = e.target;
    const value = type === "number" ? e.target.valueAsNumber : e.target.value;
    if (name === "startDate" || name === "endDate") {
      setFormState((prev) => ({ ...prev, [name]: moment(value).toDate() }));
      return;
    }
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target?.files.length > 0) {
      const file = e.target.files[0];
      const urlString = await uploadToCloudinary(file);
      setFormState((prev) => ({ ...prev, testMaterial: urlString }));
    }
  };

  const handleDescription = (value: string) => {
    setFormState((prev) => ({ ...prev, testDescription: value }));
  };

  const uploadToCloudinary = async (file: File): Promise<string | null> => {
    if (!file) return null;
    const formData = new FormData();
    formData.append("file", file);
    const token = localStorage.getItem("token");
    try {
      const res = await axios.post(
        `${BASE_URL}/api/v1/assets/upload/image`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return res.data.fileUrl;
    } catch (err) {
      console.log(err);
      return null;
    }
  };

  const handlePdf = async () => {
    try {
      const token = localStorage.getItem("token");

      // Process all PDFs concurrently
      const updatedSections = await Promise.all(
        sections.map(async (section) => {
          if (!section.pdf) return section; // If no PDF, return unchanged section

          try {
            const data = await uploadToCloudinary(section.pdf); // Wait for upload
            const res = await axios.post(
              "https://pw-railway-parser-production.up.railway.app/parse-pdf",
              { pdfUrl: data },
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );

            return { ...section, questions: res.data.data }; // Return updated section
          } catch (err) {
            console.error("Error processing PDF:", err);
            return section; // Return unchanged section on error
          }
        })
      );

      setSections(updatedSections); // Update state once after all operations finish
      return updatedSections;
    } catch (error) {
      console.error("Error in handlePdf:", error);
      return sections;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(sections);
    const updatedSection = await handlePdf();

    const token = localStorage.getItem("token");
    try {
      const res = await axios.post(
        `${BASE_URL}/api/v1/testSeries/addTests`,
        {
          ...formState,
          testSeriesId: id,
          status: "ACTIVE",
          sections: updatedSection,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data);
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
      // setFormState({
      //   title: "",
      //   testDescription: "",
      //   testStatus: "",
      //   status: "",
      //   testSeriesId: "",
      //   noOfQuestions: null,
      //   totalMarks: null,
      //   totalDuration: null,
      //   sortingOrder: 0,
      //   allowPdfMaterialDownload: 0,
      //   startDate: "",
      //   endDate: "",
      //   testMaterial: null,
      // })
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
            <form className="w-[95%] mx-auto" onSubmit={handleSubmit}>
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
                    value={formState.noOfQuestions || ""}
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
                    value={formState.totalMarks || ""}
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
                    value={formState.totalDuration || ""}
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
                    value={formState.sortingOrder}
                    name="sortingOrder"
                    type="number"
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
                      type="datetime-local"
                      value={
                        formState.startDate
                          ? moment(formState.startDate).format(
                              "YYYY-MM-DDTHH:mm"
                            )
                          : ""
                      }
                      min={moment().format("YYYY-MM-DDTHH:mm")}
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
                      type="datetime-local"
                      value={
                        formState.endDate
                          ? moment(formState.endDate).format("YYYY-MM-DDTHH:mm")
                          : ""
                      }
                      min={moment().format("YYYY-MM-DDTHH:mm")}
                      onChange={handleInputChange}
                    />
                    <p className="text-[#9FA5AA] text-[10px] font-semibold">
                      Attempts wont be allowed after the selected date
                    </p>
                  </div>
                </div>
              </div>

              <SectionForm sections={sections} setSections={setSections} />

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
                      onChange={handleFileChange}
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
