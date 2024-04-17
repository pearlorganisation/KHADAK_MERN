import { useContext, useState } from "react";
import logo from "../../../assets/delhimazzaLogo.png";
import { Link, useNavigate } from "react-router-dom";
import {
  changeCity,
  changeLocality,
} from "../../../features/slices/contactSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const [state, setState] = useState(false);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  // Replace javascript:void(0) paths with your paths
  const navigation = [
    { title: "Home", path: "/" },
    // { title: "Call Girls", path: "/call-girls/" },
    { title: "Contact Us", path: "/contact-us/" },
    { title: "Blog Us", path: "/blog/" },
  ];

  return (
    <nav className="bg-[#ED2B33FF] border-b w-full md:static md:text-sm md:border-none">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:block">
          <Link to="/">
            <img
              onClick={() => {
                dispatch(changeCity("Delhi"));
                dispatch(changeLocality(""));
              }}
              src={logo}
              height={80}
              alt="Delhimazza.jpg"
            />
          </Link>
          <div className="md:hidden">
            <button
              className="text-[#F4E0B9] hover:text-gray-800"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li
                  key={idx}
                  className="text-white text-bold md:text-lg hover:text-[#F4E0B9]"
                >
                  <div
                    className="block cursor-pointer"
                    onClick={() => {
                      if (item.path == "/") {
                        dispatch(changeCity("Delhi"));
                        dispatch(changeLocality(""));
                        navigate(`/`);
                      } else {
                        navigate(item.path);
                      }
                    }}
                  >
                    {item.title}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
