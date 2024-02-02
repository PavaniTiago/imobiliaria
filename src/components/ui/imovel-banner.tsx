"use client"

import { UseImoveis } from "@/hooks/useImoveis"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { capitalizeFirstLetter } from "@/lib/utils"

export function ImovelBanner(){
    
    const { houseCard } = UseImoveis()

    return (
        <div>
            <Carousel className="flex items-center justify-center w-[64rem] h-[38rem]">
                    <CarouselContent>
                        {houseCard?.map((imovel, idx) => (
                        <CarouselItem key={idx}>
                            <Card>
                                <CardContent className="flex aspect-video items-center justify-center w-full">
                                    <Image key={idx} src={imovel.imageUrl[1]} alt="imagem de imóvel" className="h-full w-full object-cover rounded-lg relative" width={0} height={0} sizes="100vw" />
                                    <div className="flex flex-col py-7 w-[64rem] bg-neutral-900/70 rounded-b-lg bottom-0 text-secondary gap-3 absolute">
                                        <span className="font-semibold pl-8 text-md">{imovel.cidade + ' - ' + imovel.estadoSigla.toUpperCase()}</span>
                                        <div className="flex w-full justify-between items-center px-8">
                                            <h2 className="text-2xl max-w-3xl">{capitalizeFirstLetter(imovel.title) + ' - ' + imovel.cidade + ' - ' + imovel.estadoSigla.toUpperCase()}</h2>
                                            <span className="font-semibold">{'R$ ' + imovel.price}</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                <CarouselPrevious variant="secondary" className="absolute w-10 h-10 hover:bg-neutral-300"/>
                <CarouselNext variant="secondary" className="absolute w-10 h-10 hover:bg-neutral-300"/>
            </Carousel>
        </div>
    )
}