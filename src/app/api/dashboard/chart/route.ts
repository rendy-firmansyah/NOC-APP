import { NextResponse } from "next/server"
import prisma from "../../../../../lib/prisma";

export async function POST(request: Request) {
    const Data = await request.json()
    try{
        if (!Data.id){
            throw new Error("request body kosong")
        }

        // const get_data = await prisma.kartu_keluarga.findMany({
        //     where:{
        //         alamat : Number(Data.id)
        //     },
        //     select:{
        //         anggota_keluarga:true
        //     }
        // })

        //jumlah banyak nya kk
        const get_data = await prisma.kartu_keluarga.count({
            where: {
              alamat: Number(Data.id)
            }
          });
        
          const get_data2 = await prisma.kartu_keluarga.findMany({
            where: {
              alamat: Number(Data.id)
            },
            select:{
                anggota_keluarga:{
                    select:{
                        kelompok_kesehatan:true
                    }
                }
            }
          });

        const countByHealthGroup = {};
        
        // Iterasi melalui data untuk menghitung jumlah anggota keluarga dalam setiap kelompok kesehatan
        get_data2.forEach(item => {
            item.anggota_keluarga.forEach(anggota => {
                const kelompokKesehatan = anggota.kelompok_kesehatan;
                countByHealthGroup[kelompokKesehatan] = (countByHealthGroup[kelompokKesehatan] || 0) + 1;
            });
        });
        // console.log(countByHealthGroup.Anak_sd)
          
        const result = [
            {name : "kk",value  : get_data},
           {name : "kelompok_sd", value : countByHealthGroup.Anak_sd ? countByHealthGroup.Anak_sd : 0},
            {name : "kelompok_balita", value : countByHealthGroup.Balita ? countByHealthGroup.Balita : 0},
            {name : "kelompok_dewasa", value : countByHealthGroup.Dewasa ? countByHealthGroup.Dewasa : 0},
            {name : "kelompok_bumil", value : countByHealthGroup.Ibu_hamil ? countByHealthGroup.Ibu_hamil : 0},
           {name : "kelompok_ibu_menyusui", value : countByHealthGroup.Ibu_menyusui ? countByHealthGroup.Ibu_menyusui : 0},
            {name : "kelompok_remaja", value : countByHealthGroup.Remaja ? countByHealthGroup.Remaja : 0},
            {name : "kelompok_lansia", value : countByHealthGroup.Lansia ? countByHealthGroup.Lansia : 0}
        ];        
        
        return NextResponse.json({
            status : "success",
            result
        })
    }   
    catch(err){

    }
}