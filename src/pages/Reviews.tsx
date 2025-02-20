import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ReviewModal from "../components/ReviewModal";
import axios from "axios";
import { BASE_URL } from "../constants/url";
import Stars from "../components/Stars";

type FormData = {
  _id: string;
  name: string;
  review: string;
  rating: number;
  courseId: string;
  status: string;
  date: Date;
  createdAt: Date;
};




const Reviews: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [reviews,setReviews]=useState<FormData[]>([]);
  const [success,setSuccess]=useState(false);

  useEffect(()=>{
    getReviews();
  },[success])

  const getReviews=async()=>{
    try{
      const token=localStorage.getItem("token");
      const res=await axios.get(`${BASE_URL}/api/v1/dashboard/getReviews`,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      console.log(res.data.data);
      setReviews(res.data.data);
    }catch(err){
      console.log(err);
    }
  }

  return (
    <div className=" bg-[#F5F7FA] flex-1 lg:ml-[250px] overflow-x-hidden">
      <Navbar />
      <div className="p-6 bg-gray-100 min-h-screen w-[90%] mx-auto">
        <button
          className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={() => setIsOpen(true)}
        >
          New Review
        </button>

        {isOpen && (
          <ReviewModal isOpen={isOpen} onClose={() => setIsOpen(false)} setSuccess={setSuccess}/>
        )}

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 px-4 border">Sr.No</th>
                <th className="py-2 px-4 border">Name</th>
                <th className="py-2 px-4 border">Review</th>
                <th className="py-2 px-4 border">Review Date</th>
                <th className="py-2 px-4 border">Rating</th>
                <th className="py-2 px-4 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review,i:number) => (
                <tr key={review._id} className="text-center">
                  <td className="py-2 px-4 border">{i+1}</td>
                  <td className="py-2 px-4 border">{review.name}</td>
                  <td className="py-2 px-4 border text-left">
                    {review.review}
                  </td>
                  <td className="py-2 px-4 border">
                    {new Date(review.date).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
                    {/* {review.reviewTime} */}
                  </td>
                  <td className="py-2 px-4 border"><Stars stars={review.rating}/></td>
                  <td className="py-2 px-4 border">
                    <button className="text-gray-600 hover:text-gray-800">
                      ⋮
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
