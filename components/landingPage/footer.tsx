'use client'

import { Icon } from '@iconify/react';

export default function Footer() {

    return (
        <div className='bg-primary-grey/20 p-4 lg:p-8'>
            <div className='flex flex-col gap-16 lg:w-[70%] mx-auto'>
                <div className='text-[.8rem] flex justify-between'>
                    <div className='flex flex-col justify-center gap-4'>
                        <h2>
                            Newsletter Signup
                        </h2>
                        <div className='flex'>
                            <input type="text" name="" id="" placeholder="Enter email" className='bg-primary-grey/50 rounded-l-2xl pl-4 h-[2rem] w-[60%] lg:w-full' />
                            <button className="bg-primary-purple text-primary-white rounded-3xl w-fit h-[2rem] whitespace-nowrap  py-1 px-3 flex items-center gap-2 relative left-[-1.5rem] text-[.7rem] lg:text-[1rem]">Shop now <Icon icon="tabler:arrow-right" className="text-primary-purple bg-primary-white rounded-full" /></button>
                        </div>
                    </div>
                    <div className='hidden lg:flex flex-col items-center justify-center gap-4'>
                        <h2>
                            Get in touch with us
                        </h2>
                        <div className='flex gap-4 text-primary-grey/50'>
                            <Icon icon="ri:facebook-fill" />
                            <Icon icon="pajamas:twitter"/>
                            <Icon icon="mdi:instagram" />
                            <Icon icon="mdi:pinterest" />
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-4'>
                        <h2>
                            Download app
                        </h2>
                        <div className='flex gap-4 text-primary-grey/50'>
                            <p>Google play</p>
                            <p>App store</p>
                        </div>
                    </div>
                </div>
                <div className='text-[.8rem] flex justify-between'>
                    <div className='hidden lg:flex flex-col gap-4'>
                        <h2>
                            Company
                        </h2>
                        <div className='text-[.8rem] text-primary-grey/50'>
                            <p>How to make order?</p>
                            <p>Live auction</p>
                            <p>terms & condition</p>
                            <p>Details</p>
                            <p>Activity</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h2>
                            Quick links
                        </h2>
                        <div className='text-[.8rem] text-primary-grey/50'>
                            <p>Facebook</p>
                            <p>Instagram</p>
                            <p>Youtube</p>
                            <p>Pinterest</p>
                            <p>Twitter</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h2>
                           Shop
                        </h2>
                        <div className='text-[.8rem] text-primary-grey/50'>
                            <p>Products</p>
                            <p>Cart</p>
                            <p>Wishlist</p>
                            <p>My Account</p>
                            <p>Contacts</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h2>
                           Categories
                        </h2>
                        <div className='text-[.8rem] text-primary-grey/50'>
                            <p>Groceries</p>
                            <p>Computing</p>
                            <p>Fashion</p>
                            <p>Sport</p>
                            <p>Kids</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}