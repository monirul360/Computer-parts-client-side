import React from 'react';
import bannerImg from './../../../Image/Banner/banner.jpg';
const Banner = () => {
    return (
        <div className='w-full mb-12  p-8 rounded'>
            <img src={bannerImg} alt="Shoes" />
        </div>
    );
};

export default Banner;