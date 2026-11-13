import React, { useState } from "react";

const Hero_2 = ({ productName, productImage, productId }) => {
  const funkcsk = (e) => {
    // console.log(productId);
  };
  return (
    <div className="ProductDetails" onClick={funkcsk}>
      <div className="productImage">
        <img src={productImage} className="productImg" />
      </div>
      <p className="productName">{productName}</p>
    </div>
  );
};

export default Hero_2;
