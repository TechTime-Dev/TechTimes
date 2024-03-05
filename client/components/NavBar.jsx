import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="font-semibold max-w-[1536px] py-3 bg-[#e6f2f7] flex items-center justify-between mx-auto rounded-md">
      <div className="navbar-div flex items-center justify-between w-full pr-20 pl-20">
        <div className="brand flex items-center">
          <img
            src={require("../../public/logo-removebg.png").default}
            width="150"
            height="150"
          ></img>
          <Link to="/" className="text-black text-6xl font-josefin">
            Tech Times
          </Link>
        </div>
        <div classname="nav-div flex justify-between items-center">
          <Link
            to="/"
            className="text-black text-3xl hover:text-gray-300 font-ptsans"
          >
            News Feed
          </Link>
          <Link
            to="/favorite"
            className="text-black text-3xl hover:text-gray-300 font-ptsans ml-40"
          >
            Favorites
          </Link>
        </div>
        <div>
          <button className="bg-transparent text-black  rounded-md font-ptsans text-3xl ml-6">
            Log out
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
