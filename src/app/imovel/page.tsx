"use client"

import { UseImovelById } from '@/hooks/useImovelById'
import React, { Suspense } from 'react'
import { useSearchParams } from "next/navigation"
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Gallery } from '@/components/ui/gallery'
import { CornersIcon } from '@radix-ui/react-icons'
import { Shower, Bed, Car, Dog, Bathtub } from "@phosphor-icons/react"
import { Separator } from '@/components/ui/separator'
import { PriceCard } from '@/components/ui/price-card'
import { WhattsApButton } from '@/components/ui/whattsap-button'
import { Loading } from '@/components/ui/loading'

function page() {

    const serchParams = useSearchParams() 
    const id = Number(serchParams.get('id'))

    const { data, isLoading } = useQuery({
      queryKey: ["imovel", id],
      queryFn: () => UseImovelById(id),
    })

  return (
    <div className='relative flex flex-col items-center justify-center w-full h-full bg-primary pt-28 lg:pt-[18rem] first-letter:uppercase'>
      <WhattsApButton />
      <div className='flex flex-col items-start justify-start w-full px-10 lg:px-[10rem] 2xl:px-[22rem] h-full'>
        <Suspense>
          {isLoading ?  <div className='flex h-screen pb-28 w-full items-center justify-center'><Loading /></div> : data?.map((item, idx) => (
            <>
              <h2 className='text-white text-2xl lg:text-3xl font-semibold first-letter:uppercase'>{`${item?.title}-${item?.estadoSigla}`}</h2>
              <Card className='w-full rounded-lg mt-8 bg-transparent overflow-hidden relative'>
                <CardContent className='grid lg:grid-flow-col grid-rows-2 w-full h-full gap-2'>
                  {item?.imageUrl.map((image, idx) => ((
                      <Image key={idx} src={image} alt="imagem de imóvel" className="h-full w-full [&:nth-child(1)]:col-span-2 [&:nth-child(1)]:row-span-2 object-cover hover:brightness-90 transition-all cursor-pointer" width={0} height={0} sizes="100vw" quality={100}/>
                  ))).splice(0, 5)}
                </CardContent>
                <Gallery>
                  {isLoading ? <Loading /> : item?.imageUrl.map((image, idx) => ((
                      <Image key={idx} src={image} alt="imagem de imóvel" className="h-full w-full object-cover hover:brightness-90 transition-all cursor-pointer" width={0} height={0} sizes="100vw" quality={100}/>
                  )))}
                </Gallery>
              </Card>
              <div className='flex flex-col lg:flex-row items-center justify-between w-full mt-2 first-letter:uppercase lg:mt-16'>
                <div className='max-w-xl 2xl:max-w-2xl'>
                  <h2 className='text-white text-xl lg:text-2xl 2xl:text-3xl font-medium mt-8 max-w-xl 2xl:max-w-3xl'>
                    {`Sobre a 
                      ${item.terreno ? "terreno" : ""} 
                      ${item.casa ? "casa" : ""} 
                      ${item.terreno ? "terreno" : ""} 
                      ${item.loja ? "loja" : ""} 
                      ${item.apartamento ? "apartamento" : ""}
                        
                      ${item.aluguel ? "para alugar" : "á venda"}
                      `}
                      com {item.m2.toString()} m<span className='align-super text-sm'>2 </span>
                      em {item?.cidade}-{item?.estadoSigla}
                  </h2>

                  <Separator className='max-w-xl 2xl:max-w-3xl bg-neutral-300/90 mt-4'/>

                  <div className='flex gap-4 lg:gap-8 items-center justify-start max-w-xl first-letter:uppercase 2xl:max-w-3xl mt-4'>
                    <div className='flex flex-col w-20 lg:flex-row gap-2 items-center justify-center text-neutral-200'>
                        <CornersIcon width={25} height={25} className='text-neutral-300'/>
                        <span className='text-sm'>{item.m2} m<span className='align-super text-xs'>2</span>
                        <br />  Área útil
                        </span>
                    </div> 
                    {item?.terreno ? "" : 
                      (
                        <div className='flex items-center flex-wrap justify-start gap-8 max-w-xl 2xl:max-w-3xl'>
                          <div className='flex flex-col items-start justify-start text-neutral-200'>
                            <Bed size={20} className='text-neutral-300'/>
                            <span className='text-sm'>{item?.rooms} {item?.rooms > 1 ? "Quartos" : "Quarto"}</span>
                          </div>
                          {item?.suites && (
                            <div className='flex flex-col items-start justify-start text-neutral-200'>
                              <Bathtub size={20} className='text-neutral-300'/>
                              <span className='text-sm'>{item?.suites} {item?.suites > 1 ? "Suítes" : "Suíte"}</span>
                            </div>
                          )}
                            <div className='flex flex-col items-start justify-start text-neutral-200'>
                              <Shower size={20} className='text-neutral-300'/>
                              <span className='text-sm'>{item?.bathrooms} {item?.bathrooms > 1 ? "Banheiros" : "Banheiro"}</span>
                            </div>
                          {item?.vagas && (
                            <div className='flex flex-col items-start justify-start text-neutral-200'>
                              <Car size={20} className='text-neutral-300'/>
                              <span className='text-sm'>{item?.vagas} {item?.vagas! > 1 ? "Vagas" : "Vaga"}</span>
                            </div>
                          )}
                          {item?.pets && (
                            <div className='flex flex-col items-start justify-start text-neutral-200'>
                              <Dog size={20} className='text-neutral-300'/>
                              <span className='text-sm'>Aceita pet</span>
                            </div>
                          )}
                        </div>
                      )
                    }
                  </div>
                  <p className='text-md max-w-xl 2xl:max-w-3xl text-white mt-8 leading-snug mb-6 lg:mb-0 first-letter:uppercase'>{item?.description}</p>
                  
                </div>
                <PriceCard cep={item?.cep.toString()} aluguel={item?.aluguel} precoCondominio={item?.precoCondominio} price={item?.price}/>
              </div>
            </>
          ))}
              <div className='max-w-xl 2xl:max-w-3xl mt-12'>
            {data?.map((item, index) => (
              <div className="flex flex-col items-start gap-3 mb-8 max-w-xl 2xl:max-w-3xl justify-center first-letter:uppercase"> 
              <h1 className='text-xl font-semibold text-white'>{item.mobiliado || item.aceitaFinanciamento || item.aceitaPermuta || item.apartamentoGarden || item.aquecimentoSolar || item.areaDeServico || item.armarioBanheiro || item.armarioCloset || item.armarioCozinha || item.armarioDormitorioDeEmpregada || item.armarioEscritorio || item.armarioHomeTheater || item.armarioQuarto || item.armarioSala || item.banheiroDeEmpregada || item.beiraMar || item.campoDeFutebol || item.carpeteDeMadeira || item.cobertura || item.dormitorioDeEmpregada || item.pets || item.pisoArdosia || item.pisoCeramico || item.pisoCimentoQueimado || item.pisoDeGranito || item.pisoDeMarmore || item.pisoLaminado || item.pisoVinilico || item.portaoEletronico || item.quadraPoliesportiva || item.tacoDeMadeira || item.vestiario ? "Características" : ""}</h1>
                    <h2 className='text-md text-white capitalize'>
                      {`
                        ${item.mobiliado ? "mobiliado," : ""} 
                        ${item.aceitaFinanciamento ? "aceita Financiamento," : ""}
                        ${item.aceitaPermuta ? "aceita Permuta," : ""}
                        ${item.apartamentoGarden ? "apartamento Garden," : ""}
                        ${item.aquecimentoSolar ? "aquecimento Solar," : ""}
                        ${item.areaDeServico ? "área De Servico," : ""}
                        ${item.armarioBanheiro ? "armário Banheiro," : ""}
                        ${item.armarioCloset ? "armário Closet," : ""}
                        ${item.armarioCozinha ? "armário Cozinha," : ""}
                        ${item.armarioDormitorioDeEmpregada ? "armário Dormitório De Empregada," : ""}
                        ${item.armarioEscritorio ? "armário Escritório," : ""}
                        ${item.armarioHomeTheater ? "armário Home Theater," : ""}
                        ${item.armarioQuarto ? "armário Quarto," : ""}
                        ${item.armarioSala ? "armário Sala," : ""}
                        ${item.banheiroDeEmpregada ? "banheiro De Empregada," : ""}
                        ${item.beiraMar ? "beira Mar," : ""}
                        ${item.campoDeFutebol ? "campo De Futebol," : ""}
                        ${item.carpeteDeMadeira ? "carpete De Madeira," : ""}
                        ${item.cobertura ? "cobertura," : ""}
                        ${item.dormitorioDeEmpregada ? "dormitório De Empregada," : ""}
                        ${item.pets ? "aceita pets," : ""}
                        ${item.pisoArdosia ? "piso Ardósia," : ""}
                        ${item.pisoCeramico ? "piso Cerâmico," : ""}
                        ${item.pisoCimentoQueimado ? "piso Cimento Queimado," : ""}
                        ${item.pisoDeGranito ? "piso De Granito," : ""}
                        ${item.pisoDeMarmore ? "piso De Mármore," : ""}
                        ${item.pisoLaminado ? "piso Laminado," : ""}
                        ${item.pisoVinilico ? "piso Vinílico," : ""}
                        ${item.portaoEletronico ? "portão Eletrônico," : ""}
                        ${item.quadraPoliesportiva ? "quadra Poliesportiva," : ""}
                        ${item.tacoDeMadeira ? "taco De Madeira," : ""}
                        ${item.vestiario ? "vestiário," : ""}
                      `}
                    </h2>
            </div>
            ))}
            </div>
        </Suspense>
      </div>
    </div> 
  )
}

export default page