import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import useNavigate
import { useCart } from '../Context/CartContext'; // ✅ Import CartContext
import  './Grid.css'
import BlankBanner from '../BlankBanner/BlankBanner';
import IconsMini from '../IconsMini/IconsMini';
// import Grid1 from '../../assets/images/Grid-1.png'
import Rating from '../../assets/images/Rating.png';
import GridCardList from './GridCardList';
import CommonFooter from '../CommonFooter/CommonFooter';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import ViewItem from '../ViewItem/ViewItem';
import { useWishlist } from '../Context/WishlistContext';

const Grid = () => {

    const { toggleWishlist, isInWishlist, viewItemDetails } = useWishlist();
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

    const { addToCart } = useCart(); // Get addToCart function from the context
    const navigate = useNavigate(); // Get navigate function for routing
  
    const handleAddToCart = (item) => {
      addToCart(item); // Add item to the cart
      navigate('/shop/cart'); // Navigate to cart page
    };

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = GridCardList.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(GridCardList.length / itemsPerPage);
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }
    const handleNext = () => {
        if (currentPage < totalPages){
            setCurrentPage(currentPage + 1);
        }
    }
    const handlePrev = () => {
        if (currentPage > 1){
            setCurrentPage(currentPage - 1);
        }
    }

    const [cardView, setCardView] = useState(false);
    const show = () =>{
        setCardView(true);
    }

    const hide = () =>{
        setCardView(false);
    }
    return (
        <div>
            <BlankBanner blankHead='Shop - Grid;' blankSubHead='Home  /  Shop'/>
            <div className="shop-grid pt-5 pb-5" id='grid'>
                <div className="container">
                    <div className="shop-grid-cards-container">
                        {
                            currentItems.map((cards,index) => {
                                return (
                                    <div className="shop-grid-card" key={index}>
                                        <div className={`status ${cards.status === 'new' ? 'active' : ''}`}>
                                            <p>New</p>
                                        </div>
                                        <img src={cards.image} alt="" className='d-block grid-image'/>
                                        <div className="grid-card-bottom-part">
                                            <div className="grid-card-text">
                                                <h5>{cards.heading}</h5>
                                                <p>${cards.price}</p>
                                            </div>
                                            <div className="grid-card-rating">
                                                <img src={Rating} alt="" className='d-inline-block' />
                                                <span>(5)</span>
                                            </div>
                                        </div>
                                        <div className="grid-card-icons">
                                            <div className="grid-card-icon-container d-flex align-items-center justify-content-center"
                                            onClick={() => handleAddToCart(cards)} > 
                                                <MdOutlineAddShoppingCart  className='grid-card-icon' />
                                            </div>
                                            <div className="grid-card-icon-container d-flex align-items-center justify-content-center"> 
                                                <MdOutlineSignalCellularAlt className='grid-card-icon' />
                                            </div>
                                            <div onClick={() => handleViewItem(cards)}
                                            className="grid-card-icon-container d-flex align-items-center justify-content-center"> 
                                                <FaEye className='grid-card-icon' />
                                            </div>
                                            <div onClick={() => toggleWishlist(cards)}
                                             className="grid-card-icon-container d-flex align-items-center justify-content-center"> 
                                                <FaHeart  className={`grid-card-icon ${isInWishlist(cards.id) ? 'text-danger' : ''}`} />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <nav>
                            <ul className="pagination justify-content-center">
                                {/* Previous Button */}
                                <li
                                    className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
                                    onClick={handlePrev}
                                >
                                    <span className="page-link"><FaArrowLeftLong /> Previous</span>
                                </li>
    
                                {/* Page Numbers */}
                                {Array.from({ length: totalPages }, (_, index) => (
                                    <li
                                    key={index + 1}
                                    className={`page-item ${index + 1 === currentPage ? "active" : ""}`}
                                    onClick={() => handlePageChange(index + 1)}
                                    >
                                    <span className="page-link">{index + 1}</span>
                                    </li>
                                ))}
                                {/* Next Button */}
                                <li
                                    className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}
                                    onClick={handleNext}
                                >
                                    <span className="page-link">Next <FaArrowRightLong/></span>
                                </li>
                            </ul>
                        </nav>
                        {/* <div className="shop-grid-card">
                            <div className="status">
                                <p>New</p>
                            </div>
                            <img src={Grid1} alt="" className='d-block'/>
                            <div className="grid-card-bottom-part">
                                <div className="grid-card-text">
                                    <h5>Spaghetti Hoodie</h5>
                                    <p>$125.65</p>
                                </div>
                                <div className="grid-card-rating">
                                    <img src={Rating} alt="" className='d-inline-block' />
                                    <span>(5)</span>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>

            <ViewItem cardHide={handleCloseViewItem} cardShow={cardView} />



            <CommonFooter/>
            <IconsMini/>
        </div>
    );
};

export default Grid;