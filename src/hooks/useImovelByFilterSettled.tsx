import { ImovelProps } from "@/interface/imovel-props";

export async function UseImovelByFilter (queryString: string) {
    const res = await fetch(`/api/imoveis?${queryString}`);
    const imoveis = await res.json();
    console.log(imoveis)
    return imoveis.imoveis as ImovelProps[];
}