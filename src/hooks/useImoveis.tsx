import { ImovelProps } from "@/interface/imovel-props"

export async function UseImoveis() {
    const res = await fetch("/api")
    const imoveis = (await res.json().then((res) => res.imoveis)) as ImovelProps[]
    
    return imoveis

} 