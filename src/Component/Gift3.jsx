import React from 'react'
import Slider from "react-slick";

const Gift3 = () => {
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

      var settings = {
        dots: true,
        infinite: true,   
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        rtl: true,
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
    <div className='container4'>
    <h2>COLLECTION</h2>
    <Slider {...settings}>
      <div className='collection'>
        <div className="collection-wrapper">
        <img src="https://cdn.shopify.com/s/files/1/0346/0264/7684/files/Collections_18kGold.jpg?v=1673469655"
         alt="" style={{width: '90%'}}/>
        <div className="collection-text">
        <h2>18k. Canviar Gold</h2>
      </div>
     </div>
    </div>
    <div className='collection'>
        <div className="collection-wrapper">
        <img src="https://cdn.shopify.com/s/files/1/0346/0264/7684/files/Collections_WhiteCaviar_37843c0c-d74c-42b0-adff-8558a8fe4017.jpg?v=1678891783"
         alt="" style={{width: '90%'}}/>
        <div className="collection-text">
        <h2>White Caviar</h2>
      </div>
     </div>
    </div>
    <div className='collection'>
        <div className="collection-wrapper">
        <img src="https://cdn.shopify.com/s/files/1/0346/0264/7684/files/Collections_SmartCaviar_56387474-afa1-4051-aadc-072d17d29438.jpg?v=1673469684"
         alt="" style={{width: '90%'}}/>
        <div className="collection-text">
        <h2>Smart Canviar </h2>
      </div>
     </div>
    </div>

    <div className='collection'>
        <div className="collection-wrapper">
        <img src="https://cdn.shopify.com/s/files/1/0346/0264/7684/files/Collections_SignatureCaviar_1e762974-b321-464d-802f-553d1131f15d.jpg?v=1680792979"
         alt="" style={{width: '90%'}}/>
        <div className="collection-text">
        <h2>Signature Canviar</h2>
      </div>
     </div>
    </div>

       <div className='collection'>
        <div className="collection-wrapper">
        <img src="https://cdn.shopify.com/s/files/1/0346/0264/7684/files/Collections_Meridian_beb2f614-545b-4ed9-82ec-0f020d1ff7d8.jpg?v=1678891746"
         alt="" style={{width: '90%'}}/>
        <div className="collection-text">
        <h2>Meridian</h2>
      </div>
     </div>     
    </div>

    <div className='collection'>
        <div className="collection-wrapper">
        <img src="https://cdn.shopify.com/s/files/1/0346/0264/7684/files/collections-top_nav-newport.webp?v=1649259634"
         alt="" style={{width: '90%'}}/>
        <div className="collection-text">
        <h2> Newport</h2>
      </div>
     </div>
     </div>
    </Slider>
  </div>
);
}
  


export default Gift3