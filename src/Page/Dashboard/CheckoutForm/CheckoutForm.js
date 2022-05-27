import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
const CheckoutForm = ({ payment }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [clineSecret, setClineSecret] = useState('')
    const { _id, totlaPrice, username, email } = payment;
    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `${localStorage.getItem('AccesToken')}`
            },
            body: JSON.stringify({ totlaPrice })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClineSecret(data.clientSecret);
                }
            });
    }, [totlaPrice])
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            setCardError(error.message);
        } else {
            setCardError('');
        }
        // 
        // confirm card payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clineSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: username,
                        email: email
                    },
                },
            },
        );
        if (intentError) {
            setCardError(intentError?.message);
        } else {
            setCardError('');
            setTransactionId(paymentIntent.id);
            setSuccess('Your Payment successful');
            //store payment on database
            const payment = {
                appointment: _id,
                transactionId: paymentIntent.id
            }
            fetch(`http://localhost:5000/booking/${_id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                    'authraze': `${localStorage.getItem("AccesToken")}`
                },
                body: JSON.stringify(payment)
            }).then(res => res.json())
                .then(data => {
                    console.log(data);
                })
        }

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-sm mt-5 btn-success' type="submit" disabled={!useStripe || !clineSecret}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-xl mt-5 text-red-500'>{cardError}</p>
            }
            {
                success && <div className='text-xl mt-5 text-red-500'>
                    <p>{success}</p>
                    <p> Your transaction Id{transactionId}</p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;