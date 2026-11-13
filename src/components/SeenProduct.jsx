import React, { useEffect } from "react";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import ExtraProdcts from "./ExtraProdcts";

const SeenProduct = ({SamanDetail, mobileId}) => {

    const getData = async() => {
      const Result = await fetch(`https://dummyjson.com/products/${SamanDetail}`)
      const data = await Result.json()

      const response = await fetch('https://dummyjson.com/products/category/smartphones')
      const responseData = await response.json()

      setProduct({
        firstImg: data.images[1],
    secondImg: data.images[0],
    thirdImg: data.images[2],
    price: data.price,
    discountPrice: data.discountPercentage,
    rating: data.rating.toFixed(1),
    phoneKaName: data.title,
    phoneKaBrand: data.brand,
    availabilityStatus: data.availabilityStatus,
    description: data.description,
    height: data.dimensions.height,
    width: data.dimensions.width,
    depth: data.dimensions.depth,
    weight: data.weight,
    stock: data.stock,
    warrunty: data.warrantyInformation
});
console.log(data)
setPhoneKiDetails(responseData.products)
      setImgUrl(data.images[1])

}

    
useEffect(() => {
  getData();
}, [SamanDetail]);

    


  const [Quantity, setQuantity] = useState(1)

  const [product, setProduct] = useState({});

  const [imgUrl, setImgUrl] = useState();

  const [phoneKiDetails, setPhoneKiDetails] = useState([])



  const imageHover = (e) => {
    setImgUrl(e.target.src);
  };

  return (
    <div className="seenProduct">
      <div className="SingleProductDetail">
        <div className="productImagesForView">
          <div className="productImagesForViewMobileFirst">
    <img
      src={product.firstImg}
      className="productImagesForViewMobile"
              onMouseEnter={imageHover} />
          </div>
          <div className="productImagesForViewMobileFirst">
            <img
              src={product.secondImg}
              alt=""
              className="productImagesForViewMobile"
              onMouseEnter={imageHover}
            />
          </div>
          <div className="productImagesForViewMobileFirst">
            <img
              src={product.thirdImg}
              alt=""
              className="productImagesForViewMobile"
              onMouseEnter={imageHover}
            />
          </div>
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
                <p className="mobileNameOrignal">{product.phoneKaBrand}</p>
                <p className="mobileRating">⭐{product.rating} <span className="mobileReviews">  ({Math.floor(product.price)})</span></p>
            </div>
            <p className="phoneDetailedName">{product.phoneKaName}</p>

            

            <div className="phoneExtraDetails">
                <p className="PhoneActualPrise">₹{Math.floor(product.price*93.77)}</p>
                <p className="PhoneDiscountPriseSection">₹{Math.floor((product.discountPrice+product.price)*93.77)}</p>
                <p className="PhoneWIthAllTaxes">{product.availabilityStatus}</p>
            </div>
<br />
            <p className="PhoneDiscriptionInEnglish">{product.description}</p>



            <div className="PhoneColorChoose">
                <p className="PleaseChoose">choose a color <span><ChevronRight className="ChooseIcon" /></span></p>
                <div className="ChooseButtons">
                    <button className="ChooseBtn">White</button>
                    <button className="ChooseBtn">Red</button>
                    <button className="ChooseBtn">Black</button>
                </div>
            </div>
            <p className="warranty">{product.warrunty}</p>
            <p className="phoneCondition">Height: {product.height}" Width: {product.width}"</p>
            <p className="phoneCondition">weight: {product.weight*31} Depth: {product.depth}"</p>
            <p className="phoneCondition">{product.stock} Left only</p>
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
<br />
<hr />
      <div className='AllMobiles'>
        <h3 className='ExtraHead'>Similar Products <span><ChevronRight className="ExtraChooseIcon" /></span></h3>
        <br />
        <div className="ExtraMobiles">
          {phoneKiDetails.map((phone, idx) => (
            <ExtraProdcts Phonekey={phone.id} mobileImage={phone.images[2]} mobileName={phone.title} mobilePrice={phone.price} mobileDiscount={phone.discountPercentage} mobileId={mobileId} />
          ))}
        </div>
      </div>
      

    </div>
  );
};

export default SeenProduct;
