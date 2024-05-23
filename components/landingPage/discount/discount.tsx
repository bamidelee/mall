'use client'

import sneaker from '../../../public/fashion/imgbin_dc-shoes-rebound-round-toe-leather-skate-shoe-302676a-gry-gry-red-sports-shoes-dc-shoes-rebound-round-toe-leather-skate-shoe-302676a-gry-gry-red-png.png'
import Image from 'next/image'
import { Icon } from '@iconify/react';
import { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import washingMachine from '../../../public/appliances/136166857_997d50c5-b095-4d4a-a421-fd35bcc35b1d-removebg-preview.png'


export default function Discount() {

    const [activeSlide, setActiveSlide] = useState(0);


    function SampleNextArrow(props: any) {
        const { className, style, onClick } = props;
        return (
            null
        );
    }

    function SamplePrevArrow(props: any) {
        const { className, style, onClick } = props;
        return (
            null
        );
    }
    const settings = {

        customPaging: function (i: any) {
            return (
                <a className={`${activeSlide === i ? 'bg-primary-purple' : 'bg-primary-grey/70'}  py-1 px-2 rounded-full text-[.6rem] text-primary-white`}>{i}</a>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        afterChange: (current: any) => setActiveSlide(current),
        autoplay: true,
        autoplaySpeed: 4000
    };

    const [t, setT] = useState(86400000)

    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((t % (1000 * 60)) / 1000);

    let deadLine = 86400000
    const executingFunction = () => {

        deadLine = deadLine - 1000
        setT(deadLine)
    }


    useEffect(() => {
        let intervalId = setInterval(executingFunction, 1000)
        return (() => {
            clearInterval(intervalId)
        })
    }, [])


    return (
        <div className="my-16 mx-auto">
            <div className="text-center my-8">
                <h2 className="text-[2rem] font-bold">
                    Products with 50% off
                </h2>
                <p className="text-primary-purple">Deal of the day</p>
            </div>
            <Slider {...settings}>
                <div className='p-2 lg:p-8'>
                    <div className="w-[90%] lg:w-[70%] bg-gradient-to-r from-primary-purple to-primary-orange mx-auto p-2 relative">
                        <div className='absolute h-[60%] lg:h-[90%] w-[2rem] lg:w-[4rem] bg-gradient-to-r from-primary-purple to-primary-orange left-[-1rem] lg:left-[-2rem] top-0 bottom-0 my-auto p-1'>
                            <div className='h-full w-full bg-[var(--background)] flex flex-col items-center gap-8 justify-center font-bold text-[1.5rem]'>
                                <div className='flex flex-col items-center'>
                                    <p className='bg-gradient-to-b from-primary-purple to-primary-orange bg-clip-text text-transparent text-[.8rem] lg:text-[1rem]'>{('0' + days).slice(-2)}</p>
                                    <p className='text-primary-grey text-[.4rem] lg:text-[.7rem]'>days</p>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <p className='bg-gradient-to-b from-primary-purple to-primary-orange bg-clip-text text-transparent text-[.8rem] lg:text-[1rem]'>{('0' + hours).slice(-2)}</p>
                                    <p className='text-primary-grey text-[.4rem] lg:text-[.7rem]'>hours</p>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <p className='bg-gradient-to-b from-primary-purple to-primary-orange bg-clip-text text-transparent text-[.8rem] lg:text-[1rem]'>{('0' + minutes).slice(-2)}</p>
                                    <p className='text-primary-grey text-[.4rem] lg:text-[.7rem]'>mins</p>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <p className='bg-gradient-to-b from-primary-purple to-primary-orange bg-clip-text text-transparent text-[.8rem] lg:text-[1rem]'>{('0' + seconds).slice(-2)}</p>
                                    <p className='text-primary-grey text-[.4rem] lg:text-[.7rem]'>secs</p>
                                </div>
                            </div>
                        </div>
                        <div className="h-full w-full bg-[var(--background)] px-4 lg:px-8 lg:pl-24 py-2 flex flex-col lg:grid grid-cols-2 gap-4">
                            <div className='flex flex-col gap-2 justify-center ml-4'>
                                <p className="text-primary-purple text-[.8rem] lg:text-[1rem]">Magic deal</p>
                                <h2 className="text-[1.5rem] lg:text-[2rem] font-bold">{"New men's skate sneakers"}</h2>
                                <p>
                                    Lightweight and breathable.
                                    Dry and comfortable: The fabric is breathable
                                    Safe and secure: The concave and convex lines of the sole are non-slip and wear-resistant.
                                </p>
                                <div className='flex gap-4 items-center'>
                                    <p>₦15000</p>
                                    <p className="line-through text-primary-grey/50 text-[.6rem] lg:text-[.8rem]">₦30000</p>
                                </div>
                                <button className="bg-primary-purple text-primary-white rounded-3xl  w-fit mt-2 py-2 px-3 flex items-center gap-2 text-[.8rem] lg:text-[1rem]">Add to cart</button>
                            </div>
                            <div className='flex justify-center'>
                                <Image alt='sneaker' src={sneaker} width={400} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='p-2 lg:p-8'>
                    <div className="w-[90%] lg:w-[70%] bg-gradient-to-r from-primary-purple to-primary-orange mx-auto p-2 relative">
                        <div className='absolute h-[60%] lg:h-[90%] w-[2rem] lg:w-[4rem] bg-gradient-to-r from-primary-purple to-primary-orange left-[-1rem] lg:left-[-2rem] top-0 bottom-0 my-auto p-1'>
                            <div className='h-full w-full bg-[var(--background)] flex flex-col items-center gap-8 justify-center font-bold text-[1.5rem]'>
                                <div className='flex flex-col items-center'>
                                    <p className='bg-gradient-to-b from-primary-purple to-primary-orange bg-clip-text text-transparent text-[.8rem] lg:text-[1rem]'>{('0' + days).slice(-2)}</p>
                                    <p className='text-primary-grey text-[.4rem] lg:text-[.7rem]'>days</p>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <p className='bg-gradient-to-b from-primary-purple to-primary-orange bg-clip-text text-transparent text-[.8rem] lg:text-[1rem]'>{('0' + hours).slice(-2)}</p>
                                    <p className='text-primary-grey text-[.4rem] lg:text-[.7rem]'>hours</p>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <p className='bg-gradient-to-b from-primary-purple to-primary-orange bg-clip-text text-transparent text-[.8rem] lg:text-[1rem]'>{('0' + minutes).slice(-2)}</p>
                                    <p className='text-primary-grey text-[.4rem] lg:text-[.7rem]'>mins</p>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <p className='bg-gradient-to-b from-primary-purple to-primary-orange bg-clip-text text-transparent text-[.8rem] lg:text-[1rem]'>{('0' + seconds).slice(-2)}</p>
                                    <p className='text-primary-grey text-[.4rem] lg:text-[.7rem]'>secs</p>
                                </div>
                            </div>
                        </div>
                        <div className="h-full w-full bg-[var(--background)] px-4 lg:px-8 lg:pl-24 py-2 flex flex-col lg:grid grid-cols-2 gap-4">
                            <div className='flex flex-col gap-2 justify-center ml-4'>
                                <p className="text-primary-purple text-[.8rem] lg:text-[1rem]">Magic deal</p>
                                <h2 className="text-[1.5rem] lg:text-[2rem] font-bold">{"Mini Front Loading Washing Machine"}</h2>
                                <p>
                                    It has different functions for padding the machines, cushioning and preventing from skid.
                                    Upgraded version 24 wheels, has more contact surfaces to ensure the stability of the washing machine.
                                    
                                </p>
                                <div className='flex gap-4 items-center'>
                                    <p>₦20000</p>
                                    <p className="line-through text-primary-grey/50 text-[.6rem] lg:text-[.8rem]">₦40000</p>
                                </div>
                                <button className="bg-primary-purple text-primary-white rounded-3xl  w-fit mt-2 py-2 px-3 flex items-center gap-2 text-[.8rem] lg:text-[1rem]">Add to cart</button>
                            </div>
                            <div className='flex justify-center'>
                                <Image alt='sneaker' src={washingMachine} width={400} />
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    )
}