import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

// import { getContact } from "../../features/slices/contactSlice";

const CallGirlsList = ({ BASE_URL }) => {
  // -----------------------------------Hooks----------------------------------------
  const [searchParams, setSearchParams] = useSearchParams();
  const { cityName } = useSelector((state) => state.contact);
  // --------------------------------------------------------------------------------
  const [contactData, setContactData] = useState(null);
  const { selectedLocality } = useSelector((state) => state.location);

  const getContacts = async (url) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/contact${url ? `?${url}` : ""}`
      );
      setContactData(response?.data?.data);
    } catch (error) {
      console.log(error?.message);
    }
  };
  console.log(contactData);
  useEffect(() => {
    const url = (() => {
      return `city=${
        searchParams.get("city") ? searchParams.get("city") : cityName
      }`;
    })();

    console.log("this is the url", url);

    console.log("this is the city", searchParams.get("city"));

    getContacts(url);
  }, []);
  return (
    <div>
      {Array.isArray(contactData) &&
        contactData?.length > 0 &&
        contactData
          .filter((data) => {
            if (searchParams.get("locality")) {
              let queryLocality = searchParams
                .get("locality")
                ?.toString()
                ?.split("%")
                ?.join("")
                .toLowerCase()
                .trim()
                .replaceAll(" ", "");
              let presentLocality = data?.locality
                ?.toString()
                .toLowerCase()
                .trim()
                .replaceAll(" ", "");

              return queryLocality === presentLocality;
            } else {
              return true;
            }
          })
          .map((data) => {
            return (
              <div class=" bg-[#c12261] w-full my-10 grid grid-cols-[40%_auto] md:grid-cols-[30%_auto]  rounded-xl border border-spacing-2 border-red-600 px-4 py-4 text-left   md:text-left">
                <div class="mb-4 md:mr-6 md:mb-0 h-[300px]  overflow-hidden">
                  <img
                    class="rounded-lg h-full object-cover"
                    src={data?.profileImage}
                    alt=""
                  />
                </div>
                <div class="flex flex-col justify-between h-[300px] p-3">
                  <div>
                    <p class="text-xl md:text-2xl font-medium text-white">
                      {data?.title}
                    </p>
                    <p class="mb-4 text-xs md:text-sm font-medium text-white">
                      {data?.description}
                    </p>
                  </div>

                  <div class="flex space-x-2 h-fit">
                    <button class="w-full rounded-lg border-2 bg-green-600 px-4 py-2 font-medium text-white">
                      WhatsApp
                    </button>
                    <button class="w-full rounded-lg border-2 border-transparent bg-blue-600 px-4 py-2 font-medium text-white">
                      Call Me
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default CallGirlsList;
