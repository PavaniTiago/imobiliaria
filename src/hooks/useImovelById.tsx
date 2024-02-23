import { ImovelProps } from "@/interface/imovel-props"

export async function UseImovelById(id: number) {
    const res = await fetch(`/api/imovel/${id}`)
    const imovel = (await res.json().then((res) => res.imovel)) as ImovelProps[]
    
    return imovel
} 