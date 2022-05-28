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
        fetch(`http://localhost:5000/booking?email=${user.email}`, {
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
        <div>
            <div class="overflow-x-auto p-3">
                <table class="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>productName</th>
                            <th>customerName</th>
                            <th>Payment</th>
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