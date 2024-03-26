import React, { useEffect, useState } from "react";
import axios from "axios";
import CallGirlsList from "../../components/CallGirlslist/CallGirlsList";

const Home = () => {
  // useState
  const [heroSectionData, setHeroSectionData] = useState(null);

  const BASE_URL = "http://localhost:6500/api/v1";

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

  // useEffects
  useEffect(() => {
    getHeroSectionData();
  }, []);

  return (
    <div className="items-center px-4 max-w-screen-xl mx-auto  md:px-8">
      <section class="bg-white dark:bg-gray-900">
        <div class=" px-4 mx-auto max-w-screen-xl text-center lg:pt-8 lg:px-12">
          {heroSectionData ? (
            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              {heroSectionData?.title}
            </h1>
          ) : (
            "loading"
          )}
          {heroSectionData ? (
            <p class="mb-8 text-lg font-normal text-black lg:text-xl sm:px-16 xl:px-28 dark:text-gray-400">
              {heroSectionData?.description}
            </p>
          ) : (
            "loading"
          )}
        </div>
      </section>
      <section class=" dark:bg-gray-900">
        <div class=" px-4 mx-auto max-w-screen-xl text-center  lg:px-12">
          <CallGirlsList />
          <CallGirlsList />
          <CallGirlsList />

          <div className=" rounded-xl p-6 mb-10 text-start bg-gradient-to-r from-amber-50 to-cyan-50 text-gray-700 text-[18px]">
            <p className="text-3xl font-medium text-rose-500 mb-3 ">
              {" "}
              Delhi Call Girl&#39;s Online And WhatsApp Numbers For Friendship{" "}
            </p>
            Here, friendship is the strongest relationship possible. You can
            establish a connection with any girl by messaging her on WhatsApp.
            These girls are constantly available online, and you can reach them
            at their number any time of day. You can also join the call girl
            WhatsApp group by getting in touch with them. Since you can talk to
            anyone thanks to technology, dating a girlfriend has grown easier.
            You can pay cash for the Delhi call girl either at the moment of
            service or afterward, through your friendship. Additionally, they
            provide free delivery and free hotel or home delivery.
            <p className="text-3xl font-semibold text-rose-500 mt-7 mb-3 ">
              {" "}
              Why Should You Use Our Services to Hire Delhi Call Girls?
            </p>
            Finding an agency that can offer you the services of those girls
            should be your first step in hiring a call girl in Delhi. The
            greatest call girl service in Delhi is what we offer at Delhi Mazza.
            We can confidently guarantee that you will be pleased with our call
            girls because they have done such an amazing job making our clients
            happy in bed. You may be wondering now why you ought to use our call
            girls for your needs. The majority of agencies would guarantee your
            actions. We distinguish ourselves from other agencies in a few ways.
            Here are some reasons why you ought to work with us to hire call
            girls in Delhi.
            <p className="text-3xl font-semibold text-rose-500 mt-7  mb-3">
              {" "}
              The Sexiest Call Girls in Delhi&#39;s Largest Gallery{" "}
            </p>
            You should consider several call girls before selecting one while
            searching for the ideal call girl in Delhi. You may view hundreds of
            Delhi call girls by visiting our gallery. With these call girls on
            our website, you will undoubtedly find your ideal match.
            <p className="text-3xl font-semibold text-rose-500 mt-7 mb-3">
              {" "}
              Call Girl Service in Delhi at Affordable Rates
            </p>
            For their call girl service in Delhi, the majority of companies
            would charge you exorbitant fees. Additionally, people who offer you
            inexpensive call girls won&#39;t give you the high-quality
            assistance you require. You can get call girls from us at a
            reasonable price. We never cut corners when it comes to service
            quality.
            <p className="text-3xl font-semibold text-rose-500 mt-7 mb-3">
              {" "}
              What Delhi Call Girls Can Do for You
            </p>
            You might be wondering what you can do with these girls if this is
            your first time looking to hire call girls in Delhi. You may do so
            much fun stuff with these females that will bring you happiness.
            These are a few activities you can engage in with our call girls.
            <p className="text-3xl font-semibold text-rose-500 mt-7 mb-3">
              {" "}
              Fulfill All of Your Secret Wishes
            </p>
            Your only thought when hiring call girls will be to spend the night
            in their bed. You want to satisfy every secret wish you have that
            you are unable to satiate with your spouse or lover. Whatever your
            obsessions or kinks are, our call girls are here for you.
            <p className="text-3xl font-semibold text-rose-500 mt-7 mb-3">
              {" "}
              Join Our Call Girls in Delhi for a Party
            </p>
            You would want to be the center of attention if you were attending a
            party. With that, our Delhi call girls can be of great assistance to
            you. You may be sure that everyone at the party will be glaring at
            you with envious eyes if you go to a party with a hot girl.
            <p className="text-3xl font-semibold text-rose-500 mt-7 mb-3">
              {" "}
              To Hire the Best Call Girls in Delhi, Get in Contact with Us
            </p>
            Thus, you must hire Delhi call girls from us if you want the
            greatest call girl service in Delhi. We will do everything within
            our power to ensure your satisfaction. No effort will be spared to
            ensure your satisfaction in bed by our call girls in Delhi.
            Therefore, if you want to enjoy the companionship of some of the
            hottest call girls in Delhi, get in contact with us right now.
            Top-Rated Delhi Escorts with Pictures Being one of the top Delhi
            escort agencies, we have access to a large selection of gorgeous and
            sophisticated call girls in Delhi. Here is a list of some of the
            most popular Independent escorts in Delhi that are known for their
            extraordinary beauty and charm. It is crucial to remember that
            supply is liable to vary. To find out whether these Delhi escorts
            are now available, you must speak with our agent. When you&#39;re
            ready to schedule something, it&#39;s an easy process that you can
            finish fast. With a focus on giving our clients the best care and
            attention possible, our company specializes in offering luxury
            companion services in Delhi.
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
