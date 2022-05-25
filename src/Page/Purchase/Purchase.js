import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/perts/${id}`
    const [parts, setParts] = useState([]);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setParts(data));
    }, [])
    return (
        <div>
            <div className="hero p-5 bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={parts.image} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">{parts.name}</h1>
                        <p className="py-6">{parts.description}</p>
                        <p className='py-2'>Quantity : {parts.quantity}</p>
                        <p className='pb-3'>Available : {parts.available}</p>
                        <button className="btn btn-primary">Get Started</button>
                        <form>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;