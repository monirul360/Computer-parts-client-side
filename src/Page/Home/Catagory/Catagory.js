import React from 'react';
import imgone from './../../../Image/Catagory/1.png';
import imgtwo from './../../../Image/Catagory/2.png';
import imgthree from './../../../Image/Catagory/3.png';
import imgfoure from './../../../Image/Catagory/4.png';
import imgfive from './../../../Image/Catagory/5.png';
import imgsix from './../../../Image/Catagory/6.png';
const Catagory = () => {
    return (
        <div className=' p-8  my-12'>
            <div className="grid grid-cols-2 md:grid-cols-3 lg-grid-cols-3 gap-12">
                <div className='flex justify-center items-center'>
                    <div>
                        <img src={imgone} alt="" />
                    </div>
                    <div className='ml-5'>
                        <p className='text-xl my-2'>Processor</p>
                        <p>120 Available </p>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <div>
                        <img src={imgtwo} alt="" />
                    </div>
                    <div className='ml-5'>
                        <p className='text-xl my-2'>Motherboard</p>
                        <p>500 Available</p>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <div>
                        <img src={imgthree} alt="" />
                    </div>
                    <div className='ml-5'>
                        <p className='text-xl my-2'>Wifi Router</p>
                        <p>90 Available</p>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <div>
                        <img src={imgfoure} alt="" />
                    </div>
                    <div className='ml-5'>
                        <p className='text-xl my-2'>Monitor</p>
                        <p>177 Available</p>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <div>
                        <img src={imgfive} alt="" />
                    </div>
                    <div className='ml-5'>
                        <p className='text-xl my-2'>Mouse</p>
                        <p>700 Available</p>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <div>
                        <img src={imgsix} alt="" />
                    </div>
                    <div className='ml-5'>
                        <p className='text-xl my-2'>keyboard</p>
                        <p>920 Available</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catagory;