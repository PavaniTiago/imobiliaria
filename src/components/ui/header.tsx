import { SideBarButton } from "./sidebar-button"
import Image from "next/image"
import logo from "../../../public/logo.png"
import Link from "next/link"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Separator } from "./separator"

export function Header(){
    return (    
    <header className="flex absolute z-10 bg-secondary text-white h-20 lg:h-36 overflow-hidden justify-around items-center w-full px-4">
        <Link href="/">
            <Image alt="logo" src={logo} width={0} height={0} className="w-48 h-32 lg:w-96 lg:h-52 object-cover"></Image> 
        </Link>
        <div className="flex items-center justify-center gap-12">
            <div className="text-black hidden lg:block">
                <div className="flex items-center justify-center gap-3 text-md font-medium">    
                    <Link href="/imoveis" className="hover:underline">Venda</Link>
                    <Link href="/imoveis?imovelType=loja" className="hover:underline">Locação</Link>
                    <Accordion type="single" collapsible className="w-32 text-black">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Informações</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-2">
                                <Link href="/sobre" className="hover:underline">Quem sou Eu</Link>
                                <Separator />
                                <Link href="/bancos" className="hover:underline">Financiamentos</Link>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Link href="/contato" className="hover:underline">Contato</Link>
                </div>
            </div>
            <div className="block lg:hidden">
                <SideBarButton />
            </div>
        </div>
    </header>
    )
}