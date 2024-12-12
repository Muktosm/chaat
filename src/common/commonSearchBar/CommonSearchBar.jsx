import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const CommonSearchBar = () => {
  return (
    <>
      <div className="input flex items-center py-[8px] gap-[16px]">
        <FaMagnifyingGlass className="h-[24px] w-[24px] text-[24px] text-[#32375C] " />
        <input
          type="text"
          placeholder=" Search "
          className="placeholder:text-[#7A7A7A] placeholder:font-inter placeholder:text-[14px] w-full outline-none"
        />
      </div>
    </>
  );
};

export default CommonSearchBar;
