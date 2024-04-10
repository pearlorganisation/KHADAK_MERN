import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";

// import { getContact } from "../../features/slices/contactSlice";

const CallGirlsList = ({ BASE_URL }) => {
  // -----------------------------------Hooks----------------------------------------
  const { locality } = useSelector((state) => state?.contact);
  // const params = useParams();
  // const [searchParams, setSearchParams] = useSearchParams();
  const { cityName } = useSelector((state) => state.contact);
  // --------------------------------------------------------------------------------
  const [contactData, setContactData] = useState(null);
  const { selectedLocality } = useSelector((state) => state.location);

  const getContacts = async (url) => {
    console.log(url, "hii");
    try {
      const response = await axios.get(
        `${BASE_URL}/contact/?city=${url ? url : ""}`
      );
      setContactData(response?.data?.data);
    } catch (error) {
      console.log(error?.message);
    }
  };

  // console.log(contactData, "hiii");
  useEffect(() => {
    const url = (() => {
      const city = cityName;
      return city;
    })();

    // console.log("this is the city", searchParams.get("city"));

    getContacts(url);
  }, [cityName]);

  return (
    <div>
      {Array.isArray(contactData) &&
        contactData?.length > 0 &&
        contactData
          .filter((data) => {
            if (locality) {
              let queryLocality = data?.locality
                ?.toString()
                ?.split("%")
                ?.join("")
                .toLowerCase()
                .trim()
                .replaceAll(" ", "");
              let presentLocality = locality
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
                <div class="mb-4 md:mr-6 md:mb-0 h-[200px] md:h-[300px]  overflow-hidden">
                  <img
                    class="rounded-lg h-full w-full object-cover"
                    src={data?.profileImage}
                    alt=""
                  />
                </div>
                <div class="flex flex-col justify-between  h-auto md:h-[300px] p-3">
                  <div>
                    <p class="text-text-lg leading-4 sm:text-lg md:text-2xl font-medium text-white mb-2">
                      {data?.title}
                    </p>
                    <p
                      dangerouslySetInnerHTML={{ __html: data?.description }}
                      class="mb-4 text-xs md:text-sm line-clamp-5 md:line-clamp-4 font-medium text-white"
                    >
                      {/* {data?.description} */}
                    </p>
                  </div>

                  <div class=" grid sm:grid-cols-2 gap-3 text-xs md:text-lg">
                    <button class="w-full rounded-lg border-2 bg-green-600 px-2 py-1  md:px-4 md:py-2 font-medium text-white">
                      WhatsApp
                    </button>
                    <button class="w-full rounded-lg border-2 border-transparent bg-blue-600 px-2 py-1  md:px-4 md:py-2 font-medium text-white">
                      Call Now
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
