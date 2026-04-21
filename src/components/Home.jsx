import './Home.css'

import React from 'react'
import frame12 from "../assets/Frame12.png";
import frame43 from "../assets/Frame43.png";
import frame52 from "../assets/Frame52.png";
import group49 from "../assets/Group49.png";
import group50 from "../assets/Group50.png";
import group51 from "../assets/Group51.png";
import myImage from "../assets/selectvia.png";

function Home() {
  return (
    <div className='body'>
      <div className='container-one'>
        <div className='one-link'>
            <div className='one-link-content1'>
                <p className='one-link-content1-p1'>One link for all <br />your products</p>
            </div>
            <div className='one-link-content2'>
                <a href="" className='one-link-content2-a'>Create your catalog →</a>
            </div>
        </div>
        <div className='sign-in'>
            <div className='sign-in-logo'>
                <img src={myImage} alt="" className='logoimage' />
            </div>
            <div className='sign-in-box'>
                <div className='signin'>
                    <a href="" className='signin-a'>Sign in</a>
                </div>
                <div className='three-'>
                    <img src={frame43} alt="" className='three-img' />
                </div>
            </div>
        </div>
        <div className='heading'>
            <h1 className='heading-h'>
                Grow Your <br />eCommerce Brand <br />Effectively.
            </h1>
            <p className='heading-p'>Join 1000+ brands using Selectvia to create a <br />unified catalog that sells across all eCommerce <br />platforms and helps give your customers a smooth <br />shopping experience.</p>
        </div>
        <div className='vid-link'>
            <a href="" className='vid-link-a'></a>
        </div>
      </div>
      <div className='z-container'>
        <div className='z-container-h'>
            <div className='z-container-h-span'><span>Your <br />Brand</span></div>
            <div>
                <img src={frame12} alt="" />
            </div>
        </div>
        <img src={group51} alt=""  className='z-container-img'/>
        <h1 className='z-container-heading'>Sell Everything
<br />Everywhere</h1>
        <div>
            <div className='z-container-com'>
                <span className='z-container-com-span-s1'>selectvia.com/</span><span className='z-container-com-span-s'>your-store-name</span>
            </div>
            <a href="" className='z-container-com-a'>Claim your Store</a>
        </div>
      </div>
      <div className='container-two'>
        <div className='container-two-content'>
          <h1 className='container-two-content-h1'>Bring All Your <br />Marketplace listings <br />at One Place</h1>
          <p className='container-two-content-p'>Selectvia catalog helps you unify all your listing in <br />one unified catalog</p>
        </div>
        <div className='container-two-content-img'>
            <img src={group50} alt="" className='container-two-img'/>
        </div>
        <div>
            <a href="" className='z-container-com-a'>Claim your Store</a>
        </div>
      </div>
      <div className='container-three'>
        <div className='container-three-content'>
            <h1 className='container-three-content-h1'>List Unlimited <br />Products</h1>
            <p className='container-three-content-p'>List unlimited products clutter-free, and allow <br />shoppers to choose their go to shopping app.</p>
        </div>
        <div className='container-three-p1'>Branding & Sales Balanced</div>
        <div className='container-three-p1'>List Unlimited SKUs</div>
        <div className='container-three-p1'>Smooth & Seamless Experience</div>
        <img src={group49} alt=""  className='container-three-img'/>
        <div>
            <button href="#" className='container-three-claim'>Claim your Store</button>
        </div>
      </div>
      <div className='container-four'>
        <div className='container-four-content'>
            <h1 className='container-four-content-h1'>Immersive Buyer <br />Experience</h1>
            <p className='container-four-content-p'>Sleek, seller-first catalogs that showcase your <br />products and drive clicks that convert.</p>
        </div>
        <img src={frame52} alt=""  className='container-four-img'/>
        <div>
            <button href="#" className='container-four-claim'>Claim your Store</button>
        </div>
      </div>
    </div>
  )
}

export default Home
