// import React from 'react';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './LNews.css';
import LN from '../../assets/images/Latest-news-image.png'

// import required modules
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
const LNews = () => {
    return (
        <div>
            <div className="latest-news">
                <div className="container">
                    <h2 className='LN-header'>Latest News</h2>
                    <div className="latest-news-container pb-5">

                        <Swiper
                        freeMode={true}
                        spaceBetween={30}
                        pagination={{
                        clickable: true,
                        }}
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
                              spaceBetween: 40,
                            },
                            992: {
                              slidesPerView: 3,
                              spaceBetween: 40,
                            },
                            1024: {
                              slidesPerView: 3,
                              spaceBetween: 50,
                            },
                            1200: {
                              slidesPerView: 4,
                              spaceBetween: 50,
                            },
                          }}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                          }}
                        modules={[FreeMode, Pagination, Autoplay]}
                        id='LN'
                        className="mySwiper d-flex justify-content-around flex-wrap"
                        >
                            <SwiperSlide>
                                <div className="latest-news-card mb-5">
                                    <img src={LN} alt="" />
                                    <h5 className='latest-news-head'>Best Multi-step Beauty Skin.</h5>
                                    <p className='ln-details'>Appropriately seize 24/365 markets without adaptive.</p>
                                    <div className="latest-news-card-last d-flex justify-content-between">
                                        <a href="#" className='latest-news-read-more'>Read More</a>
                                        <span>Jan 04, 2022</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="latest-news-card mb-5">
                                    <img src={LN} alt="" />
                                    <h5 className='latest-news-head'>Treatment For Dry Scalp</h5>
                                    <p className='ln-details'>Appropriately seize 24/365 markets without adaptive.</p>
                                    <div className="latest-news-card-last d-flex justify-content-between">
                                        <a href="#" className='latest-news-read-more'>Read More</a>
                                        <span>Jan 04, 2022</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="latest-news-card mb-5">
                                    <img src={LN} alt="" />
                                    <h5 className='latest-news-head'>Travelling Solo Is Awesome</h5>
                                    <p className='ln-details'>Appropriately seize 24/365 markets without adaptive.</p>
                                    <div className="latest-news-card-last d-flex justify-content-between">
                                        <a href="#" className='latest-news-read-more'>Read More</a>
                                        <span>Jan 04, 2022</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="latest-news-card mb-5">
                                    <img src={LN} alt="" />
                                    <h5 className='latest-news-head'>A Beautiful Sunday Morning</h5>
                                    <p className='ln-details'>Appropriately seize 24/365 markets without adaptive.</p>
                                    <div className="latest-news-card-last d-flex justify-content-between">
                                        <a href="#" className='latest-news-read-more'>Read More</a>
                                        <span>Jan 04, 2022</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="latest-news-card mb-5">
                                    <img src={LN} alt="" />
                                    <h5 className='latest-news-head'>Best Multi-step Beauty Skin.</h5>
                                    <p className='ln-details'>Appropriately seize 24/365 markets without adaptive.</p>
                                    <div className="latest-news-card-last d-flex justify-content-between">
                                        <a href="#" className='latest-news-read-more'>Read More</a>
                                        <span>Jan 04, 2022</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="latest-news-card mb-5">
                                    <img src={LN} alt="" />
                                    <h5 className='latest-news-head'>Treatment For Dry Scalp</h5>
                                    <p className='ln-details'>Appropriately seize 24/365 markets without adaptive.</p>
                                    <div className="latest-news-card-last d-flex justify-content-between">
                                        <a href="#" className='latest-news-read-more'>Read More</a>
                                        <span>Jan 04, 2022</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="latest-news-card mb-5">
                                    <img src={LN} alt="" />
                                    <h5 className='latest-news-head'>Travelling Solo Is Awesome</h5>
                                    <p className='ln-details'>Appropriately seize 24/365 markets without adaptive.</p>
                                    <div className="latest-news-card-last d-flex justify-content-between">
                                        <a href="#" className='latest-news-read-more'>Read More</a>
                                        <span>Jan 04, 2022</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="latest-news-card mb-5">
                                    <img src={LN} alt="" />
                                    <h5 className='latest-news-head'>A Beautiful Sunday Morning</h5>
                                    <p className='ln-details'>Appropriately seize 24/365 markets without adaptive.</p>
                                    <div className="latest-news-card-last d-flex justify-content-between">
                                        <a href="#" className='latest-news-read-more'>Read More</a>
                                        <span>Jan 04, 2022</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="latest-news-card mb-5">
                                    <img src={LN} alt="" />
                                    <h5 className='latest-news-head'>Best Multi-step Beauty Skin.</h5>
                                    <p className='ln-details'>Appropriately seize 24/365 markets without adaptive.</p>
                                    <div className="latest-news-card-last d-flex justify-content-between">
                                        <a href="#" className='latest-news-read-more'>Read More</a>
                                        <span>Jan 04, 2022</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="latest-news-card mb-5">
                                    <img src={LN} alt="" />
                                    <h5 className='latest-news-head'>Treatment For Dry Scalp</h5>
                                    <p className='ln-details'>Appropriately seize 24/365 markets without adaptive.</p>
                                    <div className="latest-news-card-last d-flex justify-content-between">
                                        <a href="#" className='latest-news-read-more'>Read More</a>
                                        <span>Jan 04, 2022</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="latest-news-card mb-5">
                                    <img src={LN} alt="" />
                                    <h5 className='latest-news-head'>Travelling Solo Is Awesome</h5>
                                    <p className='ln-details'>Appropriately seize 24/365 markets without adaptive.</p>
                                    <div className="latest-news-card-last d-flex justify-content-between">
                                        <a href="#" className='latest-news-read-more'>Read More</a>
                                        <span>Jan 04, 2022</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="latest-news-card mb-5">
                                    <img src={LN} alt="" />
                                    <h5 className='latest-news-head'>A Beautiful Sunday Morning</h5>
                                    <p className='ln-details'>Appropriately seize 24/365 markets without adaptive.</p>
                                    <div className="latest-news-card-last d-flex justify-content-between">
                                        <a href="#" className='latest-news-read-more'>Read More</a>
                                        <span>Jan 04, 2022</span>
                                    </div>
                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LNews;