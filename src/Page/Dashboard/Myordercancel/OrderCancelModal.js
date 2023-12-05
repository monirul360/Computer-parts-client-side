import { reload } from 'firebase/auth';
import React from 'react';
import { toast } from 'react-toastify';

const OrderCancel = ({ cancelmodal, setCancelmodal }) => {
    const { _id, } = cancelmodal;
    const handleDelete = () => {
        fetch(`http://localhost:5000/booking/${_id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`'Cancel successful'`);
                    setCancelmodal(null);
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="OrderCancel" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">are you sure Order cancel</h3>
                    <div class="modal-action">
                        <button onClick={() => handleDelete()} className='btn btn-sm'>Delete</button>
                        <label for="OrderCancel" class="btn btn-sm">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default OrderCancel;