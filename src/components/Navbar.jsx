import React, { useState } from "react";
import {
  ListSortDescending,
  Search,
  List,
  ShoppingCart,
  User,
} from "lucide-react";

const Navbar = ({ openLogin, Left, setleft }) => {
  const [left, setLeft] = useState("-250px");
  return (
    <nav className="nav">
      <div className="juNav">
        <button onClick={() => {
          setLeft("0px")
          }}>
          <ListSortDescending className="listIcon" />
        </button>

        <div name="" id="gogo" style={{ left: left }}>
          <div className="sure">
            <p>catagories</p>
            <button
              className="cancleBtn"
              onClick={() => {
                setLeft(Left);
              }}
            >
              X
            </button>
          </div>
          <p className="popo">All Categories</p>
          <p className="popo">Alexa Skills</p>
          <p className="popo">
            Amazon Devices
          </p>
          <p className="popo">
            Amazon Fashion
          </p>
          <p className="popo">
            Amazon Pharmacy
          </p>
          <p className="popo">
            Appliances
          </p>
          <p className="popo">
            Apps &amp; Games
          </p>
          <p className="popo">
            Audible Audiobooks
          </p>
          <p className="popo">
            Baby
          </p>
          <p className="popo">
            Beauty
          </p>
          <p className="popo">
            Books
          </p>
          <p className="popo">
            Car &amp; Motorbike
          </p>
          <p className="popo">
            Clothing &amp; Accessories
          </p>
          <p className="popo">
            Collectibles
          </p>
          <p className="popo">
            Computers &amp; Accessories
          </p>
          <p className="popo">
            Deals
          </p>
          <p className="popo">
            Electronics
          </p>
          <p className="popo">
            Furniture
          </p>
          <p className="popo">
            Garden &amp; Outdoors
          </p>
          <p className="popo">
            Gift Cards
          </p>
          <p className="popo">
            Grocery &amp; Gourmet Foods
          </p>
          <p className="popo">
            Health &amp; Personal Care
          </p>
          <p className="popo">
            Home &amp; Kitchen
          </p>
          <p className="popo">
            Industrial &amp; Scientific
          </p>
          <p className="popo">
            Jewellery
          </p>
          <p className="popo">
            Kindle Store
          </p>
          <p className="popo">
            Luggage &amp; Bags
          </p>
          <p className="popo">
            Luxury Beauty
          </p>
          <p className="popo">
            Movies &amp; TV Shows
          </p>
          <p className="popo">
            MP3 Music
          </p>
          <p className="popo">
            Music
          </p>
          <p className="popo">
            Musical Instruments
          </p>
          <p className="popo">
            Office Products
          </p>
          <p className="popo">
            Pet Supplies
          </p>
          <p className="popo">
            Prime Video
          </p>
          <p className="popo">
            Shoes &amp; Handbags
          </p>
          <p className="popo">
            Software
          </p>
          <p className="popo">
            Sports, Fitness &amp; Outdoors
          </p>
          <p className="popo">
            Subscribe &amp; Save
          </p>
          <p className="popo">
            Tools &amp; Home Improvement
          </p>
          <p className="popo">
            Toys &amp; Games
          </p>
          <p className="popo">
            Under ₹500
          </p>
          <p className="popo">
            Video Games
          </p>
          <p className="popo">
            Watches
          </p>
        </div>

        <h2
          className="head"
          onClick={() => {
            window.location.reload();
          }}
        >
          MegaMart
        </h2>
      </div>

      <div className="part-2">
        <div className="search">
          <Search className="icons" />
          <input
            className="inp"
            type="text"
            placeholder="type here something..."
          />
          <List className="icons" />
        </div>

        <div className="shop-related">
          <button className="account same" onClick={openLogin}>
            <User className="icons" />
            <p className="sign">Sign Up/Sign In</p>
          </button>

          <p className="devider">|</p>

          <button className="shop same">
            <ShoppingCart className="icons" />
            <p className="cart">Cart</p>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
