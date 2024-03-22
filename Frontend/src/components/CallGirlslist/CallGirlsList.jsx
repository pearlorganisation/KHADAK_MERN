import React from "react";

const CallGirlsList = () => {
  return (
    <div>
      <div class=" bg-[#c12261] w-full my-10 grid grid-cols-[40%_auto] md:grid-cols-[30%_auto]  rounded-xl border border-spacing-2 border-red-600 px-4 py-4 text-left   md:text-left">
        <div class="mb-4 md:mr-6 md:mb-0 h-[300px]  overflow-hidden">
          <img
            class=" rounded-lg h-full object-cover "
            src="https://uniquegirls99.com/images/169/17089176680.jpg"
            alt=""
          />
        </div>
        <div class="flex flex-col justify-between h-[300px] p-3">
          <div>
            <p class="text-xl md:text-2xl font-medium text-white">
              Aadhya Sharma 24 year old Independant Delhi Call Girl
            </p>
            <p class="mb-4 text-xs md:text-sm font-medium text-white">
              Hello Friends! Myself Aadhya Sharma and I am an Independent Call
              Girl. I am young and sexy 24 year old with an amazing slim figure
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
    </div>
  );
};

export default CallGirlsList;
