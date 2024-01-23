import { prisma } from "@/lib/prisma";
import { NextResponse } from 'next/server'

export async function GET() {
    const imoveis = await prisma.imoveis.findMany()
    return NextResponse.json({ imoveis })
}

export async function POST(req: Request) {
    const { title, description, imageUrl, m2, rooms, bathrooms, apartamento, casa, estadoSigla, cidade, cep, price, aceitaFinanciamento, aceitaPermuta, aquecimentoSolar, armarioCloset, beiraMar, portaoEletronico, areaDeServico, banheiroDeEmpregada, campoDeFutebol, carpeteDeMadeira, dormitorioDeEmpregada, pisoCeramico, pisoArdosia, pisoCimentoQueimado, pisoDeGranito, pisoDeMarmore, pisoLaminado, quadraPoliesportiva, semCondominio, tacoDeMadeira, armarioAreaDeServico, armarioBanheiro, armarioCozinha, armarioDormitorioDeEmpregada, armarioEscritorio, armarioHomeTheater, armarioQuarto, armarioSala, pisoVinilico, vestiario, sala, terreno, cobertura, loja, apartamentoGarden, hotel, mobiliado, vagas, aluguel, numeroAndares, pets, piso, precoCondominio, suites,centro } = await req.json();

    const imoveis = await prisma.imoveis.create({
        data: {
            title: title,
            description: description,
            imageUrl: imageUrl,
            m2: m2,
            rooms: rooms ,
            bathrooms:  bathrooms,
            apartamento: apartamento,
            casa: casa, 
            estadoSigla: estadoSigla,
            cidade: cidade,
            cep: cep,
            centro: centro,
            sala: sala,
            terreno: terreno,
            cobertura: cobertura,
            loja: loja,
            apartamentoGarden: apartamentoGarden,
            hotel: hotel,
            mobiliado: mobiliado,
            vagas: vagas,
            aluguel: aluguel,
            numeroAndares: numeroAndares,
            pets: pets,
            piso: piso,
            precoCondominio: precoCondominio,
            suites: suites,
            price: price,
            aceitaFinanciamento: aceitaFinanciamento,
            aceitaPermuta: aceitaPermuta,
            aquecimentoSolar: aquecimentoSolar,
            armarioCloset: armarioCloset,
            beiraMar: beiraMar,
            portaoEletronico: portaoEletronico,
            areaDeServico: areaDeServico,
            banheiroDeEmpregada: banheiroDeEmpregada,
            campoDeFutebol: campoDeFutebol,
            carpeteDeMadeira: carpeteDeMadeira,
            dormitorioDeEmpregada: dormitorioDeEmpregada,
            pisoCeramico: pisoCeramico,
            pisoArdosia: pisoArdosia,
            pisoCimentoQueimado: pisoCimentoQueimado,
            pisoDeGranito: pisoDeGranito,
            pisoDeMarmore: pisoDeMarmore,
            pisoLaminado: pisoLaminado,
            quadraPoliesportiva: quadraPoliesportiva,
            semCondominio: semCondominio,
            tacoDeMadeira: tacoDeMadeira,
            armarioAreaDeServico: armarioAreaDeServico,
            armarioBanheiro: armarioBanheiro,
            armarioCozinha: armarioCozinha,
            armarioDormitorioDeEmpregada: armarioDormitorioDeEmpregada,
            armarioEscritorio: armarioEscritorio,
            armarioHomeTheater: armarioHomeTheater,
            armarioQuarto: armarioQuarto,
            armarioSala: armarioSala,
            pisoVinilico: pisoVinilico,
            vestiario: vestiario
        }
    })

    return Response.json({data: imoveis})
}
 