import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {

    const searchParams = req.nextUrl.searchParams;
    const rooms = searchParams.get('rooms')
    const suites = searchParams.get('suites')
    const casa = searchParams.get('casa')
    const apartamento = searchParams.get('apartamento')
    const apartamentoGarden = searchParams.get('apartamentoGarden')
    const hotel = searchParams.get('hotel')
    const loja = searchParams.get('loja')
    const terreno = searchParams.get('terreno')
    const price = searchParams.get('price')
    const aceitaPet = searchParams.get('aceitaPet')
    const bathrooms = searchParams.get('bathrooms')
    const vagas = searchParams.get('vagas')
    

    const where: any = {};

    const aceitaPermuta = searchParams.get('aceitaPermuta');
if (aceitaPermuta !== undefined && aceitaPermuta !== null) {
    where.aceitaPermuta = Boolean(aceitaPermuta);
}

const aquecimentoSolar = searchParams.get('aquecimentoSolar');
if (aquecimentoSolar !== undefined && aquecimentoSolar !== null) {
    where.aquecimentoSolar = Boolean(aquecimentoSolar);
}

const beiraMar = searchParams.get('beiraMar');
if (beiraMar !== undefined && beiraMar !== null) {
    where.beiraMar = Boolean(beiraMar);
}

const portaoEletronico = searchParams.get('portaoEletronico');
if (portaoEletronico !== undefined && portaoEletronico !== null) {
    where.portaoEletronico = Boolean(portaoEletronico);
}

const armarioCloset = searchParams.get('armarioCloset');
if (armarioCloset !== undefined && armarioCloset !== null) {
    where.armarioCloset = Boolean(armarioCloset);
}

const areaDeServico = searchParams.get('areaDeServico');
if (areaDeServico !== undefined && areaDeServico !== null) {
    where.areaDeServico = Boolean(areaDeServico);
}

const banheiroDeEmpregada = searchParams.get('banheiroDeEmpregada');
if (banheiroDeEmpregada !== undefined && banheiroDeEmpregada !== null) {
    where.banheiroDeEmpregada = Boolean(banheiroDeEmpregada);
}

const carpeteDeMadeira = searchParams.get('carpeteDeMadeira');
if (carpeteDeMadeira !== undefined && carpeteDeMadeira !== null) {
    where.carpeteDeMadeira = Boolean(carpeteDeMadeira);
}

const pisoCeramico = searchParams.get('pisoCeramico');
if (pisoCeramico !== undefined && pisoCeramico !== null) {
    where.pisoCeramico = Boolean(pisoCeramico);
}

const pisoCimentoQueimado = searchParams.get('pisoCimentoQueimado');
if (pisoCimentoQueimado !== undefined && pisoCimentoQueimado !== null) {
    where.pisoCimentoQueimado = Boolean(pisoCimentoQueimado);
}

const pisoLaminado = searchParams.get('pisoLaminado');
if (pisoLaminado !== undefined && pisoLaminado !== null) {
    where.pisoLaminado = Boolean(pisoLaminado);
}

const semCondominio = searchParams.get('semCondominio');
if (semCondominio !== undefined && semCondominio !== null) {
    where.semCondominio = Boolean(semCondominio);
}

const armarioAreaDeServico = searchParams.get('armarioAreaDeServico');
if (armarioAreaDeServico !== undefined && armarioAreaDeServico !== null) {
    where.armarioAreaDeServico = Boolean(armarioAreaDeServico);
}

const armarioCozinha = searchParams.get('armarioCozinha');
if (armarioCozinha !== undefined && armarioCozinha !== null) {
    where.armarioCozinha = Boolean(armarioCozinha);
}

const armarioEscritorio = searchParams.get('armarioEscritorio');
if (armarioEscritorio !== undefined && armarioEscritorio !== null) {
    where.armarioEscritorio = Boolean(armarioEscritorio);
}

const armarioQuarto = searchParams.get('armarioQuarto');
if (armarioQuarto !== undefined && armarioQuarto !== null) {
    where.armarioQuarto = Boolean(armarioQuarto);
}

const pisoVinilico = searchParams.get('pisoVinilico');
if (pisoVinilico !== undefined && pisoVinilico !== null) {
    where.pisoVinilico = Boolean(pisoVinilico);
}

const campoDeFutebol = searchParams.get('campoDeFutebol');
if (campoDeFutebol !== undefined && campoDeFutebol !== null) {
    where.campoDeFutebol = Boolean(campoDeFutebol);
}

const dormitorioDeEmpregada = searchParams.get('dormitorioDeEmpregada');
if (dormitorioDeEmpregada !== undefined && dormitorioDeEmpregada !== null) {
    where.dormitorioDeEmpregada = Boolean(dormitorioDeEmpregada);
}

const pisoArdosia = searchParams.get('pisoArdosia');
if (pisoArdosia !== undefined && pisoArdosia !== null) {
    where.pisoArdosia = Boolean(pisoArdosia);
}

const pisoMarmore = searchParams.get('pisoMarmore');
if (pisoMarmore !== undefined && pisoMarmore !== null) {
    where.pisoMarmore = Boolean(pisoMarmore);
}

const qudraPoliesportiva = searchParams.get('qudraPoliesportiva');
if (qudraPoliesportiva !== undefined && qudraPoliesportiva !== null) {
    where.qudraPoliesportiva = Boolean(qudraPoliesportiva);
}

const tacoDeMadeira = searchParams.get('tacoDeMadeira');
if (tacoDeMadeira !== undefined && tacoDeMadeira !== null) {
    where.tacoDeMadeira = Boolean(tacoDeMadeira);
}

const armarioBanheiro = searchParams.get('armarioBanheiro');
if (armarioBanheiro !== undefined && armarioBanheiro !== null) {
    where.armarioBanheiro = Boolean(armarioBanheiro);
}

const armarioDormitorioDeEmpregada = searchParams.get('armarioDormitorioDeEmpregada');
if (armarioDormitorioDeEmpregada !== undefined && armarioDormitorioDeEmpregada !== null) {
    where.armarioDormitorioDeEmpregada = Boolean(armarioDormitorioDeEmpregada);
}

const armarioHomeTheater = searchParams.get('armarioHomeTheater');
if (armarioHomeTheater !== undefined && armarioHomeTheater !== null) {
    where.armarioHomeTheater = Boolean(armarioHomeTheater);
}

const armarioSala = searchParams.get('armarioSala');
if (armarioSala !== undefined && armarioSala !== null) {
    where.armarioSala = Boolean(armarioSala);
}

const vestiario = searchParams.get('vestiario');
if (vestiario !== undefined && vestiario !== null) {
    where.vestiario = Boolean(vestiario);
}

    if (aceitaPet !== undefined && aceitaPet !== null) {
        where.aceitaPet = Boolean(aceitaPet);
    }
    
    if (bathrooms !== undefined && bathrooms !== null) {
        where.bathrooms = { gte: Number(bathrooms)}
    }
    
    if (vagas !== undefined && vagas !== null) {
        where.vagas = { gte: Number(vagas)}
    }

    if (rooms != null) {
        where.rooms = { gte: Number(rooms) };
    }

    if (price != null && price !== "null") {
        if (String(price) === "400000") {
            where.price = { lte: "400000" };
        }else {
            where.price = { gte: String(price) };
        }
    }

    if (suites !== undefined && suites !== null) {
        where.suites = { gte: Number(suites) };
    }

    if (apartamento !== undefined && apartamento !== null) {
        where.apartamento = Boolean(apartamento);
    }

    if (casa !== undefined && casa !== null) {
        where.casa = Boolean(casa);
    }

    if (terreno !== undefined && terreno !== null) {
        where.terreno = Boolean(terreno);
    }

    if (loja !== undefined && loja !== null) {
        where.loja = Boolean(loja);
    }

    if (apartamentoGarden !== undefined && apartamentoGarden !== null) {
        where.apartamentoGarden = Boolean(apartamentoGarden);
    }

    if (hotel !== undefined && hotel !== null) {
        where.hotel = Boolean(hotel);
    }

    const imoveis = await prisma.imoveis.findMany({ where });

    return NextResponse.json({ imoveis })
}


