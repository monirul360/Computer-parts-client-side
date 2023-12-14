import React from 'react';

const Summary = () => {
    return (
        <div>
            <div className='grid gird-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center my-8 gap-3  p-8'>
                <div>
                    <div className="flex justify-center text-primary"><svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 " viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg></div>
                    <p className='text-3xl my-3 font-bold'>150+</p>
                    <p className='text-lg text-primary'>Customers</p>
                </div>
                <div>
                    <div className="flex justify-center text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <p className='text-3xl my-3 font-bold'>120M+</p>
                    <p className='text-lg text-primary'>Annual revenue</p>
                </div>
                <div>
                    <div className="flex justify-center text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                    </div>
                    <p className='text-3xl my-3 font-bold'>33K+</p>
                    <p className='text-lg text-primary'>Reviews</p>
                </div>
                <div>
                    <div className="flex justify-center text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-14" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <p className='text-3xl my-3 font-bold'>50+</p>
                    <p className='text-lg text-primary'>Parts</p>
                </div>
            </div>
        </div >
    );
};

export default Summary;