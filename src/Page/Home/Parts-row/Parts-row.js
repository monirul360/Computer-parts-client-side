import React from 'react';
import { Link } from 'react-router-dom';

const Partsrow = ({ parts }) => {
    const { _id, name, description, quantity, available, price, image } = parts;
    const sliceDes = description.slice(0, 100);
    return (
        <div>
            <div class="card m-5 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p>{sliceDes}</p>
                    <p>Quantity : {quantity}</p>
                    <p>Available : {available}</p>
                    <p className='text-red-600 font-bold'>Price : ${price}</p>
                    <div class="card-actions justify-end">
                        <Link to={`/purchase/${_id}`} class="btn btn-primary btn-sm">Buy Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partsrow;