export interface ImovelProps extends Array<ImovelProps>{
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    m2: number;
    rooms: number;
    bathrooms: number;
    apartamento: boolean;
    casa: boolean;
    estado: string;
    cidade: string;
}