import React from "react";

import bgTop from "../assets/bg-top.svg";
import bgBottom from "../assets/bg-bottom.svg";

const Background = () => {
  return (
    <div>
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
  );
};

export default Background;
