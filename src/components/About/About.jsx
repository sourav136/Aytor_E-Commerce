import React from 'react';
import './About.css'
import BlankBanner from '../BlankBanner/BlankBanner';
import IconsMini from '../IconsMini/IconsMini';
import CommonButton from '../CommonButton/CommonButton';
import AboutImage from '../../assets/images/Group 37.png'
import OurStory from '../../assets/images/Our Story.png'
import InstagramImage from '../../assets/images/Image.png'
import LeadershipImage from '../../assets/images/Leadership Image.png'
import { FaCircleCheck } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import BenefitsSlider from '../BenefitsSlider/BenefitsSlider';
import CommonFooter from '../CommonFooter/CommonFooter';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

const About = () => {
    return (
        <div>
            <BlankBanner blankSubHead="Home  /  About Us" blankHead="About Us" />
            <div className="learn">
                <div className="container learn-bg d-flex align-items-center">
                    <div className="row ">
                        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                            <img src={AboutImage} alt="" className='d-block w-100 learn-image' />
                        </div>
                        <div className="col-12 col-md-6">
                            <h3 className='learn-head'>Learn About Aytor Shop</h3>
                            <p className='learn-p'>Interactively underwhelm effective relationships whereas team driven paradigms. Uniquely impact impactful meta-services vis -a-vis fully tested best practices. Appropriately e-enable fully.</p>
                            <span className='learn-span'><FaCircleCheck className='learn-check' /> Assertively customize robust potentialities and economical</span>
                            <span className='learn-span'><FaCircleCheck className='learn-check' /> Seamlessly disintermediate distributed intellectual capital.</span>
                            <span className='learn-span learn-last'><FaCircleCheck className='learn-check' /> Credibly enable B2C potentialities after strategic.</span>
                            <CommonButton commonBUtton="Discover More"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="our-story d-block mb-5">
                <div className="container ">
                    <div className="row">
                        <div className="col-12 col-md-6 d-flex  justify-content-left flex-column">
                                <h3 className='our-story-head'>Our Story</h3>
                                <p className='our-story-p'>Synergistically pontificate focused services whereas intuitive leadership. Competently predominate ubiquitous services rather than client-centric scenarios. Distinctively mesh B2C benefits for superior customer service. Interactively e-enable inexpensive total linkage without quality materials. Phosfluorescently negotiate.</p>
                                <p className='our-story-p our-story-p-last'>Professionally exploit user-centric technology for seamless solutions. Objectively morph unique strategic theme areas without cross functional mindshare. Synergistically aggregate adaptive functionalities rather than enterprise-wide experiences. Completely maintain.</p>
                            </div>
                            <div className="our-story-video col-12 col-md-6 d-flex  justify-content-center align-items-center">
                                <img src={OurStory} alt="" className='d-block w-100 h-auto our-story-image img-fluid' />
                            </div>
                    </div>
                </div>
            </div>

            <BenefitsSlider/>

            <div className="leadership-expert-team mt-5 mb-5">
                <div className="container">
                    <h3 className='leadership-expert-team-head'>Leadership & Expert Team</h3>
                    <Swiper 
                    navigation={true} 
                    loop={true} 
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                    breakpoints={{
                        320: {
                          slidesPerView: 1,
                          
                        },
                        420: {
                          slidesPerView: 1,
                          
                        },
                        768: {
                          slidesPerView: 2,
                         
                        },
                        1024: {
                          slidesPerView: 4,
                          
                        },
                      }}
                    modules={[Navigation, Autoplay, Pagination]} 
                    className="mySwiper"
                    id='leadership-expert-team'>
                        <SwiperSlide>
                            <div className="leadership-expert-team-card">
                                <img src={LeadershipImage} alt="" className='d-block w-100 h-auto'/>
                                <div className="leadership-expert-team-body d-flex justify-content-center flex-column">
                                    <h4 className='leadership-expert-team-body-head'>Michel Richard</h4>
                                    <p className='leadership-expert-team-body-position'>Founder & CEO</p>
                                    <div className="leadership-expert-team-social-icons d-flex w-100 justify-content-center pb-3">
                                        <a href="#" className="social-icon"><FaFacebookF/></a>
                                        <a href="#" className="social-icon"><FaTwitter /></a>
                                        <a href="#" className="social-icon"><FaInstagram /></a>
                                        <a href="#" className="social-icon"><FaPinterestP /></a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="leadership-expert-team-card">
                                <img src={LeadershipImage} alt="" className='d-block w-100 h-auto'/>
                                <div className="leadership-expert-team-body d-flex justify-content-center flex-column">
                                    <h4 className='leadership-expert-team-body-head'>Henry Joseph</h4>
                                    <p className='leadership-expert-team-body-position'>Founder & CEO</p>
                                    <div className="leadership-expert-team-social-icons d-flex w-100 justify-content-center pb-3">
                                        <a href="#" className="social-icon"><FaFacebookF/></a>
                                        <a href="#" className="social-icon"><FaTwitter /></a>
                                        <a href="#" className="social-icon"><FaInstagram /></a>
                                        <a href="#" className="social-icon"><FaPinterestP /></a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="leadership-expert-team-card">
                                <img src={LeadershipImage} alt="" className='d-block w-100 h-auto'/>
                                <div className="leadership-expert-team-body d-flex justify-content-center flex-column">
                                    <h4 className='leadership-expert-team-body-head'>Steve Smith</h4>
                                    <p className='leadership-expert-team-body-position'>Founder & CEO</p>
                                    <div className="leadership-expert-team-social-icons d-flex w-100 justify-content-center pb-3">
                                        <a href="#" className="social-icon"><FaFacebookF/></a>
                                        <a href="#" className="social-icon"><FaTwitter /></a>
                                        <a href="#" className="social-icon"><FaInstagram /></a>
                                        <a href="#" className="social-icon"><FaPinterestP /></a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="leadership-expert-team-card">
                                <img src={LeadershipImage} alt="" className='d-block w-100 h-auto'/>
                                <div className="leadership-expert-team-body d-flex justify-content-center flex-column">
                                    <h4 className='leadership-expert-team-body-head'>John Doe</h4>
                                    <p className='leadership-expert-team-body-position'>Founder & CEO</p>
                                    <div className="leadership-expert-team-social-icons d-flex w-100 justify-content-center pb-3">
                                        <a href="#" className="social-icon"><FaFacebookF/></a>
                                        <a href="#" className="social-icon"><FaTwitter /></a>
                                        <a href="#" className="social-icon"><FaInstagram /></a>
                                        <a href="#" className="social-icon"><FaPinterestP /></a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="leadership-expert-team-card">
                                <img src={LeadershipImage} alt="" className='d-block w-100 h-auto'/>
                                <div className="leadership-expert-team-body d-flex justify-content-center flex-column">
                                    <h4 className='leadership-expert-team-body-head'>Maria</h4>
                                    <p className='leadership-expert-team-body-position'>Founder & CEO</p>
                                    <div className="leadership-expert-team-social-icons d-flex w-100 justify-content-center pb-3">
                                        <a href="#" className="social-icon"><FaFacebookF/></a>
                                        <a href="#" className="social-icon"><FaTwitter /></a>
                                        <a href="#" className="social-icon"><FaInstagram /></a>
                                        <a href="#" className="social-icon"><FaPinterestP /></a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="leadership-expert-team-card">
                                <img src={LeadershipImage} alt="" className='d-block w-100 h-auto'/>
                                <div className="leadership-expert-team-body d-flex justify-content-center flex-column">
                                    <h4 className='leadership-expert-team-body-head'>Leo</h4>
                                    <p className='leadership-expert-team-body-position'>Founder & CEO</p>
                                    <div className="leadership-expert-team-social-icons d-flex w-100 justify-content-center pb-3">
                                        <a href="#" className="social-icon"><FaFacebookF/></a>
                                        <a href="#" className="social-icon"><FaTwitter /></a>
                                        <a href="#" className="social-icon"><FaInstagram /></a>
                                        <a href="#" className="social-icon"><FaPinterestP /></a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

            <div className="aytor-insta mb-5">
                <div className="container">
                    <h3 className='insta-head pb-4 pt-5'>@Aytor Instagram</h3>
                    <Swiper
                        
                        loop={true}
                        pagination={{
                        clickable: true,
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                          }}
                        breakpoints={{
                            320: {
                              slidesPerView: 1,
                              
                            },
                            420: {
                              slidesPerView: 2,
                              
                            },
                            768: {
                              slidesPerView: 3,
                             
                            },
                            992: {
                              slidesPerView: 4,
                             
                            },
                            1024: {
                              slidesPerView: 5,
                            },
                          }}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper insta-image-swiper"
                    >
                        <SwiperSlide>
                            <div className="insta-image">
                                <img src={InstagramImage} alt="" className='d-block w-100 h-auto img-fluid'/>
                                <div className="insta-image-hover">
                                    <a className='insta-image-hover-link' href="#"><FaInstagram/></a>
                                </div>
                            </div>
                            
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="insta-image">
                                <img src={InstagramImage} alt="" className='d-block w-100 h-auto img-fluid'/>
                                <div className="insta-image-hover">
                                    <a className='insta-image-hover-link' href="#"><FaInstagram/></a>
                                </div>
                            </div>
                            
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="insta-image">
                                <img src={InstagramImage} alt="" className='d-block w-100 h-auto img-fluid'/>
                                <div className="insta-image-hover">
                                    <a className='insta-image-hover-link' href="#"><FaInstagram/></a>
                                </div>
                            </div>
                            
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="insta-image">
                                <img src={InstagramImage} alt="" className='d-block w-100 h-auto img-fluid'/>
                                <div className="insta-image-hover">
                                    <a className='insta-image-hover-link' href="#"><FaInstagram/></a>
                                </div>
                            </div>
                            
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="insta-image">
                                <img src={InstagramImage} alt="" className='d-block w-100 h-auto img-fluid'/>
                                <div className="insta-image-hover">
                                    <a className='insta-image-hover-link' href="#"><FaInstagram/></a>
                                </div>
                            </div>
                            
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="insta-image">
                                <img src={InstagramImage} alt="" className='d-block w-100 h-auto img-fluid'/>
                                <div className="insta-image-hover">
                                    <a className='insta-image-hover-link' href="#"><FaInstagram/></a>
                                </div>
                            </div>
                            
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="insta-image">
                                <img src={InstagramImage} alt="" className='d-block w-100 h-auto img-fluid'/>
                                <div className="insta-image-hover">
                                    <a className='insta-image-hover-link' href="#"><FaInstagram/></a>
                                </div>
                            </div>
                            
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="insta-image">
                                <img src={InstagramImage} alt="" className='d-block w-100 h-auto img-fluid'/>
                                <div className="insta-image-hover">
                                    <a className='insta-image-hover-link' href="#"><FaInstagram/></a>
                                </div>
                            </div>
                            
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="insta-image">
                                <img src={InstagramImage} alt="" className='d-block w-100 h-auto img-fluid'/>
                                <div className="insta-image-hover">
                                    <a className='insta-image-hover-link' href="#"><FaInstagram/></a>
                                </div>
                            </div>
                            
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="insta-image">
                                <img src={InstagramImage} alt="" className='d-block w-100 h-auto img-fluid'/>
                                <div className="insta-image-hover">
                                    <a className='insta-image-hover-link' href="#"><FaInstagram/></a>
                                </div>
                            </div>
                            
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="insta-image">
                                <img src={InstagramImage} alt="" className='d-block w-100 h-auto img-fluid'/>
                                <div className="insta-image-hover">
                                    <a className='insta-image-hover-link' href="#"><FaInstagram/></a>
                                </div>
                            </div>
                            
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

            <CommonFooter/>





            <IconsMini/>
        </div>
    );
};

export default About;