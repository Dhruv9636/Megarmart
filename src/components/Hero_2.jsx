import React, { useState } from "react";

const Hero_2 = ({productName, productImage}) => {
  return (
      
            <div className="ProductDetails">
              <div className="productImage">
                <img src={productImage} className="productImg" />
              </div>
              <p className="productName">{productName}</p>
            </div>
         
  );
};

export default Hero_2;
