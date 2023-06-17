import React from "react";
// import Slider from "react-slick";
import '../Style/Bracelets.css'
import Bracelets1 from "../Component/Bracelets1";
import Bracelets2 from "../Component/Bracelets2";
import Bracelets3 from "../Component/Bracelets3";
import Footer from "../Component/Footer";

<script data-cfasync="false">
  {(function(w,i,s,e){window[w]=window[w]||function(){(window[w].q=window[w].q||[]).push(arguments)};window[w].l=Date.now();s=document.createElement('script');e=document.getElementsByTagName('script')[0];s.defer=1;s.src=i;e.parentNode.insertBefore(s, e)})('wisepops', 'https://wisepops.net/loader.js?v=2&h=ohq7T2dMu7')};
</script>

const Bracelets = () => {
  return (
   <>
 
   <Bracelets2/>
   <Bracelets1/>
   <Bracelets3/>
   <Footer/>
   {/* <script data-cfasync="false">
    {(function(w,i,s,e){window[w]=window[w]||function(){(window[w].q=window[w].q||[]).push(arguments)};window[w].l=Date.now();s=document.createElement('script');e=document.getElementsByTagName('script')[0];s.defer=1;s.src=i;e.parentNode.insertBefore(s, e)})('wisepops', 'https://wisepops.net/loader.js?v=2&h=ohq7T2dMu7')};
    </script> */}
   </>
  )
}

 export default Bracelets