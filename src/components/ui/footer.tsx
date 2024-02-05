"use client"

import { Share2Icon, ArrowRightIcon } from "@radix-ui/react-icons";
import { Button } from "./button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "./card";
import { UseImoveis } from "@/hooks/useImoveis";

export function Footer(){

    const { houseCard } = UseImoveis()

    const cityNames = houseCard?.map((imovel) => { return imovel.cidade })

    const filteredArray = cityNames?.filter((imovel, idx) => {
        return cityNames.indexOf(imovel) === idx
    })

    return (
        <footer className="flex flex-col items-center justify-end w-full h-full bg-primary">
            <Card className="w-[350px] h-[380px] flex flex-col justify-between mt-8">
              <CardHeader className="gap-2">
                <Share2Icon width={35} height={35} className="text-foreground/70"/>
                <CardTitle className="text-2xl">Administração de imóveis</CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-8 leading-snug">
                <span>Deixe seus dados que cuidaremos do seu imóvel.</span>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="default" size="lg" className="hover:bg-blue-700 transition">Iniciar</Button>
                <ArrowRightIcon width={20} height={20}/>
              </CardFooter>
            </Card>
            <span className="uppercase text-md font-semibold text-secondary mt-8">creci: 222222</span>
            <div className="w-full max-w-4xl flex flex-col justify-between items-start font-semibold text-start text-white mt-12">
            <h2 className="text-3xl">Imóveis por região</h2>
                <div className="flex justify-between w-full mt-6">
                {filteredArray?.map((name) => (
                    <span className="text-md hover:text-white/80 transition cursor-pointer">{name}</span>
                ))}
                </div>
            </div>
            <div className="w-full flex items-center justify-center bg-secondary py-16 mt-12">
                <div className="w-full max-w-4xl flex justify-between text-primary">    
                    <div>
                        <h3 className="text-lg text-black font-semibold">Institucional</h3>
                        <span className="text-md text-black hover:bg-gray-200 transition-colors cursor-pointer">Política de privacide</span>
                    </div>
                    <div>
                        <h3 className="text-lg text-black font-semibold">Imóveis</h3>
                        <span className="text-md text-black hover:bg-gray-200 transition-colors cursor-pointer">Cadastre seu imóvel</span>
                    </div>
                    <div>
                        <h3 className="text-lg text-black font-semibold">Serviços</h3>
                        <span className="text-md text-black hover:bg-gray-200 transition-colors cursor-pointer">Financiamento e bancos</span>
                    </div>
                    <div>
                        <h3 className="text-lg text-black font-semibold">Contatos</h3>
                        <span className="text-md text-black hover:bg-gray-200 transition-colors cursor-pointer">Fale conosco</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}