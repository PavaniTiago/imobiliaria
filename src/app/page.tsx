import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRightIcon, PersonIcon, Share2Icon } from "@radix-ui/react-icons"
import { ImovelCard } from "@/components/ui/imovel-card";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { WhattsApButton } from "@/components/ui/whattsap-button";
import { SearchForm } from "@/components/ui/serch-form";
import Link from "next/link";
import Carlos from "../../public/carlos.png";
import { DoubleCard } from "@/components/ui/doubleCard";
import HomeBannerCarousel from "@/components/home-banner-carousel";
import image2 from "../../public/image2.jpg"

export default function Home() {

  return (
    <div className='relative flex flex-col items-center justify-center w-full h-full bg-primary overflow-hidden'>
      <WhattsApButton />
      <div className="flex relative items-center justify-center w-full h-full">
        <div className="w-full h-screen">
          <div className="h-full w-full block lg:hidden">
            <Image alt="background image" src={image2} width={0} height={0} className="object-cover h-full" />
          </div>
          <div className="hidden lg:block">
            <HomeBannerCarousel />
          </div>
        </div> 
          <Image src={Carlos} alt="carlos foto" width={0} height={0} className="object-cover lg:h-[29rem] lg:w-[16.5rem] 2xl:h-[41rem] 2xl:w-[25rem] lg:block hidden absolute bottom-0 -right-8 transform scale-x-[-1]"/>
          <div className="flex flex-col items-center justify-center w-full h-full absolute text-white  gap-6">
            <h1 className="text-3xl text-center lg:text-5xl font-semibold font-montSerrat">Compre ou Alugue Agora</h1>
            <SearchForm />
          </div>
      </div>
      <div>
      </div>
        <div className="h-full w-full py-12 hidden lg:block">
          <div className="flex justify-center items-center">
            {/* <ImovelBanner /> */}
            <DoubleCard />
          </div>
        </div>
        <div className="w-full mt-12 lg:mt-0">
          <h2 className="text-xl px-6 lg:text-2xl font-semibold text-center text-secondary uppercase">Realize o sonho da casa própria</h2>
          <div className="w-full flex justify-center gap-4 py-6">
            <Button variant="secondary" className="bg-transparent text-white outline outline-2 rounded-3xl hover:text-neutral-300">Destaques</Button>
            <Button variant="ghost" className="text-white cursor-pointer hover:text-neutral-300"><Link href="/imoveis">Veja Mais</Link></Button>
          </div>
          <div className="flex items-center justify-center w-full pt-6">
            <div className="grid lg:grid-cols-4 gap-4 max-w-6xl">
              <ImovelCard />
            </div>
          </div>
        </div>
          <div className="flex flex-col items-center justify-center w-full py-20">
            <div className="flex flex-wrap items-center justify-center lg:w-2/4 gap-6">
            <Card className="w-[320px] h-[350px] flex flex-col justify-between">
              <CardHeader className="gap-2">
                <PersonIcon width={35} height={35} className="text-foreground/70"/>
                <CardTitle className="text-2xl">Atendimento Personalizado</CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-8 leading-snug">
                <span>Nos conte como quer o seu imóvel e nós encontraremos para você</span>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="default" size="lg" className="hover:bg-blue-700 transition"><Link href="https://wa.link/2ul0du">Iniciar</Link></Button>
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
                <Button variant="default" size="lg" className="hover:bg-blue-700 transition"><Link href="https://wa.link/2ul0du">Iniciar</Link></Button>
                <ArrowRightIcon width={20} height={20}/>
              </CardFooter>
            </Card>
            </div>
          </div>
    </div> 
  )
}