import React from "react";
import signupImg from "../assets/signup.svg"

const SignUpPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 mx-auto">
      <div className="flex max-w-6xl shadow-lg rounded-lg bg-white overflow-hidden mx-auto">
        {/* Left Section */}
        <div className="hidden md:flex items-center justify-center w-1/2 bg-[#EBEBFF]">
          <img
            src={signupImg}
            alt="Rocket Illustration"
            className="object-contain w-full aspect-square"
          />
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Create your account
          </h2>
          <form className="space-y-4">
            {/* Full Name */}
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-600"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="First name"
                />
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-600"
                >
                  Last name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Last name"
                />
              </div>
            </div>

            {/* Username */}
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-600"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Username"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Email address"
              />
            </div>

            {/* Password */}
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-600"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Create password"
                />
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-600"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Confirm password"
                />
              </div>
            </div>

            {/* Country */}
            <div>
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-600"
              >
                Select Country
              </label>
              <select
                id="country"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="">Select country</option>
                <option value="us">United States</option>
                <option value="in">India</option>
                <option value="uk">United Kingdom</option>
              </select>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-center space-x-2">
              <input
                id="terms"
                type="checkbox"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree with all of your{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Terms & Conditions
                </a>
              </label>
            </div>

            {/* Create Account Button */}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Create Account
            </button>
          </form>

          {/* Social Sign-Up */}
          <div className="mt-6 flex items-center justify-center space-x-4">
            <button className="px-4 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200">
              Google
            </button>
            <button className="px-4 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200">
              Facebook
            </button>
            <button className="px-4 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200">
              Apple
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
