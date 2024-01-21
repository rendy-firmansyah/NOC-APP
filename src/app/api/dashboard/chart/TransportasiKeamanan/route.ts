import { NextResponse } from "next/server"
import prisma from "../../../../../../lib/prisma";

export async function POST(request: Request) {
    const Data = await request.json()
    try{
        if (!Data.id){
            throw new Error("request body kosong")
        }
        const data = await prisma.kartu_keluarga.findMany({
            where:{
                alamat : Number(Data.id)
            },
            select:{
                transportasi_keamanan:true,
            }
        })

        const temp = {}

        data.map((items)=>{
            // console.log(items.lingkungan)
            items.transportasi_keamanan.map((item)=>{
                const Aa = item.A;
                const Ba = item.B;
                temp[`A ${Aa}`] = (temp[`A ${Aa}`] || 0) + 1;
                temp[`B ${Ba}`] = (temp[`B ${Ba}`] || 0) + 1;
            })
        })
        // console.log(temp)
        const convertDataForRecharts = (originalData) => {
            const convertedData = Object.keys(originalData).map((key) => {
              return { name: key, value: originalData[key] };
            });
          
            return convertedData;
        };
        
        const result = convertDataForRecharts(temp);

        return NextResponse.json({
            result

    })
    }
    catch(err){
        return NextResponse.json({
            status : "failed",
            reason : err
        })
    }
}