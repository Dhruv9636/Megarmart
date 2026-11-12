import React, { useEffect } from "react";
import { useState } from "react";
import { ChevronRight } from "lucide-react";

const SeenProduct = () => {

    const getData = async() => {
      const Result = await fetch('https://dummyjson.com/products/category/smartphones?utm_source=chatgpt.com')
      const data = await Result.json()
      const number = Math.floor(Math.random() * 16)
      setImgUrl(data.products[number].images[1])
      setSecondImg(data.products[number].images[0])
      setFirstImg(data.products[number].images[1])
      setThirdImg(data.products[number].images[2])
      setPrice(data.products[number].price)
      setDiscountPrice(data.products[number].discountPercentage)
      setRating(data.products[number].rating.toFixed(1))
      setPhoneKaBrand(data.products[number].brand)
      setPhoneKaName(data.products[number].title)
      setAvailabilityStatus(data.products[number].availabilityStatus)
      console.log(data.products[number])
    }
    
useEffect(() => {
  getData();
}, []);
    
    
  const [imgUrl, setImgUrl] = useState(
    
  );

  const [firstImg, setFirstImg] = useState()
  const [secondImg, setSecondImg] = useState()
  const [thirdImg, setThirdImg] = useState()
  const [price, setPrice] = useState()
  const [discountPrice, setDiscountPrice] = useState()
  const [rating, setRating] = useState()
  const [phoneKaName, setPhoneKaName] = useState()
  const [phoneKaBrand, setPhoneKaBrand] = useState()
  const [availabilityStatus, setAvailabilityStatus] = useState()
  const [Quantity, setQuantity] = useState(1)

  const imageHover = (e) => {
    setImgUrl(e.target.src);
  };

  return (
    <div className="seenProduct">
      <div className="SingleProductDetail">
        <div className="productImagesForView">
          <div className="productImagesForViewMobileFirst">
    <img
      src={firstImg}
      className="productImagesForViewMobile"
              onMouseEnter={imageHover} />
          </div>
          <div className="productImagesForViewMobileFirst">
            <img
              src={secondImg}
              alt=""
              className="productImagesForViewMobile"
              onMouseEnter={imageHover}
            />
          </div>
          <div className="productImagesForViewMobileFirst">
            <img
              src={thirdImg}
              alt=""
              className="productImagesForViewMobile"
              onMouseEnter={imageHover}
            />
          </div>
          {/* <div className="productImagesForViewMobileFirst">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD6odhq-uW30SMij9NfW459m2WeU8g0cgcHTeWxuL2vA&s=10"
              alt=""
              className="productImagesForViewMobile"
              onMouseEnter={imageHover}
            />
          </div> */}
        </div>

        <div className="singleImageView">
          {imgUrl ? (
    <img
      key={imgUrl}
      src={imgUrl}
      className="singleImageViewImage"
    />
  ) : (
    <div className="loader"></div>
  )}
        </div>
        <div className="ProductDetailSideBySide">
            <div className="MobileInfoShort">
                <p className="mobileNameOrignal">{phoneKaBrand}</p>
                <p className="mobileRating">⭐{rating} <span className="mobileReviews">  ({Math.floor(price)})</span></p>
            </div>
            <p className="phoneDetailedName">{phoneKaName}</p>

            

            <div className="phoneExtraDetails">
                <p className="PhoneActualPrise">₹{Math.floor(price*93.77)}</p>
                <p className="PhoneDiscountPriseSection">₹{Math.floor((discountPrice+price)*93.77)}</p>
                <p className="PhoneWIthAllTaxes">{availabilityStatus}</p>
            </div>
<br />
            <p className="PhoneDiscriptionInEnglish">The iPhone 5s is a classic smartphone known for its compact design and advanced features during its release. While it's an older model, it still provides a reliable user experience.</p>



            <div className="PhoneColorChoose">
                <p className="PleaseChoose">choose a color <span><ChevronRight className="ChooseIcon" /></span></p>
                <div className="ChooseButtons">
                    <button className="ChooseBtn">White</button>
                    <button className="ChooseBtn">Red</button>
                    <button className="ChooseBtn">Black</button>
                </div>
            </div>
            <p className="warranty">Lifetime warranty</p>
            <p className="phoneCondition">Height: 9.1" Width: 11"</p>
            <p className="phoneCondition">weight: 157g Depth: 9.67"</p>
            <p className="phoneCondition">50 Left only</p>
            <div className="buyButton">
                <div className="QuantityRelated">
                    <button className="QuantityDown" onClick={() => {
                        if (Quantity > 1) {
    setQuantity(Quantity - 1)
}
                    }}>-</button>
                    <p className="ActuallQuantity">{Quantity}</p>
                    <button className="QuantityDown" onClick={() => {
                        setQuantity(Quantity+1)
                    }}>+</button>
                </div>
                <button className="AddBtn sameBtnvala">Add To Card</button>
                <button className="buyBtn sameBtnvala">Buy Now</button>
            </div>
        </div>
      </div>

    </div>
  );
};

export default SeenProduct;
