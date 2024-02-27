import React from "react";
import LearnMoreButton from "./learnMoreButton";
import CardBenefits from "./cardBenefits";

const Card = ({
  cardSize,
  cardTitle,
  cardPrice,
  firstBenefit,
  secondBenefit,
  thirdBenefit,
}) => {
  return (
    <>
      {cardSize === "large" ? (
        <div
          className="flex flex-col justify-start items-center p-card-small lg:p-card-large w-card h-card-small lg:h-card-large bg-gradient-to-br from-blue-purple-start to-blue-purple-end
       rounded-card-large z-20 shadow-[0px 20px 40px 0px rgba(212, 210, 244, 0.50)] transition-all duration-200 lg:last:mb-0 last:mb-14"
        >
          <div className="title text-white text-lg font-bold">{cardTitle}</div>

          <div className="price-container flex justify-center items-center gap-2 mb-8 mt-6">
            <span className="text-4xl font-bold text-white leading-none">
              $
            </span>
            <div className="price text-7xl font-bold text-white leading-none tracking-[-0.135rem]">
              {cardPrice}
            </div>
          </div>

          <CardBenefits
            firstBenefit={firstBenefit}
            secondBenefit={secondBenefit}
            thirdBenefit={thirdBenefit}
            cardSize={"large"}
          />

          <LearnMoreButton cardSize={"large"} />
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center p-card-small w-card h-card-small bg-white shadow-[0px 20px 40px 0px rgba(212, 210, 244, 0.50)] rounded-card-small z-0 transition-all duration-200 lg:last:mb-0 last:mb-24">
          <div className="title text-gray text-lg font-bold">{cardTitle}</div>

          <div className="price-container flex justify-center items-center gap-2 mb-8 mt-6">
            <span className="text-4xl font-bold text-dark-gray leading-none">
              $
            </span>
            <div className="price text-7xl font-bold text-dark-gray leading-none tracking-[-0.135rem]">
              {cardPrice}
            </div>
          </div>

          <CardBenefits
            firstBenefit={firstBenefit}
            secondBenefit={secondBenefit}
            thirdBenefit={thirdBenefit}
            cardSize={"small"}
          />

          <LearnMoreButton cardSize={"small"} />
        </div>
      )}
    </>
  );
};

export default Card;
