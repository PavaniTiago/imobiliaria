"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { UseImoveis } from "@/hooks/useImoveis"

export default function Page(){
    
    const { houseCard } = UseImoveis()

    return (
        <div>
            {houseCard?.map((imovel) => (
      <Carousel className="w-full max-w-xs">
        <CarouselContent>
          {imovel.imageUrl.map((url: string, idx: number) => (
            <CarouselItem key={idx}>
              <div>
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center">
                    <Image key={idx} src={url} alt="imagem de imóvel" className="h-full w-full object-cover rounded-lg" width={0} height={0} sizes="100vw" />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute ml-14"/>
        <CarouselNext className="absolute mr-14"/>
      </Carousel>
    ))}
        </div>
    )
}