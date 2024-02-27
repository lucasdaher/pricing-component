import React, { useState } from "react";

import Card from "../components/card";
import Background from "../components/background";
import Title from "../components/title";
import ModeText from "../components/modeText";
import ModeButton from "../components/modeButton";

function App() {
  const [mode, setMode] = useState("monthly");

  const handleMode = () => {
    setMode(mode === "annually" ? "monthly" : "annually");
  };

  return (
    <div>
      <Background />

      <main>
        <div className="flex flex-col justify-center items-center gap-10 mt-16 mb-16 z-10">
          <Title />

          <div className="mode flex justify-between items-center gap-6">
            <ModeText text="Annually" />
            <ModeButton mode={mode} handleMode={handleMode} />
            <ModeText text="Monthly" />
          </div>
        </div>

        <section>
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
        </section>
      </main>
    </div>
  );
}

export default App;
