import Link from "next/link"

export default function NavBar(){

    return(
        <>
            <div className="hidden lg:flex gap-8 text-primary-grey">
                <div>
                    <Link className="hover:text-primary-purple" href={'/'}>Home</Link>
                    <div className="h-[4px] w-[70%] mx-auto bg-primary-purple"></div>
                </div>
                <div>
                    <Link className="hover:text-primary-purple" href={'/'}>About</Link>
                </div>
                <div>
                    <Link className="hover:text-primary-purple" href={'/'}>Menu</Link>
                </div>
                <div>
                    <Link className="hover:text-primary-purple" href={'/'}>Shop</Link>
                </div>
                <div>
                    <Link className="hover:text-primary-purple" href={'/'}>Contact</Link>
                </div>
            </div>
        </>
    )
}