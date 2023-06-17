import React from 'react'
import Slider from "react-slick";

const Gift1 = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 996,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 550,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
     
  return (
    
    <div className='container3'>
    <h2>GIFT</h2>
    <Slider {...settings}>
      <div className='gift-card'>
        <div className="gift-card-wrapper">
       <img src="https://cdn.shopify.com/s/files/1/0346/0264/7684/files/Gifts_GiftCard_3bfbe965-a78f-4a1b-9fcc-1ed4d4995cdb.jpg?v=1680793253" alt="" />
      </div>
       <div className="gift-card-text">
        <h2>GIFT CARDS</h2>
       </div>
      </div>

      <div className='anniversary'>
        <div className="anniversary-wrapper">
        <img src="https://cdn.shopify.com/s/files/1/0346/0264/7684/files/Gifts_Anniversary.png?v=1658930087" alt="" />
      </div>
       <div className="anniversary-text">
         <h2>ANNIVERSARY</h2>
       </div>     
      </div>

      <div className='birthday'>
        <div className="birthday-wrapper">
            <img src="https://cdn.shopify.com/s/files/1/0346/0264/7684/files/Gifts_Birthday.png?v=1658930101" alt="" />
        </div>
         <div className="birthday-text">
            <h2>BIRTHDAY</h2>
         </div>
      </div>

      <div className='bridal'>
        <div className="bridal-wrapper">
            <img src="https://cdn.shopify.com/s/files/1/0346/0264/7684/files/Gifts_Bridal.png?v=1658930111" alt="" />
        </div>
         <div className="bridal-text">
            <h2>BIRDAL</h2>
         </div>
      </div>
      <div className='charm-builder'>
        <div className="charm-builder-wrapper">
            <img src="https://cdn.shopify.com/s/files/1/0346/0264/7684/files/Charms_Animations.gif?v=1683826232" alt="" />
        </div>
         <div className="charm-builder-text">
            <h2>CHARM BUILDER</h2>
         </div>
      </div>

      <div className='gift-set'>
        <div className="gift-set-wrapper">
            <img src="https://cdn.shopify.com/s/files/1/0346/0264/7684/files/Smart_GiftSets_92a563ab-00c5-48de-9f28-632e1942baaf.jpg?v=1666789917" alt="" />
        </div>
         <div className="gift-set-text">
            <h2>GIFT SETS</h2>
         </div>
      </div>

      <div className='graduation'>
        <div className="graduation-wrapper">
            <img src="https://cdn.shopify.com/s/files/1/0346/0264/7684/files/Graduation_abfcc20a-f99f-4e47-b45b-c76236945010.jpg?v=1676479450" alt="" />
        </div>
         <div className="graduation-text">
            <h2>GRADUATION</h2>
         </div>
      </div>
      <div className='just-because'>
        <div className="just-because-wrapper">
            <img src="https://cdn.shopify.com/s/files/1/0346/0264/7684/files/Gifts_JustBecause_75d86b68-1b5a-46d1-9ee9-1bd4d6670a9b.jpg?v=1680793275" alt="" />
        </div>
         <div className="just-because-text">
            <h2>JUST BECAUSE</h2>
         </div>
      </div>
      
    </Slider>
  </div>

  )
}

export default Gift1

