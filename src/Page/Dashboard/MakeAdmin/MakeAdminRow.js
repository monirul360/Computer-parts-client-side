import React from 'react';
import { toast } from 'react-toastify';

const MakeAdminRow = ({ user, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`https://computer-parts.onrender.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authraze: `${localStorage.getItem("AccesToken")}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to Make an admin');
                }
                return res.json()
            })
            .then(data => {

                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }
            });
    }
    // ====================

    const handleDelete = () => {
        fetch(`https://computer-parts.onrender.com/user/${user?._id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`Delete user`);
                    refetch();
                }
            })
    }
    // ===================
    return (
        <tbody>
            <tr className='border-b-2'>
                <td>1</td>
                <td>{email}</td>
                <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
                <td><button onClick={handleDelete} class="btn btn-xs">Remove</button></td>
            </tr>
        </tbody>

    );
};

export default MakeAdminRow;