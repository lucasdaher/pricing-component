import React from "react";

const Separator = ({ cardSize }) => {
  return (
    <div
      className={`separator w-72 h-[0.0625rem] ${
        cardSize === "large" ? "bg-white" : "bg-gray"
      } opacity-25`}
    ></div>
  );
};

export default Separator;
