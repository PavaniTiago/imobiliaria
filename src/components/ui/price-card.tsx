import { Button } from "./button";

interface PriceCardProps {
    aluguel: string | number | null;
    price: string | number | null;
    precoCondominio: string | number | null;
}

export function PriceCard(props: PriceCardProps){
    return (
        <div className="flex justify-center items-center w-full max-w-sm flex-col px-8 py-6 bg-white gap-3 shadow-lg">
            <div className="flex justify-between items-center w-full">
                <h2 className="text-neutral-900 text-lg font-medium">{props.aluguel ? "Aluguel" : "Venda"}</h2>
                <span className="text-neutral-900 text-lg font-medium">R${props.price}</span>
            </div>
            <div className="flex justify-between items-center w-full mt-3">
                <h2 className="text-neutral-600 text-sm font-medium">Condomínio</h2>
                <span className="text-neutral-600 text-sm font-medium">R${props.precoCondominio}</span>
            </div>
            <Button size="lg" className="w-full mt-6">Quero visitar</Button>
            <Button size="lg" className="w-full">Fazer uma proposta</Button>
            <Button size="lg" className="w-full" variant="outline">Quero mais informações</Button>
        </div>
    )
}