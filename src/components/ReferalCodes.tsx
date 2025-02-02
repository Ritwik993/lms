import axios from "axios";
import React, { useEffect, useState } from "react";
import { format } from "date-fns";

type ResponseData = {
  _id: string;
  code: string;
  createdAt: string;
  status: string;
  endedAt: string;
};

type Component = {
  refresh: boolean;
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
};

const ReferralCodes: React.FC<Component> = ({ refresh, setRefresh }) => {
  const [activeCodes, setActiveCodes] = useState<ResponseData[]>([
    { _id: "", code: "", createdAt: "", status: "", endedAt: "" },
  ]);
  useEffect(() => {
    getCouponData();
  }, []);

  const getCouponData = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        "http://localhost:8080/api/v1/coupan/getCoupan",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data.data);
      setActiveCodes(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  if (refresh) {
    getCouponData();
    setRefresh(false);
  }

  // const activeCodes = [
  // //   { code: "SUMMER2023", createdAt: "6/1/2023" },
  // //   { code: "WELCOME50", createdAt: "5/15/2023" },
  // // ];

  // const endedCodes = [
  //   { code: "SPRING2023", createdAt: "3/1/2023", endedAt: "6/1/2023" },
  //   { code: "NEWYEAR2023", createdAt: "1/1/2023", endedAt: "4/1/2023" },
  // ];

  const makeInActive = async(id: string) => {
    setActiveCodes(
      activeCodes.map((item) =>
        item._id === id ? { ...item, status: "INACTIVE" } : item
      )
    );
    try {
      const token = localStorage.getItem("token");
      await axios.put(
        `http://localhost:8080/api/v1/coupan/updateCoupan/${id}`,
        {
          status: "INACTIVE",
          endedAt:Date.now,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }

      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-white p-6 shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Referral Codes</h2>
      <div>
        <h3 className="text-lg font-semibold mb-2">Active Referral Codes</h3>
        <table className="w-full text-left border-collapse mb-4">
          <thead>
            <tr className="border-b">
              <th className="py-2">Code</th>
              <th className="py-2">Created At</th>
              <th className="py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {activeCodes.length > 0 &&
              activeCodes.map((code) => {
                if (code.status === "INACTIVE") {
                  return;
                }
                const createdAt = code?.createdAt;
                const formattedDate =
                  createdAt && !isNaN(new Date(createdAt).getTime())
                    ? format(new Date(createdAt), "dd-MM-yyyy")
                    : "N/A"; // Fallback if invalid
                return (
                  <tr key={code._id} className="border-b">
                    <td className="py-2">{code.code}</td>
                    <td className="py-2">{formattedDate}</td>
                    <td className="py-2">
                      <button
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                        onClick={() => makeInActive(code._id)}
                      >
                        End Code
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Ended Referral Codes</h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-2">Code</th>
              <th className="py-2">Created At</th>
              <th className="py-2">Ended At</th>
            </tr>
          </thead>
          <tbody>
            {activeCodes.map((code) => {
              if (code.status === "ACTIVE") {
                return;
              }
              const createdAt = code?.createdAt;
              const formattedDate =
                createdAt && !isNaN(new Date(createdAt).getTime())
                  ? format(new Date(createdAt), "dd-MM-yyyy")
                  : "N/A"; // Fallback if invalid
              return (
                <tr key={code._id} className="border-b">
                  <td className="py-2">{code.code}</td>
                  <td className="py-2">{formattedDate}</td>
                  <td className="py-2">{code?.endedAt || "NA"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReferralCodes;
