import { NextResponse } from "next/server"
import prisma from "../../../../lib/prisma";

export async function POST(request: Request) {
    const Data = await request.json()
    try{
        const getData = await prisma.kartu_keluarga.findMany(
            
        )

    }
    catch(err){

    }
}