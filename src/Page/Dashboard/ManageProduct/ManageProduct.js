import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Loading/Loading';
import Managerow from '../Managerow/Managerow';

const ManageProduct = () => {
    const { data: parts, isLoading, refetch } = useQuery("parts", () => fetch('http://localhost:5000/perts').then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <p className='p-4 text-2xl'>Manage all Product</p>
            <div class="overflow-x-auto p-5">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Img</th>
                            <th>name</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            parts.map((parts, index) => <Managerow
                                key={parts._id}
                                parts={parts}
                                index={index}
                                refetch={refetch}
                            ></Managerow>)
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default ManageProduct;