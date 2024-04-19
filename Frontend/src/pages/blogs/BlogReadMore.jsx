import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import logo from "../../assets/delhimazzaLogo.png";

const BlogReadMore = () => {
  const { state: data } = useLocation();

  // usestate
  const [blogMetaDescription, setBlogMetaDescription] = useState("");

  useEffect(() => {
    setBlogMetaDescription(
      document.getElementById("blogDescription").textContent
    );
  }, []);

  return (
    <div className="space-y-2 mb-8 mx-2">
      <div className="border rounded-lg border-slate-300 p-3 mt-6 sm:mt-10 sm:mx-48 bg-gradient-to-r from-amber-50 to-cyan-50 text-gray-700 text-center">
        <div className="font-bold text-4xl text-gray-700">{data?.title}</div>
        <Helmet>
          <title>{data?.title}</title>
          <link rel="canonical" href={`${window?.location?.href}`} />
          <meta name="description" content={`${blogMetaDescription}`} />
        </Helmet>
      </div>
      <div className="border rounded-lg  border-slate-300 p-6 bg-gradient-to-r from-amber-50 to-cyan-50 text-gray-700 space-y-6 text-center flex flex-col sm:mx-48">
        <div className="relative">
          <img
            src={data?.profileImage}
            alt=""
            className="mx-auto rounded-lg sm:w-[800px] sm:h-[500px]"
          />
          <img
            src={logo}
            alt="watermark"
            className="absolute top-[50%] right-[50%]  opacity-50 w-[100px] md:w-[300px]"
            style={{ transform: "translate(50%,-50%)" }}
          />
        </div>

        <div
          id="blogDescription"
          dangerouslySetInnerHTML={{
            __html: data?.description,
          }}
        ></div>
      </div>
    </div>
  );
};

export default BlogReadMore;
