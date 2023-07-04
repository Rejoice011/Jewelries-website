import React from 'react'
import {FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaLinkedin} from 'react-icons/fa'
import '../Style/Footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div>
        {/* <img src="https://cdn.shopify.com/s/files/1/0346/0264/7684/files/free-shipping-popup.jpg?v=1613620644" alt="" /> */}
     
    <div className="footer">
     
        <div className="footer-text1">
          <Link to="/contactus">Contact Us</Link>
            <p> Chat</p> <br/> 
            <p>Email</p>
            <br/> 
            <p>877 565 5964</p>
            <div className="icon-wrapper">
            <i className='FaFacebookSquare'><FaFacebookSquare/></i> 
           <i className="FaTwitterSquare"><FaTwitterSquare/></i>
           <i className="FaInstagramSquare"><FaInstagramSquare/></i>
           <i className="FaLinkedin"><FaLinkedin/></i>
           </div>

        </div>
        <div className="footer-text2">
          <h3>Customer Care</h3>
           <p>Affirm</p> <br/>
           <p>FAQs</p>
            <br/>
            <p> Gift Packaging</p> 
            <br/> 
            <p>Shipping</p>
            <br/> 
            <p>Sizing</p>
        </div>
         <div className="footer-text3">
          <h3>Services</h3>
           <p>Accessibility</p> <br/>
           <p>Alterations  & Repairs</p>
            <br/>
            <p>Stylin Help</p>
            <br/>
            <p>Care & Cleaning</p>
           
           
        </div>
        </div>
      <div className="copyrite">
        <p>Copyrite @REGOLD 2023</p>
    </div>
  </div>
  )
}

export default Footer
