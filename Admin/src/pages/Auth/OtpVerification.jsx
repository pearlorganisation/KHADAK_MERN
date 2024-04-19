import React, { useEffect} from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { logIn, verifyOTP } from "../../Features/actions/auth";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const OtpVerification = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const { userData,loggedInUserData,isLoading } = useSelector((state) => state?.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
console.log(loggedInUserData)
  const handleResendOtp = ()=>{
  dispatch(logIn(loggedInUserData))
  }
  const onSubmit = (data) => {
    dispatch(verifyOTP(data));
  };

  

  // useEffect(() => {
  //   if (!userData?.success) {
  //     console.log("entered here");
  //     navigate("/");
  //   }
  // }, [navigate,userData]);

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
                <p>
                  We have sent a code to your email
                 
                </p>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col space-y-16">
                  <div className="flex flex-row items-center justify-between mx-auto w-full max-w-s">
                  

                    <input
                      {...register(
                        `otp`
                        //   {
                        //     required: true,
                        //     minLength: 1,
                        //     maxLength: 1,
                        //     pattern: /^[0-9]*$/,
                        //   }
                      )}
                      className={`w-full h-full p-5  text-center outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700 ${
                        errors[`otp`] ? "border-red-500" : ""
                      }`}
                      type="text"
                      placeholder="Type the OTP here "
                    />

                  
                  </div>

                  <div className="flex flex-col space-y-5">
                    <div>
                      <button disabled={isLoading}
                        className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-[#1D4ED8] border-none text-white text-sm shadow-sm"
                        type="submit"
                      >
                       {isLoading ? (
                <ClipLoader color="#c4c2c2" />
              ) : (<>Verify Account</>)}
                      </button>
                    </div>

                    <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                      <p>Didn't receive code?</p>
                      <a
                        className="flex flex-row items-center text-blue-600"
                        onClick={handleResendOtp}
                       
                        rel="noopener noreferrer"
                      >
                        Resend
                      </a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtpVerification;
