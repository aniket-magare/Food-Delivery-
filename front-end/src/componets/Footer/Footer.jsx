import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quidem natus hic non eius! Numquam aperiam omnis, hic non ad aliquam maiores, unde beatae dolore pariatur blanditiis recusandae ex.</p>
                <div className="footer-social-icon">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-centre">
                <h2>Company </h2>
                <ul>
                    <li>Home</li>
                    <li>About us </li>
                    <li>Delivery </li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get in touch </h2>
                <ul>
                    <li>91+ 2872682899</li>
                    <li>contact@tamato.com</li>
                </ul>
            </div>
        </div>
      <hr />
      <p className="footer-copyright">Copyright 2025 Tamato.com - All Right Reserved </p>
    </div>
  )
}

export default Footer
