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
        <div className='py-2' style={{ "background": "rgb(229 222 222)" }}>
            <div className='bg-white m-10 p-3'>
                <div className='p-2'>
                    <p className='text-1xl px-5 uppercase py-2  w-60 font-bold'

                    >Testimonials <span className='text-green-700'>➞</span></p>
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
        </div>
    );
};

export default ShowReview;