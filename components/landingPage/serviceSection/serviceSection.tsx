'use client'

import Services from "./service"

export default function ServiceSection() {

    return (
        <div className="my-8 lg-my-24 flex gap-4 lg:gap-16 justify-center items-center p-4">
            <Services image="streamline-emojis:delivery-truck" details="Delivery" />
            <Services image="emojione:money-bag" details="Best prices" />
            <Services image="twemoji:pickup-truck" details="Pick up" />
            <Services image="marketeq:secure" details="Safe payment" />
            <Services image="emojione-v1:shopping-bags" details="Quality products" />
        </div>
    )
}
