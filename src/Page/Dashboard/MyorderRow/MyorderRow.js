import React from 'react';
import { Link } from 'react-router-dom';

const MyorderRow = ({ order, index, setCancelmodal }) => {
    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <td>{order.productName}</td>
                <td>{order.customerName}</td>
                <td>{order.paid ? <p>Paid</p>
                    : <Link className='btn btn-success btn-xs' to={`/dashboard/payment/${order._id}`}>Pay</Link>}</td>
                <td>
                    {
                        order.paid ? <p>{order.transactionId}</p>
                            :
                            <label onClick={() => setCancelmodal(order)} for="OrderCancel" class="btn btn-sm">Cancel</label>
                    }

                </td>
            </tr>

        </>
    );
};

export default MyorderRow;