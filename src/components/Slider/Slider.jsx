import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './Slider.css';
import bannerImage from '../../assets/images/Banner.png';



// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

const swiper = () => {
    return (
        <div>
                    <Swiper
                    id='swipe'
                    loop={true}
                    pagination={{
                    dynamicBullets: true,
                    clickable: true,
                    }}

                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper banner1"
                    
                >
                        <SwiperSlide className="slides" style={{backgroundImage: `url(${bannerImage})`}}>
                            <div className="container">
                                <h4>Mega Sale</h4>
                                <h2>Up To 35% Off</h2>
                                <p>Objectively incubate enabled innovation through leveraged mindshare. Competently.</p>
                                <div className="a-container">
                                    <a href="#" >Shop Now</a>
                                </div>
                            </div>
                            
                        </SwiperSlide>
                        <SwiperSlide className="slides" style={{backgroundImage: `url(${bannerImage})`}}>
                            <div className="container">
                                <h4>Mega Sale</h4>
                                <h2>Up To 35% Off</h2>
                                <p>Objectively incubate enabled innovation through leveraged mindshare. Competently.</p>
                                <div className="a-container">
                                    <a href="#" >Shop Now</a>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
        </div>
    );
};

export default swiper;