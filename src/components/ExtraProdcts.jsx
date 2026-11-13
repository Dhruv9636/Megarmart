import React, { useEffect, useState } from "react";
import { IndianRupee } from "lucide-react";

const ExtraProdcts = ({Phonekey, mobileImage, mobileName, mobilePrice, mobileDiscount, mobileId}) => {

        const update = (e) => {
      mobileId(Phonekey)
    }

  return(
   <div className="phoneDetails" onClick={update}>
    <div className="phoneImage">
            <img
              src={mobileImage}
              alt="Mobile"
              className="phoneImg"
            />
          </div>
          <div className="phonePriseSection">
            <p className="phoneName align">{mobileName}</p>
            <div className="phonePriseVala">
                <p className="phonePriseSign align">
              <IndianRupee className="rupee" />{mobilePrice}
            </p>
                <p className="phonePriseSign wrong align">
              <span className="phonewrongRupee">₹ </span>{mobileDiscount}
            </p>
            </div>
            <p className="phonePrise phonePriseSign align">
              Save - <IndianRupee className="rupee" />
              {mobileDiscount}
            </p>
            </div>
  </div>)
};

export default ExtraProdcts;
