import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { changeCity } from "../../features/slices/contactSlice";

const CallGirls = () => {
  const locationData = useSelector((state) => state?.location?.locationData);

  // --------------------------------------Hooks-------------------------------------------
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  // ------------------------------------------------------------------------------------------

  // --------------------------------------Functions-------------------------------------------
  const cityHandler = (e, cityName) => {
    dispatch(changeCity(cityName.toLowerCase()));
    navigate(`/call-girls-in-${cityName.toLowerCase()}`);
  };
  // ------------------------------------------------------------------------------------------

  return (
    <div className=" flex justify-center bg-pink-100">
      <div className="w-[70%] bg-pink-200 p-3">
        {Array.isArray(locationData) &&
          locationData.length > 0 &&
          locationData?.map((data) => {
            return (
              <div>
                <h1
                  className="text-2xl text-pink-600 font-bold bg-white p-3 cursor-pointer m-2"
                  onClick={(e) => {
                    cityHandler(e, data?.name);
                  }}
                >
                  {data?.name}
                </h1>
                {/* <ul className="flex justify-start gap-6">
                  {data?.localities?.map((item) => {
                    return (
                      <li className=" p-3 bg-gray-300 rounded-full cursor-pointer text-md text-bold shadow-md">
                        {item}
                      </li>
                    );
                  })}
                </ul> */}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default CallGirls;
