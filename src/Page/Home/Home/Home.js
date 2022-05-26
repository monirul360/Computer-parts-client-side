import React from 'react';
import Banner from '../Banner/Banner';
import Discount from '../Discount/Discount';
import Parts from '../Parts/Parts';
import ShowReview from '../ShowReview/ShowReview';
import Summary from '../Summary/Summary';
import Catagory from './../../Home/Catagory/Catagory';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <ShowReview></ShowReview>
            <Summary></Summary>
            <Discount></Discount>
            <Catagory></Catagory>
        </div>
    );
};

export default Home;