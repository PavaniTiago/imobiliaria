import { MobileIcon } from "@radix-ui/react-icons"
import { SideBarButton } from "./sidebar-button"
import Image from "next/image"
import logo from "../../../public/logo.png"
import Link from "next/link"

export function Header(){
    return (    
    <header className="flex absolute z-10 bg-secondary text-white h-20 lg:h-36 overflow-hidden justify-around items-center w-full px-4">
        <Link href="/">
            <Image alt="logo" src={logo} width={0} height={0} className="w-48 h-32 lg:w-64 lg:h-40 object-cover"></Image> 
        </Link>
        <div className="flex items-center justify-center gap-12">
            <div className="flex items-center justify-center gap-4">
                <MobileIcon width={25} height={25} className="hidden lg:block"/>
                <span className="text-lg text-white hidden lg:block">(19) 99901-6424</span>
            </div>
            <SideBarButton />
        </div>
    </header>
    )
}