import React, { useState } from "react";

import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";

import { useNavigate } from "react-router-dom";
function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`/search/${searchQuery}`);
      setSearchQuery("");
    }
    
  };

  return (
    <div className="flex justify-between fixed top-0 w-[100%] bg-white px-6 py-2 ">
      <div className="flex items-center space-x-4  ">
        <AiOutlineMenu className="text-xl cursor-pointer" />
        <img
          src="https://i.ibb.co/StLvFtv/Logo.png"
          alt=""
          className="w-28 cursor-pointer"
        />
      </div>
      <div className="flex w-[35%] items-center ">
        <div className="w-[100%] px-4 py-2 border-[1px] border-gray-400 rounded-l-full">
          <input
            type="text"
            placeholder="Search"
            className=" outline-none"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            value={searchQuery}
          />
        </div>
        <button
          className="px-4 py-2 border-[1px] border-gray-400 bg-gray-100 rounded-r-full"
          onClick={() => searchQueryHandler("searchButton")}
        >
          <CiSearch size={"24px"} />
        </button>
        <IoMdMic
          size={"42px"}
          className="ml-3 border border-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200"
        />
      </div>
      <div className="flex  space-x-5 items-center ">
        <RiVideoAddLine className="text-2xl" />
        <AiOutlineBell className="text-2xl" />
        <img
          src="https://i.ibb.co/zZskH73/Whats-App-Image-2024-07-25-at-6-03-47-PM.jpg"
      className="w-10 h-10 rounded-full "
        ></img>
      </div>
    </div>
  );
}

export default Navbar;
