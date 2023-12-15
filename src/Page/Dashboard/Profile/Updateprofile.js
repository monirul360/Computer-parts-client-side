import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../Firebase-init";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const updateProfile = (e) => {
        e.preventDefault();

        const updatedInformation = {
            education: e.target.education.value,
            phone: e.target.phone.value,
            address: e.target.address.value,
            social: e.target.social.value,
            boi: e.target.boi.value,
        };
        console.log(updatedInformation);

        fetch(`http://localhost:5000/users/${user?.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'authraze': `${localStorage.getItem("AccesToken")}`
            },
            body: JSON.stringify(updatedInformation)
        })
            .then(res => res.json())
            .then(data => {
                const check = data.modifiedCount;
                if (check) {
                    toast("Update profile successful");
                    navigate(('/dashboard'))

                } else {
                    toast("Update profile fail");
                }
            })
    }
    return (
        <div className="p-5 m-12 mt-0 bg-white  w-fit	">
            <h1 className="text-2xl border-b-2 pb-2 mb-3">UPDATE YOUR PROFILE</h1>
            <form onSubmit={updateProfile} className="grid grid-cols-1 gap-2">
                <textarea placeholder="Boi" name="boi" className="textarea textarea-bordered textarea-md w-full" ></textarea>
                <input
                    type="text"
                    name="education"
                    placeholder="Education"
                    className="input input-bordered w-full max-w-xs"
                />
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    className="input input-bordered w-full max-w-xs"
                />
                <input
                    type="number"
                    name="phone"
                    placeholder="Number"
                    className="input input-bordered w-full max-w-xs"
                />
                <input
                    type="text"
                    name="social"
                    placeholder="Social Link"
                    className="input input-bordered w-full max-w-xs"
                />
                <input
                    type="submit"
                    value="UPDATE PROFILE"
                    className="input input-bordered btn bg-gray-700 w-full max-w-xs"
                />
            </form>
        </div>
    );
}
export default UpdateProfile;