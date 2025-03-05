import React, { useState } from 'react';
import { FaCartPlus } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import './Slider_2.css';
import ViewItem from '../ViewItem/ViewItem.jsx'
import Rating from '../../assets/images/rating.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import GridCardList from '../Grid/GridCardList.js';
import { useCart } from '../Context/CartContext.jsx';
import { useNavigate } from 'react-router-dom';
import { useWishlist } from '../Context/WishlistContext.jsx';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';

const Slider_2 = () => {
    const { toggleWishlist, isInWishlist, viewItemDetails } = useWishlist();
    const { addToCart } = useCart();
    const navigate = useNavigate();
    const [cardView, setCardView] = useState(false); // Controls ViewItem visibility

    // Function to add item to cart and navigate to cart page
    const handleAddToCart = (item) => {
        addToCart(item);
        navigate('/shop/cart');
    };

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
            <h1 className='mt-5'>New Arrivals Products</h1>
            <div className="container mt-5" id='slider'>
                <div className="row">
                    <Swiper
                        loop={true}
                        slidesPerView={4}
                        spaceBetween={30}
                        freeMode={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            420: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            850: { slidesPerView: 3 },
                            1024: { slidesPerView: 4 },
                        }}
                        modules={[FreeMode, Pagination, Autoplay]}
                        className="mySwiper mb-5"
                    >
                        <div>
                            {GridCardList.filter(item => item.product === 'new-arrivals').map((item, index) => (
                                <SwiperSlide key={index} className="slider-card-container">
                                    <div className="card">
                                        <div className="slider-card-container">
                                            <img src={item.image} alt="Image" className="product-image" />
                                            <div className="card-body">
                                                <p>${item.price}</p>
                                                <h4>{item.heading}</h4>
                                                <img src={Rating} alt="" />
                                            </div>
                                            <div className="offer">
                                                <p>-45%</p>
                                            </div>
                                            <div className="slider-icons">
                                                <div className="slider-icon" onClick={() => handleAddToCart(item)}>
                                                    <span><FaCartPlus className="icon" /></span>
                                                </div>
                                                <div className="slider-icon" onClick={() => toggleWishlist(item)}>
                                                    <span><FaHeart className={`sliderIcon ${isInWishlist(item.id) ? 'text-danger' : ''}`} /></span>
                                                </div>
                                                <div className="slider-icon" onClick={() => handleViewItem(item)}>
                                                    <span><FaEye /></span>
                                                </div>
                                                <div className="slider-icon">
                                                    <span><MdOutlineSignalCellularAlt /></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </div>
                    </Swiper>
                </div>
            </div>

            {/* Pass the updated props to ViewItem */}
            <ViewItem cardHide={handleCloseViewItem} cardShow={cardView} />
        </div>
    );
};
 export default Slider_2;

// export default Slider_2;
