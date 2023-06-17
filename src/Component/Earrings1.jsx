
import Slider from "react-slick";
import "../Style/Earrings1.css"

import React from 'react'

const Earrings1 = () => {

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}
   
// const settings = {
//   dots: true,
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   autoplay: true,
//   speed: 2000,
//   autoplaySpeed: 2000,
//   cssEase: "linear",
// };


var settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: "linear",
  nextArrow: <Arrow />,
  prevArrow: <Arrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 996,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

    // const settings = {
    //   dots: true,
    //   infinite: true,
    //   slidesToShow: 3,
    //   slidesToScroll: 1,
    //   autoplay: true,
    //   speed: 2000,
    //   autoplaySpeed: 2000,
    //   cssEase: "linear",
    // };
    return (
      <div>

        <Slider className="slider" {...settings}>
          <div>
            <img src="https://cdn.shopify.com/s/files/1/0346/0264/7684/products/01-81547-m_7_766x766.jpg?v=1638800632"
             alt="" style={{ width: "100%" , height: "400px"}} />
          </div>
          <div>
            <img src="https://cdn.shopify.com/s/files/1/0346/0264/7684/products/01-81838-00_766x766.JPG?v=1605628526"
             alt="" style={{ width: "100%" , height: "400px"}} />
          </div>
          <div>
           <img src="https://cdn.shopify.com/s/files/1/0346/0264/7684/products/01-81885-M_766x766.JPG?v=1605628654" 
           alt="" style={{ width: "100%" , height: "400px"}} />
          </div>
          <div>
            <img src="https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/22428/original/0_DomeHoops_earring_v_hero_comp.jpg?1635200439"
             alt="" style={{ width: "100%" , height: "400px"}} />
          </div>
          <div>
            <img src="https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/23575/original/0_BlockLargeHoops_V_Hero.jpg?1645028151"
             alt="" style={{ width: "100%" , height: "400px"}} />
          </div>
          <div>
            <img src="https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/29313/original/0-BOLERO_OversizedHoops52mm_V_ANGLED_174.jpg?1683564584"
             alt="" style={{ width: "100%" , height: "400px"}} />
          </div>
        </Slider>
        
        
        <div className="images">
          <div className="hover-wrapper">
           
<div class="container">
  <img src="https://cdn.shopify.com/s/files/1/0346/0264/7684/products/01-81094-M_766x766.JPG?v=1605627546"
   alt="Avatar" className="image">
    </img>
  <div class="overlay">
    <div class="text">
      <img src="https://cdn.shopify.com/s/files/1/0346/0264/7684/products/01-81094-M_ALT4_766x766.JPG?v=1664874419"
       alt="" />
    </div>
  </div>
  <div className="caviar-text">
    <h1>Drop Earrings </h1>
    <p>$200</p>
    <button className="btn">ADD TO BAG</button>
  </div>
</div>

<div class="container">
  <img src="https://cdn.shopify.com/s/files/1/0346/0264/7684/products/01-81663-00_766x766.jpg?v=1608072580https://cdn.shopify.com/s/files/1/0346/0264/7684/products/01-81094-M_766x766.JPG?v=1605627546"
   alt="Avatar" className="image">
    </img>
  <div class="overlay">
    <div class="text">
      <img src="https://cdn.shopify.com/s/files/1/0346/0264/7684/products/01-81659-M_01-81663-00_ALT4_766x766.jpg?v=1613151623"
       alt="" />
       </div>
       </div>
       <div className="caviar-text">
    <h1>Beaded Silver Stud Earrings </h1>
    <p>$250</p>
    <button className="btn">ADD TO BAG</button>
  </div>
</div>

<div class="container">
  <img src="https://cdn.shopify.com/s/files/1/0346/0264/7684/products/01-81972-00_766x766.JPG?v=1650959427"
   alt="Avatar" className="image">
    </img>
  <div class="overlay">
    <div class="text">
      <img src="https://cdn.shopify.com/s/files/1/0346/0264/7684/products/01-81972-00_ALT4_766x766.JPG?v=1674899321"
       alt="" />
    </div>
  </div>
  <div className="caviar-text">
    <h1>Caviar Huggie Earrings </h1>
    <p>$300</p>
    <button className="btn">ADD TO BAG</button>
  </div>
</div>

<div class="container">
  <img src="https://cdn.shopify.com/s/files/1/0346/0264/7684/products/01-80718-28_766x766.JPG?v=1605627450"
   alt="Avatar" className="image">
    </img>
  <div class="overlay">
    <div class="text">
      <img src="https://cdn.shopify.com/s/files/1/0346/0264/7684/products/01-80718-28_ALT4.jpg?v=1630515785"
       alt="" />
    </div>
  </div>
  <div className="caviar-text">
    <h1>Large Caviar Hoop Earrings </h1>
    <p>$350</p>
    <button className="btn">ADD TO BAG</button>
  </div>
</div>
</div>

      <div className="hover-wrapper2">
      <div class="container">
  <img src="https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/27769/original/0-NewHoopStandard_ChubbyHoopsMedium16mm_V_ANGLED_025.jpg?1673288588"
   alt="Avatar" className="image">
    </img>
  <div class="overlay">
    <div class="text">
      <img src="https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/27771/original/2-NewHoopStandard_ChubbyHoopsMedium16mm_V_Solo_011.jpg?1673288612"
       alt="" />
    </div>
  </div>
  <div className="caviar-text">
    <h1>Chunky Medium Hoops </h1>
    <p> $350</p>
    <button className="btn">ADD TO BAG</button>
  </div>
</div>
<div class="container">
  <img src="https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/23575/original/0_BlockLargeHoops_V_Hero.jpg?1645028151"
   alt="Avatar" className="image">
    </img>
  <div class="overlay">
    <div class="text">
      <img src="https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/23577/original/2_BlockLargeHoops_V_Solo_Medium.jpg?1645028173"
       alt="" />
    </div>
  </div>
  <div className="caviar-text">
    <h1>Block Large Hoops </h1>
    <p> $150</p>
    <button className="btn">ADD TO BAG</button>
  </div>
</div>
<div class="container">
  <img src="https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/23296/original/0_BoldPearlDailyHuggies_Hero_%281%29.jpg?1641499028"
   alt="Avatar" className="image">
    </img>
  <div class="overlay">
    <div class="text">
      <img src="https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/23306/original/1_BoldPearlDailyHuggies_Solo.jpg?1641841554"
       alt="" />
    </div>
  </div>
  <div className="caviar-text">
    <h1>Bold Pearl Huggies </h1>
    <p> $130</p>
    <button className="btn">ADD TO BAG</button>
  </div>
</div>
<div class="container">
  <img src="https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/16941/original/LargeHoops_earrings_yg_hero_.jpg?1605794252"
   alt="Avatar" className="image">
    </img>
  <div class="overlay">
    <div class="text">
      <img src="https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/7066/original/Jenai_-_03.14.19_-_023.jpg?1553195434"
       alt="" />
    </div>
  </div>
  <div className="caviar-text">
    <h1>Large Hoops </h1>
    <p> $128</p>
    <button className="btn">ADD TO BAG</button>
  </div>
</div>
</div>

    
<div className="hover-wrapper3">
      <div class="container">
  <img src="https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/19776/original/Wedding_whitetopaz_earrings_v_hero.jpg?1618643400"
   alt="Avatar" className="image">
    </img>
  <div class="overlay">
    <div class="text">
      <img src="https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/19777/original/Wedding_earrings_white_v_medium_hero_0560_01.jpg?1618643414"
       alt="" />
    </div>
  </div>
  <div className="caviar-text">
    <h1>Marquise Topenz Earrings </h1>
    <p> $150</p>
    <button className="btn">ADD TO BAG</button>
  </div>
</div>
<div class="container">
  <img src="https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/18372/original/0_LargeCroissantDomeHoops_earring_yg_hero_comp00.jpg?1635171580"
   alt="Avatar" className="image">
    </img>
  <div class="overlay">
    <div class="text">
      <img src="https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/20155/original/1_RopeChain_Necklace_V_Rich_STYLE_2643.jpg?1621439747"
       alt="" />
    </div>
  </div>
  <div className="caviar-text">
    <h1>Block Large Hoops </h1>
    <p> $150</p>
    <button className="btn">ADD TO BAG</button>
  </div>
</div>
<div class="container">
  <img src="https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/19414/original/ClusterSphere_earrings_yg_hero.jpg?1615190920"
   alt="Avatar" className="image">
    </img>
  <div class="overlay">
    <div class="text">
      <img src="https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/19413/original/2_StudCartilage_Earring_YG_Rich_STACK3_3373.jpg?1615190862"
       alt="" />
    </div>
  </div>
  <div className="caviar-text">
    <h1>Threeple Dought Hoops </h1>
    <p> $130</p>
    <button className="btn">ADD TO BAG</button>
  </div>
</div>
<div class="container">
  <img src="https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/23692/original/0_Bold_Hoops_15mm_FrontAngled.jpg?1645652697"
   alt="Avatar" className="image">
    </img>
  <div class="overlay">
    <div class="text">
      <img src="https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/23693/original/1_Mejuri_MarchDropsv_Bold_Hoops_15mm_Solo_4067.jpg?1645652717"
       alt="" />
    </div>
  </div>
  <div className="caviar-text">
    <h1>Large Croissant Hoops </h1>
    <p> $128</p>
    <button className="btn">ADD TO BAG</button>
  </div>
</div>
</div>

<div className="hover-wrapper4">
      <div class="container">
  <img src="https://cdn.shopify.com/s/files/1/0346/0264/7684/products/01-80717-m_9_766x766.jpg?v=1599216746"
   alt="Avatar" className="image">
    </img>
  <div class="overlay">
    <div class="text">
      <img src="https://cdn.shopify.com/s/files/1/0346/0264/7684/products/01-80717-M_ALT4_766x766.JPG?v=1630483683"
       alt="" />
    </div>
  </div>
  <div className="caviar-text">
    <h1>Marquise Topenz Earrings </h1>
    <p> $150</p>
    <button className="btn">ADD TO BAG</button>
  </div>
</div>
<div class="container">
  <img src="https://cdn.shopify.com/s/files/1/0346/0264/7684/products/01-81112-S_766x766.JPG?v=1605627552"
   alt="Avatar" className="image">
    </img>
  <div class="overlay">
    <div class="text">
      <img src="https://cdn.shopify.com/s/files/1/0346/0264/7684/products/01-81112-S_ALT4_766x766.JPG?v=1605627555"
       alt="" />
    </div>
  </div>
  <div className="caviar-text">
    <h1>Block Large Hoops </h1>
    <p> $150</p>
    <button className="btn">ADD TO BAG</button>
  </div>
</div>
<div class="container">
  <img src="https://cdn.shopify.com/s/files/1/0346/0264/7684/products/01-82028-M_766x766.JPG?v=1675504830"
   alt="Avatar" className="image">
    </img>
  <div class="overlay">
    <div class="text">
      <img src="https://cdn.shopify.com/s/files/1/0346/0264/7684/products/01-82028-M_ALT4_766x766.JPG?v=1675504836"
       alt="" />
    </div>
  </div>
  <div className="caviar-text">
    <h1> </h1>
    <p> $130</p>
    <button className="btn">ADD TO BAG</button>
  </div>
</div>
<div class="container">
  <img src="https://cdn.shopify.com/s/files/1/0346/0264/7684/products/01-81170-M8_766x766.JPG?v=1605627591"
   alt="Avatar" className="image">
    </img>
  <div class="overlay">
    <div class="text">
      <img src="https://cdn.shopify.com/s/files/1/0346/0264/7684/products/01-81170-M8_ALT4.jpg?v=1630517302"
       alt="" />
    </div>
  </div>
  <div className="caviar-text">
    <h1>Large Croissant Hoops </h1>
    <p> $128</p>
    <button className="btn">ADD TO BAG</button>
  </div>
</div>
</div>
      
      </div>  
      </div>
    );
    }
  export default Earrings1