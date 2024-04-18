import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { changeCity, changeLocality } from "../../features/slices/contactSlice";

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
    dispatch(changeLocality(""));
    if (cityName?.toLowerCase() == "delhi") {
      navigate("/");
    } else {
      navigate(
        `/call-girls-in-${cityName.toLowerCase().trim().replace(/ /g, "-")}/`
      );
    }
  };
  // ------------------------------------------------------------------------------------------

  return (
    <div className="mb-10 flex justify-center flex-col bg-gradient-to-r from-amber-50 to-cyan-50 text-gray-700 ">
      <h1 className="font-bold md:text-3xl text-2xl lg:text-4xl p-3 ">
        Find Us in More Top Cities in India
      </h1>
      <div className=" bg-gradient-to-r from-amber-50 to-cyan-50 text-gray-700  p-3 flex gap-2 overflow-hidden flex-wrap">
        {Array.isArray(locationData) &&
          locationData.length > 0 &&
          locationData?.map((data) => {
            return (
              <div>
                <h1
                  className="text-2xl text-pink-600 font-bold bg-white rounded-lg p-3 cursor-pointer m-2"
                  onClick={(e) => {
                    cityHandler(e, data?.name);
                    window.scrollTo({ top: 0, behavior: "smooth" });
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
