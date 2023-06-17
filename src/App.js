
import './Style/Navbar.css';
import {Link,Route,Routes} from 'react-router-dom'
import Home from './Pages/Home';
import EarRings from './Pages/EarRings';
import Necklaces from './Pages/Necklaces';
import Rings from './Pages/Rings';
import Bracelets from './Pages/Bracelets';
import Gifts from './Pages/Gifts';
import { GiGemChain } from "react-icons/gi";
import {FaBars} from 'react-icons/fa'
import { useEffect, useState } from 'react';


function App() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)


  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });


  const isSticky = (e) => {
    const header = document.querySelector(".navigation");
    const scrollTop = window.scrollY;
    scrollTop >= 50
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };


  
  return (
    <>
    
    <nav className='navigation'>
      
      <div className='logo-icon'>
      <h1 className='logo'><i class="GiGemChain " ><GiGemChain /></i>
      REGOLD
      </h1>

      </div>
      
  <div className={ isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
  }
     >
      <ul>
        <li>
          <Link to='/' className='active'>Home</Link> 
          </li>
        <li>
          <Link to='/earrings'>EarRings</Link>
          </li>
        <li>
          <Link to='/necklaces'>Necklaces</Link>
          </li>
        <li>
          <Link to='/rings'>Rings</Link>
          </li>
        <li>
          <Link to='/bracelets'>Bracelets</Link>
          </li>
        <li>
          <Link to='/gifts'>Gifts</Link>
          </li>
      </ul>
      
  </div>
      <button className='hamburger' 
      onClick={() => {
        setIsNavExpanded(!isNavExpanded)
      }}
      >
        <i class='FaBars'><FaBars/></i>
        </button>


      
    </nav>

    
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/earrings' element={<EarRings/>} />
      <Route path='/necklaces' element={<Necklaces/>} />
      <Route path='/rings' element={<Rings/>} />
      <Route path='/bracelets' element={<Bracelets/>} />
      <Route path='/gifts' element={<Gifts/>} />
      
      </Routes>
    </>
  );
}

export default App;



// const headerRef = useRef (null);
// const menuRef = useRef(null)

// const headerFunc = () =>{  
//   if(
//     document.body.scrollTop> 80 ||
//     document.documentElement.scrollTop> 80
//      ){
//     headerRef.current.classList.add('sticky_header')
//   }else{
//     headerRef.current.classList.remove('sticky_header')
//   }

// }

//  useEffect(()=>{

//   window.addEventListener('scroll',headerFunc);

//   return() =>  window.addEventListener('scroll',headerFunc);
  
//  },[]);

//  const handleClick = e=> {
//   e.preventDefault()

//   const targetAttr= e.target.getAttribute('href')
//   const location = document.querySelector(targetAttr).offsetTop;

//   window.scrollTo({
//     left: 0,
//     top:location - 80,
//   })
//  }


//  const menuToggle=()=> menuRef.current.classList.toggle
//  ("menu-active")
 





// return( 
// <header className='header' ref={headerRef}>
// <div className='container'>
//    <div className='nav-wrappper'>
//      <div className='logo'>
//         <div className="logo-img">
//           <img src={logo} alt=''  />
//           </div>
//         <h2>Fitbody</h2>
//          </div> 

        

//          <div className='navigation' ref={menuRef} onClick={menuToggle} >
//            <ul className= 'manu'>
            
//                {nav_links.map(item=>(
//                 <li className="nav_item" >
//                   <a  href={item.path}>
//                   {item.display}</a>
//                   </li>
//               ))}
//                </ul>
//          </div>
            

//          <div className="nav_right">
//          <button className='register_btn  register'  >Register</button> 
//             <span className="mobile_menu" onClick={menuToggle} >   
//             {/* <i class="Fabars"><FaBars/></i> */}
//             <i class="Fabars"><FaBars/></i>
