import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Loading/Loading';
import Partsrow from '../Parts-row/Parts-row';

const Parts = () => {
    const { data: parts, isLoading, refetch } = useQuery("parts", () => fetch('https://computer-parts.onrender.com/perts').then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    const sliceParts = parts.slice(0, 6);
    return (
        <div>
            <p className='text-3xl text-center  p-3'>Our parts</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1'>
                {
                    sliceParts.map(parts => <Partsrow
                        key={parts._id}
                        parts={parts}
                    ></Partsrow>)
                }
            </div>
        </div>
    );
};

export default Parts;