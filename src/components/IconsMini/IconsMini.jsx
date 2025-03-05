import React, { useState } from 'react';
import './IconsMini.css'
import Search from '../Search/Search';
import { IoSearchSharp } from "react-icons/io5";
import { AiOutlineUser  } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa6";
import { BsHandbag } from "react-icons/bs";
import { useCart } from "../Context/CartContext";
import { Link } from 'react-router-dom';

const IconsMini = () => {

        const { cart } = useCart(); 
        const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

        let [value, setValue] = useState(false);
        let searchActive = () => {
            setValue(true);
        };
    
        let lock = () => {
            setValue(false);
        };

    return (
        <div>
            
                <div className="mini-screen-icons col-12">
                    <ul>
                        <li>
                        <Link className='search-mini' onClick={searchActive}><IoSearchSharp /></Link>
                        </li>
                        <li>
                            <Link className='user-mini'><AiOutlineUser  /></Link>
                        </li>
                        <li>
                            <Link className='heart-mini' to="/shop/wishlist"><FaRegHeart /></Link>
                        </li>
                        <li>
                            
                            <Link className='bag-mini' to="/shop/cart">
                                <BsHandbag />
                                <div className="order-number">
                                    <span>{cartCount}</span>
                                </div>
                            </Link>
                            
                        </li>
                    </ul>
                </div>
                <Search trigger={value} lock={lock} />
            
        </div>
    );
};

export default IconsMini;