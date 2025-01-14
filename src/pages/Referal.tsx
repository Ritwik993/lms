import CreateCouponForm from "../components/CreateCouponForm";
import Navbar from "../components/Navbar";
import ReferralCodes from "../components/ReferalCodes";

interface Referral {
  sno: number;
  studentName: string;
  studentId: string;
  numberOfReferrals: number;
}

const Referal = () => {
  const referrals: Referral[] = [
    {
      sno: 1,
      studentName: "John Doe",
      studentId: "S001",
      numberOfReferrals: 3,
    },
    {
      sno: 2,
      studentName: "Jane Smith",
      studentId: "S002",
      numberOfReferrals: 5,
    },
    {
      sno: 3,
      studentName: "Alice Johnson",
      studentId: "S003",
      numberOfReferrals: 2,
    },
  ];
  return (
    <div className="flex-1 lg:ml-[250px] bg-[#F5F7FA] overflow-x-hidden">
      <Navbar />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 mt-[60px] gap-10">
        <CreateCouponForm />
        <ReferralCodes />
      </div>



      <div className="bg-gray-100 p-6 rounded shadow">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2 text-left">
                SNo
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Student Name
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Student ID
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Number of Referrals
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {referrals.map((referral) => (
              <tr key={referral.sno} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">
                  {referral.sno}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {referral.studentName}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {referral.studentId}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {referral.numberOfReferrals}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    View Referrals
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Referal;
