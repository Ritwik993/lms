import React from "react";
import Navbar from "../components/Navbar";

interface Review {
  id: number;
  name: string;
  email: string;
  review: string;
  reviewDate: string;
  reviewTime: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Test Data",
    email: "ABC@gmail.com",
    review:
      "Lorem ipsum dolor sit amet consectetur. Tempor etiam ut quam gravida pellentesque. Pellentesque interdum turpis habitasse semper morbi.",
    reviewDate: "29/04/2022",
    reviewTime: "10:04:32 AM",
  },
  {
    id: 2,
    name: "Test Data",
    email: "ABC@gmail.com",
    review:
      "Lorem ipsum dolor sit amet consectetur. Tempor etiam ut quam gravida pellentesque. Pellentesque interdum turpis habitasse semper morbi.",
    reviewDate: "29/04/2022",
    reviewTime: "10:04:32 AM",
  },
  {
    id: 3,
    name: "Test Data",
    email: "ABC@gmail.com",
    review:
      "Lorem ipsum dolor sit amet consectetur. Tempor etiam ut quam gravida pellentesque. Pellentesque interdum turpis habitasse semper morbi.",
    reviewDate: "29/04/2022",
    reviewTime: "10:04:32 AM",
  },
];

const Reviews: React.FC = () => {
  return (
    <div className=" bg-[#F5F7FA] flex-1 lg:ml-[250px] overflow-x-hidden">
      <Navbar />
      <div className="p-6 bg-gray-100 min-h-screen w-[90%] mx-auto">
        <button className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          New Review
        </button>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 px-4 border">Sr.No</th>
                <th className="py-2 px-4 border">Name</th>
                <th className="py-2 px-4 border">Email ID</th>
                <th className="py-2 px-4 border">Review</th>
                <th className="py-2 px-4 border">Review Date</th>
                <th className="py-2 px-4 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review) => (
                <tr key={review.id} className="text-center">
                  <td className="py-2 px-4 border">{review.id}</td>
                  <td className="py-2 px-4 border">{review.name}</td>
                  <td className="py-2 px-4 border">{review.email}</td>
                  <td className="py-2 px-4 border text-left">
                    {review.review}
                  </td>
                  <td className="py-2 px-4 border">
                    {review.reviewDate}
                    <br />
                    {review.reviewTime}
                  </td>
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
