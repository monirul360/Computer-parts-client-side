import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../Firebase-init";

const PurchaseModal = ({ details, orderQuantity }) => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const handleModal = (e) => {
        e.preventDefault();
        const orderDetails = {
            productName: details.name,
            customerName: user.displayName,
            customerEmail: user.email,
            orderQuantity,
            price: details.price * orderQuantity,
            address: e.target.address.value,
            photo: details.image,
            phone: e.target.number.value,
        };
        const url = "https://computer-parts.onrender.com/booking";
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(orderDetails),
        })
            .then((res) => res.json())
            .then((data) => {
                navigate('/dashboard/order');
            });
    };

    return (
        <div>
            <input type="checkbox" id="purchase-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle ">
                <div class="modal-box mx-auto">
                    <label
                        for="purchase-modal"
                        class="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>
                    <h3 class="font-bold text-center mb-5 text-2xl">{details?.name}</h3>
                    <form
                        onSubmit={handleModal}
                        className="grid grid-cols-1 gap-6 justify-items-center"
                    >
                        <input
                            type="text"
                            value={user?.displayName}
                            readOnly
                            class="input input-bordered w-full  max-w-xs"
                        />
                        <input
                            type="text"
                            value={user?.email}
                            readOnly
                            class="input input-bordered w-full max-w-xs"
                        />
                        <input
                            type="text"
                            name="quantity"
                            value={orderQuantity + "Pcs"}
                            class="input input-bordered w-full  max-w-xs"
                        />
                        <input
                            type="text"
                            name="price"
                            value={"Price:$" + orderQuantity * details.price}
                            class="input input-bordered w-full  max-w-xs"
                        />
                        <input
                            type="text"
                            name="address"
                            placeholder="Address"
                            class="input input-bordered w-full   max-w-xs"
                        />
                        <input
                            type="text"
                            name="number"
                            placeholder="Contact Number"
                            class="input input-bordered w-full max-w-xs"
                        />
                        <input
                            type="submit"
                            value="Place Order"
                            class="input input-bordered text-xl hover:bg-gray-900 hover:text-white font-bold w-full max-w-xs"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PurchaseModal;