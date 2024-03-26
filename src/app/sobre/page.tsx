import { Button } from "@/components/ui/button";
import { Photo } from "@/components/ui/photo";
import Link from "next/link";

export default function Sobre(){
    return (
        <main className="flex flex-col lg:flex-row items-center lg:gap-16 justify-center h-full lg:h-screen w-full bg-primary pt-32 lg:pt-[20rem] pb-24">
            <div className="flex flex-col items-center justify-center gap-8">
                <Photo />
                <Button className="bg-blue-600 hover:bg-blue-500 transition-colors w-full" size="lg"><Link href="/imoveis">Ver mais Imóveis</Link></Button>
            </div>
            <div className="flex flex-col text-white w-full max-w-2xl p-6 lg:p-0">
                <h2 className="font-montSerrat font-semibold text-2xl lg:text-4xl mb-4 lg:mb-8">Olá, eu sou Carlos Tortorella.</h2>
                <h2 className="text-md font-light mb-3">
                    Um agente imobiliário e perito judicial apaixonado por proporcionar experiências excepcionais aos meus clientes. Tenho o compromisso de tornar a jornada de busca por um imóvel uma experiência memorável e gratificante.
                </h2>
                <h2 className="text-md font-light mb-3">
                    Entendo que encontrar o lar perfeito ou o espaço comercial ideal é mais do que uma transação; é realizar sonhos e alcançar objetivos. Meu trabalho vai além da expertise em negociações e processos imobiliários; é sobre construir relacionamentos de confiança, entender as necessidades únicas de cada cliente e superar suas expectativas.                </h2>
                <h2 className="text-md font-light mb-3">
                    Ao escolher meus serviços, você não está apenas garantindo um profissional qualificado, mas também um parceiro comprometido em guiar você em cada etapa, desde a pesquisa até a conclusão da negociação. Minha maior satisfação é ver meus clientes realizando seus sonhos e conquistando o espaço que desejam.
                </h2>
                <h2 className="text-md font-light">
                    Estou aqui para transformar sua jornada imobiliária em uma experiência gratificante e inesquecível. Vamos trabalhar juntos para encontrar a casa do seus sonhos!
                    </h2>
            </div>
        </main>
    )
}