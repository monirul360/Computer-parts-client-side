import React from 'react';

const ReviewRow = ({ review }) => {
    return (
        <div class="m-3 bg-primary text-primary-content">
            <div class="card-body">
                <h2 class="card-title">Name: {review?.name}</h2>
                <p>{review?.description}</p>
                <div class="card-actions justify-end">
                    <p className='font-bold'>Ratings: {review?.ratings}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewRow;