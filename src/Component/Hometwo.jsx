import React from 'react'
import '../Style/Hometwo.css'
// import {Link} from 'react-router-dom'

const Hometwo = () => {
  return (
  <div className="container6">
    {/* <div className="hometwo"> */}
        <div className="header">
            <h1>SHOP BY CATEGORY </h1>
            </div>
            <div className='wrapper'>
                <div className="wrapper-menu">
            <img className='item' src='https://cdn.shopify.com/s/files/1/0346/0264/7684/files/5-15_HP_Desktop_D-1_400x.jpg?v=1682956064'
            alt=''></img>
            <p>Bracelet</p>
            </div>
        
        <div className='wrapper-menu'>
            <img className='item' src="https://cdn.shopify.com/s/files/1/0346/0264/7684/files/5-15_HP_Desktop_D-2_400x.jpg?v=1682956115"
             alt="" />
             <p>Earring</p>
        </div>
        <div className="wrapper-menu">
            <img className='item' src="https://cdn.shopify.com/s/files/1/0346/0264/7684/files/5-15_HP_Desktop_D-4_400x.jpg?v=1682956132" alt="" />
            <p>Ring</p>
        </div>
        <div className="wrapper-menu">
            <img className='item' src="https://cdn.shopify.com/s/files/1/0346/0264/7684/files/5-15_HP_Desktop_D-3_400x.jpg?v=1682956125" alt="" />
            <p>Necklance</p>
        </div>
        
    </div>
    {/* <script data-cfasync="false">
        {(function(w,i,s,e){window[w]=window[w]||function(){(window[w].q=window[w].q||[]).push(arguments)};window[w].l=Date.now();s=document.createElement('script');e=document.getElementsByTagName('script')[0];s.defer=1;s.src=i;e.parentNode.insertBefore(s, e)})('wisepops', 'https://wisepops.net/loader.js?v=2&h=ohq7T2dMu7')};
        </script> */}
   </div> 

//    </div> 
  )
}

export default Hometwo
