import Folder from "../assets/FolderNotchOpen.svg";
import ThreeDots from "../assets/DotsThree.svg";
import { X } from "lucide-react";

type ContentProps = {
  videoData: File[] | null;
  videoCount: number;
  setVideoData: React.Dispatch<React.SetStateAction<File[] | null>>;
  setVideoCount: React.Dispatch<React.SetStateAction<number>>;

  notesData: File[] | null;
  notesCount: number;
  setNotesData: React.Dispatch<React.SetStateAction<File[] | null>>;
  setNotesCount: React.Dispatch<React.SetStateAction<number>>;

  testData: File[] | null;
  testCount: number;
  setTestData: React.Dispatch<React.SetStateAction<File[] | null>>;
  setTestCount: React.Dispatch<React.SetStateAction<number>>;

  dppData: File[] | null;
  dppCount: number;
  setDppData: React.Dispatch<React.SetStateAction<File[] | null>>;
  setDppCount: React.Dispatch<React.SetStateAction<number>>;

  assignmentData: File[] | null;
  assignmentCount: number;
  setAssignmentData: React.Dispatch<React.SetStateAction<File[] | null>>;
  setAssignmentCount: React.Dispatch<React.SetStateAction<number>>;
};

const Content = ({
  videoData,
  videoCount,
  setVideoData,
  setVideoCount,

  notesData,
  notesCount,
  setNotesCount,
  setNotesData,
  testData,
  testCount,
  setTestData,
  setTestCount,

  dppData,
  dppCount,
  setDppData,
  setDppCount,

  assignmentData,
  assignmentCount,
  setAssignmentData,
  setAssignmentCount,
}: ContentProps) => {
  return (
    <div className="bg-white p-[20px] flex flex-col w-[80%] max-h-min ">
      <div className="flex justify-between">
        <div className="">
          <p className="text-[14px]">Laws Of Motion</p>
          <div className="flex gap-[4px]">
            <img src={Folder} className="object-contain" />
            <p>{videoCount} Videos</p>
            <p>{notesCount} Documents</p>
            <p>{testCount} Tests</p>
            <p>{dppCount} Dpp</p>
            <p>{assignmentCount} Assignments</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img src={ThreeDots} className="object-contain" />
        </div>
      </div>

      {videoData &&
        videoData.map((data, i) => (
          <div
            className=" border border-gray-200 w-[50%]  p-2 mt-[20px]"
            key={`video-${i}`}
          >
            <div className="flex justify-between ">
              <p className=" ">{data?.name}</p>
              <div
                onClick={() => {
                  const updatedVideoData = videoData.filter(
                    (_, index) => index !== i
                  );
                  setVideoData(updatedVideoData);
                  setVideoCount(updatedVideoData.length - 1);
                }}
                className="cursor-pointer"
              >
                <X className="text-red-600" />
              </div>
            </div>
            <p className="text-sm text-blue-500"> {data?.type}</p>
          </div>
        ))}

      {notesData &&
        notesData.map((data, i) => (
          <div
            className=" border border-gray-200 w-[50%]  p-2 mt-[20px]"
            key={`notes-${i}`}
          >
            <div className="flex justify-between ">
              <p className=" ">{data?.name}</p>
              <div
                onClick={() => {
                  const updatedNotesData = notesData.filter(
                    (_, index) => index !== i
                  );
                  setNotesData(updatedNotesData);
                  setNotesCount(updatedNotesData.length - 1);
                }}
                className="cursor-pointer"
              >
                <X className="text-red-600" />
              </div>
            </div>
            <p className="text-sm text-blue-500"> {data?.type}</p>
          </div>
        ))}

      {testData &&
        testData.map((data, i) => (
          <div
            className=" border border-gray-200 w-[50%]  p-2 mt-[20px]"
            key={`test-${i}`}
          >
            <div className="flex justify-between ">
              <p className=" ">{data?.name}</p>
              <div
                onClick={() => {
                  const updatedTestData = testData.filter(
                    (_, index) => index !== i
                  );
                  setTestData(updatedTestData);
                  setTestCount(updatedTestData.length - 1);
                }}
                className="cursor-pointer"
              >
                <X className="text-red-600" />
              </div>
            </div>
            <p className="text-sm text-blue-500"> {data?.type}</p>
          </div>
        ))}

      {dppData &&
        dppData.map((data, i) => (
          <div
            className=" border border-gray-200 w-[50%]  p-2 mt-[20px]"
            key={`dpp-${i}`}
          >
            <div className="flex justify-between ">
              <p className=" ">{data?.name}</p>
              <div
                onClick={() => {
                  const updatedDppData = dppData.filter(
                    (_, index) => index !== i
                  );
                  setDppData(updatedDppData);
                  setDppCount(updatedDppData.length - 1);
                }}
                className="cursor-pointer"
              >
                <X className="text-red-600" />
              </div>
            </div>
            <p className="text-sm text-blue-500"> {data?.type}</p>
          </div>
        ))}

      {assignmentData &&
        assignmentData.map((data, i) => (
          <div
            className=" border border-gray-200 w-[50%]  p-2 mt-[20px]"
            key={`assignment-${i}`}
          >
            <div className="flex justify-between ">
              <p className=" ">{data?.name}</p>
              <div
                onClick={() => {
                  const updatedAssignmentData = assignmentData.filter(
                    (_, index) => index !== i
                  );
                  setAssignmentData(updatedAssignmentData);
                  setAssignmentCount(updatedAssignmentData.length - 1);
                }}
                className="cursor-pointer"
              >
                <X className="text-red-600" />
              </div>
            </div>
            <p className="text-sm text-blue-500"> {data?.type}</p>
          </div>
        ))}
    </div>
  );
};

export default Content;
