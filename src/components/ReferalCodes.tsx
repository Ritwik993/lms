import React from 'react';

const ReferralCodes: React.FC = () => {
  const activeCodes = [
    { code: 'SUMMER2023', createdAt: '6/1/2023' },
    { code: 'WELCOME50', createdAt: '5/15/2023' },
  ];

  const endedCodes = [
    { code: 'SPRING2023', createdAt: '3/1/2023', endedAt: '6/1/2023' },
    { code: 'NEWYEAR2023', createdAt: '1/1/2023', endedAt: '4/1/2023' },
  ];

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
            {activeCodes.map((code) => (
              <tr key={code.code} className="border-b">
                <td className="py-2">{code.code}</td>
                <td className="py-2">{code.createdAt}</td>
                <td className="py-2">
                  <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">
                    End Code
                  </button>
                </td>
              </tr>
            ))}
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
            {endedCodes.map((code) => (
              <tr key={code.code} className="border-b">
                <td className="py-2">{code.code}</td>
                <td className="py-2">{code.createdAt}</td>
                <td className="py-2">{code.endedAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReferralCodes;
