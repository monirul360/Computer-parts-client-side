import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    return (
        <div>
            <div className="card w-96 p-2 my-12 mx-auto bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-center mb-2">Log in your Account</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" class="input input-bordered w-full max-w-xs" {...register("email", { required: true })} />
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" {...register("password", { required: true })} />
                        <input type="submit" value="Log in" class="input input-bordered btn  btn-active mt-3 mb-4 w-full max-w-xs" />
                        <Link className='text-blue-500 text-xl' to="/signup">Create new Account</Link>
                    </form>
                    <div class="divider">OR</div>
                    <button class="btn btn-secondary">Sign with google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;