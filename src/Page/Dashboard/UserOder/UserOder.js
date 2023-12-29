import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Loading/Loading';
import { toast } from 'react-toastify';

const UserOder = () => {
    const { data: alloder, isLoading, refetch } = useQuery("parts", () => fetch('https://computer-parts.onrender.com/useroder').then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }

    const handleDelete = (id) => {
        fetch(`https://computer-parts.onrender.com/useroder/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`Delete Oder`);
                    refetch();
                }
            })
    }

    return (
        <div className='m-10'>
            <div class="flex flex-col  bg-white">
                <p className='text-2xl bg-green-700 p-4 text-white'>All Oders</p>
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full text-left text-sm font-light">
                                <thead
                                    class="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                                    <tr>
                                        <th scope="col" class="px-6 py-4">Image</th>
                                        <th scope="col" class="px-6 py-4">Product Name</th>
                                        <th scope="col" class="px-6 py-4">User Name</th>
                                        <th scope="col" class="px-6 py-4">Price</th>
                                        <th scope="col" class="px-6 py-4">Quantity</th>
                                        <th scope="col" class="px-6 py-4">Payment</th>
                                        <th scope="col" class="px-6 py-4">Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {alloder.map((oder) =>
                                        <tr class="border-b bg-white dark:border-neutral-500 dark:bg-neutral-600" key={oder?._id} refetch>
                                            <td class="whitespace-nowrap px-6 py-4">
                                                <img className='w-24' src={oder?.photo} alt="" />
                                            </td>
                                            <td class="whitespace-nowrap px-6 py-4">{oder?.productName}</td>
                                            <td class="whitespace-nowrap px-6 py-4">{oder?.customerName}</td>
                                            <td class="whitespace-nowrap px-6 py-4">{oder?.price} USD</td>
                                            <td class="whitespace-nowrap px-6 py-4">{oder?.orderQuantity} PIC</td>
                                            <td class="whitespace-nowrap px-6 py-4">{oder?.transactionId}</td>
                                            <td class="whitespace-nowrap px-6 py-4">
                                                <button onClick={() => handleDelete(oder?._id)} type='button' className='px-4 py-2 text-white rounded bg-red-700'>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                    }




                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserOder;