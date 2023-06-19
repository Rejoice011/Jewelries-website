import React  from 'react'
import Slide from '../Component/Slide'
import Hometwo from '../Component/Hometwo';
import Player from '../Component/Player';
import Home4 from '../Component/Home4';
import Footer from '../Component/Footer';
import { useEffect } from 'react'


{/* <script data-cfasync="false">
  {(function(w,i,s,e){window[w]=window[w]||function(){(window[w].q=window[w].q||[]).push(arguments)};window[w].l=Date.now();s=document.createElement('script');e=document.getElementsByTagName('script')[0];s.defer=1;s.src=i;e.parentNode.insertBefore(s, e)})('wisepops', 'https://wisepops.net/loader.js?v=2&h=ohq7T2dMu7')};
</script> */}
 const Home = () => {
  useEffect(() => {
    window.addEventListener('error', e => {
        if (e.message === 'ResizeObserver loop limit exceeded') {
            const resizeObserverErrDiv = document.getElementById(
                'webpack-dev-server-client-overlay-div'
            );
            const resizeObserverErr = document.getElementById(
                'webpack-dev-server-client-overlay'
            );
            if (resizeObserverErr) {
                resizeObserverErr.setAttribute('style', 'display: none');
            }
            if (resizeObserverErrDiv) {
                resizeObserverErrDiv.setAttribute('style', 'display: none');
            }
        }
    });
}, []);
   return(

   <>
 <script data-cfasync="false">
  {(function(w,i,s,e){window[w]=window[w]||function(){(window[w].q=window[w].q||[]).push(arguments)};window[w].l=Date.now();s=document.createElement('script');e=document.getElementsByTagName('script')[0];s.defer=1;s.src=i;e.parentNode.insertBefore(s, e)})('wisepops', 'https://wisepops.net/loader.js?v=2&h=ohq7T2dMu7')};
</script> 
  
  <Slide/>
  <Hometwo/> 
  <Home4/>
  <Player />
  <Footer/>

  

  </>
   )

   }

    


    







 
   
  


export default Home
