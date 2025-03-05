import React from 'react';
import './BenefitsSlider.css'
import { FaTruckFast } from "react-icons/fa6";
import { FaCreditCard } from "react-icons/fa6";
import { GoPackageDependencies } from "react-icons/go";
import { MdSupportAgent } from "react-icons/md";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/pagination';


// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

const BenefitsSlider = () => {
    return (
        <div>
            <div className="container">
                <Swiper
                // slidesPerView={4}
                // spaceBetween={30}
                breakpoints={{
                    320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    },
                    640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                    },
                    768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                    },
                    992: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                    },
                    1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                    },
                    1200: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                    },
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                // pagination={{
                // clickable: true,
                // }}
                modules={[Pagination, Autoplay]}
                className="mySwiper footer-swiper d-flex align-items-center"
                >
                    <SwiperSlide>
                        <div className="footer-swiper-slide ">
                            <div className="footer-swiper-slider-container d-flex align-items-center">
                                <div className="footer-swiper-slider-icon-container">
                                    <FaTruckFast className='footer-swiper-slider-icon' />
                                </div>
                                <div className="footer-swiper-slider-text">
                                    <h5 className='footer-swiper-slide-header'>FREE SHIPING</h5>
                                    <p className='footer-swiper-slide-text'>all orders over <span>$150</span></p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="footer-swiper-slide ">
                            <div className="footer-swiper-slider-container d-flex align-items-center">
                                <div className="footer-swiper-slider-icon-container">
                                    <FaCreditCard  className='footer-swiper-slider-icon' />
                                </div>
                                <div className="footer-swiper-slider-text">
                                    <h5 className='footer-swiper-slide-header'>QUICK PAYMENT</h5>
                                    <p className='footer-swiper-slide-text'>100% secure payment</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="footer-swiper-slide ">
                        <div className="footer-swiper-slider-container d-flex align-items-center">
                            <div className="footer-swiper-slider-icon-container">
                                    <GoPackageDependencies className='footer-swiper-slider-icon' />
                                </div>
                                <div className="footer-swiper-slider-text">
                                    <h5 className='footer-swiper-slide-header'>FREE RETURNS</h5>
                                    <p className='footer-swiper-slide-text'>Return money in 30 days</p>
                                </div>
                        </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="footer-swiper-slide ">
                            <div className="footer-swiper-slider-container d-flex align-items-center">
                                <div className="footer-swiper-slider-icon-container">
                                    <MdSupportAgent className='footer-swiper-slider-icon' />
                                </div>
                                <div className="footer-swiper-slider-text">
                                    <h5 className='footer-swiper-slide-header'>24/7 SUPPORT</h5>
                                    <p className='footer-swiper-slide-text'>Quick Support</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default BenefitsSlider;