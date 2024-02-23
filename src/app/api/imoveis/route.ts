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

    const where: any = {};

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


