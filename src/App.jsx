import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Dropdowns from "./components/Dropdowns";
import Hero from "./components/Hero";
import Hero_2 from "./components/Hero_2";
import HeroSectionNavbar from "./components/HeroSectionNavbar";
import Aisehi from "./components/Aisehi";
import Hero_3 from "./components/Hero_3";
import Footer from "./components/footer";
import LoginPages from "./components/LoginPages";
const DailyEssentialsImages = import.meta.glob(
  "./assets/DailyEssentials/*",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);
const GrabSmartPhonesImages = import.meta.glob(
  "./assets/GrabSmartPhones/*",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);
const TopCategoriesImages = import.meta.glob(
  "./assets/TopCategories/*",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [LeftP, setLeftP] = useState('-250px');

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

  const smartphones = [
    {
      name: "Samsung Galaxy S25 Ultra",
      price: "91,899",
      image: GrabSmartPhonesImages["./assets/GrabSmartPhones/SamsungS25.jpg"],
      save: "5,999",
      discount: "97,898",
    },
    {
      name: "iQOO Neo 10",
      price: "43,999",
      image: GrabSmartPhonesImages["./assets/GrabSmartPhones/IqooNeo.jpg"],
      save: "10,459",
      discount: "54,458",
    },
    {
      name: "OnePlus Nord CE6 5G",
      price: "34,999",
      image: GrabSmartPhonesImages["./assets/GrabSmartPhones/OnePlusNord.jpg"],
      save: "11,499",
      discount: "46,498",
    },
    {
      name: "Oppo Reno16 5G",
      price: "72,999",
      image: GrabSmartPhonesImages["./assets/GrabSmartPhones/OppoReno.jpg"],
      save: "10,999",
      discount: "83,998",
    },
    {
      name: "Samsung Galaxy M47 5G",
      price: "26,999",
      image: GrabSmartPhonesImages["./assets/GrabSmartPhones/SamsungM47.jpg"],
      save: "31,949",
      discount: "58,948",
    },
    {
      name: "Apple iPhone 15",
      price: "59,900",
      image: GrabSmartPhonesImages["./assets/GrabSmartPhones/Iphone15.jpg"],
      save: "18,919",
      discount: "78,819",
    },
    {
      name: "Itel Zeno 100 Lite",
      price: "7,999",
      image: GrabSmartPhonesImages["./assets/GrabSmartPhones/ItelZeno.jpg"],
      save: "25,109",
      discount: "33,108",
    },
  ];

  const products = [
    {
      name: "Smart Phone",
      image: TopCategoriesImages["./assets/TopCategories/Smartphones.jpg"],
    },
    {
      name: "LED TV",
      image: TopCategoriesImages["./assets/TopCategories/LedTv.jpg"],
    },
    {
      name: "Refrigerator",
      image: TopCategoriesImages["./assets/TopCategories/Frige.jpg"],
    },
    {
      name: "CPU",
      image: TopCategoriesImages["./assets/TopCategories/CPU.jpg"],
    },
    {
      name: "Washing Machine",
      image: TopCategoriesImages["./assets/TopCategories/Washing.jpg"],
    },
    {
      name: "Inverter AC",
      image: TopCategoriesImages["./assets/TopCategories/InverterAc.jpg"],
    },
    {
      name: "Laptop",
      image: TopCategoriesImages["./assets/TopCategories/Laptop.jpg"],
    },
    {
      name: "Home Theater",
      image: TopCategoriesImages["./assets/TopCategories/HomeTheater.jpg"],
    },
    {
      name: "Oven",
      image: TopCategoriesImages["./assets/TopCategories/Oven.jpg"],
    },
    {
      name: "Headphones",
      image: TopCategoriesImages["./assets/TopCategories/HeadPhone.jpg"],
    },
  ];

  const dailyEssentials = [
    {
      name: "Mango",
      image:  DailyEssentialsImages["./assets/DailyEssentials/Mango.jpg"],
    },
    {
      name: "Fruits",
      image: DailyEssentialsImages["./assets/DailyEssentials/Fruits.jpg"],
    },
    {
      name: "Vegitables",
      image: DailyEssentialsImages["./assets/DailyEssentials/Vegetables.jpg"],
    },
    {
      name: "Strowberry",
      image: DailyEssentialsImages["./assets/DailyEssentials/Straberry.jpg"],
    },
    {
      name: "Green Vegitables",
      image: DailyEssentialsImages["./assets/DailyEssentials/GreenVegetables.jpg"],
    },
    {
      name: "Juise",
      image: DailyEssentialsImages["./assets/DailyEssentials/Juise.jpg"],
    },
    {
      name: "Snacks",
      image: DailyEssentialsImages["./assets/DailyEssentials/Snacks.jpg"],
    },
    {
      name: "Milk",
      image: DailyEssentialsImages["./assets/DailyEssentials/Milk.jpg"],
    },
    {
      name: "Spices",
      image: DailyEssentialsImages["./assets/DailyEssentials/Spices.jpg"],
    },
  ];

  return (
    <>
      <Navbar openLogin={() => setShowLogin(true)} Left={LeftP} />
      {showLogin && <LoginPages openLogin={() => setShowLogin(false)} />}
      <hr />

      <div className="myBtns">
        {buttons.map((came, index) => (
          <Dropdowns key={index} came={came} />
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
            {smartphones.map((phone, ind) => (
              <Hero
                key={ind}
                phoneName={phone.name}
                phonePrice={phone.price}
                phoneImage={phone.image}
                phoneSave={phone.save}
                phoneDiscount={phone.discount}
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
            {products.map((product, ind) => (
              <Hero_2
                key={ind}
                productName={product.name}
                productImage={product.image}
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
            {dailyEssentials.map((essentials, ind) => (
              <Hero_3
                key={ind}
                essentialName={essentials.name}
                essentialImage={essentials.image}
              />
            ))}
          </div>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </>
  );
};

export default App;
