import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase-init';
import img from './../../../Image/User/user.png';
import emailicon from './../../../Image/Icon/icons8-email-35.png';
import educationicon from './../../../Image/Icon/icons8-education-35.png';
import addressicon from './../../../Image/Icon/icons8-address-35.png';
import numbericon from './../../../Image/Icon/icons8-call-35.png';
import socialicon from './../../../Image/Icon/icons8-internet-35.png';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
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


    // review data send database
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imageStorageKey = '9903ff48ea7130ca4de8dc43c159c096';
    const onSubmit = async (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const review = {
                        name: data.name,
                        description: data.description,
                        email: data.email,
                        ratings: data.ratings,
                        Specialist: data.Specialist,
                        image: img,
                    }
                    // send to your database 
                    fetch('http://localhost:5000/review', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `${localStorage.getItem('AccessToken')}`
                        },
                        body: JSON.stringify(review)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Add Review successfull');
                                reset();
                            }
                            else {
                                toast.error('Failed to Add Review');
                            }
                        })
                }
            })
    }
    return (
        <>
            <div className='m-10' >
                <div className='flex items-center p-8 border-b-2' style={{ "background": "#ffff" }}>
                    <div class="avatar">
                        <div class="w-28 rounded-full ">
                            <img src={user?.photoURL || img} alt="" />
                        </div>
                    </div>
                    <div className='ml-4'>
                        <p className="text-2xl font-bold">{user?.displayName}</p>
                        <p className='my-2'>Full Stack Developer</p>
                        <button className="btn btn-sm">
                            <Link to="/dashboard/updateprofile">Update Your Profile</Link>
                        </button>
                    </div>
                </div>
                <div style={{ "background": "#F0F2F5" }}>

                    <div className="grid grid-cols-2 cols-1">
                        <div className=' bg-white p-5 m-5'>
                            <div className='flex items-center gap-2'>
                                <div>
                                    <img src={emailicon} alt="" />
                                </div>
                                <div>
                                    <p className='font-bold text-1xl'>
                                        <span className='font-normal'>My email </span>
                                        {user.email}</p>
                                </div>
                            </div>
                            {education &&

                                <div className='flex items-center gap-2'>
                                    <div>
                                        <img src={educationicon} alt="" />
                                    </div>
                                    <div>
                                        <p className='font-bold text-1xl py-3'>
                                            <span className='font-normal'>Went to </span>
                                            {education}</p>
                                    </div>
                                </div>
                            }
                            {address &&

                                <div className='flex items-center gap-2'>
                                    <div>
                                        <img src={addressicon} alt="" />
                                    </div>
                                    <div>
                                        <p className='font-bold text-1xl py-3'>
                                            <span className='font-normal'>Lives in </span>
                                            {address}</p>
                                    </div>
                                </div>
                            }
                            {phone &&
                                <div className='flex items-center gap-2'>
                                    <div>
                                        <img src={numbericon} alt="" />
                                    </div>
                                    <div>
                                        <p className='font-bold text-1xl py-3'>
                                            <span className='font-normal'>My number </span>
                                            {phone}</p>
                                    </div>
                                </div>
                            }
                            {social &&
                                <div className='flex items-center gap-2'>
                                    <div>
                                        <img src={socialicon} alt="" />
                                    </div>
                                    <div>
                                        <p className='font-bold text-1xl py-3'>
                                            <span className='font-normal'>Social Link </span>
                                            {social}</p>
                                    </div>
                                </div>
                            }
                        </div>
                        <div className="m-5">
                            <label for="profile-modal">
                                <button className="btn bg-white  pb-36 pt-5 border-none hover:bg-white" id="">
                                    <div className="flex items-center border-b-2">
                                        <div class="avatar">
                                            <div class="w-12 rounded-full ">
                                                <img src={user?.photoURL || img} alt="" />
                                            </div>
                                        </div>
                                        <div className='m-3'>
                                            <label for="profile-modal">
                                                <input type="text" placeholder="Your Review ?" className="input input-bordered rounded-full w-full max-w-xs" disbled />
                                            </label>
                                        </div>
                                    </div>
                                    <div className='flex gap-3 my-2  p-3'>
                                        <div>
                                            <label for="profile-modal">
                                                <span className='btn btn-xs'>Add Review</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label for="profile-modal">
                                                <span className='btn btn-xs'>Add Photo</span>
                                            </label>
                                        </div>

                                        <div>
                                            <label for="profile-modal">
                                                <span className='btn btn-xs'>Live Video</span>
                                            </label>
                                        </div>

                                    </div>
                                </button>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            {/* modal start*/}

            <input type="checkbox" id="profile-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle ">
                <div class="modal-box mx-auto">
                    <label
                        for="profile-modal"
                        class="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>
                    <h3 class="font-bold text-center mb-5 text-2xl">Add Review</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" value={user?.displayName} class="input input-bordered w-full " {...register("name", { required: true })} />
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" value={user?.email} class="input input-bordered w-full " {...register("email", { required: true })} />
                        <label className="label">
                            <span className="label-text">Specialist</span>
                        </label>
                        <input type="text" placeholder="Specialist" class="input input-bordered w-full " {...register("Specialist", { required: true })} />
                        <label class="label">
                            <span class="label-text-alt text-red-700">
                                {errors.Specialist && "Specialist is required"}
                            </span>
                        </label>

                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>

                        <textarea placeholder="Description" className="textarea textarea-bordered textarea-md w-full"{...register("description", { required: true })}  ></textarea>
                        <label class="label">
                            <span class="label-text-alt text-red-700">
                                {errors.description && "Description is required"}
                            </span>
                        </label>

                        <label className="label">
                            <span className="label-text">Ratings</span>
                        </label>
                        <select {...register("ratings", { required: true })} class="select select-bordered w-full">
                            <option value="5">5(✭ ✭ ✭ ✭ ✭)</option>
                            <option value="4">4(✭ ✭ ✭ ✭)</option>
                            <option value="3">3(✭ ✭ ✭)</option>
                            <option value='2'>2(✭ ✭)</option>
                            <option value="1">1(✭)</option>
                        </select>

                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="file" className="input input-bordered w-full " {...register("image", { required: true })} />
                        <label class="label">
                            <span class="label-text-alt text-red-700">
                                {errors.image && "Image is required"}
                            </span>
                        </label>
                        <input type="submit" value="ADD REVIEW" class="input input-bordered btn  btn-active mt-3 mb-4 w-full " />
                    </form>
                </div>
            </div>

        </>
    );
};

export default Profile;