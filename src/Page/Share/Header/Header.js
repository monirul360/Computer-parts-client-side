import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../Firebase-init';
import { signOut } from 'firebase/auth';
const Header = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('AccesToken');
    };
    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/'>My Portfolio</Link></li>
        {user && <li><Link to="/dashboard">Dashboard</Link></li>}
        {user && <li><Link to="/dashboard"> <smail>{user?.displayName}</smail> </Link></li>}
        {user ?
            <li><button className='' onClick={logout}>Log out</button></li>
            : <li><Link to='/login'>Log in</Link></li>
        }
    </>
    return (
        <div>
            <div className="navbar  bg-neutral text-blue-50">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow  bg-neutral text-blue-50 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-xl"> computer parts</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user && <label for="my-drawer-2" class="btn btn-sm btn-primary drawer-button lg:hidden">=</label>}
                </div>
            </div>
        </div>
    );
};

export default Header;