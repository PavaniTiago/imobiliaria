"use client"

import { Button } from "@/components/ui/button";
import { Search } from "@/components/ui/search";
import { DragHandleDots2Icon } from "@radix-ui/react-icons";
import { SelectItem } from "@/components/ui/select";
import { useState } from "react";

interface ChildProps {
    sendValueToParent: (value: string) => void;
}

export function OpenModal({ sendValueToParent }: ChildProps){

    const [isOpen, setIsOpen] = useState(false);
    const [quartos, setQuartos] = useState('')
    const [suites, setSuites] = useState('')

    const quartoProps = (data: string) => {
        setQuartos(data)
    }
    
    // console.log(quartos, 'aqui')

    return  (
        <>
            <Button className="rounded-2xl w-[220px] py-4 gap-1 border self-center" onClick={() => setIsOpen(!isOpen)}>{isOpen ? "Menos" : "Mais"} Filtros <DragHandleDots2Icon width={20} height={20}/></Button>
            {isOpen && (    
                <div className="flex absolute h-full bg-primary -bottom-16 p-3 w-full justify-between items-center left-0 rounded-b-lg">
                    <Search sendToFather={quartoProps} title="Preço de venda">
                        <SelectItem value="comprar">Comprar</SelectItem>
                    </Search>
                    <Search sendToFather={quartoProps} title="Em condomínio fechado">
                        <SelectItem value="true">Sim</SelectItem>
                        <SelectItem value="false">Não</SelectItem>
                    </Search>
                        <Search sendToFather={quartoProps} title="Quartos">
                        <SelectItem value="1">+1</SelectItem>
                        <SelectItem value="2">+2</SelectItem>
                        <SelectItem value="3">+3</SelectItem>
                        <SelectItem value="4">+4</SelectItem>
                        <SelectItem value="5">+5</SelectItem>
                    </Search>
                    <Search sendToFather={quartoProps} title="Suítes">
                        <SelectItem value="1">+1</SelectItem>
                        <SelectItem value="2">+2</SelectItem>
                        <SelectItem value="3">+3</SelectItem>
                        <SelectItem value="4">+4</SelectItem>
                        <SelectItem value="5">+5</SelectItem>
                    </Search>
                </div>
            )}
        </>
    )
}