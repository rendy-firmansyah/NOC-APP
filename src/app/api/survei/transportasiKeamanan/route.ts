import { NextResponse } from "next/server"
import prisma from "../../../../../lib/prisma";

export async function POST(request: Request) {

    try{
        const Data = await request.json()

        if(!Data.a || !Data.b || !Data.id){
            return NextResponse.json({
                status : "failed",
                reason : "salah satu data kosong / data tidak diisi"
            })
        }
    
        const upForm = await prisma.transportasi_keamanan.create({
            data:{
                A : Data.a,
                B : Data.b,
                id_keluarga : Number(Data.id)
            }
        })
    
        if(!upForm){
            return NextResponse.json({
                status : "failed",
                reason : "something happend while uploading data"
            })
        }
    
        return NextResponse.json({
            status : "success"
        })
    }
    catch(err){
        return NextResponse.json({
            status : "failed",
            reason : err
        })
    }

    
}