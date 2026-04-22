import './FinalShop.css'

import React from 'react'
import ShopCard from './ShopCard.jsx';
import endlogo from '../assets/endlogo.png';
import filter from '../assets/Filter.png';
import frame12 from '../assets/Frame12.png';
import frame13 from '../assets/Frame13.png';
import frame16 from '../assets/Frame16.png';
import frame36 from '../assets/Frame36.png';
import frame37 from '../assets/Frame37.png';
import item1 from '../assets/item1.jpg';
import item2 from '../assets/item2.jpg';
import item3 from '../assets/item3.jpg';
import item4 from '../assets/item4.jpg';
import item5 from '../assets/item5.jpg';
import item6 from '../assets/item6.jpg';
import search from '../assets/Search.png';

function FinalShop() {
  return (
    <div className='body'>
      <div className='fixUpper'>
        <div className='fixUpperContent'>
            <div>
                <img src={frame37} alt="" className='frm37'/>
            </div>
            <div className='fixUpperContentText'>
                <h1 className='fixUpperContentTextHeading'>The Lens Brand</h1>
                <p className='fixUpperContentTextP'>we craft lens for all your need</p>
                <button className='fixUpperContentTextButton'>thelensbrand.com ↗</button>
            </div>
        </div>
            <img src={frame12} alt=""  className='frm12'/>
      </div>
      <div className='fixlower'>
        <img src={frame13} alt=""  className='frm13'/>
        <img src={frame16} alt="" className='frm16'/>
      </div>
      <div className='shop-container'>
        <div className='searchmore'>
            <img src={search} alt=""  className='searchimg'/>
            <img src={frame36} alt=""  className='frm36'/>
            <img src={filter} alt="" className='filterimg'/>
        </div>
        <div className='shop-wrapper'>
            
        <ShopCard image={item1} name="Green Wayfarer Rimmed Eyeglasses" description="These are compatible with..."/>
        <ShopCard image={item2} name="Pink Rectangle Eyeglasses" description="Adjustable nose pads ensure..."/>
        <ShopCard image={item3} name="Green Round Rimmed Eyeglasses" description="Adjustable nose pads ensure..."/>
        <ShopCard image={item4} name="Brown Round Rimmed Eyeglasses" description="These are compatible with..."/>
        <ShopCard image={item5} name="Green Round Rimmed Eyeglasses" description="Adjustable nose pads ensure..."/>
        <ShopCard image={item6} name="Brown Round Rimmed Eyeglasses" description="These are compatible with..."/>
        <ShopCard image={item3} name="Green Round Rimmed Eyeglasses" description="Adjustable nose pads ensure..."/>
        <ShopCard image={item2} name="Pink Rectangle Eyeglasses" description="Adjustable nose pads ensure..."/>
        </div>
        
        <div className='shop-mid'>
            <div className='shop-mid-content'>
                <div className='shop-mid-content-left'><span>The Lens Brand <br />Adjustable Fit</span></div>
                <div className='shop-mid-btn'>Buy Now</div>
            </div>
        </div>
        
        <div className='shop-wrapper'>
            <ShopCard image={item1} name="Green Wayfarer Rimmed Eyeglasses" description="These are compatible with..."/>
            <ShopCard image={item3} name="Green Round Rimmed Eyeglasses" description="Adjustable nose pads ensure..."/>
            <ShopCard image={item4} name="Brown Round Rimmed Eyeglasses" description="These are compatible with..."/>
            <ShopCard image={item2} name="Pink Rectangle Eyeglasses" description="Adjustable nose pads ensure..."/>

        </div>
        
        <div className='bottompart'>
            <div className='bottom-card'>
                <img src={endlogo} alt="" className='endlogo'/>
                <span className='bottompart-text'>Create Your</span>
                <span className='sibtext'>Store in Bio</span>
            </div>
            <div className='bottom-card2'>
                <span>with</span> <span>Selectvia</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default FinalShop
