"use client"

import { DragHandleDots2Icon, HomeIcon } from "@radix-ui/react-icons";
import { SelectItem } from "@/components/ui/select";
import { Button } from "./button";
import { InputSearch } from "./input-search";
import { Search } from "./search";
import { SelectGroupRadio } from "./select-radio-group";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function SearchForm(){

    const router = useRouter()

    const [isOpen, setIsOpen] = useState(false);
    const [imovelType, setImovelType] = useState('')
    const [quartos, setQuartos] = useState('')
    const [suites, setSuites] = useState('')
    const [price, setPrice] = useState('')
    const [mobiliado, setMobiliado] = useState<boolean>()

    async function SetSearch(){
        router.push(`/imoveis${quartos || suites || mobiliado || imovelType || price ? '?' : ''}${quartos ? `rooms=${quartos}` : ''}${suites ? `&suites=${suites}` : ''}${imovelType ? `&imovelType=${imovelType}` : ''}${mobiliado ? `&mobiliado=true` : ''}${price ? `&price=${price}` : ''}`)
    }

    const quartoProps = (data: string) => {
        setQuartos(data)
    }
    
    const suiteProps = (data: string) => {
        setSuites(data)
    }
    
    const imovelTypesProps = (data: string) => {
        setImovelType(data)
    }    
    
    const mobiliadoTypeProps = (data: boolean) => {
        setMobiliado(data)
    }    
    
    const priceProps = (data: string) => {
        setPrice(data)
    }    

    return (
        <div className="flex relative w-fit p-3 bg-primary shadow-lg rounded-xl gap-6">
            {/* <Search sendToFather={quartoProps} title="Pretensão">
                <SelectItem value="">Comprar</SelectItem>
                <SelectItem value="alugar">Alugar</SelectItem>
                <SelectItem value="">Novos</SelectItem>
            </Search> */}
            <SelectGroupRadio sendToFather={imovelTypesProps} title="Tipo Imóvel" icon={<HomeIcon />}/>
            <InputSearch placeholder="Digite condomínio, região, bairro ou cidade"/>
            <Button className="rounded-2xl w-[220px] py-4 gap-1 border self-center" onClick={() => setIsOpen(!isOpen)}>{isOpen ? "Menos" : "Mais"} Filtros <DragHandleDots2Icon width={20} height={20}/></Button>
            {isOpen && (    
                <div className="flex absolute h-full bg-primary -bottom-16 p-3 w-full justify-between items-center left-0 rounded-b-lg">
                    <Search sendToFather={priceProps} title="Preço de venda">
                        <SelectItem value="400000">até 400.000</SelectItem>
                        <SelectItem value="600000">acima 600.000</SelectItem>
                        <SelectItem value="800000">acima 800.000</SelectItem>
                        <SelectItem value="1000000">acima 1.000.000</SelectItem>
                    </Search>
                    <Search sendToFather={mobiliadoTypeProps} title="Mobiliado">
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
                    <Search sendToFather={suiteProps} title="Suítes">
                        <SelectItem value="1">+1</SelectItem>
                        <SelectItem value="2">+2</SelectItem>
                        <SelectItem value="3">+3</SelectItem>
                        <SelectItem value="4">+4</SelectItem>
                        <SelectItem value="5">+5</SelectItem>
                    </Search>
                </div>
            )}
            <Button variant="secondary" size="lg" className="hover:bg-neutral-200 transition py-6" onClick={SetSearch}>Encontrar Imóvel</Button>
        </div>
    )
}