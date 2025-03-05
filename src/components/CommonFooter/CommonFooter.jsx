import React from 'react';
import './CommonFooter.css'
import Logo from '../../assets/images/Logo.png'
// import { FaAngleRight } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";

const CommonFooter = () => {
    return (
        <div>
            <div className="commonFooter" id='commonFooter'>
                <div className="container">
                    <div className="commonFooter-head row pt-5 pb-5">
                        <div className="commonFooter-head-text col-12 col-md-6 d-flex flex-column justify-content-left"> 
                            <h3>Subscribe to Our Newsletter!</h3>
                            <p>Authoritatively morph 24/7 potentialities with error-free partnerships. Objectively engineer multimedia.</p>
                        </div>
                        <div className="commonFooter-head-sub col-12 col-md-6 d-flex justify-content-end align-items-center">
                            <form action="submit" id='commonFooter-form'>
                                <div className="btn-group">
                                    <input className='commonFooter-sub-input' id='commonFooter-form' type="email" placeholder="Enter your email.."/>
                                    <button className='commonFooter-sub-button' id='commonFooter-form' type="submit">Subscribe</button>
                                </div>
                            </form> 
                        </div>
                    </div>
                    <hr />
                    <div className="commonFooter-body row pt-5 pb-5">
                        <div className="col-12 col-lg-3">
                            <img className='commonFooter-body-image' src={Logo} alt="" />
                            <p className='commonFooter-body-p'>Progressively optimize effective ideas before turnkey process improvements. Proactively disseminate</p>
                            <div className="common-Footer-body-icons d-flex align-items-center justify-content-between">
                                <FaFacebookF className='commonFooter-icons' />
                                <FaTwitter className='commonFooter-icons' />
                                <FaInstagram className='commonFooter-icons' />
                                <FaPinterestP className='commonFooter-icons' />
                            </div>
                        </div>
                        <div className="col-6 col-lg-2">
                            <h4 className='commonFooter-list-head pt-3 pt-lg-0'>My Account</h4>
                            <ul className='commonFooter-list-item-ul'>
                                <li className='commonFooter-list-item'><a href="#"><FaAngleRight className='pr-2' /> My Account</a></li>
                                <li className='commonFooter-list-item'><a href="#"><FaAngleRight className='pr-2' /> View Cart</a></li>
                                <li className='commonFooter-list-item'><a href="#"><FaAngleRight className='pr-2' /> Wishlist</a></li>
                                <li className='commonFooter-list-item'><a href="#"><FaAngleRight className='pr-2' /> Compare</a></li>
                                <li className='commonFooter-list-item'><a href="#"><FaAngleRight className='pr-2' /> New Products</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-lg-2">
                            <h4 className='commonFooter-list-head pt-3 pt-lg-0'>Support</h4>
                            <ul className='commonFooter-list-item-ul'>
                                <li className='commonFooter-list-item'><a href="#"><FaAngleRight className='pr-2' /> Help</a></li>
                                <li className='commonFooter-list-item'><a href="#"><FaAngleRight className='pr-2' /> Contact Us</a></li>
                                <li className='commonFooter-list-item'><a href="#"><FaAngleRight className='pr-2' /> Feedback</a></li>
                                <li className='commonFooter-list-item'><a href="#"><FaAngleRight className='pr-2' /> Customer Service</a></li>
                                <li className='commonFooter-list-item'><a href="#"><FaAngleRight className='pr-2' /> Store Locations</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-lg-2">
                            <h4 className='commonFooter-list-head pt-3 pt-lg-0'>Shop</h4>
                            <ul className='commonFooter-list-item-ul'>
                                <li className='commonFooter-list-item'><a href="#"><FaAngleRight className='pr-2' /> Men's Shopping</a></li>
                                <li className='commonFooter-list-item'><a href="#"><FaAngleRight className='pr-2' /> Women's Shopping</a></li>
                                <li className='commonFooter-list-item'><a href="#"><FaAngleRight className='pr-2' /> Kid's Shopping</a></li>
                                <li className='commonFooter-list-item'><a href="#"><FaAngleRight className='pr-2' /> Discounts</a></li>
                                <li className='commonFooter-list-item'><a href="#"><FaAngleRight className='pr-2' /> New Arrivals</a></li>
                            </ul>
                        </div>
                        <div className="col-12 col-lg-3">
                            <h4 className='commonFooter-list-head pt-3 pt-lg-0'>Shop</h4>
                            <ul className='commonFooter-list-item-ul'>
                                <li className='commonFooter-list-item'><a href="#"><FaLocationDot className='pr-2' /> 2751 S Parker Rd, Aurora, CO 80014, 
                                United States</a></li>
                                <li className='commonFooter-list-item'><a href="#"><FaPhone className='pr-2' /> +18008660286</a></li>
                                <li className='commonFooter-list-item'><a href="#"><IoMailSharp className='pr-2' /> aetor.info@gmail.com</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommonFooter;