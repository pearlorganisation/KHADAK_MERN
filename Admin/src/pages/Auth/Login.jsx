import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";
import { logIn } from "../../Features/actions/auth";
import { storeLoginData } from "../../Features/slices/auth";


const Login = () => {
  const {userData,isLoading}= useSelector((state)=>state.auth)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isPasswordHidden,setPasswordHidden]= useState(true)
 
  const togglePasswordVisibility = ()=>{
    setPasswordHidden(!isPasswordHidden)
    const passwordInput = document.getElementById('hs-toggle-password')
    if(passwordInput){
      passwordInput.type = isPasswordHidden ? "text" : "password"
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
  // Dispatch action to store form data in Redux
  console.log(data)
  dispatch(storeLoginData(data));
  
    dispatch(logIn(data));
    
  };


  useEffect(()=>{
 if(userData?.success){
  navigate("/otpVerification")
 }
  },[userData, navigate])

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
            <div className="relative">      
                  <input
              {...register("password", { required: "password is required" })}
              type="password"
              id="hs-toggle-password"
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
            <button className="text-gray-400 absolute right-[14px] inset-y-4  active:text-gray-600"
                       type='button'
                       onClick={togglePasswordVisibility}
                >
                    {
                        isPasswordHidden ? (
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                            </svg>

                        )
                    }
                </button>
                </div>

            {errors.password && (
              <span className="text-red-500">Password is required</span>
            )}
          </div>
          <button disabled={isLoading} className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
          {isLoading ? (
                <ClipLoader color="#c4c2c2" />
              ) : (<>Log In</>)}
          </button>
         
        </form>
      </div>
    </main>
  );
};

export default Login;
