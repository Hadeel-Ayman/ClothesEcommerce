import React from "react";
import "./style.scss";
import { BsFacebook, BsFillCheckSquareFill, BsInstagram, BsLinkedin, BsPinterest } from "react-icons/bs";
import { ImAccessibility } from 'react-icons/im'
import Logo from "../../logo";
const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="top">
                    <div className="item">
                        <h2>Categories</h2>
                        <span>Graphics & Design</span>
                        <span>Digital Marketing</span>
                        <span>Writing & Translation</span>
                        <span>Video & Animation</span>
                        <span>Music & Audio</span>
                    </div>
                    <div className="item">
                        <h2>About</h2>
                        <span>Press & News</span>
                        <span>Partnerships</span>
                        <span>Privacy Policy</span>
                        <span>Terms of Service</span>
                    </div>
                    <div className="item">
                        <h2>Support</h2>
                        <span>Help & Support</span>
                        <span>Trust & Safety</span>
                        <span>Selling on Shopping</span>
                        <span>Buying on Shopping</span>
                    </div>
                    <div className="item">
                        <h2>Community</h2>
                        <span>Customer Success Stories</span>
                        <span>Community hub</span>
                        <span>Forum</span>
                        <span>Events</span>
                    </div>
                    <div className="item">
                        <h2>More From Shopping</h2>
                        <span>Shopping Business</span>
                        <span>Shopping Pro</span>
                        <span>Shopping Logo Maker</span>
                        <span>Shopping Guides</span>
                    </div>
                </div>
                <hr />
                <div className="bottom">
                    <div className="left">
                        <Logo />
                    </div>
                    <div className="right">
                        <div className="social">
                            <BsFillCheckSquareFill />
                            <ImAccessibility />
                            <BsFacebook />
                            <BsLinkedin />
                            <BsPinterest />
                            <BsInstagram />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;