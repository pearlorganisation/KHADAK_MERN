import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import logo from "../../assets/delhimazzaLogo.png";

const Blogs = () => {
  // -----------------------------useState------------------------------------------
  const [blogData, setBlogData] = useState(null);
  const navigate = useNavigate();

  const getBlogData = async () => {
    const data = await fetch(`${import.meta.env.VITE_BASE_URL}/blog`);
    const updatedData = await data.json();
    setBlogData(updatedData?.data);
  };
  // const blogData = [
  //   {
  //     title: "Enjoy your day with delhi",
  //     description:
  //       "Enjoy your day with delhi Enjoy your day with delhi Enjoy your day with delhi Enjoy your day with delhi Enjoy your day with delhi Enjoy your day with delhi",
  //     image:
  //       "https://miro.medium.com/v2/resize:fit:495/0*xFuo_UNWchLZ8bqS.jpeg",
  //     Date: "22 march 2024",
  //   },
  //   {
  //     title: "Enjoy your day with delhi",
  //     description:
  //       "Enjoy your day with delhi Enjoy your day with delhi Enjoy your day with delhi Enjoy your day with delhi Enjoy your day with delhi Enjoy your day with delhi",
  //     image:
  //       "https://miro.medium.com/v2/resize:fit:495/0*xFuo_UNWchLZ8bqS.jpeg",
  //     Date: "22 march 2024",
  //   },
  //   {
  //     title: "Enjoy your day with delhi",
  //     description:
  //       "Enjoy your day with delhi Enjoy your day with delhi Enjoy your day with delhi Enjoy your day with delhi Enjoy your day with delhi Enjoy your day with delhi",
  //     image:
  //       "https://miro.medium.com/v2/resize:fit:495/0*xFuo_UNWchLZ8bqS.jpeg",
  //     Date: "22 march 2024",
  //   },
  // ];
  console.log(blogData);
  useEffect(() => {
    getBlogData();
  }, []);
  return (
    <>
      <Helmet>
        <title>Blog - Delhi Mazza Call Girls & Escorts Latest News</title>
        <link rel="canonical" href={`${window?.location?.href}`} />
        <meta
          name="description"
          content="Delhi Mazza Call Girls & Escorts blogs, Latest News, Article and Contact WhatsApp Number with Profile List in Indian Cities"
        />
      </Helmet>
      <h1 className="text-2xl font-bold text-center mb-4">Blog</h1>
      <div className="w-full  flex justify-center gap-10 flex-wrap">
        {Array.isArray(blogData) &&
          blogData.length > 0 &&
          blogData.map((data) => {
            return (
              <div class="relative max-w-sm bg-gradient-to-r from-amber-50 to-cyan-50 text-gray-700 border border-gray-200 rounded-lg shadow  w-[300px]">
                <div class="relative">
                  <a href="#" alt="">
                    <img
                      class="rounded-t-lg"
                      src={data?.profileImage}
                      alt=""
                      className="h-[300px] w-[300px] object-cover"
                    />
                  </a>
                  <img
                    src={logo}
                    width={100}
                    alt="watermark"
                    className="absolute top-[50%] right-[50%]  opacity-50"
                    style={{ transform: "translate(50%,-50%)" }}
                  />
                </div>
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                      {data?.title}
                    </h5>
                  </a>
                  <p
                    dangerouslySetInnerHTML={{ __html: data?.description }}
                    class="mb-3 font-normal text-gray-700 "
                  ></p>
                  <div
                    onClick={() => {
                      navigate(
                        `/blog/${data?.title
                          ?.toLowerCase()
                          .trim()
                          .replace(/ /g, "-")}`,
                        { state: data }
                      );
                    }}
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
                  >
                    Read more
                    <svg
                      class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Blogs;
