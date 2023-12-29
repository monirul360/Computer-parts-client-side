import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
    Elements,
} from '@stripe/react-stripe-js';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Loading/Loading';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
const stripePromise = loadStripe('pk_test_51L2KrPBqppFXqmqSz2Xn8OFFJfwBYHRvMb60ebEL1qqM2uSzm89FmBxtXOw1lkd9OTv2oPeKgcxOOHa9l2WqOnpq00zF0D8T7j');
const Payment = () => {
    const { id } = useParams();
    const url = `https://computer-parts.onrender.com/booking/${id}`;
    const { data: payment, isLoading } = useQuery(["pay", id], () => fetch(url).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='grid grid-cols-1 place-items-center'>
            <div className='bg-gray-900' >
                <p className='bg-green-700 text-xl text-white p-5'>Payment</p>
                <div className='p-10'>
                    <div className="card mb-5  bg-base-100">
                        <div className="card-body">
                            <h2 className="card-title text-1xl text-pink-500">Hi {payment.customerName}</h2>
                            <p className='text-2xl my-2'>Please Pay for {payment?.productName}</p>
                            <p className='text-2xl text-red-500'>Pay Now ${payment.price} ammount</p>
                        </div>
                    </div>
                    <div class="card bg-base-100">
                        <div class="card-body">
                            <Elements stripe={stripePromise}>
                                <CheckoutForm payment={payment} />
                            </Elements>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;