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
                lingkungan:true,
            }
        })

        const temp = {}

        data.map((items)=>{
            // console.log(items.lingkungan)
            items.lingkungan.map((item)=>{
                const Aa1 = item.A1;
                const Aa2 = item.A2;
                const Aa3 = item.A3;
                const Aa4 = item.A4;
                const Ba1 = item.B1;
                const Ba2 = item.B2;
                const Ca1 = item.C1;
                const Ca2 = item.C2;
                const Da1 = item.D1;
                const Da2 = item.D2;
                const Da3 = item.D3;
                temp[`A1 ${Aa1}`] = (temp[`A1 ${Aa1}`] || 0) + 1;
                temp[`A2 ${Aa2}`] = (temp[`A2 ${Aa2}`] || 0) + 1;
                temp[`A3 ${Aa3}`] = (temp[`A3 ${Aa3}`] || 0) + 1;
                temp[`A4 ${Aa4}`] = (temp[`A4 ${Aa4}`] || 0) + 1;
                temp[`B1 ${Ba1}`] = (temp[`B1 ${Ba1}`] || 0) + 1;
                temp[`B2 ${Ba2}`] = (temp[`B2 ${Ba2}`] || 0) + 1;
                temp[`C1 ${Ca1}`] = (temp[`C1 ${Ca1}`] || 0) + 1;
                temp[`C2 ${Ca2}`] = (temp[`C2 ${Ca2}`] || 0) + 1;
                temp[`D1 ${Da1}`] = (temp[`D1 ${Da1}`] || 0) + 1;
                temp[`D2 ${Da2}`] = (temp[`D2 ${Da2}`] || 0) + 1;
                temp[`D3 ${Da3}`] = (temp[`D3 ${Da3}`] || 0) + 1;
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