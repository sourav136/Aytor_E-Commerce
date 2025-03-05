import React from 'react';
import './NotFound.css';
import NotFoundImage from '../../assets/images/NotFound.png'
import CommonButton from '../CommonButton/CommonButton';
import CommonFooter from '../CommonFooter/CommonFooter';
import IconsMini from '../IconsMini/IconsMini';

const NotFound = () => {
    return (
        <div>
            <div className="notFound">
                <div className="container notFound-container">
                    <img src={NotFoundImage} alt="" className='notFound-image' />
                    <h5>PAGE NOT FOUND!</h5>
                    <p>Sorry, we couldn’t find the page you where looking for.
                    We suggest that you return to homepage.</p>
                    <CommonButton commonBUtton="Back to Home"/>

                </div>
            </div>

            <CommonFooter/>
            <IconsMini/>
        </div>
    );
};

export default NotFound;
