import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRightIcon, PersonIcon, Share2Icon } from "@radix-ui/react-icons"
import { ImovelBanner } from "@/components/ui/imovel-banner";
import { ImovelCard } from "@/components/ui/imovel-card";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { WhattsApButton } from "@/components/ui/whattsap-button";
import { SearchForm } from "@/components/ui/serch-form";
import Link from "next/link";

export default function Home() {

  return (
    <div className='relative flex flex-col items-center justify-center w-full h-full bg-primary'>
      <WhattsApButton />
      <div className="flex relative items-center justify-center w-full">
        <div className="w-full h-screen">
          <Image src="https://i.ibb.co/f4ZN9Q0/L-966f121b838c4c37ab11430267ed6020.jpg" 
          className="brightness-75 object-cover" alt="banner image" width={0} height={0} sizes="100vw" fill priority/>
        </div>
          <div className="flex flex-col items-center justify-center w-full h-full absolute text-white  gap-6">
            <h1 className="text-3xl text-center lg:text-5xl font-semibold font-montSerrat">Compre ou Alugue Agora</h1>
            <SearchForm />
          </div>
      </div>
      <div>
      </div>
        <div className="h-full w-full py-12 hidden lg:block">
          <div className="flex justify-center items-center">
            <ImovelBanner />
          </div>
        </div>
        <div className="w-full hidden lg:block">
          <h2 className="text-2xl font-semibold text-center text-secondary">Sua família merece o melhor</h2>
          <div className="w-full flex justify-center gap-4 py-6">
            <Button variant="secondary" className="bg-transparent text-white outline outline-2 rounded-3xl hover:text-neutral-300">Destaques</Button>
            <Button variant="ghost" className="text-white cursor-pointer hover:text-neutral-300"><Link href="/imoveis">Veja Mais</Link></Button>
          </div>
          <div className="flex items-center justify-center w-full pt-6">
            <div className="grid grid-cols-4 gap-4 max-w-6xl">
              <ImovelCard />
            </div>
          </div>
        </div>
          <div className="flex flex-col items-center justify-center w-full py-20">
            <div className="flex flex-wrap items-center justify-center lg:w-2/4 gap-6">
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
  )
}