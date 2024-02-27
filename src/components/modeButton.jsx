import React from "react";

const ModeButton = ({ mode, handleMode }) => {
  return (
    <button
      className={`bg-gradient-to-br from-blue-purple-start to-blue-purple-end w-14 h-8 rounded-full flex justify-center items-center transition-all duration-200 hover:opacity-50`}
      type="button"
      onClick={handleMode}
    >
      <div
        className={`circle w-6 h-6 bg-white rounded-full transition-all duration-200 ${
          mode === "annually" ? "-translate-x-[46%]" : "translate-x-[46%]"
        }`}
      ></div>
    </button>
  );
};

export default ModeButton;
