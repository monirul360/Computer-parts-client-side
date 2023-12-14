import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Loading/Loading';
import Partsrow from '../Parts-row/Parts-row';
import { Link } from 'react-router-dom';

const Parts = () => {
    const { data: parts, isLoading, refetch } = useQuery("parts", () => fetch('http://localhost:5000/perts').then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    const sliceParts = parts.slice(0, 6);
    return (
        <>
            <div className='px-10 py-10' style={{ "background": "#EEEEEE" }}>
                <div className='pb-10' style={{ "background": "#FFFFFF" }}>

                    <div className="flex items-center justify-between ps-5 py-5 border-b-2">
                        <div>
                            <p className='text-2xl ms-2'>BEST PRODUCT</p>
                        </div>
                        <div className='mr-10'>
                            <ul className='flex'>
                                <li className='mr-3 text-xl hover:text-sky-700'> <Link to="/">Monitor</Link></li>
                                <li className='mr-3 text-xl hover:text-sky-700'> <Link to="/">Pinter</Link></li>
                                <li className='mr-3 text-xl hover:text-sky-700'> <Link to="/">Mouse</Link></li>
                                <li className='mr-3 text-xl hover:text-sky-700'> <Link to="/">Keyboard</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className='mx-5'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                            {
                                sliceParts.map(parts => <Partsrow
                                    key={parts._id}
                                    parts={parts}
                                ></Partsrow>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Parts;