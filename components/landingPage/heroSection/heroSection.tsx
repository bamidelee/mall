'use client'

import Header from "./header/header";
import Lottie from "lottie-react";
import Image from "next/image";
import heroImage from "../../../public/hero.json"
import { useRef, useEffect } from "react";
import { Icon } from '@iconify/react';
import { Courgette } from "next/font/google"

const courgette = Courgette({
    weight: '400',
    subsets: ["latin"]
 })


export default function HeroSection() {
  
    return (
    <div className="bg-secondary-grey p-4 lg:p-8 rounded-2xl">
        <Header />
        <div className="mt-[4rem] lg:mt-0 flex  flex-col lg:grid grid-cols-[35%,70%]">
            <div className="flex flex-col justify-center items-center lg:items-start gap-8 lg:text-left text-center">
                <h2 className="text-[1.5rem] lg:text-[2rem]">Welcome to <span className={`${courgette.className} text-primary-purple italic`}>MALL</span></h2>
                <h1 className="text-[2.5rem] lg:text-[3.5rem] font-bold">YOUR GROCERY SHOPPING MADE EASY</h1>
                <button className="bg-primary-purple text-primary-white rounded-3xl lg:text-[1.5rem] w-fit mt-8 py-2 px-3 flex items-center gap-2">Shop now <Icon icon="tabler:arrow-right"  className="text-primary-purple bg-primary-white rounded-full"/></button>
            </div>
            <div className="lg:justify-self-end w-[120%]">
                <Lottie  animationData={heroImage} loop= {true} initialSegment={[4,700]} className="relative right-[1.5rem] lg:right-[-10rem]"/>
            </div>
        </div>
    </div>)
}