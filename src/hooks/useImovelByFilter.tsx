import { ImovelProps } from "@/interface/imovel-props";

export async function UseImoveisByFilter(rooms: number, suites: number, imovelType: string, mobiliado: string, price: string, name?: string) {
    // if (name) {
    //     const res = await fetch(`/api/imovelByName?name=${name}`);
    //     const imoveis = await res.json();
    //     return imoveis.imoveis as ImovelProps[];
    // }
        const queryParams = new URLSearchParams();
        if (rooms) queryParams.append('rooms', rooms.toString());
        if (suites) queryParams.append('suites', suites.toString());
        if (imovelType) queryParams.append(imovelType, 'true');
        if (mobiliado) queryParams.append('mobiliado', 'true');
        if (price) queryParams.append('price', price); 
        
        const queryString = queryParams.toString();
        
        const res = await fetch(`${name ? `/api/imovelByName?name=${name}` : `/api/imoveis${queryString ? '?' + queryString : ''}`} `);
        const imoveis = await res.json();
        return imoveis.imoveis as ImovelProps[];
}
