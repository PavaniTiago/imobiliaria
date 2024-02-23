import { ImovelProps } from "@/interface/imovel-props"

export async function UseImoveisByFilter(rooms: number, suites: number, imovelType: string, mobiliado: string, price: string) {
    const res = await fetch(`/api/imoveis${rooms || suites || mobiliado || imovelType ? '?' : ''}${rooms ? `rooms=${rooms}` : ''}${suites ? `&suites=${suites}` : ''}${imovelType ? `&${imovelType}=true` : ''}${mobiliado ? `&mobiliado=true` : ''}${price ? `&price=${price}` : ''}`)
    const imoveis = (await res.json().then((res) => res.imoveis)) as ImovelProps[]

    return imoveis
} 