
import "../Style/Player.css"
  import React, { useEffect, useRef } from "react";
 import {Link} from 'react-router-dom'

export default function Player() {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (

    <section>
      <div className="shopify-section">
            <div className="hero"> 
                <img  src="https://cdn.shopify.com/s/files/1/0346/0264/7684/files/5-15_HP_Desktop_E-2.jpg?v=1683130849"
                  alt="" /> 
                </div> 
                <div className="hero-inner "> 
                 <div className="wrap-text"> 
                  <h1 className=" mega-title">
                   SMART CAVIAR 
                </h1>
              
                    <p>Discover Smart Caviar.<br></br> The fine jewelry
                        bracelet for Apple&nbsp;Watch.
                    </p>
                    <button className='btn'>SHOP SMART</button>
                
               </div>
             </div>
           </div>

               
                 <div className="custom-item-inner">
                  <div className="video-wrapper">             
        <video         
          style={{ maxWidth: "100%", width: "1000px", margin: "0 auto" }}
          playsInline
          loop
          muted
          controls
          alt="All the devices"
          src="https://cdn.shopify.com/videos/c/vp/b379c61213a04436ba51d62d4a3d1501/b379c61213a04436ba51d62d4a3d1501.SD-480p-0.9Mbps-14677282.mp4"
          ref={videoEl}
        />
      </div>
    </div>
      
    
   
           <div className="summer">
            <div className="summer-wrapper">
              <div className="summer-img">
                <img src="https://cdn.shopify.com/s/files/1/0346/0264/7684/files/5-15_HP_Desktop_F.jpg?v=1682956979" 
                alt="" />
              </div>
              <div className="summer-text">
                <div className="text-wrapper">
                  <h1>SUMMER GIFT GUIDE</h1>
                  <p>The quintessential jewelry guide  for what's bright <br/> and beautiful.</p>
                  <Link to='/bracelets'>
                  <button className="btn"> SHOP SUMMER</button>
                  </Link>
                </div>
              </div>

            </div>
      
             <div className="classic">
              <div className="classic-heading">
                <span><h1 className="headings">TREAT YOURSELF</h1>
                <p>Discover the best syle for summer.</p>
                </span>

              </div>
              <div className="classic-wrapper">
              <div className="classic-img">
              <img src="https://cdn.shopify.com/s/files/1/0346/0264/7684/files/5-15_HP_Desktop_J-1.jpg?v=1682958298"
               alt="" />
              <div className="classic-text ">
                <h1 className="classic-head">THE NEW NEUTRAL</h1>
                <p>White topaz set in sterling silver is the style you <br/> need to know</p>
                <button className="btn">SHOP GEMSTONES</button>               
              </div>
              </div>
              
              
            
              {/* <div className="classic-wrapper"> */}
            <div className="classic-img">
              <img src="https://cdn.shopify.com/s/files/1/0346/0264/7684/files/5-15_HP_Desktop_J-2.jpg?v=1682961789" alt="" />
                 <div className="classic-text ">  
                <h1 className="classic-head">LASSIC FOR A REASON</h1>
                <p>Discover the perfect pearl styles <br/> for now and forever</p>
                <Link to='/necklace'>
                <button className="btn">SHOP GEMSTONES</button>               
              </Link>
            </div>
          </div>
        </div>
               
           </div>
           </div>
           
    </section>
  );
}
  



