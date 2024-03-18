"use client"

import { UseImoveis } from "@/hooks/useImoveis"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { capitalizeFirstLetter, pegarPrimeiraPalavraComCondominio } from "@/lib/utils"
import Link from "next/link"
import { useQuery } from "@tanstack/react-query"

export function ImovelCard(){

    const { data } = useQuery({
        queryKey: ["imoveis"],
        queryFn: () => UseImoveis(),
        staleTime: 5 * 1000 * 60
    })
    const indicesDesejados = [0, 1, 3, 11, 15, 16, 18, 19];

    return (
        <>
            {data?.filter((imovel, idx) => indicesDesejados.includes(idx)).map((imovel, idx) => (
                <Card className="w-full relative" key={idx}>
                    <Link href={{
                        pathname: '/imovel',
                        query: {
                            id: imovel.id,
                        }
                    }}>
                        <CardContent className="flex aspect-square items-center justify-center w-full">
                            <Image src={imovel.imageUrl[1]} alt="imagem de imóvel" className="h-full w-full object-cover rounded-lg relative" width={0} height={0} sizes="100vw" />
                            <div className="flex items-center justify-start py-2 w-full px-4 bg-neutral-50/70 rounded-b-lg bottom-0 h-20 text-secondary gap-3 absolute">
                                <h2 className="text-sm text-secondary-foreground font-bold leading-tight first-letter:uppercase">{pegarPrimeiraPalavraComCondominio(imovel.title) + ' - ' + imovel.cidade + ' - ' + imovel.estadoSigla.toUpperCase()}</h2>
                            </div>
                        </CardContent>
                    </Link>
                </Card>
            ))}
        </>
    )
}