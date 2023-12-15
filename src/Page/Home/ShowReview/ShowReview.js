import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Loading/Loading';
import ReviewRow from '../ReviewRow/ReviewRow';

const ShowReview = () => {
    const { data: review, isLoading, refetch } = useQuery("review", () => fetch('http://localhost:5000/review').then(res => res.json()))
    if (isLoading) {
        return
    }
    const slicereview = review.slice(0, 9);
    return (
        <div className='mx-12'>
            <div className='p-2'>
                <p className='text-1xl px-5 uppercase py-2  w-60 font-bold'

                >Testimonials</p>
            </div>
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