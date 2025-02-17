import CourseImage from "../assets/Course Images.svg";
import Star from "../assets/Star.svg";
import User from "../assets/User.svg";
import Dot from "../assets/DotsThree1.svg";
import { FC, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setActiveTab } from "../utils/activeTabSlice";
import DOMPurify from "dompurify";
import { addEditId } from "../utils/editSlice";

type VideoDataType = {
  courseThumbnail: string;
  category: string;
  courseDescription: string;
  price: number;
  _id: string;
};

type VideoCardProps = {
  activeCardId: number | null;
  onToggle: (id: number | null) => void;
  id: number;
  data: VideoDataType;
};

const VideoCard: FC<VideoCardProps> = ({
  activeCardId,
  onToggle,
  id,
  data,
}) => {
  // const [isVisible,setIsVisible]=useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onToggle(null); // Close the menu when clicking outside
      }
    };

    if (activeCardId === id) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeCardId, id, onToggle]);
  return (
    <div className="bg-white w-[250px] h-[500px]  max-h-min">
      <div className="w-full h-1/2">
        {data.courseThumbnail ? (
          <img
            src={data.courseThumbnail}
            className="object-cover w-full h-full"
          />
        ) : (
          <img src={CourseImage} className="object-cover w-full h-full" />
        )}
        {/* <img src={CourseImage} className="object-contain w-full" /> */}
      </div>
      <div className="mt-2 p-4 border-b-[2px] border-opacity-10 border-b-[#6E7485]">
        <p className="text-[#342F98] bg-[#EBEBFF] text-[10px] font-medium leading-[12px] max-w-min p-2 mb-2">
          {/* Developments */}
          {data.category}
        </p>
        {data.courseDescription ? (
          <p
            className="text-[#1D2026] font-medium text-[16px] leading-[22px] "
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(data.courseDescription),
            }}
          >
            {/* Premiere Pro CC for Beginners: Video Editing in Premiere */}
            {/* {data.courseDescription} */}
          </p>
        ) : (
          <p className="text-[#1D2026] font-medium text-[16px] leading-[22px] ">
            Premiere Pro CC for Beginners: Video Editing
            {/* {data.courseDescription} */}
          </p>
        )}
      </div>

      <div className="px-4 py-2 flex justify-between items-center  border-b-[2px] border-opacity-10 border-b-[#6E7485]">
        <div className="flex items-center gap-x-1">
          <img src={Star} className="object-contain" />
          <span className="text-[#4E5566] text-[14px] leading-[20px]">4.9</span>
        </div>
        <div className="flex items-center gap-x-1">
          <img src={User} className="object-contain" />
          <span className="text-[#4E5566] text-[14px] leading-[20px] mr-1">
            982,941
          </span>
          <span className="text-[#8C94A3] text-[14px] leading-[20px]">
            Students
          </span>
        </div>
      </div>

      <div className="px-4 py-4 flex justify-between items-center ">
        <p className="text-[#3A6BE4] text-[18px] font-semibold leading-[24px]">
          Rs {data.price}
        </p>
        <div className="relative">
          <img
            src={Dot}
            className="object-contain "
            onClick={() => onToggle(id)}
          />
          {activeCardId === id && (
            <div
              className="absolute p-2 bg-white  rounded-[4px] "
              ref={menuRef}
            >
              <p
                className="text-[#4E5566]  leading-[20px]  whitespace-nowrap border-b-[2px] border-opacity-10 border-b-[#6E7485] cursor-pointer hover:bg-slate-100 p-1"
                onClick={() => {
                  navigate(`/view/${data._id}`);
                }}
              >
                View Details
              </p>
              <p
                className="text-[#4E5566]  leading-[20px]  whitespace-nowrap border-b-[2px] border-opacity-10 border-b-[#6E7485] cursor-pointer hover:bg-slate-100 p-1"
                onClick={() => {
                  navigate("/createCourse");
                  dispatch(setActiveTab("curriculum"));
                  dispatch(addEditId(data._id));
                }}
              >
                Edit Course
              </p>
              <p
                className="text-[#4E5566] leading-[20px]  whitespace-nowrap cursor-pointer hover:bg-slate-100 p-1"
                onClick={() => {
                  navigate("/student");
                }}
              >
                Student Details
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
