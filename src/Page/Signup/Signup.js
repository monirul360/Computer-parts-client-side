import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../Firebase-init';
import Loading from '../Loading/Loading';
import Usetoken from '../Hooks/Usetoken';
const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, gouser, goloading, goerror] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, Updateerror] = useUpdateProfile(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [token] = Usetoken(user || gouser);
    if (loading || goloading) {
        return <Loading></Loading>
    }
    if (token) {
        navigate(from, { replace: true });
    }
    const onSubmit = async (data) => {
        const displayName = data.name;
        const email = data.email;
        const password = data.password;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName });
    };
    return (
        <div>
            <div className="card w-96 p-2 my-12 mx-auto bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-center mb-2">Log in your Account</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="name" placeholder="Name" class="input input-bordered w-full max-w-xs" {...register("name", { required: true })} />
                        <label class="label">
                            <span class="label-text-alt text-red-700">
                                {errors.name && "Name is required"}
                            </span>
                        </label>
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" class="input input-bordered w-full max-w-xs" {...register("email", { required: true })} />
                        <label class="label">
                            <span class="label-text-alt text-red-700">
                                {errors.email && "Email is required"}
                            </span>
                        </label>
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" {...register("password", { required: true })} />
                        <label class="label">
                            <span class="label-text-alt text-red-700">
                                {errors.password && "Password is required"}
                            </span>
                        </label>
                        <p className='text-red-700'>{error?.message}{goerror?.message}</p>
                        <input type="submit" value="Sign up" class="input input-bordered btn  btn-active mt-3 mb-4 w-full max-w-xs" />
                        <Link className='text-blue-500 text-xl' to="/login">Already have an account</Link>
                    </form>
                    <div class="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} class="btn btn-secondary">Sign with google</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;