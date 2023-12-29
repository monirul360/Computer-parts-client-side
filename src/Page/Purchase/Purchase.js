import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import PurchaseModal from './PurchaseModal';
const Pur = () => {
    const { purchaseId } = useParams();
    const [purchase, setPurchase] = useState({});
    const [total, setTotal] = useState(0);

    const orderQuantity = parseInt(total);
    useEffect(() => {
        const url = `https://computer-parts.onrender.com/perts/${purchaseId}`;

        fetch(url)
            .then((res) => res.json())
            .then((data) => setPurchase(data));
    }, [purchaseId]);

    const handleQuantity = (e) => {
        e.preventDefault();
        const inputValue = e.target.quantity.value;
        setTotal(inputValue);

        if (parseInt(inputValue) < parseInt(purchase.quantity)) {
            toast.error("Quantity Must Be equal minimum");
        } else if (parseInt(inputValue) > parseInt(purchase.available)) {
            toast.error("You Can't Order More Than Stock");
        }
    };

    return (
        <div class="py-10" style={{ "background": "#EEEEEE" }}>
            <div className="mx-10" style={{ "background": "#ffff" }}>
                <div class="hero-content flex-col lg:flex-row">
                    <div>
                        <img className="rounded w-4/5" src={purchase.image} alt="" />
                    </div>
                    <div>
                        <h1 class="text-2xl font-bold">{purchase.name}</h1>
                        <p class="py-6">{purchase.description}</p>
                        <p className="text-xl text-red-900">
                            <small>Price: {purchase.price}$</small>
                        </p>
                        <p className="text-xl text-red-900">
                            <small>Minimum order Quantity: {purchase.quantity}</small>
                        </p>
                        <p className="text-xl text-red-900">
                            <small>Available Quantity: {purchase.available}</small>
                        </p>
                        <p className=" text-xl mt-5 text-green-700">Add Quantity</p>
                        <form onSubmit={handleQuantity}>
                            <input className="border p-2 border-green-700" type="number" name="quantity" id="" />
                            <input
                                type="submit"
                                className="btn btn-outline m-3 text-white bg-green-700"
                                value="Add"
                                id=""
                            />
                        </form>
                        <br />
                        {orderQuantity > purchase.quantity &&
                            orderQuantity <= purchase.available ? (
                            <label for="purchase-modal" class="btn btn-outline bg-gray-900 text-white">
                                PURCHASE
                            </label>
                        ) : (
                            <label disabled for="purchase-modal" class="btn btn-outline ">
                                PURCHASE
                            </label>
                        )}
                    </div>
                </div>
                {purchase && (
                    <PurchaseModal
                        orderQuantity={orderQuantity}
                        details={purchase}
                    ></PurchaseModal>
                )}
            </div>
        </div>
    );
};

export default Pur;