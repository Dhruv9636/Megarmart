import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Dropdowns from "./components/Dropdowns";
import Hero from "./components/Hero";
import Hero_2 from "./components/Hero_2";
import HeroSectionNavbar from "./components/HeroSectionNavbar";
import Aisehi from "./components/Aisehi";
import Hero_3 from "./components/Hero_3";
import Footer from "./components/footer";
import LoginPages from "./components/LoginPages";
import SeenProduct from "./components/SeenProduct";


const App = () => {

  const getDailyEssentials = async() => {
    const result = await fetch('https://dummyjson.com/products/category/groceries?limit=9')
    const data = await result.json()
    setEssentials(data.products)
  }


  const getProduct = async () => {
const response = await fetch("https://dummyjson.com/products?limit=0");
const data = await response.json();

const randomProducts = data.products
    .sort(() => Math.random() - 0.5)
    .slice(0, 10);

setProduct(randomProducts);
  };

  const getMobiles = async() => {
    const response = await fetch("https://dummyjson.com/products/category/smartphones?limit=7")
    const data = await response.json()
    setMobiles(data.products)
  }

  const [mobilesId, setMobilesId] = useState()

  useEffect(() => {
    getDailyEssentials()
    getProduct()
    getMobiles()
  }, [])




  const [showLogin, setShowLogin] = useState(false);
  const [LeftP, setLeftP] = useState('-250px');
  const [showDetails, setShowDetails] = useState(false);

  const [products, setProduct] = useState([])
  const [essentials, setEssentials] = useState([])
  const [mobiles, setMobiles] = useState([])

  const buttons = [
    "Groceries",
    "Premium Fruits",
    "Home & Kitchen",
    "Fashion",
    "Electronics",
    "Beauty",
    "Home Improvement",
    "Sports, Toys & Luggage",
  ];



  return (
    <>
      <Navbar openLogin={() => setShowLogin(true)} Left={LeftP} />
         {showLogin && <LoginPages openLogin={() => setShowLogin(false)} />}
         {showDetails && <SeenProduct SamanDetail={mobilesId} mobileId={setMobilesId} />}

      <hr />

      <div className="myBtns">
        {buttons.map((came, index) => (
          <Dropdowns key={index.id} came={came} />
        ))}
      </div>
      <hr />
      <br />

      <div className="hero">
        <div className="smartPhone">
          <HeroSectionNavbar
            text="Grab the best deal on"
            blueText="Smartphones"
          />

          <div className="AllPhones">
            {mobiles.map((mobile, ind) => (
              <Hero
                key={ind}
                phoneId={mobile.id}
                phoneName={mobile.title}
                phonePrice={Math.floor((mobile.price)*93.77)}
                phoneImage={mobile.images[2]}
                phoneSave={Math.floor((mobile.discountPercentage)*93.77)}
                phoneDiscount={(Math.floor((mobile.price)*93.77))+(Math.floor((mobile.discountPercentage)*93.77))}
                mobileId={setMobilesId}
                 openDetails={() => setShowDetails(true)}
              />
            ))}
          </div>
        </div>
      </div>

      <br />
      <br /> 

      <div className="hero">
        <div className="smartPhone">
          <HeroSectionNavbar text="Shop From" blueText="Top Categories" />
          <div className="AllProducts">
            {products.map((products, indx) => (
              <Hero_2
                key={indx}
                productId={products.id}
                productName={products.category}
                productImage={products.images[0]}
              />
            ))}
          </div>
        </div>
      </div>
      <br />
      <br />

      <div className="hero">
        <div className="smartPhone">
          <HeroSectionNavbar text="Daily" blueText="Essentials" />
          <div className="AllEssentials">
            {essentials.map((essentials, indsx) => (
              <Hero_3
                key={indsx}
                essentialId={essentials.id}
                essentialName={essentials.title}
                essentialImage={essentials.images[0]}
              />
            ))}
          </div>
        </div>
      </div>
      <br />
      <br />
      <Footer />
{/* <SeenProduct SamanDetail={mobilesId} mobileId={setMobilesId} /> */}
      
    </>
  );
};

export default App;
