import React from 'react';
import { Link } from 'react-router-dom';
import image from './../../Image/Portflow/portflow.png';
const Portfolio = () => {
    return (
        <section className='my-12 p-8'>
            <div className='flex items-center justify-center flex-col text-center my-12'>
                <div className='avatar'>
                    <div className='w-44 mb-5  rounded-full'>
                        <img src={image} alt="" />
                    </div>
                </div>
                <div>
                    <p className='text-2xl py-2'>Md Monirul Islam</p>
                    <p className='text-xl py-2'>monirulislam65361gmail.com</p>
                </div>
            </div>
            <div>
                <p className='text-3xl text-orange-600 font-bold'>Educational background</p>
                <p className='pt-5 text-2xl'>I am a student of Diploma Engineer. My department is computer technology.Now I am reading  for 3 semesters</p>
            </div>
            <div className='my-12'>
                <p className='text-3xl font-bold text-orange-600 mb-8'>Skills</p>
                <button className='btn btn-secondary m-3'>HTML</button>
                <button className='btn btn-secondary m-3'>CSS</button>
                <button className='btn btn-secondary m-3'>BOOTSTRAP 5</button>
                <button className='btn btn-secondary m-3'>TAILWIND CSS</button>
                <button className='btn btn-secondary m-3'>JAVASCRIPT</button>
                <button className='btn btn-secondary m-3'>JQUERY </button>
                <button className='btn btn-secondary m-3'>REACT JS</button>
                <button className='btn btn-secondary m-3'>NODE JS</button>
                <button className='btn btn-secondary m-3'>EXPRESS JS</button>
                <button className='btn btn-secondary m-3'>REST API</button>
                <button className='btn btn-secondary m-3'>MONGODB</button>
                <button className='btn btn-secondary m-3'>PHP</button>
                <button className='btn btn-secondary m-3'>MYSQL</button>
                <button className='btn btn-secondary m-3'>GIT</button>
            </div>
            <div>
                <p className='text-3xl font-bold text-orange-600'>PROJECTS</p>
                <p className='text-2xl my-3'>Checkout Some of my recent projects here</p>
                <div className='grid grid-cols-1 lg-grid-cols-2 md:grid-cols-3 my-12 gap-8'>
                    <div class="card card-compact bg-base-100 shadow-xl">
                        <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title mb-5">Foundation website</h2>
                            <div class="card-actions justify-start">
                                <a target="_blank" className='btn btn-primary' href="https://sebayonfoundation.org/">Visiting</a>
                            </div>
                        </div>
                    </div>
                    <div class="card card-compact bg-base-100 shadow-xl">
                        <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Ecommerce website</h2>
                            <div class="card-actions justify-start">
                                <a className='btn btn-primary' target="_blank" href="https://fibki.com/">Visiting</a>
                            </div>
                        </div>
                    </div>
                    <div class="card card-compact bg-base-100 shadow-xl">
                        <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Travel guide website</h2>
                            <div class="card-actions justify-start">
                                <a target="_blank" className='btn btn-primary' href="https://assginment-10.web.app/">Visiting</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;