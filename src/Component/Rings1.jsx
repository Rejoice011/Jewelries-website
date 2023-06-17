
import "../Style/Rings1.css"
import Slider from "react-slick";
import React from 'react'

const Rings1 = () => {
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
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
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
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
     };
    return (
      <div className="container2">
        <h1> Rings</h1>
        <Slider {...settings}>
          <div>
            <img src="https://cdn.shopify.com/s/files/1/0346/0264/7684/products/02-80719-A7_213d7d1e-96e0-43eb-b722-22b2f67bc8f6_360x.jpg?v=1646775287"
             alt="" className="slider-img" />
          </div>

          <div>
           <img src="https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,c_limit,w_384,q_auto/https://static.mejuri.com/legacy-front/production/system/spree/products/19105/original/DomeSpheres_ring_v_hero.jpg?1612386009"
            alt="" className="slider-img" />
          </div>
          
          <div>
            <img src="https://cdn.shopify.com/s/files/1/0346/0264/7684/products/02-80701-D7_360x.jpg?v=1647524588"
             alt="" className="slider-img"/>
          </div>
          
          <div>
           <img src="https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,c_limit,w_384,q_auto/https://static.mejuri.com/legacy-front/production/system/spree/products/17996/original/HoneySignet_ring_v_hero.jpg?1605887112"
            alt="" className="slider-img"/>
          </div>
          
          <div>
            <img src="https://cdn.shopify.com/s/files/1/0346/0264/7684/products/03-80439-7_360x.jpg?v=1664874550"
             alt="" className="slider-img"/>
          </div>
          

          <div>
           <img src="https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,c_limit,w_384,q_auto/https://static.mejuri.com/legacy-front/production/system/spree/products/29130/original/1_DailyStackerRing_V_Hero_Front.jpg?1681938587"
            alt="" className="slider-img"/>
          </div>
          <div>
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Vrb0pIyU0cljkQqycj9wDw8_hgOPvUKJ4PKVXOUpJfIYNlZKyp_v46uSePpdxneq5Gg&usqp=CAU"
            alt="" className="slider-img" style={{width:'100%'}}/>
          </div>
          <div>
            <img src="https://cdn.shopify.com/s/files/1/0346/0264/7684/products/03-80403-7_360x.JPG?v=1630518034"
             alt="" className="slider-img"/>
          </div>
          <div>
         <img src="https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,c_limit,w_384,q_auto/https://static.mejuri.com/legacy-front/production/system/spree/products/22432/original/0_ThinCroissantDome_Ring_YG_Hero.jpg?1635200855" 
         alt="" className="slider-img"/>
          </div>
        </Slider>
      </div>
    );
  
  }



export default Rings1