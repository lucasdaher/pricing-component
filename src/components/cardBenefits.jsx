import React from "react";
import Separator from "./separator";

const CardBenefits = ({
  firstBenefit,
  secondBenefit,
  thirdBenefit,
  cardSize,
}) => {
  return (
    <>
      <ul className="flex flex-col justify-center items-center gap-3 mb-8">
        <li>
          <Separator cardSize={cardSize} />
        </li>

        <li
          className={`${
            cardSize === "large" ? "text-white" : "text-gray"
          } text-base font-bold text-center leading-7`}
        >
          {firstBenefit}
        </li>

        <li>
          <Separator cardSize={cardSize} />
        </li>

        <li
          className={`${
            cardSize === "large" ? "text-white" : "text-gray"
          } text-base font-bold text-center leading-7`}
        >
          {secondBenefit}
        </li>

        <li>
          <Separator cardSize={cardSize} />
        </li>

        <li
          className={`${
            cardSize === "large" ? "text-white" : "text-gray"
          } text-base font-bold text-center leading-7`}
        >
          {thirdBenefit}
        </li>

        <li>
          <Separator cardSize={cardSize} />
        </li>
      </ul>
    </>
  );
};

export default CardBenefits;
