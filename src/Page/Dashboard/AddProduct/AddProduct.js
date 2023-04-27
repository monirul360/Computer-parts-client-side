import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imageStorageKey = '9903ff48ea7130ca4de8dc43c159c096';
    const onSubmit = async (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const product = {
                        name: data.name,
                        description: data.description,
                        quantity: data.quantity,
                        available: data.available,
                        price: data.price,
                        image: img,
                    }
                    // send to your database 
                    fetch('https://computer-parts.onrender.com/perts', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `${localStorage.getItem('AccessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Add Product successfull');
                                reset();
                            }
                            else {
                                toast.error('Failed to Add Product');
                            }
                        })
                }
            })
    }
    return (
        <div>
            <div className="card w-96 p-2 ml-8  bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-center mb-2">Add Product</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="name" placeholder="Name" class="input input-bordered w-full max-w-xs" {...register("name", { required: true })} />
                        <label class="label">
                            <span class="label-text-alt text-red-700">
                                {errors.name && "Name is required"}
                            </span>
                        </label>
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" placeholder="description" class="input input-bordered w-full max-w-xs" {...register("description", { required: true })} />
                        <label class="label">
                            <span class="label-text-alt text-red-700">
                                {errors.description && "Description is required"}
                            </span>
                        </label>
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input type="number" placeholder="Quantity" className="input input-bordered w-full max-w-xs" {...register("quantity", { required: true })} />
                        <label class="label">
                            <span class="label-text-alt text-red-700">
                                {errors.quantity && "Quantity is required"}
                            </span>
                        </label>
                        <label className="label">
                            <span className="label-text">Available</span>
                        </label>
                        <input type="number" placeholder="available" className="input input-bordered w-full max-w-xs" {...register("available", { required: true })} />
                        <label class="label">
                            <span class="label-text-alt text-red-700">
                                {errors.available && "Available is required"}
                            </span>
                        </label>
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" placeholder="price" className="input input-bordered w-full max-w-xs" {...register("price", { required: true })} />
                        <label class="label">
                            <span class="label-text-alt text-red-700">
                                {errors.price && "Price is required"}
                            </span>
                        </label>
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="file" className="input input-bordered w-full max-w-xs" {...register("image", { required: true })} />
                        <label class="label">
                            <span class="label-text-alt text-red-700">
                                {errors.image && "Image is required"}
                            </span>
                        </label>
                        <input type="submit" value="ADD" class="input input-bordered btn  btn-active mt-3 mb-4 w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;