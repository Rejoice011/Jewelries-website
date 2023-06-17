import React from 'react'
import Slider from "react-slick";
import '../Style/Home4.css'

const Home4 = () => {
    function Arrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "black", color: 'black' }}
            onClick={onClick}
          />
        );
      }



    var settings = {
        className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "80px",
            slidesToShow: 3,
            slidesToScroll: 2,
            speed: 500,
            rows: 2,
            slidesPerRow:2 ,
            initialSlide: 0,

            nextArrow: <Arrow />,
            prevArrow: <Arrow />,
            responsive: [
              {
                breakpoint: 800,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  rows: 2,
                  slidesPerRow:2,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  rows: 2,
                  slidesPerRow:2,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 350,
                settings: {
                  rows: 2,
                  slidesPerRow:1,
                  slidesToShow: 0.5,
                  slidesToScroll: 0.5
                }
              }
              
            ]

  };
  return (
    <div className='containerhome'>
    <h2>Multiple Rows</h2>
    <Slider {...settings}>
      <div className='swipe'>
        <img src="https://static.pxlecdn.com/photos/411951411/original/280cfae666af199392bb.jpg"
         alt=""  style={{maxWidth:'90%'}}/>
      </div>
      <div>
        <img src="https://static.pxlecdn.com/photos/455124843/original/a761a4a59a5d908370d2.jpg"
         alt=""  style={{maxWidth:'90%'}}/>
      </div>
      <div className='swipe'>
        <img src="https://static.pxlecdn.com/photos/422232338/original/869a41fee070dfb0d3d3.jpg"
         alt=""  style={{maxWidth:'90%'}}/>      </div>
      <div className='swipe'>
       <img src="https://static.pxlecdn.com/photos/364033955/original/c6611e60f712b739a273.jpg" 
       alt=""   style={{maxWidth:'90%'}}/>
      </div>
      <div className='swipe'>
       <img src="https://static.pxlecdn.com/photos/458286447/original/ed6b02a8ac40b9a2486c.jpg" 
       alt=""  style={{maxWidth:'90%'}}/>
      </div>
      <div className='swipe'>
        <img src="https://static.pxlecdn.com/photos/452927057/original/a4976dc872c702847b30.jpg" 
        alt=""  style={{maxWidth:'90%'}}/>
      </div>
      <div className='swipe'>
        <img src="https://static.pxlecdn.com/photos/441891148/original/fe7bc38b3aeb3e8c0e15.jpg" 
        alt=""  style={{maxWidth:'90%'}}/>
      </div>
      <div className='swipe'>
        <img src="https://static.pxlecdn.com/photos/498652521/original/72ba6f26ce06651196cd.jpg"
         alt=""  style={{maxWidth:'90%'}}/>
      </div>
      <div className='swipe'>
       <img src="https://static.pxlecdn.com/photos/485503752/original/1112cd3ee6203df7b314.jpg"
        alt=""  style={{maxWidth:'90%'}}/>
      </div>
      <div className='swipe'>
        <img src="https://static.pxlecdn.com/photos/420871586/original/3651d734599f18ab2509.jpg" 
        alt=""  style={{maxWidth:'90%'}}/>     
      </div>
      <div className='swipe'>
        <img src="https://static.pxlecdn.com/photos/457578131/original/32fb14b855619b334d6e.jpg"
         alt=""  style={{maxWidth:'90%'}}/>
      </div>
      <div className='swipe'>
        <img src="https://static.pxlecdn.com/photos/488462692/original/d1d4397ca88e1e8374a8.jpg"
         alt=""  style={{maxWidth:'90%'}}/>
      </div>
      <div className='swipe'>
        <img src="https://static.pxlecdn.com/photos/364000274/original/1cbaf63f9b9bb6d10e55.jpg" 
        alt=""  style={{maxWidth:'90%'}}/>
      </div>
      <div className='swipe'>
       <img src="https://static.pxlecdn.com/photos/402105507/original/7eefd27d0500bd10b638.jpg" 
       alt=""  style={{maxWidth:'90%'}}/>
      </div>
      <div className='swipe'>
       <img src="https://static.pxlecdn.com/photos/405883065/original/5bbcab84fd9d59ccc7b8.jpg"
       alt="" style={{maxWidth:'90%'}}/>
      </div>
      <div className='swipe'>
        <img src="https://static.pxlecdn.com/photos/364037746/original/c8a70d7d3afd72aae486.jpg"
         alt="" style={{maxWidth:'90%'}}/>
      </div>
    </Slider>
  </div>
  )
}

export default Home4
