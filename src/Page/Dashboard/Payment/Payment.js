import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
    Elements,
} from '@stripe/react-stripe-js';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
const stripePromise = loadStripe('pk_test_51L2KrPBqppFXqmqSz2Xn8OFFJfwBYHRvMb60ebEL1qqM2uSzm89FmBxtXOw1lkd9OTv2oPeKgcxOOHa9l2WqOnpq00zF0D8T7j');
const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/booking/${id}`;
    const { data: payment, isLoading } = useQuery(["pay", id], () => fetch(url).then(res => res.json()))
    if (isLoading) {
        return
    }
    return (
        <div>
            <div className="card mx-12 my-10 w-95 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-1xl text-pink-500">Hi {payment.username}</h2>
                    <p className='text-2xl'>Please Pay for {payment?.name}</p>
                    <p className='text-2xl text-red-500'>Please Pay ${payment.totlaPrice}</p>
                </div>
            </div>
            <div class="card w-96  mx-12 my-10 bg-base-100 shadow-xl">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm payment={payment} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;