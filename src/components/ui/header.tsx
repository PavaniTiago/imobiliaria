import { HamburgerMenuIcon, MobileIcon } from "@radix-ui/react-icons"

export function Header(){
    return (    
    <header className="flex bg-primary text-white justify-between items-center w-full py-8 px-12">
        <span className="text-lg text-white">LOGO</span>
        <nav className="flex items-center justify-center gap-12">
            <div className="flex items-center justify-center gap-4">
                <MobileIcon width={25} height={25}/>
                <span className="text-lg text-white">(99) 99999-9999</span>
            </div>
            <HamburgerMenuIcon width={30} height={30} className="cursor-pointer"/>
        </nav>
    </header>
    )
}