import { reload } from 'firebase/auth';
import React from 'react';
import { toast } from 'react-toastify';

const OrderCancel = ({ cancelmodal, setCancelmodal }) => {

    function refreshPage() {
        window.location.reload(false);
    }

    const { _id, } = cancelmodal;
    const handleDelete = () => {
        fetch(`https://computer-parts.onrender.com/booking/${_id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`'Cancel successful'`);
                    setCancelmodal(null);
                    refreshPage();
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
                        <button onClick={() => handleDelete()} className='btn btn-sm bg-red-700 text-white border-none'>Delete</button>
                        <label for="OrderCancel" class="btn btn-sm bg-green-700 text-white border-none">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default OrderCancel;