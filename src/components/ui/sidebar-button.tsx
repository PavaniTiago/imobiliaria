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
import { Separator } from "./separator"

export function SideBarButton(){ 
    return (
      <Sheet>
      <SheetTrigger><HamburgerMenuIcon width={30} height={30}/></SheetTrigger>
      <SheetContent className="h-full p-0 border-0">
        <SheetHeader className="ml-4 mt-6 pl-6 pt-6">
          <SheetTitle className="text-lg text-foreground/60">Institucional</SheetTitle>
          <SheetDescription className="text-md text-black font-medium hover:bg-gray-200 transition-colors cursor-pointer">Política de privacidade</SheetDescription>
          <SheetTitle className="text-lg text-foreground/60">Imóveis</SheetTitle>
          <SheetDescription className="text-md text-black font-medium hover:bg-gray-200 transition-colors cursor-pointer">Encomende seu imóvel</SheetDescription>
          <SheetTitle className="text-lg text-foreground/60">Serviços</SheetTitle>
          <SheetDescription className="text-md text-black font-medium hover:bg-gray-200 transition-colors cursor-pointer">Financiamento de bancos</SheetDescription>
          <SheetTitle className="text-lg text-foreground/60">Contato</SheetTitle>
          <SheetDescription className="text-md text-black font-medium hover:bg-gray-200 transition-colors cursor-pointer">Fale conosco</SheetDescription>
        </SheetHeader>
        <SheetFooter className="absolute flex justify-start bottom-0 p-8 w-full bg-primary">
          <div className="flex flex-col justify-end items-start text-white">
            <SheetTitle className="text-md text-white">"Nome vendedor"</SheetTitle>
            <div className="flex items-center justify-center gap-2">
                  <MobileIcon width={20} height={20}/>
                  <span className="text-md">(99) 99999-9999</span>
            </div>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>    
    )
}