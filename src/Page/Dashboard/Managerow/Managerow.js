import React from 'react';
import { toast } from 'react-toastify';

const Managerow = ({ parts, index, refetch }) => {
    const { _id, name, image } = parts;
    const handleDelete = () => {
        fetch(`https://computer-parts.onrender.com/perts/${_id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`Product  ${name}  Deteted`);
                    refetch();
                }
            })
    }
    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <td> <div class="w-20 rounded-full">
                    <img src={image} alt="" />
                </div></td>
                <td>{name}</td>
                <td><button
                    onClick={() => handleDelete()}
                    className='btn btn-sm'>Delete</button>
                </td>
            </tr>

        </>
    );
};

export default Managerow;