import React from "react";
import { IndianRupee, ChevronRight } from "lucide-react";

const Hero = ({phoneName, phonePrice, phoneImage, phoneSave, phoneDiscount}) => {
    // console.log(phoneName)
  return (
    
     
        <div className="phoneDetails">
          <div className="phoneImage">
            <img
              src={phoneImage}
              alt="Mobile"
              className="phoneImg"
            />
          </div>
          <div className="phonePriseSection">
            <p className="phoneName align">{phoneName}</p>
            <div className="phonePriseVala">
                <p className="phonePriseSign align">
              <IndianRupee className="rupee" />{phonePrice}
            </p>
                <p className="phonePriseSign wrong align">
              <span className="wrongRupee">₹ </span>{phoneDiscount}
            </p>
            </div>
            <p className="phonePrise phonePriseSign align">
              Save - <IndianRupee className="rupee" />
              {phoneSave}
            </p>
          </div>
        </div>
    
  );
};

export default Hero;
