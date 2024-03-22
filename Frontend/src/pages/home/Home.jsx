import React from "react";
import CallGirlsList from "../../components/CallGirlslist/CallGirlsList";

const Home = () => {
  return (
    <div className="items-center px-4 max-w-screen-xl mx-auto  md:px-8">
      <section class="bg-white dark:bg-gray-900">
        <div class=" px-4 mx-auto max-w-screen-xl text-center lg:pt-8 lg:px-12">
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Real Call Girls in <span className="text-red-600">Delhi</span> Get
            Contact Number
          </h1>
          <p class="mb-8 text-lg font-normal text-black lg:text-xl sm:px-16 xl:px-28 dark:text-gray-400">
            Are you looking to find the real call girls in Delhi? Look no
            further because you have landed on the right website. We are the
            best agency that can help you find the best Delhi call girls
            seamlessly. Many people try to find call girls in Delhi. However,
            most of them don't get the kind of service they want from those
            girls. The reason for that is those girls are not real call girls.
            When you meet a real call girl in Delhi, you will know what she is
            because of her sizzling personality.
          </p>
        </div>
      </section>
      <section class=" dark:bg-gray-900">
        <div class=" px-4 mx-auto max-w-screen-xl text-center  lg:px-12">
          <CallGirlsList />
          <CallGirlsList />
          <CallGirlsList />
        </div>
      </section>
    </div>
  );
};

export default Home;
