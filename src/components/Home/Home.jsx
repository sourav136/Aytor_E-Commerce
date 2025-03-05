import React, { useState } from 'react';
import bannerImage from '../../assets/images/Banner.png';
import LogoB from '../../assets/images/LogoB.png';
import PaymentMethods from '../../assets/images/Payment Methods.png';
import Beauty1 from '../../assets/images/beauty-1.png';
import Beauty2 from '../../assets/images/beauty-2.png';
import Beauty3 from '../../assets/images/beauty-3.png';
import Banner2 from '../../assets/images/Banner2.png';
import SpecialOffer from '../../assets/images/Special offer.png';
import Rating from '../../assets/images/Rating.png';
import BestSeller1 from '../../assets/images/Mask here (1).png';
import BestSeller2 from '../../assets/images/Mask here (2).png';
import BestSeller3 from '../../assets/images/Mask here (3).png';
import BestSeller4 from '../../assets/images/Mask here (4).png';
import BestSeller5 from '../../assets/images/Mask here (5).png';
import BestSeller6 from '../../assets/images/Mask here (6).png';
import BestSeller7 from '../../assets/images/Mask here (7).png';
import BestSeller8 from '../../assets/images/Mask here (8).png';
import './Home.css';
// import { IoSearchSharp } from "react-icons/io5";
// import { AiOutlineUser  } from "react-icons/ai";
// import { FaRegHeart } from "react-icons/fa6";
// import { BsHandbag } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import Slider_2 from '../Slider_2/Slider_2';
import LNews from '../LNews/LNews';
import IconsMini from '../IconsMini/IconsMini'
import BenefitsSlider from '../BenefitsSlider/BenefitsSlider';
import GridCardList from '../Grid/GridCardList';
import ViewItem from '../ViewItem/ViewItem';
import { Link } from 'react-router-dom';
import { useCart } from '../Context/CartContext';
import { useNavigate } from 'react-router-dom';
import { useWishlist } from '../Context/WishlistContext';


const Home = () => {
    const { toggleWishlist, isInWishlist, viewItemDetails } = useWishlist();
    const {addToCart} = useCart();
    const navigate = useNavigate();
    const handleAddToCart= (item) =>{
        addToCart(item);
        navigate('/shop/cart');
    }

    const [cardView, setCardView]= useState(false);
    // Show ViewItem when eye icon is clicked
    const handleViewItem = (item) => {
        viewItemDetails(item); // Set selected item in context
        setCardView(true); // Show the card
    };

    // Hide ViewItem when closing
    const handleCloseViewItem = () => {
        setCardView(false);
        viewItemDetails(null); // Clear selected item when closing
    };
    return (
        <div>
            <div className="banner-home" style={{backgroundImage: `url(${bannerImage})`}}>
                <div className="container">
                    <h4>Mega Sale</h4>
                        <h2>Up To 35% Off</h2>
                        <p>Objectively incubate enabled innovation through leveraged mindshare. Competently.</p>
                        <div className="a-container">
                            {/* <a href="#" className='banner-home-shop-now' >Shop Now</a> */}
                            <Link to="/shop/grid" className='banner-home-shop-now'>Shop Now</Link>
                        </div>
                    </div>
            </div>

            <div className="beauty-cream-part mt-5 mb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 ">
                                <div className="beauty-images w-100">
                                    <img src={Beauty1} className='w-100 d-block' alt="" />

                                    <div className="beauty-hover">
                                        <div className="beauty-text">
                                            <h3>Beauty Cream</h3>
                                            {/* <a href="#" className='beauty-hover-a'>Shop Now <FaArrowRightLong /></a> */}
                                            <Link to="/shop/grid" className='beauty-hover-a'>Shop Now <FaArrowRightLong /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="beauty-images w-100 mt-3">
                                    <img src={Beauty2} className='w-100 d-block mt-3 mt-md-0' alt="" />

                                    <div className="beauty-hover">
                                        <div className="beauty-text">
                                            <h3>Beauty Cream</h3>
                                            {/* <a href="#" className='beauty-hover-a'>Shop Now <FaArrowRightLong /></a> */}
                                            <Link to="/shop/grid" className='beauty-hover-a'>Shop Now <FaArrowRightLong /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="beauty-images w-100">
                                    <img src={Beauty3} className='w-100 d-block mt-3 mt-md-0' alt="" />

                                    <div className="beauty-hover">
                                        <div className="beauty-text">
                                            <h3>Beauty Cream</h3>
                                            {/* <a href="#" className='beauty-hover-a'>Shop Now <FaArrowRightLong /></a> */}
                                            <Link to="/shop/grid" className='beauty-hover-a'>Shop Now <FaArrowRightLong /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            <Slider_2/>
            <div className="banner-2 mb-5" style={{backgroundImage: `url(${Banner2})`}}>
                 <div className="container">
                    <h3 className='banner-2-head'>Get Up To 35% Off all
                    Best Spa Cosmetics
                    Cream</h3>
                    <p>Holisticly maximize interoperable action items for effective e-business. Globally impact enterprise-wide niche markets through dynamic.</p>
                    {/* <a href="#" className='banner-2-a'>Shop Now <FaArrowRightLong /></a> */}
                    <Link to="/shop/grid" className='banner-2-a'>Shop Now <FaArrowRightLong /></Link>
                </div>
            </div>

            <div className="best-seller-product pb-5">
                    <div className="container">
                        <h2 className='best-seller-product-header my-5'>Best Seller Products</h2>
                        <div className="align-cards d-flex align-items-center justify-content-center">
                            <div className="cards-container w-auto d-flex justify-content-around flex-wrap ">
                                {
                                    GridCardList.filter(items => items.product === 'best-seller').map((items, index)=>{
                                        return(
                                            <div className="card mb-4" key={index}>
                                                <div className="card-image-part">
                                                    <img src={items.image} alt="" />
                                                    <div className={`best-seller-offer ${items.status === 'new' ? 'best-seller-offer-active' : ''}`}>
                                                        <p>{items.subStatus}</p>
                                                    </div>
                                                    <div className="best-seller-icons">
                                                        <div className="best-seller-icon" onClick={()=> handleAddToCart(items)}>
                                                            <span><FaCartPlus className='icon'/></span>
                                                        </div>
                                                        <div className="best-seller-icon" onClick={() => toggleWishlist(items)}>
                                                            <span><FaHeart className={`bestSeller-icon ${isInWishlist(items.id) ? 'text-danger' : ''}`} /></span>
                                                        </div>
                                                        <div className="best-seller-icon" onClick={() => handleViewItem(items)}>
                                                            <span><FaEye /></span>
                                                        </div>
                                                        <div className="best-seller-icon">
                                                            <span><MdOutlineSignalCellularAlt /></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-text">
                                                    <p className='best-sller-price'>${items.price}</p>
                                                    <h5>{items.heading}</h5>
                                                    <img src={Rating} alt="" />
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                

                            </div>
                        </div>
                        <div className="best-seller-button-part  d-flex align-items-center justify-content-center mt-4 ">
                            {/* <a href="#" className='best-seller-product-button'>See All Products <FaArrowRightLong/></a> */}
                            <Link to="/shop/grid" className='best-seller-product-button'>See All Products <FaArrowRightLong/></Link>
                        </div>
                    </div>
                </div>
            <div className="special-offer mb-5" style={{backgroundImage: `url(${SpecialOffer})`}}>
                <div className="container">
                    <p>SPECIAL OFFER</p>
                    <h4>Beauty Inspired by Real
                    Shine In Life </h4>
                    <span>Completely grow maintainable niches via tactical services. Progressively synthesize market positioning paradigms for functional architectures. Professionally aggregate.</span>
                    <a href="#">Explore Now <FaArrowRightLong/></a>
                </div>
            </div>

            <LNews/>
            <div className="home-footer pb-5 mt-5">
                <div className="container">

                    <BenefitsSlider/>
                            
                    <div className="container-head row mt-5">
                        <div className="logo  col-12 col-md-4 order-md-2 pb-4">
                            <img src={LogoB} className='d-block' alt="" />
                        </div>
                        <div className="social-media-icon col-12 col-md-4 order-md-1 pb-4">
                            <div className="social-media-icon-container">
                                <FaFacebookF className='footer-icons' />
                            </div>
                            <div className="social-media-icon-container">
                                <FaTwitter className='footer-icons' />
                            </div>
                            <div className="social-media-icon-container">
                                <FaInstagram className='footer-icons' />
                            </div>
                            <div className="social-media-icon-container">
                                <FaPinterestP className='footer-icons' />
                            </div>
                        </div>
                        <div className="paymet-methods col-12 col-md-4 order-md-3 pb-4">
                            <img src={PaymentMethods} alt="" />
                        </div>
                    </div>
                    <div className="line mb-4 mt-4">
                    </div>
                    <div className="footer-lists row col-12">
                        <div className="nor-lists col-6 pb-4 col-lg-2">
                            <h5 className='list-header'>My Account</h5>
                            <ul>
                                <li>My Account</li>
                                <li>View Cart</li>
                                <li>Wish list</li>
                                <li>Compare</li>
                                <li>New Products</li>
                            </ul>
                        </div>
                        <div className="nor-lists col-6 pb-4 col-lg-2">
                            <h5 className='list-header'>Support</h5>
                            <ul>
                                <li>Help</li>
                                <li>Contact Us</li>
                                <li>Feedback</li>
                                <li>Customer Service</li>
                                <li>Store Locations</li>
                            </ul>
                        </div>
                        <div className="nor-lists col-12 pb-4 col-md-6 col-lg-2">
                            <h5 className='list-header'>Opening Time</h5>
                            <div className="list-devider row">
                                    <div className="col-5">
                                        <ul>
                                            <li>Mon:</li>
                                            <li>Tue:</li>
                                            <li>Wed:</li>
                                            <li>Fri:</li>
                                            <li>Sat:</li>
                                            <li>Sun:</li>
                                        </ul>
                                    </div>
                                    <div className="col-7">
                                        <ul>
                                            <li>8AM - 10PM</li>
                                            <li>8AM - 10PM</li>
                                            <li>8AM - 7PM</li>
                                            <li>7AM - 12PM</li>
                                            <li>9AM - 8PM</li>
                                            <li>Closed</li>
                                        </ul>
                                    </div>
                            </div>
                        </div>
                        <div className="nor-lists col-12 pb-4 col-md-6 col-lg-3">
                            <h5 className='list-header'>Contact Us</h5>
                            <ul>
                                <li><FaLocationDot className='footer-list-icon' /> 830 Broad way, New York, NY 10003,
                                United States</li>
                                <li><FaPhone className='footer-list-icon' /> +18008660286</li>
                                <li><IoMdMail className='footer-list-icon' /> aetor.info@gmail.com</li>
                            </ul>
                        </div>
                        <div className="nor-lists col-12 pb-4 col-lg-3">
                            <h5 className='list-header'>News Letter</h5>
                            <ul>
                                <li className='footer-sub'>Authoritatively morph 24/7 potentialities with error-free partnerships.</li>
                            </ul>
                            <form action="" id='footer-sub'>
                                <div className="btn-group">
                                    <input className='sub-input' id='footer-sub-input' type="text" placeholder='Enter your email....' />
                                    <button className='sub-button'>Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                                  
                </div>
            </div>

            <ViewItem cardHide={handleCloseViewItem} cardShow={cardView} />

                <IconsMini/>
            
        </div>
    );
};

export default Home;