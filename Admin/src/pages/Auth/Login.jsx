import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";
import { logIn } from "../../Features/actions/auth";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(logIn(data));
  };

  return (
    <main className="w-full bg-gray-100 h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-sm w-full rounded-xl text-gray-600 bg-white p-10">
        <div className="text-center">
          <div className="space-y-2">
            <h3 className="text-gray-800 text-3xl font-bold sm:text-5xl mb-4">
              Login
            </h3>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
          <div>
            <label className="font-medium">Email</label>
            <input
              {...register("email", { required: "email is required" })}
              type="email"
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
            {errors.email && (
              <span className="text-red-500">Email is required</span>
            )}
          </div>
          <div>
            <label className="font-medium">Password</label>
            <input
              {...register("password", { required: "password is required" })}
              type="password"
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
            {errors.password && (
              <span className="text-red-500">Password is required</span>
            )}
          </div>
          <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
            Sign in
          </button>
          <div className="text-center">
            <a href="javascript:void(0)" className="hover:text-indigo-600">
              Forgot password?
            </a>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
