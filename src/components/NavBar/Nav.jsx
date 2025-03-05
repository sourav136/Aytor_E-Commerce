import React, { useState } from 'react';
import Logo from '../../assets/images/Logo.png';
import './Nav.css'
import AllRoutes from './AllRoutes';
import Search from '../Search/Search';
import { Link, useLocation } from 'react-router-dom';
import { IoSearchSharp } from "react-icons/io5";
import { AiOutlineUser  } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa6";
import { BsHandbag } from "react-icons/bs";
import { useCart } from "../Context/CartContext";


const Nav = () => {
    const { cart } = useCart(); 
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

    const location = useLocation(); 
    let [value, setValue] = useState(false);
    let searchActive = () => {
        setValue(true);
    };

    let lock = () => {
        setValue(false);
    };

    return (
        <div>
            
                <nav className="navbar navbar-expand-lg bg-body-tertiary" id='navbar'>
                    <div className="container">
                        <a className="navbar-brand" href="#"><img src={Logo} className='nav-logo' alt="" /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                                
                                {AllRoutes.map((route,index)=>{
                                    if (route.subcomponents) {
                                        return (
                                            <li className="nav-item dropdown" key={index}>
                                                <a className="nav-link dropdown-toggle"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                                href={route.path}
                                                >
                                                    {route.title}{""}
                                                </a>
                                                
                                                <ul className="dropdown-menu">
                                                    {route.subcomponents.map((sub, index) => {
                                                        return (
                                                            <li key={index}>
                                                                <Link 
                                                                className={`dropdown-item ${location.pathname === sub.path ? 'active' : ''}`}
                                                                to={sub.path}
                                                                >   
                                                                    {sub.title}
                                                                </Link>
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            </li>
                                        )
                                    }
                                    else{
                                        return(
                                            <li className="nav-item" key={index}>
                                                <Link className={`nav-link ${location.pathname === route.path ? 'active' : ''}`} 
                                                to={route.path} >
                                                    {route.title}
                                                </Link>
                                            </li>
                                        )
                                    }
                                })}
                            </ul>
                            <div className="icons">
                                    <ul>
                                        <li>
                                            <Link className='search icons-link' onClick={searchActive}><IoSearchSharp /></Link>
                                        </li>
                                        <li>
                                            <Link className='icons-link'><AiOutlineUser  /></Link>
                                        </li>
                                        <li>
                                            <Link className='icons-link' to="/shop/wishlist"><FaRegHeart /></Link>
                                        </li>
                                        <li>
                                            <Link className="bag icons-link" to="/shop/cart">
                                                <BsHandbag />
                                                <div className="order-number">
                                                    <span>{cartCount}</span>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                </nav>
                {/* <div className="mini-screen-icons col-12">
                    <ul>
                        <li><a href="#" className='search-mini' onClick={searchActive}><IoSearchSharp /></a></li>
                        <li><a href="#" className='user-mini'><AiOutlineUser  /></a></li>
                        <li><a href="#" className='heart-mini'><FaRegHeart /></a></li>
                        <li>
                            <a href="#" className='bag-mini'>
                                <BsHandbag />
                                <div className="order-number">
                                    <span>0</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div> */}

                <Search trigger={value} lock={lock} />
            
            
            
            
            
            
            
            
            
            </div>
        
    );
};

export default Nav;