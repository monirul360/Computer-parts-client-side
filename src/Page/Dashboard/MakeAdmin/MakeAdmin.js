import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Loading/Loading';
import MakeAdminRow from './MakeAdminRow';

const MakeAdmin = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://computer-parts.onrender.com/user', {
        method: 'GET',
        headers: {
            authorization: `${localStorage.getItem('accesToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='bg-white m-12'>
            <p className='p-4 bg-green-700 text-white'>Admin Route</p>
            <div class="overflow-x-auto p-3">
                <table class="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Add</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    {
                        users.map(a => <MakeAdminRow
                            key={a._id}
                            user={a}
                            refetch={refetch}
                        >
                        </MakeAdminRow>)
                    }
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;