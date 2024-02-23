import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { DashboardIcon } from "@radix-ui/react-icons"
import React from "react"

export function Gallery({ children }: { children: React.ReactNode }) {
  return (
    <Sheet>
      <SheetTrigger asChild className="absolute bottom-3 right-3">
        <Button variant="secondary" className="gap-3 hover:opacity-90 transition-all shadow-xl border border-black"><DashboardIcon /> Mostrar todas as fotos</Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="w-full h-screen">
        <SheetHeader>
          <SheetTitle>Álbum de Fotos</SheetTitle>
          <div className="grid grid-cols-5 overflow-y-scroll gap-3 w-full h-screen pb-24">
            {children}
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
