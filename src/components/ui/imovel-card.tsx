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
                <Card className="w-[18rem] lg:w-full relative group z-10" key={idx}>
                    <Link href={{
                        pathname: '/imovel',
                        query: {
                            id: imovel.id,
                        }
                    }}>
                        <CardContent className="flex aspect-square items-center justify-center w-full group-hover:scale-110 transition-all duration-200 ease-in-out">
                            <Image src={imovel.imageUrl[1]} alt="imagem de imóvel" className="h-full w-full object-cover rounded-lg relative group-hover:brightness-75 brightness-90 transition-all duration-200 ease-in-out" width={0} height={0} sizes="100vw" />
                            <div className="flex flex-col items-center justify-start py-16 w-full px-4 bg-gradient-to-t from-black to-bg-transparent rounded-b-lg bottom-0 h-28 group-hover:h-40 text-secondary gap-3 absolute transition-all duration-200 ease-in-out">
                                <h2 className="text-sm text-secondary font-bold leading-tight first-letter:uppercase">{pegarPrimeiraPalavraComCondominio(imovel.title) + ' - ' + imovel.cidade + ' - ' + imovel.estadoSigla.toUpperCase()}</h2>
                                <div className="hidden group-hover:block">
                                    <div className="flex gap-3">
                                        <h2 className="text-xs text-secondary font-semibold leading-tight border border-neutral-400 rounded-lg p-2">{imovel.rooms} Dormitórios</h2>
                                        <h2 className="text-xs text-secondary font-semibold leading-tight border border-neutral-400 rounded-lg p-2">{imovel.bathrooms} Banheiros</h2>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Link>
                </Card>
            ))}
        </>
    )
}