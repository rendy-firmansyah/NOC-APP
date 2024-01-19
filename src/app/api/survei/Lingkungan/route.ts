import { NextResponse } from "next/server"
import prisma from "../../../../../lib/prisma";

export async function POST(request: Request) {
    
    try{
        const Data = await request.json()
    if(!Data.a1 || !Data.a2 || !Data.a3 || !Data.a4 || !Data.b1 || !Data.b2 || !Data.c1 || !Data.c2 || !Data.d1 || !Data.d2 || !Data.d3 || !Data.id){
        return NextResponse.json({
            success : "failed",
            reason: "salah satu data kosong / data tidak diisi"})
    }

    const upForm = await prisma.lingkungan.create({
        data:{
            A1 : Data.a1,
            A2 : Data.a2,
            A3 : Data.a3,
            A4 : Data.a4,
            B1 : Data.b1,
            B2 : Data.b2,
            C1 : Data.c1,
            C2 : Data.c2,
            D1 : Data.d1,
            D2 : Data.d2,
            D3 : Data.d3,
            id_anggota_keluarga : Number(Data.id)
        }
    })

    if (!upForm){
        return NextResponse.json({
            status : "failed",
            reason : "somethin happend while uploading the data please try again"
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