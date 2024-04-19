import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import logo from "../../assets/delhimazzaLogo.png";

// import { getContact } from "../../features/slices/contactSlice";

const CallGirlsList = ({ BASE_URL }) => {
  // -----------------------------------Hooks----------------------------------------
  const { locality } = useSelector((state) => state?.contact);
  const params = useParams();
  // const [searchParams, setSearchParams] = useSearchParams();
  const { cityName } = useSelector((state) => state.contact);
  // --------------------------------------------------------------------------------
  const [contactData, setContactData] = useState(null);
  const { selectedLocality } = useSelector((state) => state.location);

  const getContacts = async (url) => {
    console.log(url);
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
              <div class=" bg-gradient-to-r from-amber-50 to-cyan-50 text-gray-700 w-full mb-10 grid grid-cols-[50%_auto] md:grid-cols-[20%_auto]  rounded-xl border border-spacing-2 border-red-600 px-1 md:px-4 md:pb-2 py-2 text-left md:text-left">
                <div class="md:mb-0 h-[150px] w-[120px] md:h-[180px] md:w-[180px] mb-10  overflow-hidden">
                  <img
                    class="rounded-lg h-full w-full object-cover"
                    src={data?.profileImage}
                    alt=""
                  />
                </div>
                <div class="flex flex-col justify-between ">
                  <div>
                    <p class="text-text-lg leading-4 sm:text-lg md:text-2xl font-medium text-gray-700 mb-2">
                      {data?.title}
                    </p>
                    <p
                      dangerouslySetInnerHTML={{ __html: data?.description }}
                      class="text-xs md:text-sm line-clamp-5 md:line-clamp-4 font-medium text-gray-700"
                    >
                      {/* {data?.description} */}
                    </p>
                  </div>

                  <div class=" grid grid-cols-2 gap-3 text-xs md:text-lg">
                    <a
                      href={`https://api.whatsapp.com/send?phone=${encodeURIComponent(
                        data?.phoneNumber
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="w-full rounded-lg border-2 bg-green-600 px-2 py-1  md:px-4 md:py-2 font-medium text-white text-center"
                    >
                      Whats App
                    </a>
                    <a
                      href={`tel:${data?.phoneNumber}`}
                      class="w-full rounded-lg border-2 border-transparent bg-blue-600 px-2 py-1  md:px-4 md:py-2 font-medium text-white text-center"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default CallGirlsList;
