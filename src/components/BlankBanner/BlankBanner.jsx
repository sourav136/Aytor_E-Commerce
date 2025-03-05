import React from 'react';
import './BlankBanner.css'

const BlankBanner = ({blankHead, blankSubHead}) => {
    return (
        <div>
            <div className="blank" id='blank'>
                <div className="container">
                    <div className="content">
                        <h2>{blankHead}</h2>
                        <p>{blankSubHead}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlankBanner;