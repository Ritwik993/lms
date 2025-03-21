import React, { useState } from "react";
import signIn from "../assets/signIn.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "@/constants/url";

type formState = {
  email: string;
  password: string;
};

const SignInPage: React.FC = () => {
  const [formState, setFormState] = useState<formState>({
    email: "",
    password: "",
  });

  const navigate=useNavigate();

  const handleInputChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setFormState((prev)=>({...prev,[e.target.name]:e.target.value}));
  }

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${BASE_URL}/api/v1/auth/login`,
        formState, // Request body
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      const { token } = res.data.data; 
      const {_id}=res.data.data.userExists;
      localStorage.setItem("token", token);
      localStorage.setItem("userId",_id);
      console.log("Login successful", res.data);
      navigate("/dashboard"); 
    } catch (err) {
      console.error(err);
    }
  };
  
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 mx-auto">
      <div className="flex max-w-4xl shadow-lg rounded-lg bg-white mx-auto">
        {/* Left Section */}
        <div className="hidden md:flex items-center justify-center w-1/2 bg-[#EBEBFF] ">
          <img
            src={signIn}
            alt="Illustration"
            className="object-contain w-full aspect-square"
          />
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Sign in to your account
          </h2>
          <form className="space-y-4">
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
                placeholder="Username or email address"
                name="email"
                onChange={handleInputChange}
              />
            </div>
            <div>
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
                placeholder="Password"
                name="password"
                onChange={handleInputChange}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm text-gray-600"
                >
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={handleSubmit}
            >
              Sign In
            </button>
          </form>
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
          <p className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/signUp" className="text-blue-600 hover:underline">
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
