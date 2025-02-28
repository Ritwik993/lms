import Folder from "../assets/FolderNotchOpen.svg";
import ThreeDots from "../assets/DotsThree.svg";
// import { X } from "lucide-react";
import { useParams } from "react-router-dom";
import VideoLinkCard from "@/custom/video-link-card";
import DocumentCard from "@/custom/document-card";

type ContentProps = {
  videoData: string[] | null;
  videoCount: number;
  setVideoData: React.Dispatch<React.SetStateAction<string[] | null>>;
  setVideoCount: React.Dispatch<React.SetStateAction<number>>;

  notesData: string[] | null;
  notesCount: number;
  setNotesData: React.Dispatch<React.SetStateAction<string[] | null>>;
  setNotesCount: React.Dispatch<React.SetStateAction<number>>;

  testData: string[] | null;
  testCount: number;
  setTestData: React.Dispatch<React.SetStateAction<string[] | null>>;
  setTestCount: React.Dispatch<React.SetStateAction<number>>;

  dppData: string[] | null;
  dppCount: number;
  setDppData: React.Dispatch<React.SetStateAction<string[] | null>>;
  setDppCount: React.Dispatch<React.SetStateAction<number>>;

  assignmentData: string[] | null;
  assignmentCount: number;
  setAssignmentData: React.Dispatch<React.SetStateAction<string[] | null>>;
  setAssignmentCount: React.Dispatch<React.SetStateAction<number>>;
  editId: string | null;
  flag: boolean;
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
  editId,
  flag,
}: ContentProps) => {
  const { chapter } = useParams();
  const chapterName = decodeURIComponent(chapter || "");
  console.log("video= " + JSON.stringify(videoData, null, 2));
  return (
    <div className="bg-white p-[20px] flex flex-col w-[80%] max-h-min ">
      <div className="flex justify-between">
        <div className="">
          <p className="text-[14px]">{chapterName}</p>
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

      {!editId
        ? videoData &&
          videoData.map((link, i) => (
            <div
              className=" border border-gray-200 w-[50%]  p-2 mt-[20px]"
              key={`video-${i}`}
            >
              {/* <div className="flex justify-between ">
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
              <p className="text-sm text-blue-500"> {data?.type}</p> */}
              <VideoLinkCard
                videoUrl={link}
                videoName={chapterName + ` ${i + 1}`}
              />
            </div>
          ))
        : videoData &&
          videoData.map((link: any, i) => {
            console.log("name of link = " + link);
            return (
              <VideoLinkCard
                videoUrl={link}
                videoName={chapterName + ` ${i + 1}`}
              />
            );
          })}

      {!editId
        ? notesData &&
          notesData.map((link, i) => (
            <div
              className=" border border-gray-200 w-[50%]  p-2 mt-[20px]"
              key={`notes-${i}`}
            >
              {/* <div className="flex justify-between ">
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
              <p className="text-sm text-blue-500"> {data?.type}</p> */}
              <DocumentCard
                name={chapterName + ` ${i + 1}`}
                link={link}
                description={"notes"}
                onDelete={() => "id"}
              />
            </div>
          ))
        : notesData &&
          notesData.map((link: any, i) => {
            console.log("link of notes = " + link);
            return (
              <DocumentCard
                name={chapterName + ` ${i + 1}`}
                link={link}
                description={"notes"}
                onDelete={() => "id"}
              />
            );
          })}

      {!editId
        ? testData &&
          testData.map((link, i) => (
            <div
              className=" border border-gray-200 w-[50%]  p-2 mt-[20px]"
              key={`test-${i}`}
            >
              {/* <div className="flex justify-between ">
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
              <p className="text-sm text-blue-500"> {data?.type}</p> */}
              <DocumentCard
                name={chapterName + ` ${i + 1}`}
                link={link}
                description={"test"}
                onDelete={() => "id"}
              />
            </div>
          ))
        : testData &&
          testData.map((link: any, i) => {
            console.log("link of test = " + link);
            return (
              <DocumentCard
                name={chapterName + ` ${i + 1}`}
                link={link}
                description={"test"}
                onDelete={() => "id"}
              />
            );
          })}

      {!editId
        ? dppData &&
          dppData.map((link, i) => (
            <div
              className=" border border-gray-200 w-[50%]  p-2 mt-[20px]"
              key={`dpp-${i}`}
            >
              {/* <div className="flex justify-between ">
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
              <p className="text-sm text-blue-500"> {data?.type}</p> */}
              <DocumentCard
                name={chapterName + ` ${i + 1}`}
                link={link}
                description={"dpp"}
                onDelete={() => "id"}
              />
            </div>
          ))
        : dppData &&
          dppData.map((link: any, i) => {
            console.log("Link of dpp = " + link);
            return (
              <DocumentCard
                name={chapterName + ` ${i + 1}`}
                link={link}
                description={"dpp"}
                onDelete={() => "id"}
              />
            );
          })}

      {!editId
        ? assignmentData &&
          assignmentData.map((link, i) => (
            <div
              className=" border border-gray-200 w-[50%]  p-2 mt-[20px]"
              key={`assignment-${i}`}
            >
              {/* <div className="flex justify-between ">
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
              <p className="text-sm text-blue-500"> {data?.type}</p> */}

              <DocumentCard
                name={chapterName + ` ${i + 1}`}
                link={link}
                description={"assignment"}
                onDelete={() => "id"}
              />
            </div>
          ))
        : assignmentData &&
          assignmentData.map((link: any, i) => {
            console.log("link of assignment = " + link);
            return (
              <DocumentCard
                name={chapterName + ` ${i + 1}`}
                link={link}
                description={"assignment"}
                onDelete={() => "id"}
              />
            );
          })}
    </div>
  );
};

export default Content;
