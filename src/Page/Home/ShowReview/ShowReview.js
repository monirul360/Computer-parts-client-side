import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Loading/Loading';
import ReviewRow from '../ReviewRow/ReviewRow';

const ShowReview = () => {
    const { data: review, isLoading, refetch } = useQuery("review", () => fetch('http://localhost:5000/review').then(res => res.json()))
    if (isLoading) {
        return
    }
    const slicereview = review.slice(0, 6);
    return (
        <div className='mx-12'>
            <p className='text-3xl my-8 text-center text-primary font-bold'>Testimonials</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    slicereview.slice(0).reverse().map(r => <ReviewRow
                        key={r._id}
                        review={r}
                    ></ReviewRow>)
                }
            </div>
        </div>
    );
};

export default ShowReview;