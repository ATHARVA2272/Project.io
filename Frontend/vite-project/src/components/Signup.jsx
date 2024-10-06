import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import Login from "./Login";


function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullName: data.fullName,
      username: data.username,
      email: data.email,
      password: data.password,
      bio: data.bio,
      skills: data.skills,
      experienceLevel: data.experienceLevel,
      availability: data.availability,
    };
  
    try {
      const response = await axios.post("http://localhost:4000/api/user/signup", userInfo);
      console.log(response.data);
      if (response.data) {
        toast.success("Signed up successfully");
        document.getElementById("my_modal_3").close();
        setTimeout(() => {
          navigate("/User"); 
          localStorage.setItem("userID",response.data.userId);
        }, 1000);
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);  // Log detailed error response
        toast.error("Error: " + error.response.data.error);
      } else {
        console.log(error);
        toast.error("An unexpected error occurred.");
      }
    }
  };
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-white">
      <div className="bg-gray-600 shadow-md rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-white">
          {/* Full Name */}
          <label className="block">
            Full Name:
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-md outline-none"
              {...register("fullName", { required: true })}
            />
          </label>
          {errors.fullName && <span className="text-red-500">This field is required</span>}

          {/* Username */}
          <label className="block">
            Username:
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-md outline-none"
              {...register("username", { required: true })}
            />
          </label>
          {errors.username && <span className="text-red-500">This field is required</span>}

          {/* Email */}
          <label className="block">
            Email:
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-md outline-none"
              {...register("email", { required: true })}
            />
          </label>
          {errors.email && <span className="text-red-500">This field is required</span>}

          {/* Password */}
          <label className="block">
            Password:
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-md outline-none"
              {...register("password", { required: true })}
            />
          </label>
          {errors.password && <span className="text-red-500">This field is required</span>}

    

          {/* Bio */}
          <label className="block">
            Bio:
            <textarea
              className="w-full px-3 py-2 border rounded-md outline-none"
              {...register("bio")}
              placeholder="Tell us about yourself"
            />
          </label>

          {/* Profile Picture
          <label className="block">
            Profile Picture:
            <input
              type="file"
              className="w-full px-3 py-2 border rounded-md outline-none"
              {...register("profilePicture")}
            />
          </label> */}

          {/* Skills */}
          <label className="block">
            Skills:
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-md outline-none"
              {...register("skills")}
              placeholder="E.g., React, Node.js"
            />
          </label>

          {/* Experience Level */}
          <label className="block">
            Experience Level:
            <select
              className="w-full px-3 py-2 border rounded-md outline-none"
              {...register("experienceLevel", { required: true })}
            >
              <option value="Entry-level">Entry-level</option>
              <option value="Mid-level">Mid-level</option>
              <option value="Senior">Senior</option>
            </select>
          </label>

          {/* Availability */}
          <label className="block flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              {...register("availability")}
            />
            I am available for new projects
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-pink-500 text-white rounded-md px-3 py-2 hover:bg-pink-700 duration-200"
          >
            Signup
          </button>

          <p className="text-xl">
                  Have account?{" "}
                  <button
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>{" "}
                  <Login />
                  
                </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
