import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../Firebase-init';
import UseAdmin from '../Hooks/UseAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = UseAdmin(user)
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    <p className='text-primary p-4 my-4 text-2xl'>Welcome my Dashboard</p>
                    <Outlet></Outlet>
                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto bg-neutral  w-50 text-base-content text-blue-50">
                        <li><Link to='/dashboard'>My Profile</Link></li>
                        {admin ? <>
                            <li><Link to='/dashboard/addproduct'>
                                Add Product</Link></li>
                            <li><Link to='/dashboard/manageProduct'>Manage Products</Link></li>
                            <li><Link to='/'>Manage All Orders</Link></li>
                            <li><Link to='/dashboard/makeadmin'>Make Admin</Link></li>

                        </>
                            : <>
                                <li><Link to='/dashboard/order'>My Orders</Link></li>
                                <li><Link to='/dashboard/addreview'>Add A Review</Link></li>
                            </>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;