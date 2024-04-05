import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { Stack, Skeleton } from "@mui/material";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCity,
  deleteLocality,
  getLocation,
} from "../../Features/actions/location";
import { clearDeleteState } from "../../Features/slices/location";

const ViewLocation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { locationData, isDeleted, isLoading } = useSelector(
    (state) => state.location
  );

  const handleAddLocation = () => {
    navigate("/addLocation");
  };
  const handleAddCity = () => {
    navigate("/addCity");
  };

  useEffect(() => {
    dispatch(getLocation());
  }, []);

  useEffect(() => {
    if (isDeleted) {
      dispatch(getLocation());
      dispatch(clearDeleteState());
    }
  }, [isDeleted]);

  return (
    <>
      <div className="max-w-screen-xl mt-10 mx-auto px-4 md:px-8">
        <div className="items-start justify-between md:flex">
          <div>
            <h3 className="px-1 text-gray-800 text-xl font-bold sm:text-2xl">
              Manage Locations
            </h3>
          </div>
          <div className="flex gap-2">
            <div className="mt-3 md:mt-0">
              <a
                onClick={handleAddCity}
                className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
              >
                Add City
              </a>
            </div>
            <div className="mt-3 md:mt-0">
              <a
                onClick={handleAddLocation}
                className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
              >
                Add Location
              </a>
            </div>
          </div>
        </div>
        {/* <div className="flex mt-10 gap-2">
          <div>
            <input
              type="text"
              className="px-5 py-2 text-gray-500 border-slate-300 bg-transparent outline-none border focus:border-teal-400 shadow-sm rounded-lg"
              placeholder="Search City"
            />
          </div>
          <div className="p-1 px-2 border border-slate-300 bg-indigo-600 rounded-lg text-xl text-white">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </div> */}
        <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
          <table className="w-full table-auto text-sm text-left">
            <thead className="bg-gray-50 text-gray-600 font-medium border-b">
              <tr>
                <th className="py-3 px-6">S.No</th>
                <th className="py-3 px-6">City</th>
                <th className="py-3 px-6">Locality</th>
                <th className="py-3 px-6">Last Updated</th>
                <th className="py-3 px-6">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y">
              {isLoading ? (
                <tr>
                  <td colSpan="5" className="text-center px-6 py-8">
                    <Stack spacing={4}>
                      <Skeleton variant="rounded" height={30} />
                      <Skeleton variant="rounded" height={25} />
                      <Skeleton variant="rounded" height={20} />
                      <Skeleton variant="rounded" height={20} />
                      <Skeleton variant="rounded" height={20} />
                    </Stack>
                  </td>
                </tr>
              ) : (
                Array.isArray(locationData) &&
                locationData?.map((item, idx) => (
                  <tr key={idx}>
                    <td className="px-6 py-4 whitespace-nowrap">{idx + 1}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item?.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {Array.isArray(item.localities) &&
                        item?.localities.map((locality, idx) => (
                          <tr key={idx}>
                            <td className="py-2 whitespace-nowrap flex gap-3">
                              <div>{locality} </div>

                              <button
                                onClick={() =>
                                  dispatch(
                                    deleteLocality({ id: item?._id, locality })
                                  )
                                }
                                className="border bg-red-500 px-2 rounded-lg text-white"
                              >
                                X
                              </button>
                            </td>
                          </tr>
                        ))}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {new Date(item?.updatedAt).toLocaleDateString()}
                    </td>

                    <td className=" px-6 whitespace-nowrap">
                      <button
                        onClick={() => {
                          dispatch(deleteCity(item?._id));
                        }}
                        className="py-2 leading-none font-semibold text-red-500 hover:text-red-600 duration-150 hover:bg-gray-50 rounded-lg"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ViewLocation;
