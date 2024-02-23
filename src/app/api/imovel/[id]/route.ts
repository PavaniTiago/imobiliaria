import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { id: number }}) {

    const id: number = params.id  

    const imovel = await prisma.imoveis.findUnique({
        where: {
            id: Number(id),
        }
    })
    return NextResponse.json({ imovel: [imovel] })
}