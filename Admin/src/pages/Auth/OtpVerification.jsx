import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from "react-redux";  
import { verifyOTP } from '../../Features/actions/auth';
import { useNavigate } from 'react-router-dom';


const OtpVerification = () => {
  // const navigate= useNavigate()
  // const {isUserLoggedIn}= useSelector((state)=>state.auth)
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit= (data)=>{
        dispatch(verifyOTP(data))
      }

      // useEffect(()=>{
      //   if(isUserLoggedIn){
      //     navigate("/")
      //   }
      // },[isUserLoggedIn])
 
      return (

    <>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
        <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
          <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
            <div className="flex flex-col items-center justify-center text-center space-y-2">
              <div className="font-semibold text-3xl">
                <p>Otp Verification</p>
              </div>
              <div className="flex flex-row text-sm font-medium text-gray-400">
                <p>We have sent a code to your email 
                    {/* abc@gmaqil.com */}

                </p>
              </div>
            </div>

            <div>
              <form 
              onSubmit={handleSubmit(onSubmit)}
              >
                <div className="flex flex-col space-y-16">
                  <div className="flex flex-row items-center justify-between mx-auto w-full max-w-s">
                    {/* You can use map to generate OTP input fields */}
                    {/* {[1, 2, 3, 4, 5, 6].map((index) => ( */}
                     
                        <input
                          {...register(`otp`, 
                        //   {
                        //     required: true,
                        //     minLength: 1,
                        //     maxLength: 1,
                        //     pattern: /^[0-9]*$/,
                        //   }
                        )
                        }
                          className={`w-full h-full  text-center outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700 ${
                            errors[`otp`] ? "border-red-500" : ""
                          }`}
                          type="text"
                          placeholder="Type the OTP here "
                         
                        />
                    
                    {/* ))} */}
                  </div>

                  <div className="flex flex-col space-y-5">
                    <div>
                      <button
                        className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-[#1D4ED8] border-none text-white text-sm shadow-sm"
                        type="submit"
                      >
                        Verify Account
                      </button>
                    </div>

                    {/* <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                      <p>Didn't receive code?</p>
                      <a
                        className="flex flex-row items-center text-blue-600"
                        href="http://"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Resend
                      </a>
                    </div> */}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OtpVerification