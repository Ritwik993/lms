import React from 'react';

const CreateCouponForm: React.FC = () => {
  return (
    <div className="bg-white p-6 shadow rounded">
      <h2 className="text-2xl font-bold mb-2">Make a Coupon Code</h2>
      <p className="text-gray-600 mb-4">Create a custom referral code.</p>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Referral Code</label>
          <input
            type="text"
            className="mt-1 block w-full p-2 border rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter your referral code"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Discount Percentage</label>
          <input
            type="number"
            className="mt-1 block w-full p-2 border rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter discount percentage"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Discount Amount</label>
          <input
            type="number"
            className="mt-1 block w-full p-2 border rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter discount amount"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Course</label>
          <select className="mt-1 block w-full p-2 border rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500">
            <option>Select a course</option>
            <option>Course A</option>
            <option>Course B</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-900 transition"
        >
          Create Referral
        </button>
      </form>
    </div>
  );
};

export default CreateCouponForm;
