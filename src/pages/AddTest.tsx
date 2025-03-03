import Navbar from "../components/Navbar";
import menu from "../assets/FolderNotchOpen1.svg";
import plus from "../assets/Plus.svg";
import pencil from "../assets/PencilLine.svg";
import trash from "../assets/Trash.svg";
import {  Link, useParams } from "react-router-dom";
import DownArrow from "../assets/Arrow - Down 2.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../utils/store";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { addTest, clearTest, deleteTest, updateTest } from "../utils/testSlice";
import axios from "axios";
import { BASE_URL } from "../constants/url";

// interface TestDetails {
//   id: number;
//   topicName: string;
// }

const AddTest = () => {
  const { id } = useParams();
  // const numIdx = Number(id);
  // console.log(numIdx);
  const tests = useSelector((store: RootState) => store.test.tests);
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [editingTestName, setEditingTestName] = useState("");
  const [editingTestId, setEditingTestId] = useState<string | null>(null);

  

  useEffect(() => {
    console.log("current testId= "+id);
    if(id)
    getPreviousTest(id);
  }, [id]);


  const getPreviousTest=async(testId:string)=>{
    try{
      dispatch(clearTest(id));

      // const existingTest = tests[0].test.find((t) => t.id === testId);
      // if (existingTest) return; // Avoid duplicate API calls  
      const token=localStorage.getItem("token");
      const res=await axios.get(`${BASE_URL}/api/v1/testSeries/getTestSeries?id=${testId}`,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      console.log(res.data.data);
      const result=res.data.data[0].tests;
      // console.log("testTiltle= "+result[0].testSections.length);
      // // if(result[0]){
      // //   return;
      // // }
      console.log(JSON.stringify(result,null,2));
      result.map((r:any)=>{
        console.log("Test title = "+r.testTitle);
        if(r.testTitle)
        dispatch(addTest({testId:id,id:r._id,topicName:r.testTitle,edit:true,data:{...r}}))
      })
    }catch(err){
      console.log(err);
    }
  }
  
  const updateTestName = () => {
    dispatch(
      updateTest({ testId: id, id: editingTestId, data: editingTestName })
    );
    setEditingTestId(null);
    setEditingTestName("");
  };

  const deleteTestFn = (id1: string) => {
    dispatch(deleteTest({ testId: id, id:id1 }));
  };

  const addTestFn = () => {
    const id1 = crypto.randomUUID();
    console.log(id);
    dispatch(
      addTest({ testId: id, id: id1, topicName: "New Test",edit:false,data:null })
    );
  };
  const t = tests.find((t) => t.testId === id);
  return (
    <div className="flex-1 lg:ml-[250px] bg-[#F5F7FA] h-[100vh] overflow-x-hidden pb-[40px]">
      <Navbar />
      <div className="contentBox  mt-[100px] w-[90%] mx-auto min-h-[312px] bg-white  pb-[20px]">
        <div className="flex justify-between items-center">
          <div className="flex gap-x-2 lg:p-[24px] p-[12px]">
            <img src={menu} />
            <p className="text-[#1D2026] font-medium text-[16px]">
              {t?.testName}
            </p>
          </div>

          <div className="flex gap-2 lg:p-[24px] p-[12px]">
            <img
              src={plus}
              alt=""
              className="object-contain"
              onClick={addTestFn}
            />
            {/* <img src={pencil} alt="" className="object-contain" /> */}
            <img src={trash} alt="" className="object-contain" />
          </div>
        </div>

        {tests
          .filter((el) => el.testId === id)
          .map((el) =>
            el.test.map((t) => (
              <div
                className="innerContent bg-white w-[95%] mx-auto border-[#989898] border-[2px] rounded-[13px] m-[20px]"
                key={t.id}
              >
                <div className="flex justify-between items-center">
                  <div className="flex gap-x-2 lg:p-[24px] p-[12px]">
                    {editingTestId === t.id ? (
                      <input
                        ref={inputRef}
                        type="text"
                        value={editingTestName}
                        onChange={(e) => setEditingTestName(e.target.value)}
                        onBlur={updateTestName}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") updateTestName();
                        }}
                        className="bg-[#F5F7FA] border-b border-gray-400 focus:outline-none"
                        autoFocus
                      />
                    ) : (
                      <p
                        className="text-[#1D2026] font-medium lg:text-[16px] text-[14px]"
                        onClick={() => {
                          setEditingTestId(t.id);
                          setEditingTestName(t.topicName);
                        }}
                      >
                        {t.topicName}
                      </p>
                    )}
                  </div>

                  <div className="flex gap-2 lg:p-[24px] p-[12px]">
                    {/* <Link to="/contentcourse"> */}
                      <div className="flex bg-[#EBEBEB] bg-opacity-25 lg:px-[16px] px-[10px] gap-x-[4px]">
                        <Link to={`/testform/${id}?edit=${t.edit}&editId=${t.id}`}>
                          <p className="text-[#000000] font-semibold lg:text-[14px] text-[12px] lg:leading-[40px] leading-[35px]">
                            {t.edit ?"Edit":"Add Details"}
                          </p>
                        </Link>
                        <img src={DownArrow} className="object-contain" />
                      </div>
                    {/* </Link> */}

                    <img
                      src={pencil}
                      alt="Edit"
                      className="object-contain cursor-pointer"
                      onClick={() => {
                        setEditingTestId(t.id);
                        setEditingTestName(t.topicName);
                        inputRef.current?.focus();
                      }}
                    />

                    <img
                      src={trash}
                      alt="Delete"
                      className="object-contain cursor-pointer"
                      onClick={() => deleteTestFn(t.id)}
                    />
                  </div>
                </div>
              </div>
            ))
          )}
      </div>
    </div>
  );
};

export default AddTest;
