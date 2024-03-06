import { ImovelProps } from "@/interface/imovel-props";

export async function UseImoveisByFilter(rooms: number, suites: number, imovelType: string, mobiliado: string, price: string, name?: string, vagas?: number, bathrooms?: number, aceitaPets?: string, ...params: string[]){
        const queryParams = new URLSearchParams();
        if (rooms) queryParams.append('rooms', rooms.toString());
        if (suites) queryParams.append('suites', suites.toString());
        if (imovelType) queryParams.append(imovelType, 'true');
        if (mobiliado) queryParams.append('mobiliado', 'true');
        if (price) queryParams.append('price', price); 
        if (vagas) queryParams.append('vagas', vagas.toString());
        if (bathrooms) queryParams.append('bathrooms', bathrooms.toString());
        if (aceitaPets) queryParams.append('aceitaPets', 'true');
        if(params) {
            params.map((value) => queryParams.append(value, 'true'))
        }
        
        const queryString = queryParams.toString();
        
        const res = await fetch(`${name ? `/api/imovelByName?name=${name}` : `/api/imoveis${queryString ? '?' + queryString : ''}`} `);
        const imoveis = await res.json();
        return imoveis.imoveis as ImovelProps[];
}
