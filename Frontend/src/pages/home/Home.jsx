import React, { useEffect, useState } from "react";
import axios from "axios";
import CallGirlsList from "../../components/CallGirlslist/CallGirlsList";
import Location from "../../components/Location/Location";
import { useParams, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import CallGirls from "../call girls/CallGirls";

const Home = () => {
  const params = useParams();
  console.log(params);
  // useState
  const [heroSectionData, setHeroSectionData] = useState(null);
  const [footerSectionData, setFooterSectionData] = useState(null);
  const [metaDescription, setMetaDescription] = useState(
    " Being one of the top call girls in [city] adverts it features best call girl Contact Numbers, and online escort girl booking 24x7 for Home And Hotel Room Services."
  );
  const [metaTitle, setMetaTitle] = useState(
    "Call Girls in [city], Escort Service Available 24x7 in [city]"
  );

  // -----------------------------------Hooks----------------------------------------
  const { cityName, locality } = useSelector((state) => state.contact);
  const [searchParams, setSearchParams] = useSearchParams();
  // --------------------------------------------------------------------------------

  const BASE_URL = "https://khadak-mern.onrender.com/api/v1";

  // const BASE_URL = "http://localhost:6500/api/v1";

  // getting the hero section data
  const getHeroSectionData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/heroSection`);
      console.log(response?.data?.data[0]);
      setHeroSectionData(response?.data?.data[0]);
    } catch (error) {
      console.log(error.message);
    }
  };

  const FooterSection = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/footer`);
      console.log(response?.data);
      setFooterSectionData(response?.data?.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  // useEffects
  useEffect(() => {
    getHeroSectionData();
    FooterSection();

    // setSearchParams((params) => {
    //   params.set("city", `${cityName}`);
    //   return params;
    // });
  }, []);

  // function

  return (
    <div className="items-center px-4 max-w-screen-xl mx-auto  md:px-8">
      <section class="bg-white dark:bg-gray-900">
        <div class=" px-4 mx-auto max-w-screen-xl text-center lg:pt-8 lg:px-12">
          {heroSectionData ? (
            <h1 class="mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
              {heroSectionData?.title?.replace(
                /\[city\]/g,
                (locality && locality[0]?.toUpperCase() + locality.slice(1)) ||
                  cityName[0].toUpperCase() + cityName.slice(1) ||
                  "Delhi"
              )}
            </h1>
          ) : (
            "loading"
          )}
          <Helmet>
            <title>
              {" "}
              {`${metaTitle?.replace(
                /\[city\]/g,
                (locality && locality[0]?.toUpperCase() + locality?.slice(1)) ||
                  cityName[0].toUpperCase() + cityName.slice(1) ||
                  "Delhi"
              )}`}
            </title>
            <meta
              name="description"
              content={`${metaDescription?.replace(
                /\[city\]/g,
                (locality && locality[0]?.toUpperCase() + locality?.slice(1)) ||
                  cityName[0].toUpperCase() + cityName.slice(1) ||
                  "Delhi"
              )}`}
            />
          </Helmet>

          {heroSectionData ? (
            <div
              id="HeroSectionDescription"
              dangerouslySetInnerHTML={{
                __html: heroSectionData?.description?.replace(
                  /\[city\]/g,
                  (locality &&
                    locality[0]?.toUpperCase() + locality.slice(1)) ||
                    cityName[0].toUpperCase() + cityName.slice(1) ||
                    "delhi"
                ),
              }}
              class="mb-8 text-lg font-normal text-black lg:text-xl sm:px-16 xl:px-28 dark:text-gray-400"
            ></div>
          ) : (
            "loading"
          )}
        </div>
      </section>
      <section class=" dark:bg-gray-900">
        <div class=" px-4 mx-auto max-w-screen-xl text-center  lg:px-12">
          <CallGirlsList BASE_URL={BASE_URL} />
          {/* <CallGirlsList />
          <CallGirlsList /> */}

          <div className=" rounded-xl p-6 mb-10 text-start bg-gradient-to-r from-amber-50 to-cyan-50 text-gray-700 text-[18px]">
            {footerSectionData &&
              footerSectionData?.length > 0 &&
              footerSectionData.map((data) => {
                return (
                  <>
                    {/* <p className="text-3xl font-semibold text-rose-500 mt-7 mb-3 ">
                      {" "}
                      {data?.title}kk
                    </p> */}
                    <div
                      dangerouslySetInnerHTML={{
                        __html: data?.description?.replace(
                          /\[city\]/g,
                          (locality &&
                            locality[0]?.toUpperCase() + locality.slice(1)) ||
                            cityName[0].toUpperCase() + cityName.slice(1) ||
                            "Delhi"
                        ),
                      }}
                    ></div>
                  </>
                );
              })}
          </div>

          <Location BASE_URL={BASE_URL} />
          <CallGirls />
        </div>
      </section>
    </div>
  );
};

export default Home;
