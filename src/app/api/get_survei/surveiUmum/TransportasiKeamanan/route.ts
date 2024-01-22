import { NextResponse } from "next/server"
import prisma from "../../../../../../lib/prisma";

export async function POST(request: Request) {
    const Data = await request.json()
    try{
        if(!Data.id){
            return NextResponse.json({
                status : "failed",
                reason :"req body kosong"
            })
        }

        const data = await prisma.transportasi_keamanan.findFirst({
            where:{
                id_keluarga : Number(Data.id)
            }
        })
        return NextResponse.json({
            status:"success",
            data
        })

    }

    catch(err){
        return NextResponse.json({
            status : "failed",
            reason : err
        })
    }
}