'use client'
import { Icon } from '@iconify/react';
import Image from 'next/image';
import fashion from '../../public/imgbin_fashion-drawing-shopping-png.png'

export default function Ads(){
    return(
        <div className="text-center lg:text-left bg-secondary-grey  w-screen  mt-16 lg:relative left-[-4rem] flex flex-col lg:flex-row justify-center items-center gap-8 p-4 lg:p-16">
            <div>
                <h3 className="font-bold lg:text-[1.5rem]">
                    Start from <span className='text-primary-purple'>₦5000</span>
                </h3>
                <h2 className="font-bold text-[2rem] lg:text-[3rem]">
                    20% off Fashion category
                </h2>
                <button className="bg-primary-purple text-primary-white rounded-3xl lg:text-[1.5rem] w-fit mt-8 p-2 flex items-center gap-2 mx-auto lg:mx-0">Shop now <Icon icon="tabler:arrow-right"  className="text-primary-purple bg-primary-white rounded-full"/></button>
            </div>
            <div>
                <Image alt='fashion' src={fashion} height={400}/>
            </div>
        </div>
    )
}