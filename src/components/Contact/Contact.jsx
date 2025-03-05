import React from 'react';
import './Contact.css'
import BlankBanner from '../BlankBanner/BlankBanner';
import GetInTouch from '../../assets/images/Get in touch image.png';
import IconsMini from '../IconsMini/IconsMini';
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { SlGlobe } from "react-icons/sl";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import CommonFooter from './../CommonFooter/CommonFooter';

const Contact = () => {
    return (
        <div>
            <BlankBanner blankHead="Contact" blankSubHead="Home  /  Contact"/>
            <div className="contact-cards-part pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="mt-3 mb-3 col-12 col-lg-4 d-flex">
                            <div className="contact-card w-100 d-flex">
                                <div className="contact-card-icons">
                                    <FaPhoneAlt className='contact-card-icon' />
                                </div>
                                <div className="contact-card-text">
                                    <h4>Call to Us:</h4>
                                    <p>We’re available from 08 am – 10 pm USA, 7 days a week.</p>
                                    <h5>Customer Support:</h5>
                                    <span>+13008660286</span>
                                    <h5>Head Office Support:</h5>
                                    <span>+13008660290</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 mb-3 col-12 col-lg-4 d-flex">
                            <div className="contact-card w-100 d-flex">
                                <div className="contact-card-icons">
                                    <IoMail className='contact-card-icon' />
                                </div>
                                <div className="contact-card-text">
                                    <h4>Write to Email Us:</h4>
                                    <p>Fill out our form and we will contact you
                                    within 24 hours.</p>
                                    <h5>Customer Support:</h5>
                                    <span>aetor.info@gmail.com</span>
                                    <h5>Head Office Support:</h5>
                                    <span>aetorhead.@example.com</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 mb-3 col-12 col-lg-4 d-flex">
                            <div className="contact-card w-100 d-flex">
                                <div className="contact-card-icons">
                                    <SlGlobe className='contact-card-icon' />
                                </div>
                                <div className="contact-card-text">
                                    <h4>Follow to Us:</h4>
                                    <p>Visit specific sites to find us online  innovate bricks-and-clicks materials.</p>
                                    <h5 className='m-0'>Customer Support:</h5>
                                    <div className="contact-social-icons d-flex align-items-center">
                                        <a href="#"><FaFacebookF className='contact-social-icon' /></a>
                                        <a href="#"><FaTwitter className='contact-social-icon' /></a>
                                        <a href="#"><FaInstagram className='contact-social-icon' /></a>
                                        <a href="#"><FaPinterestP className='contact-social-icon' /></a>
                                    </div>
                                    <h5 className='m-0'>Head Office Support:</h5>
                                    <div className="contact-social-icons d-flex align-items-center">
                                        <a href="#"><FaFacebookF className='contact-social-icon' /></a>
                                        <a href="#"><FaTwitter className='contact-social-icon' /></a>
                                        <a href="#"><FaInstagram className='contact-social-icon' /></a>
                                        <a href="#"><FaPinterestP className='contact-social-icon' /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="get-in-touch pt-5 pb-5">
                <div className="container">
                    <div className="get-in-touch-container d-flex">
                        <div className="get-in-touch-form d-block">
                            <h3>Get in touch</h3>
                            <div className="form-container">
                                <form action='' className='contact-form'>
                                    <input type="text" id='contact-name' className='input-common-style common-margin top-margin ' placeholder='Your Name *' />
                                    <input type="email" id='contact-email' className='input-common-style top-margin ' placeholder='Your Email *' />
                                    <input type="text" id='contact-phone' className='input-common-style common-margin ' placeholder='Phone Number *' />
                                    <input type="text" id='contact-title' className='input-common-style ' placeholder='Your Title *' />
                                    <input type="text" id='contact-messag' className='input-common-style-big ' placeholder='Message *' />
                                    <div className="button-part">
                                        <button type='submit' className='contact-form-button'>Send Message</button>     
                                    </div>                                   
                                </form>
                            </div>
                                {/* <div className="col-6">
                                    <input type="text" className='w-100 d-block' placeholder='Your Name *' />
                                </div>
                                <div className="col-6">
                                    <input type="email" className='w-100 d-block' placeholder='Your Email *' />
                                </div>
                                <div className="col-6">
                                    <input type="number" className='w-100 d-block' placeholder='Phone Number *' />
                                </div>
                                <div className="col-6">
                                    <input type="text" className='w-100 d-block' placeholder='Your Title *' />
                                </div> */}
                        </div>
                        <div className="get-in-touch-image">
                            <img src={GetInTouch} alt="" className='img-fluid w-100' />
                        </div>
                    </div>
                </div>
            </div>

            <CommonFooter/>



            <IconsMini/>
        </div>
    );
};

export default Contact;