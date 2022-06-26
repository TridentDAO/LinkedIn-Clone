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
          <div className="h-[52px] w-[100%] flex items-center justify-between">
            <div className="w-[40%]">
              <form>
                <div className="relative">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-4 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      data-supported-dps="16x16"
                      fill="#5F6163"
                      className="mercado-match"
                      width="16"
                      height="16"
                      focusable="false"
                    >
                      <path d="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z"></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="default-search"
                    className="placeholder:text-gray-600 block h-[35px] pl-10 w-[280px] focus:w-[380px] duration-300 text-sm  rounded bg-[#EEF3F8] "
                    placeholder="Search"
                    required
                  />
                </div>
              </form>
            </div>
            <div className="w-[68%] h-full  ml-7"></div>
          </div>
        </div>
      </div>
    </>
  );
};
