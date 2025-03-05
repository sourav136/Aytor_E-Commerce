import React from 'react';
import './search.css'
import Banner from '../../assets/images/search.png';
import { RxCross2 } from "react-icons/rx";

const Search = ({trigger, lock}) => {
    return (
        <div>
            <div className={`lock ${trigger ? "unlock" : ""}`} >
                <div className="contents">
                <div className="wrap">
                </div>
                
                    <img src={Banner} alt="Search Banner" className='banner'/>
                    <div className="parent">

                        <h1 className='search-here'>Search Here!</h1>
                        <div className="search-part">
                            <form action="" className='search-bar'>
                                <input type="text" name="search" placeholder="Search" className='text'/>
                                <button className='search-button'>Search</button>
                            </form>
                        </div>
                    </div>
                    <span className='cross' onClick={lock}><RxCross2 /></span>
                </div>
                    
            </div>
        </div>
    );
};

export default Search;