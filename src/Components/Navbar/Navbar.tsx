import React from "react";
import linkedin from "../../img/linkedin.svg";
import search from "../../img/search.svg";

export const Navbar = () => {
  return (
    <>
      <div className="h-[52px] w-[100%] grid place-items-center bg-white">
        <div className="w-[74%] h-[100%] flex items-center">
          <div className="h-[45px] aspect-square grid place-items-center">
            <img src={linkedin} className="h-[35px] aspect-square" alt="logo" />
          </div>
          <div className="">
            <form method="POST">
              <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  className="b-0 rounded bg-[#eef3f8] h-[35px] w-[280px] pl-10 placeholder-black placeholder:font-thin placeholder:text-sm"
                  type="text"
                  name=""
                  id=""
                  placeholder="Search"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
