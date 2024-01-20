import { NextResponse } from "next/server"
import prisma from "../../../../lib/prisma";

export async function GET() {
    try{
        const Data = await prisma.kartu_keluarga.findMany({
            // select:{
            //     id : true,
            //     alamat :true,
            //     no_kk : true
            // }
        })

        return NextResponse.json({
            status : "success",
            Data
        })    
    }
    catch(err){
        return NextResponse.json({
            status : "failed",
            reason : err
        })
    }
}