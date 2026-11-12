import React from "react";

const Hero_3 = ({essentialImage, essentialName}) => {
  return (
    <div className="essentialDetails">
      <div className="essentialImage">
        <img src={essentialImage} className="essentialImg" />
      </div>
      <div className="info">
        <p className="essentialName">{essentialName}</p>
        <p className="essentialDiscount">UP to 50% OFF</p>
      </div>
    </div>
  );
};

export default Hero_3;
