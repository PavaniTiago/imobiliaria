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
import Link from "next/link"
import { useQuery } from "@tanstack/react-query"
import AutoPlay from "embla-carousel-autoplay"

export function ImovelBanner(){

    const { data } = useQuery({
        queryKey: ["imoveis"],
        queryFn: () => UseImoveis(),
        staleTime: 5 * 1000 * 60
    })

    return (
        <div>
            <Carousel className="flex items-center justify-center w-[20rem] lg:w-[64rem] lg:h-[38rem]" 
            plugins={[
                AutoPlay({
                    delay: 3000,
                })
            ]}
            >
                    <CarouselContent>
                        {data?.map((imovel, idx) => (
                        <CarouselItem key={idx}>
                            <Link href={{
                                pathname: '/imovel',
                                query: {
                                    id: imovel.id,
                                }
                            }}>
                                <Card className="relative">
                                    <CardContent className="flex aspect-video items-center justify-center w-full">
                                        <Image key={idx} src={imovel.imageUrl[1]} alt="imagem de imóvel" className="h-full w-full object-cover rounded-lg" width={0} height={0} sizes="100vw" quality={100} priority/>
                                        <div className="flex flex-col py-7 w-full lg:w-[64rem] bg-neutral-900/70 rounded-b-lg bottom-0 text-secondary gap-3 absolute">
                                            <span className="font-semibold pl-8 text-sm lg:text-md">{imovel.cidade + ' - ' + imovel.estadoSigla.toUpperCase()}</span>
                                            <div className="flex flex-col lg:flex-row w-full justify-between items-center px-8">
                                                <h2 className="text-sm lg:text-2xl max-w-3xl">{capitalizeFirstLetter(imovel.title) + ' - ' + imovel.cidade + ' - ' + imovel.estadoSigla.toUpperCase()}</h2>
                                                <span className="font-semibold">{'R$ ' + imovel.price}</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                <CarouselPrevious variant="secondary" className="px-3 absolute w-10 h-10 hover:bg-neutral-300 hidden lg:block"/>
                <CarouselNext variant="secondary" className="px-3 absolute w-10 h-10 hover:bg-neutral-300 hidden lg:block"/>
            </Carousel>
        </div>
    )
}