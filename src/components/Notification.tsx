import { useEffect, useState } from "react";
import Plus_icon from "../assets/PlusCircle.svg";
import Comment from "./Comment";
import NotificationBoxModal from "./NotificationBox";
import axios from "axios";
import messageIcon from "../assets/message.svg";
import moment from 'moment';

type NotificationType = {
  _id: string;
  message: string;
  to: string;
  status: string;
  createdBy: string;
  createdAt:string;
  userName:string;
};

const Notification = () => {
  const [notificationData, setNotificationData] = useState<NotificationType[]>(
    []
  );
  useEffect(() => {
    getNotificationData();
  }, []);

  const getNotificationData = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        "http://localhost:8080/api/v1/dashboard/getNotification",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      const notifications = res.data.data;
  
      const updatedNotification=await Promise.all(
        notifications.map(async(n:any)=>{
          const name=await getUser(n.createdBy);
          return {...n,userName:name};
        })
      )
      setNotificationData(updatedNotification);
    } catch (err) {
      console.log(err);
    }
  };
  

  // console.log(notificationData);

  const getUser = async (name: string): Promise<string> => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        `http://localhost:8080/api/v1/auth/getUsers?userId=${name}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log("name = "+res.data.data[0].firstName)
      return res.data.data[0].firstName;
    } catch (err) {
      console.log(err);
      return "Anonymous";
    }
  };
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  return (
    <div className="flex-1 bg-white ">
      <div className="heading flex justify-between items-center py-[16px] px-[20px] border-b-[2px] border-opacity-30 border-b-[#6E7485]">
        <p className="font-medium text-[#1D2026] md:text-[16px] text-[14px] md:leading-[22px] leading-[18px]">
          Notifications
        </p>
        <div className="flex gap-[5px]">
          <img
            src={Plus_icon}
            className=" object-contain"
            alt="add_icon"
            onClick={() => setIsNotificationOpen((prev) => !prev)}
          />
          <select className="text-[#6E7485] border-none outline-none">
            <option>Today</option>
            <option>Tomorrow</option>
            <option>Yesterday</option>
          </select>
        </div>
      </div>
      {isNotificationOpen && (
        <NotificationBoxModal setNotificationData={setNotificationData} />
      )}
      <div className="messages max-h-[400px] overflow-y-scroll">
        {notificationData &&
          notificationData.map((n) => (
            <div className="flex gap-[12px] px-[20px] py-[12px]  ">
              <div className=" mt-[2px]">
                <img src={messageIcon} className=" object-contain" alt="" />
              </div>
              <div className="flex flex-col justify-start">
                <p>
                  <span className="text-[#1D2026] font-semibold md:text-[14px] text-[12px] md:leading-[20px] leading-[18px]">
                    {n.userName+" "}
                  </span>
                  <span className="text-[#4E5566] md:text-[14px] text-[12px] md:leading-[22px] leading-[20px]">
                    has send a notification{" "}
                  </span>
                  <span className="md:text-[14px] text-[12px] text-[#1D2026] md:leading-[22px] leading-[20px]">
                    {" "}
                    {n.message}
                  </span>
                </p>
                <p className="md:text-[12px] text-[10px] text-[#8C94A3] md:leading-[16px] leading-[14px]">
                  {moment(n.createdAt).fromNow()}
                </p>
              </div>
            </div>
          ))}
        {/* <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment /> */}
      </div>
    </div>
  );
};

export default Notification;
