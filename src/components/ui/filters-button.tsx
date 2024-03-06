"use client"

import { Sheet, SheetTrigger, SheetContent } from "./sheet";
import { Button } from "./button"
import { ArrowDown, Plus } from "@phosphor-icons/react"
import { RadioGroup, RadioGroupItem } from "./radio-group";
import { Label } from "./label";
import { Separator } from "./separator";
import { useState } from "react";
import { SelectProps } from "@radix-ui/react-select";
import { useRouter } from "next/navigation";

interface searchProps extends SelectProps {
    rooms: number;
    suites: number;
    imovelType: string;
    mobiliado: string;
    price: string;
    name: string;
    sendToFather: (value: string) => void
}

export function FiltersButtons({ imovelType, mobiliado, name, price, rooms, suites, sendToFather }: searchProps){

    const [isVisible, setIsVisible] = useState(false)
    const [data, setData] = useState<string[]>([])
    const [aceitaPets, setAceitaPets] = useState('')
    const [bathrooms, setBathrooms] = useState('')
    const [vagas, setVagas] = useState('')
    const router = useRouter()

    const pushData = (value: string) => {
        setData(prevData => [...prevData, value])
    }

    async function SetSearch() {
        const queryParams = [];
      
        const formatParam = (key: any, value: any) => `${key}=${value}`;
        
        queryParams.push(...data.map((value) => `${value}=true`));
      
        if (rooms !== null) queryParams.push(formatParam('rooms', rooms));
        if (suites !== null) queryParams.push(formatParam('suites', suites));
        if (imovelType !== "null" && imovelType !== null) queryParams.push(formatParam('imovelType', imovelType));
        if (mobiliado !== "null" && mobiliado !== null) queryParams.push('mobiliado=true');
        if (price !== "null" && price !== null) queryParams.push(formatParam('price', price));
        if (name !== "null" && name !== null) queryParams.push(formatParam('name', name));
        if (aceitaPets !== "null" && aceitaPets !== null) queryParams.push(formatParam('aceitaPets', aceitaPets));
        if (bathrooms !== "null" && bathrooms !== null) queryParams.push(formatParam('bathrooms', bathrooms));
        if (vagas !== "null" && vagas !== null) queryParams.push(formatParam('vagas', vagas));
      
        const queryString = queryParams.join('&');
        sendToFather(queryString)
        router.push((`/imoveis${queryString ? '?' : ''}${queryString}`))
      }
    
    return (
        <Sheet>
            <SheetTrigger><Button className="rounded-3xl gap-2 hover:bg-neutral-100 transition-colors" variant="secondary">Mais filtros <Plus size={16}/></Button></SheetTrigger>
            <SheetContent className="flex flex-col sm:max-w-lg">
                <h2>Mais filtros</h2>
                <div className="w-full h-full space-y-4 relative lg:mt-8">
                    <div className="flex flex-wrap items-center gap-2 justify-between">
                        <Label className="lg:text-lg font-medium">Aceita pet?</Label>
                        <div className="space-x-2">
                            <Button className="w-12 h-8" value="true" onClick={() => setAceitaPets("true")}>Sim</Button>
                            <Button className="w-12 h-8" value="">Não</Button>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 justify-between">
                        <Label className="lg:text-lg font-medium">Banheiros</Label>
                        <div className="space-x-2">
                            <Button className="w-12 h-8" value="1" onClick={() => setBathrooms("1")}>1+</Button>
                            <Button className="w-12 h-8" value="2" onClick={() => setBathrooms("2")}>2+</Button>
                            <Button className="w-12 h-8" value="3" onClick={() => setBathrooms("3")}>3+</Button>
                            <Button className="w-12 h-8" value="4" onClick={() => setBathrooms("4")}>4+</Button>
                            <Button className="w-12 h-8" value="5" onClick={() => setBathrooms("5")}>5+</Button>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 justify-between">
                        <Label className="lg:text-lg font-medium">Vagas</Label>
                        <div className="space-x-2">
                            <Button className="w-12 h-8" value="1" onClick={() => setVagas("1")}>1+</Button>
                            <Button className="w-12 h-8" value="2" onClick={() => setVagas("2")}>2+</Button>
                            <Button className="w-12 h-8" value="3" onClick={() => setVagas("3")}>3+</Button>
                            <Button className="w-12 h-8" value="4" onClick={() => setVagas("4")}>4+</Button>
                            <Button className="w-12 h-8" value="5" onClick={() => setVagas("5")}>5+</Button>
                        </div>
                    </div>
                    <div className="mt-8">    
                        <Label>Características</Label>
                        <Separator className="mt-4"></Separator>
                        <RadioGroup onValueChange={(value) => pushData(value)}>
                            <div className="grid grid-flow-row mt-6 grid-cols-2 w-full place-content-center gap-3">
                                <RadioGroup onValueChange={(value) => pushData(value)} className="flex items-center space-x-2">
                                    <RadioGroupItem value="aceitaPermuta" id="r2" />
                                    <Label htmlFor="r2">Aceita Permuta</Label>
                                </RadioGroup>
                                <RadioGroup onValueChange={(value) => pushData(value)} className="flex items-center space-x-2">
                                    <RadioGroupItem value="aquecimentoSolar" id="r3" />
                                    <Label htmlFor="r3">Aquecimento solar</Label>
                                </RadioGroup>
                                <RadioGroup onValueChange={(value) => pushData(value)} className="flex items-center space-x-2">
                                    <RadioGroupItem value="armarioCloset" id="r4" />
                                    <Label htmlFor="r4">Armário closet</Label>
                                </RadioGroup>
                                <RadioGroup onValueChange={(value) => pushData(value)} className="flex items-center space-x-2">
                                    <RadioGroupItem value="beiraMar" id="r5" />
                                    <Label htmlFor="r5">Beira mar</Label>
                                </RadioGroup>
                                <RadioGroup onValueChange={(value) => pushData(value)} className="flex items-center space-x-2">
                                    <RadioGroupItem value="portaoEletronico" id="r6" />
                                    <Label htmlFor="r6">Portão eletrônico</Label>
                                </RadioGroup>
                                <RadioGroup onValueChange={(value) => pushData(value)} className="flex items-center space-x-2">
                                        <RadioGroupItem value="areaDeServico" id="r7" />
                                        <Label htmlFor="r7">Área de serviço</Label>
                                </RadioGroup>
                            </div>
                            <button className="flex gap-1 my-4 items-center justify-start text-sm font-medium text-neutral-800" onClick={() => setIsVisible(!isVisible)}>Ver mais <ArrowDown size={18}/></button>
                            {isVisible && 
                                <div className="grid grid-flow-row grid-cols-2 w-full place-content-center gap-3">    
                                    <RadioGroup onValueChange={(value) => pushData(value)} className="flex items-center space-x-2">
                                        <RadioGroupItem value="banheiroDeEmpregada" id="r8" />
                                        <Label htmlFor="r8">Banheiro de empregada</Label>
                                    </RadioGroup>
                                    <RadioGroup onValueChange={(value) => pushData(value)} className="flex items-center space-x-2">
                                        <RadioGroupItem value="campoDeFutebol" id="r9" />
                                        <Label htmlFor="r9">Campo de futebol</Label>
                                    </RadioGroup>
                                    <RadioGroup onValueChange={(value) => pushData(value)} className="flex items-center space-x-2">
                                        <RadioGroupItem value="carpeteDeMadeira" id="r10" />
                                        <Label htmlFor="r10">Carpete de madeira</Label>
                                    </RadioGroup>
                                    <RadioGroup onValueChange={(value) => pushData(value)} className="flex items-center space-x-2">
                                        <RadioGroupItem value="dormitorioDeEmpregada" id="r11" />
                                        <Label htmlFor="r11">Dormitorio de empregada</Label>
                                    </RadioGroup>
                                    <RadioGroup onValueChange={(value) => pushData(value)} className="flex items-center space-x-2">
                                        <RadioGroupItem value="pisoCeramico" id="r12" />
                                        <Label htmlFor="r12">Piso cerâmico</Label>
                                    </RadioGroup>
                                    <RadioGroup onValueChange={(value) => pushData(value)} className="flex items-center space-x-2">
                                        <RadioGroupItem value="pisoArdosia" id="r13" />
                                        <Label htmlFor="r13">Piso Ardosia</Label>
                                    </RadioGroup>
                                    <RadioGroup onValueChange={(value) => pushData(value)} className="flex items-center space-x-2">
                                        <RadioGroupItem value="pisoCimentoQueimado" id="r14" />
                                        <Label htmlFor="r14">Piso cimento queimado</Label>
                                    </RadioGroup>
                                    <RadioGroup onValueChange={(value) => pushData(value)} className="flex items-center space-x-2">
                                        <RadioGroupItem value="pisoMarmore" id="r15" />
                                        <Label htmlFor="r15">Piso mármore</Label>
                                    </RadioGroup>
                                    <RadioGroup onValueChange={(value) => pushData(value)} className="flex items-center space-x-2">
                                        <RadioGroupItem value="pisoLaminado" id="r16" />
                                        <Label htmlFor="r16">Piso laminado</Label>
                                    </RadioGroup>
                                    <RadioGroup onValueChange={(value) => pushData(value)} className="flex items-center space-x-2">
                                        <RadioGroupItem value="qudraPoliesportiva" id="r17" />
                                        <Label htmlFor="r17">Quadra poliesportiva</Label>
                                    </RadioGroup>
                                    <RadioGroup onValueChange={(value) => pushData(value)} className="flex items-center space-x-2">
                                        <RadioGroupItem value="semCondominio" id="r18" />
                                        <Label htmlFor="r18">Sem condomínio</Label>
                                    </RadioGroup>
                                    <RadioGroup onValueChange={(value) => pushData(value)} className="flex items-center space-x-2">
                                        <RadioGroupItem value="tacoDeMadeira" id="r19" />
                                        <Label htmlFor="r19">Taco de Madeira</Label>
                                    </RadioGroup>
                                    <RadioGroup onValueChange={(value) => pushData(value)} className="flex items-center space-x-2">
                                        <RadioGroupItem value="armarioAreaDeServico" id="r20" />
                                        <Label htmlFor="r20">Ármario área de serviço</Label>
                                    </RadioGroup>
                                    <RadioGroup onValueChange={(value) => pushData(value)} className="flex items-center space-x-2">
                                        <RadioGroupItem value="armarioBanheiro" id="r21" />
                                        <Label htmlFor="r21">Ármario banheiro</Label>
                                    </RadioGroup>
                                    <RadioGroup onValueChange={(value) => pushData(value)} className="flex items-center space-x-2">
                                        <RadioGroupItem value="armarioCozinha" id="r22" />
                                        <Label htmlFor="r22">Ármario cozinha</Label>
                                    </RadioGroup>
                                    <RadioGroup onValueChange={(value) => pushData(value)} className="flex items-center space-x-2">
                                        <RadioGroupItem value="armarioDormitorioDeEmpregada" id="r23" />
                                        <Label htmlFor="r23">Ármario dormitório de empregada</Label>
                                    </RadioGroup>
                                    <RadioGroup onValueChange={(value) => pushData(value)} className="flex items-center space-x-2">
                                        <RadioGroupItem value="armarioEscritorio" id="r24" />
                                        <Label htmlFor="r24">Ármario escritório</Label>
                                    </RadioGroup>
                                    <RadioGroup onValueChange={(value) => pushData(value)} className="flex items-center space-x-2">
                                        <RadioGroupItem value="armarioHomeTheater" id="r25" />
                                        <Label htmlFor="r25">Ármario home theater</Label>
                                    </RadioGroup>
                                    <RadioGroup onValueChange={(value) => pushData(value)} className="flex items-center space-x-2">
                                        <RadioGroupItem value="armarioQuarto" id="r26" />
                                        <Label htmlFor="r26">Ármario quarto</Label>
                                    </RadioGroup>
                                    <RadioGroup onValueChange={(value) => pushData(value)} className="flex items-center space-x-2">
                                        <RadioGroupItem value="armarioSala" id="r27" />
                                        <Label htmlFor="r27">Ármario sala</Label>
                                    </RadioGroup>
                                    <RadioGroup onValueChange={(value) => pushData(value)} className="flex items-center space-x-2">
                                        <RadioGroupItem value="pisoVinilico" id="r28" />
                                        <Label htmlFor="r28">Piso vinilico</Label>
                                    </RadioGroup>
                                    <RadioGroup onValueChange={(value) => pushData(value)} className="flex items-center space-x-2">
                                        <RadioGroupItem value="vestiario" id="r29" />
                                        <Label htmlFor="r29">Vestiário</Label>
                                    </RadioGroup>
                                </div>
                            } 
                        <Button className="w-full absolute bottom-0" onClick={SetSearch}>Encontrar imóveis</Button>
                        </RadioGroup>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}