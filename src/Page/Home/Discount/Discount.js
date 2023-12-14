import React from 'react';
import image from './../../../Image/Discount/discount.png';
const Discount = () => {
    return (
        <sectin>
            <div className="py-8 bg-base-200">
                <div className="grid grid-cols-1 md:grid-cols-2 lg-grid-cols-2 gap-5 p-8 justify-items-center	items-center">
                    <div className="rounded">
                        <img src={image} alt='' />
                    </div>
                    <div className='items-center text-center' >
                        <p className='text-4xl font-bold my-4'>Get Discount <span className='text-primary'>30%</span> Off</p>
                        <p className='text-xl'>
                            If you want to get a huge money Discount, subscribe by email address
                        </p>
                        <input type="text" placeholder="Your email address" class="input input-bordered my-7 w-full max-w-xs" />
                        <br />
                        <input type="submi" value="Subscribe" class="input input-bordered rounded-full text-white font-bold text-center w-40 bg-primary block mx-auto max-w-xs" />
                    </div>
                </div>
            </div>
        </sectin>
    );
};

export default Discount;