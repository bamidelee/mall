import { StaticImageData } from "next/image"
import { Icon } from '@iconify/react';



interface Props{
    image: string,
    details: string
}
export default function Services({image, details}: Props){

    return (
        <div className="flex flex-col items-center">
            <Icon icon={`${image}`} className="text-[2rem] lg:text-[3rem]" />
            <p className="text-[.7rem] lg:text-[1rem] text-center">{details}</p>
        </div>
    )
}