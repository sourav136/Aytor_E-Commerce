import React from 'react';
import './Wishlist.css';
import BlankBanner from '../BlankBanner/BlankBanner';
import IconsMini from '../IconsMini/IconsMini';
import { RxCross2 } from "react-icons/rx";
import { FaCartPlus } from "react-icons/fa6";
import { IoMdCheckmark } from "react-icons/io";
import CommonFooter from './../CommonFooter/CommonFooter';
import { useWishlist } from '../Context/WishlistContext'; // Import Wishlist Context
import { useNavigate } from 'react-router-dom'; // ✅ Import useNavigate
import { useCart } from '../Context/CartContext'; 

const Wishlist = () => {
    const { wishlist, toggleWishlist } = useWishlist(); // Get wishlist state & function
    const { addToCart } = useCart(); // Get addToCart function from the context
    const navigate = useNavigate(); // Get navigate function for routing
  
    const handleAddToCart = (item) => {
      addToCart(item); // Add item to the cart
      navigate('/shop/cart'); // Navigate to cart page
    };

    return (
        <div>
            <BlankBanner blankHead="Wishlist" blankSubHead="Home  /  Wishlist" />

            <div className="wishlist-table pt-5 pb-5">
                <div className="container">
                    {wishlist.length === 0 ? (
                        <p className="empty-wishlist">Your wishlist is empty.</p>
                    ) : (
                        <table className='wishlist-main-table'>
                            <thead className='wishlist-table-head'>
                                <tr>
                                    <th><p className='wishlist-table-head-name'>Products</p></th>
                                    <th><p className='wishlist-table-head-name'>Price / Unit</p></th>
                                    <th><p className='wishlist-table-head-name'>Stock Status</p></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody className='wishlist-table-body'>
                                {wishlist.map((item) => (
                                    <tr className='wishlist-table-body-item' key={item.id}>
                                        <td>
                                            <div className="product">
                                                <RxCross2 className='product-icon' onClick={() => toggleWishlist(item)} />
                                                <img src={item.image} alt={item.name} />
                                                <p>{item.name}</p>
                                            </div>
                                        </td>
                                        <td><p className='price'>${item.price}</p></td>
                                        <td><p className='stock'><IoMdCheckmark className='stock-check' /> In Stock</p></td>
                                        <td className='cart-button-part'>
                                            <div className="cart-button-container">
                                                {/* <a href="#" className='cart-button m-auto'>Add to Cart</a> */}
                                                <button onClick={() => handleAddToCart(item)} className='cart-button m-auto'>
                                                    Add to Cart
                                                </button>
                                                <FaCartPlus onClick={() => handleAddToCart(item)} className='wishlist-cart-icon' />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>

            <CommonFooter />
            <IconsMini />
        </div>
    );
};

export default Wishlist;
