import { NextResponse } from "next/server"
import prisma from "../../../../lib/prisma";

export async function POST(request: Request) {
    const Data = await request.json()
    try{
        if(!Data.id || !Data.deskripsi){
            return NextResponse.json({
                status : "failed",
                reason :"req body kosong"
            })
        }
        const update = await prisma.wilayah.update({
            where:{
                id : Number(Data.id)
            },
            data:{
                layak:Boolean(Data.layak),
                Deskripsi: Data.deskripsi
            }
        })

        return NextResponse.json({
            status :  "success"
        })
    }
    catch(err){
        return NextResponse.json({
            status : "failed",
            reason : err
        })
    }
}