import { NextResponse } from "next/server"
import prisma from "../../../../../lib/prisma";

export async function POST(request: Request) {
    const Data = await request.json()
    try{
        if(!Data.id_alamat){
            throw new Error("request body kosong")
        }
        const data = await prisma.kartu_keluarga.findMany({
            where:{
                alamat : Number(Data.id_alamat)
            },
            select:{
                id : true,
                no_kk :true,
                wilayah:{
                    select:{
                        nama :true
                    }
                },
               anggota_keluarga :{
                where :{
                    hubungan : "kepala_keluarga"
                },
                select:{
                    nama:true
                }
               }
            }
        })

        return NextResponse.json({
            status : "success",
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