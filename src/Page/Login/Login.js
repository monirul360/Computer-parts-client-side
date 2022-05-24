import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase-init';
import Loading from '../Loading/Loading';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, gouser, goloading, goerror] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    if (loading || goloading) {
        return <Loading></Loading>
    }
    if (user || gouser) {
        navigate(from, { replace: true });
    }
    const onSubmit = data => {
        const email = data.email;
        const password = data.password;
        signInWithEmailAndPassword(email, password);
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
                        <p className='text-red-800 my-3'>{error?.message}{goerror?.message}</p>
                        <input type="submit" value="Log in" class="input input-bordered btn  btn-active mt-3 mb-4 w-full max-w-xs" />
                        <Link className='text-blue-500 text-xl' to="/signup">Create new Account</Link>
                    </form>
                    <div class="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} class="btn btn-secondary">Sign with google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;