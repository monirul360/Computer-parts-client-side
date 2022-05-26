import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import MyorderRow from '../MyorderRow/MyorderRow';
import auth from './../../../Firebase-init';
const Myorder = () => {
    const [user] = useAuthState(auth);
    const [order, setOrder] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/booking?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrder(data));
    }, [user])
    return (
        <div>
            <p className='text-2xl my-2 p-4'>My orders</p>
            <div class="overflow-x-auto p-5">
                <table class="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Payment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            order.map((order, index) => <MyorderRow
                                key={order._id}
                                order={order}
                                index={index}
                            ></MyorderRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Myorder;