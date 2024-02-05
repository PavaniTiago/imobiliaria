import { Button } from "@/components/ui/button";
import { Search } from "@/components/ui/search";
import Image from "next/image";
import { ArrowRightIcon, HomeIcon, PersonIcon, Share2Icon } from "@radix-ui/react-icons"
import { InputSearch } from "@/components/ui/input-search";
import { ImovelBanner } from "@/components/ui/imovel-banner";
import { ImovelCard } from "@/components/ui/imovel-card";
import { SelectGroupRadio } from "@/components/ui/select-radio-group";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { WhattsApButton } from "@/components/ui/whattsap-button";

export default function Home() {
  return (
    <div className='relative flex flex-col items-center justify-center w-full h-full bg-primary'>
      <WhattsApButton />
      <div className="flex items-center justify-center w-full">
        <div className="w-full h-screen relative">
          <Image src="https://i.ibb.co/f4ZN9Q0/L-966f121b838c4c37ab11430267ed6020.jpg" 
          className="brightness-75 object-cover" alt="banner image" width={0} height={0} sizes="100vw" fill priority/>
        </div>
          <div className="flex flex-col items-center justify-center w-full h-full absolute text-white font-montSerrat gap-6">
            <h1 className="text-5xl font-semibold">Compre ou Alugue Agora</h1>
            <div className="flex w-fit p-3 bg-primary shadow-lg rounded-xl gap-6">
              <Search title="Pretensão"/>
              <SelectGroupRadio title="Tipo Imóvel" icon={<HomeIcon />}/>
              <InputSearch placeholder="Digite condomínio, região, bairro ou cidade"/>
              <Button variant="secondary" size="lg" className="hover:bg-neutral-200 transition py-6">Encontrar Imóvel</Button>
            </div>
          </div>
      </div>
        <div className="flex items-center justify-center h-full w-full py-12">
            <ImovelBanner />
        </div>
        <div className="w-full">
          <h2 className="text-2xl font-semibold text-center text-secondary">Sua família merece o melhor</h2>
          <div className="w-full flex justify-center gap-4 py-6">
            <Button variant="secondary" className="bg-transparent text-white outline outline-2 rounded-3xl hover:text-neutral-300">Destaques</Button>
            <Button variant="ghost" className="text-white hover:text-neutral-300">Veja Mais</Button>
          </div>
          <div className="flex items-center justify-center w-full pt-6">
            <div className="grid grid-cols-4 gap-4 max-w-6xl">
              <ImovelCard />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full py-20">
            <div className="flex flex-wrap items-center justify-center w-2/4 gap-6">
            <Card className="w-[320px] h-[350px] flex flex-col justify-between">
              <CardHeader className="gap-2">
                <PersonIcon width={35} height={35} className="text-foreground/70"/>
                <CardTitle className="text-2xl">Atendimento VIP</CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-8 leading-snug">
                <span>Nos conte como quer o seu imóvel e nós encontraremos para você</span>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="default" size="lg" className="hover:bg-blue-700 transition">Iniciar</Button>
                <ArrowRightIcon width={20} height={20}/>
              </CardFooter>
            </Card>
            <Card className="w-[320px] h-[350px] flex flex-col justify-between">
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
            </div>
          </div>
        </div>
    </div> 
  )
}
