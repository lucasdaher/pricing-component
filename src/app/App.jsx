import React, { useState } from "react";

import bgTop from "../assets/bg-top.svg";
import bgBottom from "../assets/bg-bottom.svg";
import Card from "../components/card";

function App() {
  const [mode, setMode] = useState("monthly");

  const handleMode = () => {
    setMode(mode === "annually" ? "monthly" : "annually");
  };

  return (
    <div className="app">
      <div className="background">
        <img
          src={bgTop}
          alt="Background Top"
          className="fixed top-0 right-[-200px] lg:right-0 z-0"
        />
        <img
          src={bgBottom}
          alt="Background Bottom"
          className="fixed bottom-0 left-0 z-0"
        />
      </div>

      <div className="flex flex-col justify-center items-center gap-10 mt-16 mb-16 z-10">
        <div className="title">
          <h1 className="text-gray font-bold text-[2rem] leading-normal text-center">
            Our Pricing
          </h1>
        </div>

        <div className="mode flex justify-between items-center gap-6">
          <h2 className="text-gray opacity-50 font-bold text-base">Annually</h2>
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
          <h2 className="text-gray opacity-50 font-bold text-base">Monthly</h2>
        </div>
      </div>

      <div className="flex flex-col gap-8 lg:gap-0 lg:flex-row justify-center items-center transition-all duration-200">
        <Card
          cardSize={"small"}
          cardTitle={"Basic"}
          cardPrice={mode === "monthly" ? "19.99" : "199.99"}
          firstBenefit={"500 GB Storage"}
          secondBenefit={"2 Users Allowed"}
          thirdBenefit={"Send up to 3 GB"}
        />
        <Card
          cardSize={"large"}
          cardTitle={"Professional"}
          cardPrice={mode === "monthly" ? "24.99" : "249.99"}
          firstBenefit={"500 GB Storage"}
          secondBenefit={"2 Users Allowed"}
          thirdBenefit={"Send up to 3 GB"}
        />
        <Card
          cardSize={"small"}
          cardTitle={"Master"}
          cardPrice={mode === "monthly" ? "39.99" : "399.99"}
          firstBenefit={"500 GB Storage"}
          secondBenefit={"2 Users Allowed"}
          thirdBenefit={"Send up to 3 GB"}
        />
      </div>
    </div>
  );
}

export default App;
