import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase-init';
import img from './../../../Image/User/user.png';
const Profile = () => {

    const [user] = useAuthState(auth)
    const [profile, setProfile] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/users/${user?.email}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authraze': `${localStorage.getItem("AccesToken")}`
            }
        })
            .then(res => res.json())
            .then(data => setProfile(data));
    }, [user])
    const { education, phone, address, social } = profile;
    return (
        <div>
            <div className='flex items-center p-8'>
                <div class="avatar">
                    <div class="w-24 rounded-full ">
                        <img src={user?.photoURL || img} alt="" />
                    </div>
                </div>
                <div className='ml-4'>
                    <p className="text-secondary text-2xl font-bold">{user?.displayName}</p>
                </div>
            </div>
            <div className="bg-gray-300 p-12">
                <button className="btn btn-sm">
                    <Link to="/dashboard/updateprofile">Update Your Profile</Link>
                </button>
                <div className='mt-8'>
                    <p className='font-bold text-1xl py-3'>Email : {user.email}</p>
                    {education && <p className='font-bold text-1xl py-3'>Education : {education}</p>}
                    {address && <p className='font-bold text-1xl py-3'>Address : {address}</p>}
                    {phone && <p className='font-bold text-1xl py-3'>Phone : {phone}</p>}
                    {social && <p className='font-bold text-1xl py-3'>Social : {social}</p>}
                </div>
            </div>
        </div>
    );
};

export default Profile;