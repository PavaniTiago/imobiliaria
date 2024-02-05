import { HamburgerMenuIcon, MobileIcon } from "@radix-ui/react-icons"
import { SideBarButton } from "./sidebar-button"

export function Header(){
    return (    
    <header className="flex absolute z-10 bg-primary text-white justify-between items-center w-full py-8 px-12">
        <span className="text-lg text-white">LOGO</span>
        <div className="flex items-center justify-center gap-12">
            <div className="flex items-center justify-center gap-4">
                <MobileIcon width={25} height={25}/>
                <span className="text-lg text-white">(99) 99999-9999</span>
            </div>
            <SideBarButton />
        </div>
    </header>
    )
}