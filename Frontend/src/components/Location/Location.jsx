import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  getLocationData,
  selectedLocation,
} from "../../features/slices/locationSlice";
import { useSearchParams } from "react-router-dom";

const Location = ({ BASE_URL }) => {
  const [location, setLocation] = useState();
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedCity = searchParams.get("city");
  console.log("selectedcity", selectedCity);

  const dispatch = useDispatch();

  const getLocation = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/location/City`);
      setLocation(response?.data?.data);
      dispatch(getLocationData(response?.data?.data));
    } catch (error) {
      console.log(error.message);
    }
  };

  const localityHandler = (locality) => {
    setSearchParams((params) => {
      params.set("locality", locality.toString().replaceAll(" ", "%"));
      return params;
    });
  };

  console.log(location);
  useEffect(() => {
    getLocation();
  }, []);
  return (
    <div className="w-full p-4 bg-gradient-to-r from-amber-50 to-cyan-50 text-gray-700 mb-5">
      <h1 className="text-4xl">Areas of Top Call Girls in {selectedCity}</h1>
      {Array.isArray(location) &&
        location.length > 0 &&
        location.map((data) => {
          if (data?.name == selectedCity) {
            return (
              <div className="my-8">
                {/* <h1 className="text-3xl text-left text-rose-500">{data?.name}</h1> */}
                <div className="flex  flex-wrap text-pink-800 w-full">
                  {data?.localities.map((locality) => {
                    return (
                      <p
                        className="text-xl mx-5 text-bold cursor-pointer"
                        onClick={() => {
                          localityHandler(locality);
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                      >
                        {" "}
                        {locality}
                      </p>
                    );
                  })}
                </div>
              </div>
            );
          }
        })}
    </div>
  );
};

export default Location;
