import React from "react";

const CommonButton = ({ button_content }) => {
  return (
    <div>
      <button
        type="submit"
        className="bg-[#086FA4] w-full rounded-[86px] h-[68px] font-nunito font-semibold text-[22px] text-gray-300 transition-all duration-300 hover:text-[#FFFF] hover:bg-opacity-95   "
      >
        {button_content}
      </button>
    </div>
  );
};

export default CommonButton;
