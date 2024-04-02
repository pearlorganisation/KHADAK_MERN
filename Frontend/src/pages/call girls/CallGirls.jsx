import React from "react";
import { useSelector } from "react-redux";

const CallGirls = () => {
  const locationData = useSelector((state) => state?.location?.locationData);
  console.log(locationData);

  return (
    <div className=" flex justify-center bg-pink-100">
      <div className="w-[70%] bg-pink-200 p-3">
        {Array.isArray(locationData) &&
          locationData.length > 0 &&
          locationData?.map((data) => {
            return (
              <div>
                <h1 className="text-2xl text-pink-600 cursor-pointer">
                  {data?.name}
                </h1>
                <ul className="flex justify-start gap-6">
                  {data?.localities?.map((item) => {
                    return (
                      <li className=" p-3 bg-gray-300 rounded-full cursor-pointer text-md text-bold shadow-md">
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        <div>
          <h1 className="text-2xl text-pink-600 cursor-pointer">Delhi</h1>
          <ul className="flex justify-start gap-6">
            <li className=" p-3 bg-gray-300 rounded-full cursor-pointer text-md text-bold shadow-md">
              Connaught Place
            </li>
            <li className=" p-3 bg-gray-300 rounded-full cursor-pointer">
              karawal nagar
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CallGirls;
