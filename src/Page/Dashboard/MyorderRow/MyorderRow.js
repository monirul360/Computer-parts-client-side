import React from 'react';
import { Link } from 'react-router-dom';

const MyorderRow = ({ order, index }) => {
    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <td>{order.name}</td>
                <td>{order.usname}</td>
                <td><Link className='btn btn-success btn-xs' to='/'>Pay</Link></td>
                <td><button className='btn  btn-xs'>delete</button></td>
            </tr>

        </>
    );
};

export default MyorderRow;