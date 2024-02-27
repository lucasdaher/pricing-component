import React from "react";

const LearnMoreButton = ({ cardSize }) => {
  return (
    <>
      {cardSize === "small" ? (
        <button
          type="button"
          className="bg-gradient-to-br from-blue-purple-start to-blue-purple-end w-72 h-11 rounded-md text-white text-center text-[0.8125rem] font-bold leading-normal tracking-[0.08706rem] transition-all hover:border-2 hover:border-blue-purple hover:text-blue-purple hover:bg-gradient-to-br hover:from-transparent hover:to-transparent"
        >
          LEARN MORE
        </button>
      ) : (
        <button
          type="button"
          className="bg-white w-72 h-11 rounded-md text-blue-purple text-center text-[0.8125rem] font-bold leading-normal tracking-[0.08706rem] transition-all hover:border-2 hover:border-white hover:bg-transparent hover:text-white"
        >
          LEARN MORE
        </button>
      )}
    </>
  );
};

export default LearnMoreButton;
