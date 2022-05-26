import React from 'react';
import Banner from '../Banner/Banner';
import Parts from '../Parts/Parts';
import ShowReview from '../ShowReview/ShowReview';
import Summary from '../Summary/Summary';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <ShowReview></ShowReview>
            <Summary></Summary>
        </div>
    );
};

export default Home;