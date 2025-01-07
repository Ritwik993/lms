import upload from "../assets/UploadSimple.svg";
import left_icon from "../assets/left.svg";
import video from "../assets/Video.svg";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const AdvanceInformation = () => {
  return (
    <div className="mb-[37px] min-h-[100vh]">
      <div className="heading lg:px-[40px] px-[10px] py-[24px] bg-white flex gap-x-[20px] justify-between items-center border-b-[2px] border-opacity-10 border-b-[#6E7485]">
        <p className="font-semibold text-[#1D2026] lg:text-[24px] text-[18px] md:leading-[32px] leading-[26px] whitespace-nowrap">
          Advance Information
        </p>
        <div>
          <button className="bg-[#E8EEFF] text-[#3A6BE4] lg:px-[24px] px-[10px]  lg:text-[16px] text-[14px] font-semibold lg:leading-[48px] leading-[40px]">
            Save
          </button>
          <button className="text-[#3A6BE4] lg:px-[24px] px-[10px] lg:text-[16px] text-[14px] font-semibold lg:leading-[48px] leading-[40px]">
            Save and Preview
          </button>
        </div>
      </div>
      <form className="mt-[32px] flex flex-col gap-y-[24px] ">
        <div className="container flex justify-between items-start gap-4 w-[95%] mx-auto ">
          {/* Course Thumbnail Section */}
          <div className="thumbnail-section flex-1 p-4">
            <p className="section-title text-gray-800 text-sm font-semibold mb-2">
              Course Thumbnail
            </p>
            <div className="content flex flex-col lg:flex-row gap-4">
              <div className="image-container flex-1">
                <img
                  src={left_icon}
                  alt="Course Thumbnail Placeholder"
                  className="object-cover w-full lg:h-48 h-40 "
                />
              </div>
              <div className="details flex-1">
                <p className="text-gray-600 text-sm leading-6 mb-4">
                  Upload your course Thumbnail here.{" "}
                  <span className="text-gray-800 font-semibold">
                    Important guidelines:
                  </span>{" "}
                  1200x800 pixels or 12:8 Ratio. Supported format:
                  <span className="text-gray-800 font-semibold">
                    {" "}
                    .jpg, .jpeg, or .png
                  </span>
                </p>
                <button className="upload-btn bg-blue-100 text-blue-700 px-4 py-2 text-sm font-medium rounded flex items-center gap-2">
                  <p>Upload Image</p>
                  <img
                    src={upload}
                    alt="Upload Icon"
                    className="w-5 h-5 object-contain"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Course Trailer Section */}
          <div className="trailer-section flex-1  p-4">
            <p className="section-title text-gray-800 text-sm font-semibold mb-2">
              Course Trailer
            </p>
            <div className="content flex flex-col lg:flex-row gap-4">
              <div className="image-container flex-1">
                <img
                  src={video}
                  alt="Course Trailer Placeholder"
                  className="object-cover w-full lg:h-48 h-40"
                />
              </div>
              <div className="details flex-1">
                <p className="text-gray-600 text-sm leading-6 mb-4">
                  Students who watch a well-made promo video are 5X more likely
                  to enroll in your course. We've seen that statistic go up to
                  10X for exceptionally awesome videos.
                </p>
                <button className="upload-btn bg-blue-100 text-blue-700 px-4 py-2 text-sm font-medium rounded flex items-center gap-2">
                  <p>Upload Video</p>
                  <img
                    src={upload}
                    alt="Upload Icon"
                    className="w-5 h-5 object-contain"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[90%] mx-auto h-[250px] bg-white mt-[32px] ">
          <p className="md:text-[18px] text-[16px] md:leading-[24px] leading-[22px] font-medium mb-[16px]">
            Course Descriptions
          </p>
          <ReactQuill
            theme="snow"
            className="w-full h-[200px]"
            placeholder="Enter your course descriptions"
          />
        </div>

        <div className="flex justify-between items-center lg:mt-[32px] mt-[40px] md:mb-[10px] mb-[24px] w-[90%] mx-auto">
          <p className="font-medium lg:text-[18px] text-[16px] text-[#1D2026] lg:leading-[24px] leading-[20px]">
            What you will teach in this course (4/8)
          </p>
          <p className="text-[#3A6BE4] lg:text-[14px] text-[12px] lg:leading-[20px] leading-[18px]">
            + Add New
          </p>
        </div>

        <div className="w-[90%] mx-auto mb-[24px]">
          <p className="text-[#1D2026] md:text-[14px] text-[12px] mb-[5px]">
            01
          </p>
          <div className="relative">
            <input
              type="text"
              placeholder="What you will teach in this course..."
              className="placeholder-text-[#8C94A3] border-[#E9EAF0] border w-full outline-none py-[5px] px-[5px]"
            />
            <p className="text-[#4E5566] md:text-[14px] text-[12px] md:leading-[22px] leading-[20px] absolute top-[5px] right-[10px]">
              0/120
            </p>
          </div>
        </div>

        <div className="w-[90%] mx-auto mb-[24px]">
          <p className="text-[#1D2026] md:text-[14px] text-[12px] mb-[5px]">
            02
          </p>
          <div className="relative">
            <input
              type="text"
              placeholder="What you will teach in this course..."
              className="placeholder-text-[#8C94A3] border-[#E9EAF0] border w-full outline-none py-[5px] px-[5px]"
            />
            <p className="text-[#4E5566] md:text-[14px] text-[12px] md:leading-[22px] leading-[20px] absolute top-[5px] right-[10px]">
              0/120
            </p>
          </div>
        </div>

        <div className="w-[90%] mx-auto mb-[24px]">
          <p className="text-[#1D2026] md:text-[14px] text-[12px] mb-[5px]">
            03
          </p>
          <div className="relative">
            <input
              type="text"
              placeholder="What you will teach in this course..."
              className="placeholder-text-[#8C94A3] border-[#E9EAF0] border w-full outline-none py-[5px] px-[5px]"
            />
            <p className="text-[#4E5566] md:text-[14px] text-[12px] md:leading-[22px] leading-[20px] absolute top-[5px] right-[10px]">
              0/120
            </p>
          </div>
        </div>

        <div className="w-[90%] mx-auto mb-[24px]">
          <p className="text-[#1D2026] md:text-[14px] text-[12px] mb-[5px]">
            04
          </p>
          <div className="relative">
            <input
              type="text"
              placeholder="What you will teach in this course..."
              className="placeholder-text-[#8C94A3] border-[#E9EAF0] border w-full outline-none py-[5px] px-[5px]"
            />
            <p className="text-[#4E5566] md:text-[14px] text-[12px] md:leading-[22px] leading-[20px] absolute top-[5px] right-[10px]">
              0/120
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center lg:mt-[32px] mt-[40px] md:mb-[10px] mb-[24px] w-[90%] mx-auto">
          <p className="font-medium lg:text-[18px] text-[16px] text-[#1D2026] lg:leading-[24px] leading-[20px]">
            Target Audience (4/8)
          </p>
          <p className="text-[#3A6BE4] lg:text-[14px] text-[12px] lg:leading-[20px] leading-[18px]">
            + Add New
          </p>
        </div>

        <div className="w-[90%] mx-auto mb-[24px]">
          <p className="text-[#1D2026] md:text-[14px] text-[12px] mb-[5px]">
            01
          </p>
          <div className="relative">
            <input
              type="text"
              placeholder="Who this course is for..."
              className="placeholder-text-[#8C94A3] border-[#E9EAF0] border w-full outline-none py-[5px] px-[10px]"
            />
            <p className="text-[#4E5566] md:text-[14px] text-[12px] md:leading-[22px] leading-[20px] absolute top-[5px] right-[10px]">
              0/120
            </p>
          </div>
        </div>

        <div className="w-[90%] mx-auto mb-[24px]">
          <p className="text-[#1D2026] md:text-[14px] text-[12px] mb-[5px]">
            02
          </p>
          <div className="relative">
            <input
              type="text"
              placeholder="Who this course is for..."
              className="placeholder-text-[#8C94A3] border-[#E9EAF0] border w-full outline-none py-[5px] px-[10px]"
            />
            <p className="text-[#4E5566] md:text-[14px] text-[12px] md:leading-[22px] leading-[20px] absolute top-[5px] right-[10px]">
              0/120
            </p>
          </div>
        </div>

        <div className="w-[90%] mx-auto mb-[24px]">
          <p className="text-[#1D2026] md:text-[14px] text-[12px] mb-[5px]">
            03
          </p>
          <div className="relative">
            <input
              type="text"
              placeholder="Who this course is for..."
              className="placeholder-text-[#8C94A3] border-[#E9EAF0] border w-full outline-none py-[5px] px-[10px]"
            />
            <p className="text-[#4E5566] md:text-[14px] text-[12px] md:leading-[22px] leading-[20px] absolute top-[5px] right-[10px]">
              0/120
            </p>
          </div>
        </div>

        <div className="w-[90%] mx-auto mb-[24px]">
          <p className="text-[#1D2026] md:text-[14px] text-[12px] mb-[5px]">
            04
          </p>
          <div className="relative">
            <input
              type="text"
              placeholder="Who this course is for..."
              className="placeholder-text-[#8C94A3] border-[#E9EAF0] border w-full outline-none py-[5px] px-[10px]"
            />
            <p className="text-[#4E5566] md:text-[14px] text-[12px] md:leading-[22px] leading-[20px] absolute top-[5px] right-[10px]">
              0/120
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center lg:mt-[32px] mt-[40px] md:mb-[10px] mb-[24px] w-[90%] mx-auto">
          <p className="font-medium lg:text-[18px] text-[16px] text-[#1D2026] lg:leading-[24px] leading-[20px]">
            Course requirements (4/8)
          </p>
          <p className="text-[#3A6BE4] lg:text-[14px] text-[12px] lg:leading-[20px] leading-[18px]">
            + Add New
          </p>
        </div>

        <div className="w-[90%] mx-auto mb-[24px]">
          <p className="text-[#1D2026] md:text-[14px] text-[12px] mb-[5px]">
            01
          </p>
          <div className="relative">
            <input
              type="text"
              placeholder="What is you course requirements..."
              className="placeholder-text-[#8C94A3] border-[#E9EAF0] border w-full outline-none py-[5px] px-[10px]"
            />
            <p className="text-[#4E5566] md:text-[14px] text-[12px] md:leading-[22px] leading-[20px] absolute top-[5px] right-[10px]">
              0/120
            </p>
          </div>
        </div>

        <div className="w-[90%] mx-auto mb-[24px]">
          <p className="text-[#1D2026] md:text-[14px] text-[12px] mb-[5px]">
            02
          </p>
          <div className="relative">
            <input
              type="text"
              placeholder="What is you course requirements..."
              className="placeholder-text-[#8C94A3] border-[#E9EAF0] border w-full outline-none py-[5px] px-[10px]"
            />
            <p className="text-[#4E5566] md:text-[14px] text-[12px] md:leading-[22px] leading-[20px] absolute top-[5px] right-[10px]">
              0/120
            </p>
          </div>
        </div>

        <div className="w-[90%] mx-auto mb-[24px]">
          <p className="text-[#1D2026] md:text-[14px] text-[12px] mb-[5px]">
            03
          </p>
          <div className="relative">
            <input
              type="text"
              placeholder="What is you course requirements..."
              className="placeholder-text-[#8C94A3] border-[#E9EAF0] border w-full outline-none py-[5px] px-[10px]"
            />
            <p className="text-[#4E5566] md:text-[14px] text-[12px] md:leading-[22px] leading-[20px] absolute top-[5px] right-[10px]">
              0/120
            </p>
          </div>
        </div>

        <div className="w-[90%] mx-auto mb-[24px]">
          <p className="text-[#1D2026] md:text-[14px] text-[12px] mb-[5px]">
            04
          </p>
          <div className="relative">
            <input
              type="text"
              placeholder="What is you course requirements..."
              className="placeholder-text-[#8C94A3] border-[#E9EAF0] border w-full outline-none py-[5px] px-[10px]"
            />
            <p className="text-[#4E5566] md:text-[14px] text-[12px] md:leading-[22px] leading-[20px] absolute top-[5px] right-[10px]">
              0/120
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center mt-[32px] pb-[40px] pt-[60px] w-[90%] m-auto">
        <button className="text-[#6E7485] lg:text-[18px] text-[14px] font-semibold lg:leading-[56px] leading-[40px] px-[32px] border-[#E9EAF0] border-[1px]">
          Previous
        </button>
        <button className="lg:text-[18px] text-[14px] font-semibold lg:leading-[56px] leading-[40px] text-white px-[32px] bg-[#3A6BE4]">
          Save & next
        </button>
      </div>
      </form>
    </div>
  );
};

export default AdvanceInformation;
