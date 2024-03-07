import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { HamburgerMenuIcon, MobileIcon } from "@radix-ui/react-icons"
import Link from "next/link"

export function SideBarButton(){ 
    return (
      <Sheet>
      <SheetTrigger><HamburgerMenuIcon className="text-blue-700" width={30} height={30}/></SheetTrigger>
      <SheetContent className="h-full p-0 border-0">
        <SheetHeader className="lg:ml-4 mt-6 lg:pl-6 pt-6 space-y-0">
          <SheetTitle className="text-lg text-foreground/60">Institucional</SheetTitle>
          <SheetDescription className="text-md text-black font-medium hover:bg-gray-200 transition-colors cursor-pointer">Política de privacidade</SheetDescription>
          <SheetTitle className="text-lg text-foreground/60 pt-3">Imóveis</SheetTitle>
          <SheetDescription className="text-md text-black font-medium hover:bg-gray-200 transition-colors cursor-pointer">Encomende seu imóvel</SheetDescription>
          <SheetTitle className="text-lg text-foreground/60 pt-3">Serviços</SheetTitle>
          <SheetDescription className="text-md text-black font-medium hover:bg-gray-200 transition-colors cursor-pointer"><Link href="/bancos">Financiamento de bancos</Link></SheetDescription>
          <SheetTitle className="text-lg text-foreground/60 pt-3">Contato</SheetTitle>
          <SheetDescription className="text-md text-black font-medium hover:bg-gray-200 transition-colors cursor-pointer">Fale conosco</SheetDescription>
        </SheetHeader>
        <SheetFooter className="absolute flex justify-start bottom-0 p-8 w-full bg-primary">
          <div className="flex flex-col justify-end items-start text-white">
            <SheetTitle className="text-md text-white">Carlos Tortorella</SheetTitle>
            <div className="flex items-center justify-center gap-2">
                  <MobileIcon width={20} height={20}/>
                  <span className="text-md">(19) 99901-6424</span>
            </div>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>    
    )
}