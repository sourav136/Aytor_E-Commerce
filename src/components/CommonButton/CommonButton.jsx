import React from 'react';
import './CommonButton.css'
import { FaArrowRightLong } from "react-icons/fa6";

const ComonButton = ({commonBUtton}) => {
    return (
        <div>
            <a href="#" className='commonA'>{commonBUtton} <FaArrowRightLong /></a>
        </div>
    );
};

export default ComonButton;