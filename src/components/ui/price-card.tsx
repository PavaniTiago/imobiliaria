import Link from "next/link";
import { Button } from "./button";

interface PriceCardProps {
    aluguel: string | number | null;
    price: string | number | null;
    precoCondominio: string | number | null;
    cep: string;
}

export function PriceCard(props: PriceCardProps){
    return (
        <div className="flex justify-center items-center w-full max-w-xs 2xl:max-w-sm flex-col px-8 py-6 bg-white gap-3 shadow-lg">
            <div className="flex justify-between items-center w-full">
                <h2 className="text-neutral-900 text-lg font-medium">{props.aluguel ? "Aluguel" : "Venda"}</h2>
                <span className="text-neutral-900 text-lg font-medium">R${props.price}</span>
            </div>
            <div className="flex justify-between items-center w-full mt-3">
                <h2 className="text-neutral-600 text-sm font-medium">Condomínio</h2>
                <span className="text-neutral-600 text-sm font-medium">R${props.precoCondominio}</span>
            </div>
            <Button className="w-full mt-6 hover:bg-blue-700 transition-colors"><Link target="_blank" href={`https://www.google.com.br/maps/place/${props.cep}`}>Quero visitar</Link></Button>
            <Button className="w-full hover:bg-blue-700 transition-colors"><Link target="_blank" href="https://wa.link/2ul0du">Fazer uma proposta</Link></Button>
            <Button className="w-full hover:bg-neutral-200 transition-colors" variant="outline"><Link target="_blank" href="https://wa.link/2ul0du">Quero mais informações</Link></Button>
        </div>
    )
}