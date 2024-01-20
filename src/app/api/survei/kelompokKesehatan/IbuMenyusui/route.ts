import { NextResponse } from "next/server"
import prisma from "../../../../../../lib/prisma";

export async function POST(request: Request) {
    const Data = await request.json()
    try{

        if(!Data.a || !Data.b || !Data.c || !Data.d || !Data.id || !Data.id_kk){
            return NextResponse.json({
                status : "failed",
                reason : "salah satu data kosong / data tidak diisi"
            })
        }

        const upForm = await prisma.kelompok_ibu_menyusui.create({
            data:{
                A : Data.a,
                B : Data.b,
                C : Data.c,
                D : Data.d,
                id_keluarga : Number(Data.id)
            }
        })

        const success = await prisma.anggota_keluarga.update({
            where:{
                id: Number(Data.id_kk)
            },
            data:{
                status : true
            }
        })

        if(!upForm){
            return NextResponse.json({
                status : "failed",
                reasoen : "something happend while save data"
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