"use client"

import { UseImoveis } from "@/hooks/useImoveis"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { capitalizeFirstLetter } from "@/lib/utils"

export function ImovelCard(){

    const { houseCard } = UseImoveis()

    return (
        <>
            {houseCard?.slice(0, 8).map((imovel, idx) => (
                <Card className="w-full relative">
                <CardContent className="flex aspect-square items-center justify-center w-full">
                    <Image key={idx} src={imovel.imageUrl[1]} alt="imagem de imóvel" className="h-full w-full object-cover rounded-lg relative" width={0} height={0} sizes="100vw" />
                    <div className="flex flex-col py-6 w-full px-4 bg-neutral-50/70 rounded-b-lg bottom-0 text-secondary gap-3 absolute">
                            <h2 className="text-sm text-secondary-foreground font-semibold leading-tight">{capitalizeFirstLetter(imovel.title) + ' - ' + imovel.cidade + ' - ' + imovel.estadoSigla.toUpperCase()}</h2>
                    </div>
                </CardContent>
            </Card>
            ))}
        </>
    )
}