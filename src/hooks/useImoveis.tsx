import { ImovelProps } from "@/interface/imovel-props"
import { useEffect, useState } from "react"

export function UseImoveis() {
    const [houseCard, setHouseCard] = useState<ImovelProps[]>()

    useEffect(() => {
        fetch('/api')
        .then((res) => res.json())
        .then((res) => setHouseCard(res.imoveis))
    }, [])
    
    return { houseCard }
} 