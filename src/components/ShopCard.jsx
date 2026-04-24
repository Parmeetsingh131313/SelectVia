import "./ShopCard.css";

import { AiFillAmazonCircle } from "react-icons/ai";
import { BiLogoEtsy } from "react-icons/bi";
import React from "react";
import { SiFlipkart } from "react-icons/si";

// import af2more from '../assets/af2more.png';

function ShopCard({ image, name, description }) {
  return (
    <div className="shop-card">
  <div className="card-content">
    <img src={image} alt={name} className="shop-img" />

    <div className="af2more">
      <div className="icon-stack">
        <AiFillAmazonCircle className="icon amazon" />
        <SiFlipkart className="icon flipkart" />
        <BiLogoEtsy className="icon etsy" />
      </div>
      <span className="more-text">+ 2 more</span>
    </div>

    <h3 className="shop-name">{name}</h3>
    <p className="product-desc">{description}</p>
  </div>

  <button className="buy-btn">Buy Now</button>
</div>
  );
}

export default ShopCard;