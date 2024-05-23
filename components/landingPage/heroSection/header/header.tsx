'use client'

import NavBar from "./navbar"
import Image from "next/image"
import darkLogo from '../../../../public/Jendol-removebg-preview.png'
import lightLogo from '../../../../public/jendol-removebg-preview (1).png'
import Lottie from "lottie-react";
import cart from '../../../../public/cart.json'
import { useState, useEffect } from "react"
import Link from "next/link"
import { Courgette } from "next/font/google"

const courgette = Courgette({
    weight: '400',
    subsets: ["latin"]
 })

export default function Header() {
    const [colorScheme, setColorScheme] = useState('')
    
   

    useEffect(() => {
        window.matchMedia("(prefers-color-scheme: dark)").matches ? setColorScheme('dark') : setColorScheme('white')
    },[])
    return (
        <div className="flex items-center justify-between w-full">
            <h1 className={`${courgette.className} text-primary-purple text-[2rem] italic font-['marline']`}>MALL</h1>
            <NavBar />
            <div className=" flex items-center relative">
                <div className="pb-[1.6rem] w-[3rem]">
                    <Lottie animationData={cart} loop= {true}/>
                </div>
                <div className="rounded-full bg-primary-orange px-1 text-primary-white text-[.7rem] flex item-center justify-center relative left-[-8px]">0</div>
            </div>
            
        </div>
    )
}