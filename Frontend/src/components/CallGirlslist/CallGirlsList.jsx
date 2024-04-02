import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// import { getContact } from "../../features/slices/contactSlice";

const CallGirlsList = ({ BASE_URL }) => {
  const [contactData, setContactData] = useState(null);
  const { selectedLocality } = useSelector((state) => state.location);

  const getContacts = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/contact`);
      setContactData(response?.data?.data);
    } catch (error) {
      console.log(error?.message);
    }
  };
  console.log(contactData);
  useEffect(() => {
    getContacts();
  }, []);
  return (
    <div>
      {Array.isArray(contactData) &&
        contactData?.length > 0 &&
        contactData.map((data) => {
          if (data?.city === "Delhi") {
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
          }
        })}
    </div>
  );
};

export default CallGirlsList;
