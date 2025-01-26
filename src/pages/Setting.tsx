import Navbar from "../components/Navbar";
// import left_icon from "../assets/left.svg";
// import upload from "../assets/UploadSimple.svg";
import { useState } from "react";
import {
  Globe,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  MessageCircle,
  Youtube,
} from "lucide-react";

import noavatar from "../assets/no_avatar.jpg";

type SocialProfile = {
  personalWebsite: string;
  facebook: string;
  instagram: string;
  linkedin: string;
  twitter: string;
  whatsapp: string;
  youtube: string;
};

type FormState = {
  firstName: string;
  lastName: string;
  username: string;
  phoneNumber: string;
  title: string;
  biography: string;
  photo: File | null;
};

const Setting = () => {
  const [formState, setFormState] = useState<FormState>({
    firstName: "",
    lastName: "",
    username: "",
    phoneNumber: "",
    title: "",
    biography: "",
    photo: null,
  });

  const [profile] = useState<SocialProfile>({
    personalWebsite: "",
    facebook: "",
    instagram: "",
    linkedin: "",
    twitter: "",
    whatsapp: "",
    youtube: "",
  });

  const [notifications] = useState({
    coursePurchase: false,
    courseReview: true,
    lectureComment: false,
    lectureNotesDownload: true,
    commentReply: false,
    profileVisit: false,
    attachmentDownload: true,
  });

  const [password, setPassword] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    showCurrentPassword: false,
    showNewPassword: false,
    showConfirmPassword: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormState((prev) => ({ ...prev, photo: e.target.files![0] }));
    }
  };

  const togglePasswordVisibility = (key: keyof typeof password) => {
    setPassword((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
  };

  return (
    <div className="flex-1 lg:ml-[250px] bg-[#F5F7FA]">
      <Navbar />
      <div className="flex justify-center pt-[40px] items-center w-[90%] mx-auto bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md w-full "
        >
          <h1 className="text-2xl font-semibold mb-6">Account Settings</h1>

          {/* Full Name */}
          <div className="flex md:flex-row flex-col gap-4 mb-4">
            <div className="flex-1">
              <div className="flex gap-4 ">
                <div className="w-1/2 ">
                  <label className="block text-sm font-medium mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formState.firstName}
                    onChange={handleInputChange}
                    placeholder="First name"
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="w-1/2 ">
                  <label className="block text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formState.lastName}
                    onChange={handleInputChange}
                    placeholder="Last name"
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              {/* Username */}
              <div className="mb-4  ">
                <label className="block text-sm font-medium mb-2">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  value={formState.username}
                  onChange={handleInputChange}
                  placeholder="Enter your username"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Phone Number */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <div className="flex">
                  <span className="px-3 py-2 bg-gray-200 border border-r-0 rounded-l-md">
                    +880
                  </span>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formState.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="Your phone number..."
                    className="w-full p-2 border rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Title */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Title</label>
                <input
                  type="text"
                  name="title"
                  value={formState.title}
                  onChange={handleInputChange}
                  placeholder="Your title, profession or small biography"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="mb-4  max-h-min">
              <div className="flex flex-col items-center justify-center text-center gap-4">
                <label className="block text-sm font-medium mb-2">
                  Upload Photo
                </label>
                <img
                  src={
                    formState.photo
                      ? URL.createObjectURL(formState.photo)
                      : noavatar
                  }
                  alt="Uploaded Preview"
                  className="w-32 h-32  object-cover "
                />
                <div className="flex flex-col items-center justify-center gap-2">
                  {/* Hidden file input */}
                  <input
                    type="file"
                    id="fileInput"
                    onChange={handleFileChange}
                    accept="image/*"
                    className="hidden"
                  />
                  {/* Custom label for the button */}
                  <label
                    htmlFor="fileInput"
                    className="text-sm bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600"
                  >
                    Upload Photo
                  </label>
                  {/* Display uploaded file name */}
                  {formState.photo && (
                    <p className="text-xs text-gray-500 mt-2">
                      Selected file: {formState.photo.name}
                    </p>
                  )}
                  <p className="text-xs text-gray-500">
                    Image size should be under 1MB and in 1:1 ratio.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Biography */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Biography</label>
            <textarea
              name="biography"
              value={formState.biography}
              onChange={handleInputChange}
              placeholder="Your title, profession or small biography"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
            ></textarea>
          </div>

          {/* Upload Photo */}

          {/* Save Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md lg:w-[160px] lg:h-[50px] h-[40px] text-[14px] hover:bg-blue-600"
          >
            Save Changes
          </button>
        </form>
      </div>

      <div className="flex justify-center items-center pt-[40px] w-[90%] mx-auto bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-md w-full"
        >
          <h1 className="text-2xl font-semibold mb-6">Social Profile</h1>

          {/* Personal Website */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Personal Website
            </label>
            <div className="flex items-center border rounded-md overflow-hidden">
              <span className="px-3  text-gray-500">
                <Globe />
              </span>
              <input
                type="url"
                name="personalWebsite"
                value={profile.personalWebsite}
                onChange={handleInputChange}
                placeholder="Personal website or portfolio URL..."
                className="w-full px-3 py-2 outline-none"
              />
            </div>
          </div>

          {/* Social Media Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                label: "Facebook",
                icon: <Facebook />,
                name: "facebook",
              },
              {
                label: "Instagram",
                icon: <Instagram />,
                name: "instagram",
              },
              {
                label: "LinkedIn",
                icon: <Linkedin />,
                name: "linkedin",
              },
              {
                label: "Twitter",
                icon: <Twitter />,
                name: "twitter",
              },
              {
                label: "WhatsApp",
                icon: <MessageCircle />,
                name: "whatsapp",
              },
              {
                label: "YouTube",
                icon: <Youtube />,
                name: "youtube",
              },
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {field.label}
                </label>
                <div className="flex items-center border rounded-md overflow-hidden">
                  <span className="px-3  text-gray-500">{field.icon}</span>
                  <input
                    type="text"
                    name={field.name}
                    value={profile[field.name as keyof SocialProfile]}
                    onChange={handleInputChange}
                    placeholder={
                      field.label === "WhatsApp" ? "Phone number" : "Username"
                    }
                    className="w-full px-3 py-2 outline-none"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Save Changes Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="lg:w-[160px] lg:h-[50px] h-[40px] text-[14px] w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>

      <div className="pb-[100px] pt-[40px] bg-gray-100 flex justify-center items-center w-[90%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full   rounded-lg ">
          {/* Notifications Section */}
          <div className="p-8 bg-white shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Notifications</h2>
            <div className="space-y-2">
              {[
                {
                  key: "coursePurchase",
                  label: "I want to know who buy my course.",
                },
                {
                  key: "courseReview",
                  label: "I want to know who write a review on my course.",
                },
                {
                  key: "lectureComment",
                  label: "I want to know who commented on my lecture.",
                },
                {
                  key: "lectureNotesDownload",
                  label: "I want to know who download my lecture notes.",
                },
                {
                  key: "commentReply",
                  label: "I want to know who replied on my comment.",
                },
                {
                  key: "profileVisit",
                  label:
                    "I want to know daily how many people visited my profile.",
                },
                {
                  key: "attachmentDownload",
                  label: "I want to know who download my lecture attach file.",
                },
              ].map((item) => (
                <label
                  key={item.key}
                  className="flex items-center space-x-3 text-gray-700"
                >
                  <input
                    type="checkbox"
                    checked={
                      notifications[item.key as keyof typeof notifications]
                    }
                    // onChange={() =>
                    //   handleCheckboxChange(
                    //     item.key as keyof typeof notifications
                    //   )
                    // }
                    className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring focus:ring-blue-300"
                  />
                  <span>{item.label}</span>
                </label>
              ))}
            </div>
            <button
              //onClick={handleSave}
              className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
            >
              Save Changes
            </button>
          </div>

          {/* Change Password Section */}
          <div className="p-8 bg-white shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Change Password</h2>
            <div className="space-y-4">
              {[
                {
                  label: "Current Password",
                  name: "currentPassword",
                  show: "showCurrentPassword",
                },
                {
                  label: "New Password",
                  name: "newPassword",
                  show: "showNewPassword",
                },
                {
                  label: "Confirm Password",
                  name: "confirmPassword",
                  show: "showConfirmPassword",
                },
              ].map((field) => (
                <div key={field.name}>
                  <label
                    htmlFor={field.name}
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {field.label}
                  </label>
                  <div className="flex items-center border rounded-md overflow-hidden">
                    <input
                      type={
                        password[field.show as keyof typeof password]
                          ? "text"
                          : "password"
                      }
                      name={field.name}
                      //value={password[field.name as keyof typeof password]}
                      //onChange={handlePasswordChange}
                      placeholder={field.label}
                      className="w-full px-3 py-2 outline-none"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        togglePasswordVisibility(
                          field.show as keyof typeof password
                        )
                      }
                      className="px-3 text-gray-500 focus:outline-none"
                    >
                      {/* {password[field.show as keyof typeof password] ? (
                        <Eye size={20} />
                      ) : (
                        <EyeOff size={20} />
                      )} */}
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button
              // onClick={handleSaveChanges}
              className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
