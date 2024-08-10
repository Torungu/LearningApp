import React from "react";

const CustomButton = ({ handleOnClick }) => {
  return (
    <button
      className={`px-5 py-2 rounded-md bg-blue-400 w-1/5 text-white`}
      onClick={handleOnClick}
    >
      Run
    </button>
  );
};

export default CustomButton;
