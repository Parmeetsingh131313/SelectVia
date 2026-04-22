import "./ShopCard.css";

import React from "react";
import af2more from '../assets/af2more.png';

function ShopCard({ image, name, description }) {
  return (
    <div className="shop-card">
      <img src={image} alt={name} className="shop-img" />
      <img src={af2more} alt="" className="af2more"/>

      <h3 className="shop-name">{name}</h3>
      <p className="product-desc">{description}</p>

      <button className="buy-btn">Buy Now</button>
    </div>
  );
}

export default ShopCard;