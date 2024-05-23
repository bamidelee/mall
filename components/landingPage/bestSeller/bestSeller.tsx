'use client'

import { useState } from "react"
import ProductCard from "./productCard"
import TabsArray from "../tabsArray"
import { Icon } from '@iconify/react';
import image1 from '../../../public/fashion/image1.png'
import image2 from '../../../public/fashion/image2.png'
import image4 from '../../../public/fashion/imgbin_slip-on-shoe-toms-shoes-boat-shoe-clothing-png.png'
import image3 from '../../../public/fashion/imgbin_dc-shoes-rebound-round-toe-leather-skate-shoe-302676a-gry-gry-red-sports-shoes-dc-shoes-rebound-round-toe-leather-skate-shoe-302676a-gry-gry-red-png.png'

import grocery1 from '../../../public/groceries/17582-removebg-preview.png'
import grocery2 from '../../../public/groceries/chinese-kale-vegetable-removebg-preview.png'
import grocery3 from '../../../public/groceries/fresh-background-potatoes-close-nutrition-removebg-preview.png'
import grocery4 from '../../../public/groceries/green-chili-peppers-removebg-preview.png'

import appliance1 from '../../../public/appliances/136166857_997d50c5-b095-4d4a-a421-fd35bcc35b1d-removebg-preview.png'
import appliance2 from '../../../public/appliances/136529423_a2c396ce-b292-4cec-b379-8b9d0e415d2f-removebg-preview.png'
import appliance3 from '../../../public/appliances/136530605_c9e6632e-fbdb-494a-906f-5b8ca7f8ad64-removebg-preview.png'
import appliance4 from '../../../public/appliances/143822543_9fda73c5-97d8-47b0-bdbb-8c865229e7ef-removebg-preview.png'

import sport1 from '../../../public/sport/10603057_42545-removebg-preview.png'
import sport2 from '../../../public/sport/2875610_8506-removebg-preview.png'
import sport3 from '../../../public/sport/94379289_Picture_of_a_vintage_skateboard_made_of_wood_-13-removebg-preview.png'
import sport4 from '../../../public/sport/vintage-metal-white-bicycle-toy-wooden-table-removebg-preview.png'


export default function BestSeller(){

    
    const tabs = ['Fashion', 'Groceries', 'Appliances', 'Sport']
    const [activeTab, setActiveTab] =  useState(tabs[0])


    return (
        <div className="mt-[4rem]">
             <div className=" flex flex-col lg:flex-row justify-between w-[80%] items-center mx-auto my-8 gap-4">
                <div className="text-center lg:text-left">
                    <h2 className="text-[1.5rem] lg:text-[2rem] font-bold">Top selling products</h2>
                    <p className="text-[.8rem] lg:text-[1rem] text-primary-purple">Our best sellers</p>
                    
                </div>
                <TabsArray tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab}/>
            </div>
            {activeTab === 'Fashion' &&<div className="flex justify-center w-full flex-wrap">
                <ProductCard image={image1} details="Stripe shirt" price="₦5000" inStock={true} first={true}/>
                <ProductCard image={image2} details="Blue shirt" price="₦7000" inStock={false}/>
                <ProductCard image={image3} details="Skate sneakers" price="₦25000" inStock={true}/>
                <ProductCard image={image4} details="Boat sneakers" price="₦40000" inStock={true}/>
            </div>}

            {activeTab === 'Groceries' &&<div className="flex justify-center w-full flex-wrap">
                <ProductCard image={grocery1} details="Tomatoes" price="₦790" inStock={true} first={true}/>
                <ProductCard image={grocery2} details="Kale" price="₦1000" inStock={true}/>
                <ProductCard image={grocery3} details="Potatoes" price="₦2050" inStock={true}/>
                <ProductCard image={grocery4} details="chilli pepper" price="₦4750" inStock={false}/>
            </div>}

            {activeTab === 'Appliances' &&<div className="flex justify-center w-full flex-wrap">
                <ProductCard image={appliance1} details="Washing machine" price="₦79000" inStock={true} first={true}/>
                <ProductCard image={appliance2} details="Pressure cooker" price="₦25000" inStock={true}/>
                <ProductCard image={appliance3} details="Vacuum cleaner" price="₦20050" inStock={true}/>
                <ProductCard image={appliance4} details="Microwave" price="₦47500" inStock={true}/>
                
            </div>}

            {activeTab === 'Sport' &&<div className="flex justify-center w-full flex-wrap">
                <ProductCard image={sport1} details="Basket ball" price="₦7100" inStock={false} first={true}/>
                <ProductCard image={sport2} details="Football" price="₦2800" inStock={true}/>
                <ProductCard image={sport3} details="Skate board" price="₦20800" inStock={true}/>
                <ProductCard image={sport4} details="Bicycle" price="₦57500" inStock={true}/>
            </div>}
        </div>
    )
}