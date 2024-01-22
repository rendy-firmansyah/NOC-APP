import { NextResponse } from "next/server"
import prisma from "../../../../../lib/prisma";

export async function POST(request: Request) {
    const Data = await request.json()
    try{
        if(!Data.id){
            return NextResponse.json({
                status : "failed",
                reason :"req body kosong"
            })
        }

        const anggota  = await prisma.anggota_keluarga.findMany({
            where:{
                no_kk_id: Number(Data.id)
            }
        })
        return NextResponse.json({
          status:"success",
          anggota
        });
    }
    catch(err){
        return NextResponse.json({
            status : "failed",
            reason :  err
        })
    }
  }