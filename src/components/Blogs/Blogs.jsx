import React, { useState } from 'react';
import './Blogs.css'
import BlankBanner from '../BlankBanner/BlankBanner';
import IconsMini from '../IconsMini/IconsMini';
import BlogsImage from '../../assets/images/Blogs Image.png';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import Blogslist from './Blogslist';
import CommonFooter from '../CommonFooter/CommonFooter';

const Blogs = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = Blogslist.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(Blogslist.length / itemsPerPage);
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    };

    return (
        <div>
            <BlankBanner blankHead="Blogs" blankSubHead="Home  /  Blogs"/>
            <div className="blogs-content mt-5 mb-5" id='blogs'>
                <div className="container">
                    <div className="blogs-container pt-5 pb-5">
                        {
                            currentItems.map((blogs, index) =>{
                                return(
                                    <div className="blog-post mt-2 mb-2" key={index}>
                                        <div className="blog-date-background">
                                        </div>
                                        <div className="blog-date">
                                            <p>{blogs.date}</p>
                                        </div>
                                        <img src={BlogsImage} alt="" className='d-block'/>
                                        <div className="blog-post-text">
                                            <h5 className='blog-post-h5'>{blogs.heading}</h5>
                                            <p className='blog-post-p'>{blogs.description}</p>
                                            <a href="#" className='blog-post-a'>Read More <FaArrowRightLong /></a>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div> 

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


                </div>
            </div>

            <CommonFooter/>



            <IconsMini/>
        </div>
    );
};

export default Blogs;