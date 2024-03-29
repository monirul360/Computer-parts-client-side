import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../Firebase-init';
import MyorderRow from '../MyorderRow/MyorderRow';
import OrderCancelModal from './../Myordercancel/OrderCancelModal';
const Myorder = () => {
    const [user] = useAuthState(auth);
    const [cancelmodal, setCancelmodal] = useState(null);
    const navigate = useNavigate();
    const [booking, setBooking] = useState([]);
    useEffect(() => {
        fetch(`https://computer-parts.onrender.com/booking?email=${user.email}`, {
            method: 'GET',
            headers: {
                'authraze': `${localStorage.getItem("AccesToken")}`
            }
        })
            .then(res => {
                console.log('insite response', res)
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('AccesToken');
                    navigate('/');
                }
                return res.json()
            }
            )
            .then(data => {
                setBooking(data)
            });
    }, [user])
    return (
        <div className='bg-white  mx-10'>
            <p className='p-5 text-xl bg-green-700 text-white'>MY CARD</p>
            <div class="overflow-x-auto p-4">
                <table class="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>productName</th>
                            <th>customerName</th>
                            <th>Payment</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            booking.map((order, index) => <MyorderRow
                                key={order._id}
                                order={order}
                                index={index}
                                setCancelmodal={setCancelmodal}
                            ></MyorderRow>)
                        }
                    </tbody>
                </table>
            </div>
            {
                cancelmodal && <OrderCancelModal
                    cancelmodal={cancelmodal}
                    setCancelmodal={setCancelmodal}
                ></OrderCancelModal>
            }
        </div>
    );
};

export default Myorder;