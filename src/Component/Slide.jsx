
import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


const Slide = () => {
 
    const images = [
        'https://cdn.shopify.com/s/files/1/0346/0264/7684/files/5-15_HP_Desktop_G-AltOptimized.gif?v=1683835077',
        "https://cdn.shopify.com/s/files/1/0346/0264/7684/files/5-15_HP_Desktop_H-AltOptimized_c516d793-d185-402c-867f-10fa70f2eba6.jpg?v=1683835173",
        "https://cdn.shopify.com/s/files/1/0346/0264/7684/files/5-15_HP_Desktop_B_9e988ec7-f365-436e-974b-f861ef3d7588.jpg?v=1682955771",
        "https://cdn.shopify.com/s/files/1/0346/0264/7684/files/5-15_HP_Desktop_B_9e988ec7-f365-436e-974b-f861ef3d7588.jpg?v=1682955771",
    ];

    return (
        <Zoom scale={1.4} indicators={true}>
            {images.map((each, index) => (
                <div key={index} style={{ width: "100%",  }}>
                    <img style={{ objectFit: "cover", width: "100%" }} alt="Slide Image" src={each} />
                </div>
            ))}
        </Zoom>
        
    );
};




export default Slide







