import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../Firebase-init';

const Purchase = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const { id } = useParams();
    const url = `http://localhost:5000/perts/${id}`
    const [parts, setParts] = useState([]);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setParts(data));
    }, [])
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const price = parts?.price;
    const quantity = parts?.quantity;
    const totlaPrice = price * quantity;
    const onSubmit = async (data) => {
        const booking = {
            name: parts.name,
            productid: parts._id,
            username: data.name,
            address: data.address,
            email: data.email,
            totlaPrice: totlaPrice,
            number: data.number,
        }
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    toast.success('Order successfull');
                    reset();
                    navigate('/dashboard/')
                }
                else {
                    toast.error('Failed to Order');
                }
            })
    }
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-10 gap-10 items-center '>
                <div>
                    <img src={parts.image} alt="" />
                    <h1 className="text-3xl py-3 font-bold">{parts.name}</h1>
                    <p className="py-2">{parts.description}</p>
                    <p className='py-2'>Price : ${parts.price}</p>
                    <p className='py-2'>Quantity : {parts.quantity}</p>
                    <p className='pb-3'>Available : {parts.available}</p>
                    <form>
                        <input type="number" name='Add Quantity' placeholder='Add ' className="input input-bordered w-full max-w-xs" />
                    </form>
                </div>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input type="name" placeholder="Address" className="input input-bordered w-full max-w-xs" {...register("address", { required: true })} />
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="name" readOnly value={user?.displayName} className="input input-bordered w-full max-w-xs" {...register("name", { required: true })} />
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" value={user?.email} readOnly className="input input-bordered w-full max-w-xs" {...register("email", { required: true })} />
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" readOnly value={totlaPrice} className="input input-bordered w-full max-w-xs" {...register("price", { required: true })} />
                        <label className="label">
                            <span className="label-text">Number</span>
                        </label>
                        <input type="number" placeholder="Number" class="input input-bordered w-full max-w-xs" {...register("number", { required: true })} />
                        <br />
                        <input
                            type="text"
                            name="quantity"
                            value={quantity + "pcs"}
                            class="input input-bordered w-full  max-w-xs"
                        />
                        <input
                            type="text"
                            name="price"
                            value={"Price:$" + quantity * parts.price}
                            class="input input-bordered w-full  max-w-xs"
                        />
                        <input className='input input-bordered bg-primary text-white w-full my-3  max-w-xs' type="submit" value="Order" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Purchase;