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
        <div className={`p-2 w-[45vw] lg:w-[20vw] h-[70vw] lg:h-fit relative border-2 border-secondary-grey flex flex-col items-end justify-between lg:justify-center rounded-2xl transition-all duration-300`}>
            <div className="h-[40vw] lg:h-[11vw] w-full left-0 right-0 mx-auto bg-secondary-grey rounded-2xl p-2">
               {inStock && <p className="bg-[green] w-fit px-1 rounded-lg text-primary-white lg:text-[.8rem] text-[.6rem]">
                    In stock
                </p>}
                {!inStock && <p className="bg-primary-orange w-fit px-1 rounded-lg text-primary-white lg:text-[.8rem] text-[.6rem]">
                    Out of stock
                </p>}
            </div>
            <div className="absolute left-0 right-0 mx-auto top-[3rem] z-20 w-[90%] h-[50%] lg:h-[60%] animate__animated animate__slideInUp">
                <Image alt={details} src={image} fill  />
            </div>
            <div className="text-center flex flex-col w-full h-[9vw] justify-end">
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