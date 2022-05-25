import React from 'react';
import Banner from '../Banner/Banner';
import Parts from '../Parts/Parts';
import ShowReview from '../ShowReview/ShowReview';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <ShowReview></ShowReview>
        </div>
    );
};

export default Home;