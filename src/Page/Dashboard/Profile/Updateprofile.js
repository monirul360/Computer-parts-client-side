import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../Firebase-init";

const UpdateProfile = () => {
    const [user] = useAuthState(auth);
    const updateProfile = (e) => {
        e.preventDefault();

        const updatedInformation = {
            education: e.target.education.value,
            phone: e.target.phone.value,
            address: e.target.address.value,
            social: e.target.social.value,
        };
        console.log(updatedInformation);

        fetch(`https://computer-parts.onrender.com/users/${user?.email}`, {
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
                } else {
                    toast("Update profile fail");
                }
            })
    }
    return (
        <div className="p-8">
            <h1 className="text-2xl mb-3">UPDATE YOUR PROFILE</h1>
            <form onSubmit={updateProfile} className="grid grid-cols-1 gap-2">
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
                    placeholder="Social L"
                    className="input input-bordered w-full max-w-xs"
                />
                <input
                    type="submit"
                    value="UPDATE PROFILE"
                    className="input input-bordered btn btn-secondary w-full max-w-xs"
                />
            </form>
        </div>
    );
}
export default UpdateProfile;