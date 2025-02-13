import { useEffect, useState } from "react";
import AttachFileModal from "./AttachBanner";
import AttachFileModal1 from "./AttachBanner1";
import AttachFileModal2 from "./AttachBanner2";
import axios from "axios";
// import { StepBack } from 'lucide-react';
import { ArrowLeft } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

type imgURLType = {
  url: string;
  _id: string;
  status: string;
};

const CreateBanner = () => {
  const [isBannerOpen, setIsBannerOpen] = useState(false);
  const [imgURL, setImgURL] = useState<imgURLType[]>([]);
  const [imgURLApp1, setImgURLApp1] = useState<string[]>([]);
  const [imgURLApp2, setImgURLApp2] = useState<string[]>([]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);

  const [isPaused, setIsPaused] = useState(false);
  const [isWebsite, setIsWebsite] = useState(true);
  const [isApp1, setIsApp1] = useState(false);
  const [isApp2, setIsApp2] = useState(false);

  // useEffect(()=>{
  //   get
  // })

  useEffect(() => {
    if (!isPaused && isWebsite && imgURL.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === imgURL.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [imgURL, isPaused, isWebsite]);

  useEffect(() => {
    if (!isPaused && isApp1 && imgURLApp1.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex1((prevIndex1) =>
          prevIndex1 === imgURLApp1.length - 1 ? 0 : prevIndex1 + 1
        );
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [imgURLApp1, isPaused, isApp1]);

  useEffect(() => {
    if (!isPaused && isApp2 && imgURLApp2.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex2((prevIndex2) =>
          prevIndex2 === imgURLApp2.length - 1 ? 0 : prevIndex2 + 1
        );
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [imgURLApp2, isPaused, isApp2]);

  const removeImageWeb = async (id: string) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.put(
        `http://localhost:8080/api/v1/dashboard/updateBanner/${id}`,
        {
          status: "INACTIVE",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data);
      setImgURL((prev)=>prev.filter((p)=>p._id!==id));
    } catch (err) {
      console.log(err);
    }
  };

  // console.log(imgURL);
  return (
    <div className="flex-1 flex flex-col min-h-[424px]">
      {/* Header */}
      <div className="heading bg-white flex justify-between items-center p-[20px]">
        <p className="text-[#1D2026] md:text-[16px] text-[14px] font-medium md:leading-[22px] leading-[20px]">
          Add Banner
        </p>
        <div className="flex gap-[14px]">
          <button
            className={` ${
              isWebsite
                ? "bg-[#3A6BE4] text-white rounded-[4px] md:px-[18px] px-[16px] py-[8px] md:text-[14px] text-[12px] font-semibold"
                : "font-semibold md:text-[14px] text-[12px] md:px-[18px] px-[16px] py-[8px] bg-[#CCCCCC] text-white rounded-[4px]"
            } `}
            onClick={() => {
              setIsWebsite(true);
              setIsApp1(false);
              setIsApp2(false);
            }}
          >
            Website
          </button>
          <button
            className={` ${
              isApp1
                ? "bg-[#3A6BE4] text-white rounded-[4px] md:px-[18px] px-[16px] py-[8px] md:text-[14px] text-[12px] font-semibold"
                : "font-semibold md:text-[14px] text-[12px] md:px-[18px] px-[16px] py-[8px] bg-[#CCCCCC] text-white rounded-[4px]"
            } `}
            onClick={() => {
              setIsWebsite(false);
              setIsApp1(true);
              setIsApp2(false);
            }}
          >
            App1
          </button>
          <button
            className={` ${
              isApp2
                ? "bg-[#3A6BE4] text-white rounded-[4px] md:px-[18px] px-[16px] py-[8px] md:text-[14px] text-[12px] font-semibold"
                : "font-semibold md:text-[14px] text-[12px] md:px-[18px] px-[16px] py-[8px] bg-[#CCCCCC] text-white rounded-[4px]"
            } `}
            onClick={() => {
              setIsWebsite(false);
              setIsApp1(false);
              setIsApp2(true);
            }}
          >
            App2
          </button>
        </div>
      </div>

      {/* Middle - Sliding Banner */}
      {isWebsite && (
        <div className="overflow-x-hidden middle flex-3 relative">
          {imgURL.length > 0 ? (
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {imgURL.map(
                (image, index) =>
                  image.status === "ACTIVE" && (
                    <div
                      key={index}
                      className="relative w-full h-[300px] flex-shrink-0"
                    >
                      <img
                        src={image.url}
                        alt={`Slide ${index}`}
                        className="w-full h-full object-contain"
                      />
                      {/* Close button */}
                      <button
                        className="absolute top-4 right-2 bg-red-600 text-white px-2 py-1 rounded-full text-sm"
                        onClick={() => removeImageWeb(image._id)}
                      >
                        X
                      </button>
                      {imgURL.length>1 && <ArrowLeft onClick={()=>setCurrentIndex((prev)=>{
                        if(prev==0){
                          prev=0;
                        }else{
                          prev=prev-1;
                        }
                        return prev;
                    })} className="absolute h-[50px] w-[50px] top-1/2 text-white"/>}
                    {imgURL.length>1 && <ArrowRight onClick={()=>setCurrentIndex((prev)=>{
                        if(prev<imgURL.length-1){
                          prev=prev+1;
                        }else{
                          prev=prev;
                        }
                        return prev;
                    })} className="absolute h-[50px] w-[50px] top-1/2 right-0 text-white"/>}
                    </div>
                  )
              )}
            </div>
          ) : (<div className="flex items-center justify-center bg-[#E5E5E5] h-[300px]">
            <p className="text-[#999] text-[16px]">No Banners Available</p>
          </div>)}
        </div>
      )}

      {isApp1 && (
        <div className="overflow-x-hidden middle flex-3">
          {imgURLApp1.length > 0 ? (
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex1 * 100}%)`, // Move based on index
              }}
              onMouseEnter={() => setIsPaused(true)} // Pause on hover
              onMouseLeave={() => setIsPaused(false)} // Resume after hover
            >
              {imgURLApp1.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Slide ${index}`}
                  className="w-full h-[300px] object-contain"
                />
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center bg-[#E5E5E5] h-[300px]">
              <p className="text-[#999] text-[16px]">No Banners Available</p>
            </div>
          )}
        </div>
      )}

      {isApp2 && (
        <div className="overflow-x-hidden middle flex-3">
          {imgURLApp2.length > 0 ? (
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex2 * 100}%)`, // Move based on index
              }}
              onMouseEnter={() => setIsPaused(true)} // Pause on hover
              onMouseLeave={() => setIsPaused(false)} // Resume after hover
            >
              {imgURLApp2.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Slide ${index}`}
                  className="w-full h-[300px] object-contain"
                />
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center bg-[#E5E5E5] h-[300px]">
              <p className="text-[#999] text-[16px]">No Banners Available</p>
            </div>
          )}
        </div>
      )}

      {/* Bottom - Add Banner Button */}
      <div className="bottom flex-1 bg-white flex items-center justify-center h-full">
        {isBannerOpen && isWebsite && (
          <AttachFileModal
            setIsBannerOpen={setIsBannerOpen}
            setImgURL={setImgURL}
          />
        )}

        {isBannerOpen && isApp1 && (
          <AttachFileModal1
            setIsBannerOpen={setIsBannerOpen}
            setImgURLApp1={setImgURLApp1}
          />
        )}

        {isBannerOpen && isApp2 && (
          <AttachFileModal2
            setIsBannerOpen={setIsBannerOpen}
            setImgURLApp2={setImgURLApp2}
          />
        )}
        <button
          className="bg-[#3A6BE4] text-white rounded-[6px] px-[24px] w-[384px] m-4 h-[48px]"
          onClick={() => setIsBannerOpen((prev) => !prev)}
        >
          Add New Banner
        </button>
      </div>
    </div>
  );
};

export default CreateBanner;
