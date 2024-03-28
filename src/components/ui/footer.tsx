"use client"

import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Button } from "./button";
import { Card, CardHeader, CardContent, CardFooter } from "./card";
import { UseImoveis } from "@/hooks/useImoveis";
import { useQuery } from "@tanstack/react-query";
import { InstagramLogo } from "@phosphor-icons/react";
import Link from "next/link";
import Logo from "../../../public/logo2.png"
import Image from "next/image";

export function Footer(){

    const { data } = useQuery({
        queryKey: ["imoveis"],
        queryFn: () => UseImoveis(),
        staleTime: 5 * 1000
    })

    const cityNames = data?.map((imovel) => { return imovel.cidade })

    const filteredArray = cityNames?.filter((imovel, idx) => {
        return cityNames.indexOf(imovel) === idx
    })

    return (
        <footer className="flex flex-col items-center justify-end w-full h-full bg-primary">
            <Card className="w-[300px] h-[360px] flex flex-col justify-between">
              <CardHeader className="flex items-center justify-center gap-2 relative">
                <Image alt="logo imobiliaria" src={Logo} width={0} height={0} className="object-cover h-32 w-32" />
                <span className="text-sm font-semibold absolute bottom-0">CRECI:244300</span>
              </CardHeader>
              <CardContent className="flex flex-col px-6 pb-8 leading-snug">
                <span className="text-md font-semibold">Carlos Tortorella</span>
                <span className="text-sm">Vinhedo SP</span>
                <span className="text-sm">(19) 99901-6424</span>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="default" size="lg" className="hover:bg-blue-700 transition"><Link href="https://wa.link/2ul0du">Iniciar</Link></Button>
                <ArrowRightIcon width={20} height={20}/>
              </CardFooter>
            </Card>
            <span className="uppercase text-md font-semibold text-secondary mt-8 mb-12">creci: 244300</span>
            <div className="hidden lg:block w-full">
                <div className="w-full flex items-center justify-center flex-col">
                    <div className="w-full max-w-4xl flex flex-col justify-between items-start font-semibold text-start text-white">
                    <h2 className="text-3xl">Imóveis por região</h2>
                        <div className="flex justify-between w-full mt-6">
                        {filteredArray?.map((name, idx) => (
                            <Link href={`/imoveis?name=${name}`} className="text-md hover:text-white/80 transition cursor-pointer uppercase" key={idx}>{name}</Link>
                        ))}
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col items-center justify-center bg-secondary pt-16 pb-4 mt-12">
                    <div className="w-full max-w-3xl flex justify-between text-primary">    
                        <div>
                            <h3 className="text-lg text-black font-semibold">Imóveis</h3>
                            <Link href="https://www.instagram.com/carlostortorella/" className="text-md text-black hover:bg-gray-200 transition-colors cursor-pointer">Cadastre seu imóvel</Link>
                        </div>
                        <div>
                            <h3 className="text-lg text-black font-semibold">Serviços</h3>
                            <Link href="/bancos" className="text-md text-black hover:bg-gray-200 transition-colors cursor-pointer">Financiamento e bancos</Link>
                        </div>
                        <div>
                            <h3 className="text-lg text-black font-semibold">Contatos</h3>
                            <Link href="https://www.instagram.com/carlostortorella/" className="text-md text-black hover:bg-gray-200 transition-colors cursor-pointer">Fale conosco</Link>
                        </div>
                        <div>
                            <h3 className="text-lg text-black font-semibold">Informações</h3>
                            <Link href="https://www.instagram.com/carlostortorella/" className="text-md text-black hover:bg-gray-200 transition-colors cursor-pointer">Quem sou eu</Link>
                        </div>
                    </div>
                    <Link target="_blank" href="https://www.instagram.com/carlostortorella/" ><Button className="bg-transparent text-white rounded-full border border-black p-2 mt-4"><InstagramLogo className="text-black" size={20}/></Button></Link>
                    <p className="text-sm my-3">© 2024. Todos os Direitos reservados. gerenciado por JN Comunicação</p>
                </div>
            </div>
                <div className="block lg:hidden bg-secondary">
                    <div className="flex flex-col items-center justify-center px-8">
                        <Link target="_blank" href="https://www.instagram.com/carlostortorella/" ><Button className="bg-transparent text-white rounded-full border border-black p-2 mt-4"><InstagramLogo className="text-black" size={20}/></Button></Link>
                        <p className="text-sm my-3 text-center">© 2024. Todos os Direitos reservados. gerenciado por JN Comunicação</p>
                    </div>
                </div>
        </footer>
    )
}