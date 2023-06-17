import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../Style/Bracelets1.css"

const Bracelets1 = () => {
    function Arrow(props) {
        const { className, style, onClick } = props;
        return (
          < div
            className={className}
            style={{ ...style, display: "block", background: "black" }}
            onClick={onClick}
          />
        );
      }
    
      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        nextArrow: <Arrow />,
      prevArrow: <Arrow />,
        responsive: [
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
         
        ]
      };



  return (
    < div className='container2'>
    <h2>Bracelets</h2>
    <Slider {...settings}>
      <  div className='card' >
        <img src="https://cdn.shopify.com/s/files/1/0346/0264/7684/products/05-81017-CL7_360x.jpg?v=1643834757"
         alt="" className='100' style={{width: '90%'}} />
       
      </ div>
      < div className='card'>
        <img src="https://cdn.shopify.com/s/files/1/0346/0264/7684/products/05-81363-7_360x.JPG?v=1630510204" 
        alt="" className='100' style={{width: '90%'}}/>
        
      </ div>
      < div className='card'>
        <img src="https://cdn.shopify.com/s/files/1/0346/0264/7684/products/05-80691-7_360x.JPG?v=1664874626"
         alt="" className='100' style={{width: '90%'}}/>
      </ div>
      < div className='card'>
        <img src="https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,c_limit,w_384,q_auto/https://static.mejuri.com/legacy-front/production/system/spree/products/20653/original/0_AnchorChain_bracelet_yg_topdown_hero.jpg?1626954936"
         alt="" className='100' style={{width: '90%'}}/>
      </ div>
      < div className='card'>
        <img src="https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,c_limit,w_384,q_auto/https://static.mejuri.com/legacy-front/production/system/spree/products/29397/original/0_Bangle_3.5mm_Vermeil_Flat.jpg?1684416501"
         alt="" className='100' style={{width: '90%'}}/>
      </ div>
      < div>
       <img src="https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,c_limit,w_384,q_auto/https://static.mejuri.com/legacy-front/production/system/spree/products/21472/original/DoubleCurbChain_Bracelet_V_Hero.jpg?1632323080"
        alt="" className='100' style={{width: '90%'}}/>
      </ div>
      < div className='card'>
       <img src="https://cdn.shopify.com/s/files/1/0346/0264/7684/products/05-81452-7_540x.JPG?v=1661246127"
        alt="" className='100' style={{width: '100%'}}/>
      </ div>
      < div>
        <img src="https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,c_limit,w_384,q_auto/https://static.mejuri.com/legacy-front/production/system/spree/products/20861/original/0_SerpentineChainBracelet_YG_Hero_Front.jpg?1628705803"
         alt="" className='100' style={{width: '100%'}}/>
      </ div>
      < div className='card'>
         <img src="https://cdn.shopify.com/s/files/1/0346/0264/7684/products/05-10370-7_360x.JPG?v=1673516783"
          alt="" className='100' style={{width: '100%'}}/>
      </ div>
    </Slider>
  </ div>

  )
}

export default Bracelets1