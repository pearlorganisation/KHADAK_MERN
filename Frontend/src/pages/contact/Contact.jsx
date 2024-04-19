import React, { useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      fullName: fullName,
      email: email,
      phoneNumber: mobileNumber,
      message: message,
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/mail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form submitted successfully");
        // Do something after successful form submission
      } else {
        console.error("Form submission failed");
        // Handle error
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle network error
    }
  };

  return (
    <div>
      <Helmet>
        <title>Contact Us - Delhi Mazza Call Girls and Escort Profiles</title>
        <link rel="canonical" href={`${window?.location?.href}`} />
        <meta
          name="description"
          content="Contact Us at Delhi Mazza For Advertising, Booking and Reports Profile Listing"
        />
      </Helmet>
      <div class="max-w-screen-md mx-auto p-5">
        <div class="text-center mb-16">
          <p class="mt-4 text-sm leading-7 text-gray-500 font-regular uppercase">
            Contact
          </p>
          <h3 class="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
            Get In <span class="text-indigo-600">Touch</span>
          </h3>
        </div>

        <form class="w-full" onSubmit={(e) => handleSubmit(e)}>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Full Name
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane Doe"
                onChange={(e) => setFullName(e.target.value)}
              />
              {/* <p class="text-red-500 text-xs italic">
                Please fill out this field.
              </p> */}
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Mobile Number
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="number"
                placeholder="9987*******"
                onChange={(e) => setMobileNumber(e.target.value)}
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Email Address
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-email"
                type="email"
                placeholder="********@*****.**"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Your Message
              </label>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                rows="10"
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              ></textarea>
            </div>
            <div class="flex justify-between w-full px-3">
              <div class="md:flex md:items-center">
                {/* <label class="block text-gray-500 font-bold">
                  <input class="mr-2 leading-tight" type="checkbox" />
                  <span class="text-sm">Send me your newsletter!</span>
                </label> */}
              </div>
              <button
                class="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* <!-- Credit: Componentity.com --> */}
      {/* <a href="https://componentity.com" target="_blank" class="block">
        <img
          src="http://codenawis.com/componentity/wp-content/uploads/2020/08/logo-componentity-%E2%80%93-9.png"
          class="w-48 mx-auto my-5"
        />
      </a> */}
    </div>
  );
};

export default Contact;
