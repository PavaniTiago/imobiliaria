import { MobileIcon } from "@radix-ui/react-icons"
import { SideBarButton } from "./sidebar-button"
import Image from "next/image"
import logo from "../../../public/logo.png"

export function Header(){
    return (    
    <header className="flex absolute z-10 bg-secondary text-white h-20 overflow-hidden justify-between items-center w-full px-4 lg:px-12">
        <Image alt="logo" src={logo} width={0} height={0} className="w-32 h-32 object-cover"></Image> 
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