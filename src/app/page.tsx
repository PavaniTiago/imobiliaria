import { Button } from "@/components/ui/button";
import { Search } from "@/components/ui/search";
import Image from "next/image";
import { HomeIcon } from "@radix-ui/react-icons"
import { InputSearch } from "@/components/ui/input-search";
import { ImovelBanner } from "@/components/ui/imovel-banner";
import { ImovelCard } from "@/components/ui/imovel-card";
import { SelectGroupRadio } from "@/components/ui/select-radio-group";

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full bg-primary'>
      <div className="flex items-center justify-center w-full">
        <div className="w-full h-screen relative">
          <Image src="https://i.ibb.co/f4ZN9Q0/L-966f121b838c4c37ab11430267ed6020.jpg" 
          className="w-full h-screen object-cover brightness-75" alt="banner image" width={0} height={0} sizes="100vw" quality={100} priority/>
        </div>
          <div className="flex flex-col items-center justify-center w-full h-full absolute text-white font-montSerrat gap-6 mb-16">
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
          <div className="grid grid-cols-4 place-content-center place-items-center gap-4 justify-center w-full px-36 pt-6">
            <ImovelCard />
          </div>
        </div>
    </div> 
  )
}
