'use client'

import { StaticImageData } from "next/image"
import Image from "next/image";
import { Icon } from '@iconify/react';
import 'animate.css';

interface Props {
    image: StaticImageData,
    details: string,
    price: string,
    inStock: boolean
    first?: boolean
}


export default function ProductCard({ image, details, price, inStock, first }: Props) {

    return (
        <div className={` ${first? 'hidden lg:flex w-[35vw] lg:w-[20vw] lg:h-[13vw] lg:self-end lg:mt-[2.5vw]': 'w-[35vw] lg:w-[17vw] h-[30vw] lg:h-[10vw]'} relative border-2 border-secondary-grey flex items-end justify-center rounded-2xl transition-all duration-300 mt-[40vw] lg:mt-0`}>
            <div className="backdrop-blur-3xl h-[100%] w-[95%] left-0 right-0 mx-auto bg-secondary-grey absolute top-[-90%] rounded-2xl z-10 p-2">
               {inStock && <p className="bg-[green] w-fit px-1 rounded-lg text-primary-white lg:text-[.8rem] text-[.6rem]">
                    In stock
                </p>}
                {!inStock && <p className="bg-primary-orange w-fit px-1 rounded-lg text-primary-white lg:text-[.8rem] text-[.6rem]">
                    Out of stock
                </p>}
            </div>
            <div className="absolute top-[-55%] z-20 w-full h-[100%] animate__animated animate__slideInUp">
                <Image alt={details} src={image} fill  />
            </div>
            <div className="text-center">
                <div className='flex justify-center text-[.8rem] lg:text-[1rem]'>
                    <Icon icon="openmoji:star" />
                    <Icon icon="openmoji:star" />
                    <Icon icon="openmoji:star" />
                    <Icon icon="openmoji:star" />
                    <Icon icon="openmoji:star" />
                </div>
                <p className="text-[.8rem] lg:text-[1rem]">
                    {details}
                </p>
                <p className="text-primary-purple text-[.6rem] lg:text-[.8rem]">
                    {price}
                </p>
            </div>
        </div>
    )
}