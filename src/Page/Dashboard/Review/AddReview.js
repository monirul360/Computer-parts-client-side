import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../Firebase-init';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {
        console.log(data);
        const rating = {
            name: data.name,
            description: data.description,
            ratings: data.ratings,
        }
        // send to your database 
        fetch('https://computer-parts.onrender.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(rating)
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
    return (
        <div>
            <p className='text-2xl ml-5'>Add A Review</p>
            <div className="card w-96 p-2 my-12 mx-auto bg-base-100 shadow-xl">
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="name" value={user?.displayName} class="input input-bordered w-full max-w-xs" {...register("name", { required: true })} />
                        <label class="label">
                            <span class="label-text-alt text-red-700">
                                {errors.name && "Name is required"}
                            </span>
                        </label>
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" placeholder="Description" class="input input-bordered w-full max-w-xs" {...register("description", { required: true })} />
                        <label class="label">
                            <span class="label-text-alt text-red-700">
                                {errors.description && "description is required"}
                            </span>
                        </label>
                        <label className="label">
                            <span className="label-text">Ratings</span>
                        </label>
                        <select {...register("ratings", { required: true })} class="select select-bordered w-full max-w-xs">
                            <option value="5">5</option>
                            <option value="4">4</option>
                            <option value="3">3</option>
                            <option value='2'>2</option>
                            <option value="1">1</option>
                        </select>
                        <input type="submit" value="Add review" class="input input-bordered btn  btn-active mt-3 mb-4 w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;