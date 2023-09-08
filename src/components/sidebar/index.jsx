import React from "react";
import { Link } from "react-router-dom";
import { isEnabled } from "cursor-flashlight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

export default function Sidebar({ handleDarkMode }) {
  return (
    <div
      className={`flex flex-col w-[20%] h-screen border-e-2 ${
        !isEnabled() ? "bg-orange-700 opacity-80" : "bg-gray-800"
      }`}
    >
      <div className="text-right mx-3">
        <button onClick={() => handleDarkMode(!isEnabled())}>
          {isEnabled() ? (
            <FontAwesomeIcon icon={faSun} />
          ) : (
            <FontAwesomeIcon icon={faMoon} />
          )}
        </button>
      </div>
      <div className={"flex-1 flex justify-center items-center"}>
        <div className="uppercase flex flex-col space-y-2 items-center text-gray-800">
          <div className="bg-white rounded-full w-[30%] mb-3">
            <img
              src="https://cdn2.iconfinder.com/data/icons/ios-7-tab-bar-icons/500/user-512.png"
              alt="Profile"
            />
          </div>
          <Link to={"/"} className="hover:text-white">
            About
          </Link>
          <Link to={"/experience"} className="hover:text-white">
            + Experience
          </Link>
          <Link to={"/education"} className="hover:text-white">
            Education
          </Link>
          <Link to={"/skills"} className="hover:text-white">
            Skills
          </Link>
          <Link to={"/interests"} className="hover:text-white">
            Interests
          </Link>
          <Link to={"/awards"} className="hover:text-white">
            Awards
          </Link>
        </div>
      </div>
    </div>
  );
}
