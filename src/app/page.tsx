"use client"

import { ImovelProps } from "@/interface/imovel-props"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Home() {

  const [houseCard, setHouseCard] = useState<ImovelProps[]>()

  useEffect(() => {
    fetch('/api')
    .then((res) => res.json())
    .then((res) => setHouseCard(res))
  }, [])
  
  return (
    <div className='flex items-center justify-center w-full h-screen bg-blue-900'>
      <h1 className='text-3xl text-neutral-100'>Hello World!</h1>
      <Image alt="imagem de ponte" sizes="100vw" src="https://i.ibb.co/R0LbSPB/L-ee47d54be215425b867bd546c518fccb.jpg" className="w-2/4 h-2/4 object-cover" width={0} height={0}/>
    </div> 
  )
}
