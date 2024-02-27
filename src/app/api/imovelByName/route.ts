import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest){
    const searchParams = req.nextUrl.searchParams

    const name = searchParams.get('name')
    if(name){
        const imoveis = await prisma.imoveis.findMany({
            where: {
                cidade: {
                    contains: name.charAt(0).toUpperCase(),
                }
            }
        })
        console.log(imoveis)
        return NextResponse.json({ imoveis })
    }
}