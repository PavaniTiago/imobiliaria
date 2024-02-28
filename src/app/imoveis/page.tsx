"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { FiltersButtons } from "@/components/ui/filters-button"
import { WhattsApButton } from "@/components/ui/whattsap-button"
import { UseImoveisByFilter } from "@/hooks/useImovelByFilter"
import { capitalizeFirstLetter } from "@/lib/utils"
import { useQuery } from "@tanstack/react-query"
import Image from "next/image"
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"

export default function Imovel() {
    
    const serchParams = useSearchParams() 
    const rooms = Number(serchParams.get('rooms'))
    const suites = Number(serchParams.get('suites'))
    const imovelType = String(serchParams.get('imovelType'))
    const mobiliado = String(serchParams.get('mobiliado'))
    const price = String(serchParams.get('price'))
    const name = String(serchParams.get('name'))

    const router = useRouter()

    const validadeData = () => {
        if(name !== "null" || null){
           return UseImoveisByFilter(rooms, suites, imovelType, mobiliado, price, name)
        }else{
           return UseImoveisByFilter(rooms, suites, imovelType, mobiliado, price)
        }
    }

    const { data } = useQuery({
      queryKey: ["filtered-imoveis"],
      queryFn: () => validadeData()
    })

    return (
        <div className="relative flex flex-col items-center justify-center w-full h-full bg-primary pt-32">
            <WhattsApButton />
            <div className="flex justify-between items-start w-full max-w-6xl">
                <h2 className="text-2xl font-semibold text-start text-white pb-8">Imóveis à venda {data?.length}</h2>
                <FiltersButtons imovelType={imovelType} mobiliado={mobiliado} name={name} price={price} rooms={rooms} suites={suites} />
            </div>
            <div className="grid grid-cols-4 gap-4 max-w-6xl pb-16">
                {data?.map((imovel, idx) => (
                    <Card className="w-full h-full relative cursor-pointer" key={idx}>
                            <CardContent className="flex flex-col w-full h-full items-center justify-center">
                                <Carousel className="w-full h-full">
                                    <CarouselContent onClick={() => router.push(`/imovel?id=${imovel.id}`)}>
                                        {imovel.imageUrl.map((photos, idx) => (
                                            <CarouselItem className="w-full h-full" key={idx}>
                                                 <Image src={photos} alt="imagem de imóvel" className="h-full w-full aspect-square object-cover rounded-t-lg" width={0} height={0} sizes="100vw" quality={100}/>
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                    <CarouselPrevious variant="secondary" className="absolute mx-14 z-10 hover:bg-neutral-300"/>
                                    <CarouselNext variant="secondary" className="absolute mx-14 z-10 hover:bg-neutral-300"/>
                                </Carousel>
                                <div className="flex flex-col py-6 w-full h-full px-4 bg-neutral-50/70 rounded-b-lg bottom-0 text-secondary" onClick={() => router.push(`/imovel?id=${imovel.id}`)}>
                                        <span className="text-sm text-secondary-foreground leading-tight mb-2 capitalize">{imovel.apartamento ? "apartamento" : "" || imovel.casa ? "casa" : "" || imovel.terreno ? "terreno" : ""}</span>
                                        <h2 className="text-sm text-secondary-foreground font-semibold leading-tight">{capitalizeFirstLetter(imovel.title) + ' - ' + imovel.cidade + ' - ' + imovel.estadoSigla.toUpperCase()}</h2>
                                        <span className="text-sm leading-tight text-secondary-foreground mt-1">cep: {imovel.cep}</span>
                                        <span className="text-sm text-secondary-foreground leading-tight mt-2">{imovel?.m2} m<span className='align-super text-xs'>2</span> &#x2022; {imovel?.rooms} Quartos{" "} &#x2022; {imovel?.suites} Suites{" "} &#x2022;{imovel.bathrooms} Banheiros{" "} &#x2022; {imovel.vagas} Vagas</span>
                                        <span className="text-sm font-semibold text-secondary-foreground mt-2">Venda</span>
                                        <span className="text-base font-semibold text-secondary-foreground">R${imovel.price}</span>
                                </div>
                            </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}