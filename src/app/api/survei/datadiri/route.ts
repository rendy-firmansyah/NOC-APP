import { NextResponse } from "next/server"
import prisma from "../../../../../lib/prisma";

export async function POST(request: Request) {
  try{
    const Data = await request.json()
    if (!Data.no_kk || !Data.nama || !Data.nik || !Data.hubungan || !Data.umur || !Data.jenis_kelamin || !Data.pendidikan || !Data.pekerjaan || !Data.alamat || !Data.kelompok_kesehatan){
      return NextResponse.json({
        status : "failed",
        reason: "salah satu data kosong / data tidak diisi"})
    }

    const cek_kk = await prisma.kartu_keluarga.findFirst({
      where: {
        no_kk : Data.no_kk
      }
    })
    if(!cek_kk){
      const regist_kk = await prisma.kartu_keluarga.create({
        data:{
          no_kk : Data.no_kk,
          alamat : Number(Data.alamat)
        }
      })
      if(!regist_kk){
        return NextResponse.json({
          status : "failed",
          reason : "failed to regist kk check your number and address again"
        })
      }
    }
    
    const id_kk = await prisma.kartu_keluarga.findFirst({
      where:{
        no_kk : Data.no_kk
      },
      select:{
        id:true
      }
    })

    const save = await prisma.anggota_keluarga.create({
      data:{
        hubungan : Data.hubungan,
        jenis_kelamin : Data.jenis_kelamin,
        kelompok_kesehatan : Data.kelompok_kesehatan,
        nama : Data.nama,
        nik : Data.nik,
        pekerjaan : Data.pekerjaan,
        pendidikan : Data.pendidikan,
        umur : Data.umur,
        no_kk_id : Number(id_kk.id)
      }
    })
    
    if (!save){
      return NextResponse.json({
        status : "failed",
      })
    }

    return NextResponse.json({
      status : "success",
      id_kk : Number(id_kk.id)
    });
  }
  catch (err){
    return NextResponse.json({
      status : "error",
      reason : err
    })
  }
    
  }
  

export async function PATCH(request: Request) {
  try{
    const Data = await request.json() 

  if(!Data.id ){
    return NextResponse.json({
      status : "failed",
      reason : "there's no id"
    })
  }

  const get_data = await prisma.kartu_keluarga.findMany({
    where: {
      id : Data.id
    },
    select:{
      id:true,
      anggota_keluarga : true
    }
  })

  if (!get_data){
    return NextResponse.json({
      status : "failed",
      reason : "something happend while uploading data"
    })
  }

  return NextResponse.json({
    status : "success",
    get_data
  })
  }
  catch (err){
    return NextResponse.json({
      status : "failed",
      reason : err
    })
  }
  
 
}

export async function PUT(request: Request) {

  try{
    const Data = await request.json()
    if ( !Data.nama || !Data.nik || !Data.hubungan || !Data.umur || !Data.jenis_kelamin || !Data.pendidikan || !Data.pekerjaan || !Data.kelompok_kesehatan || !Data.id){
      return NextResponse.json({
        status : "failed",
        reason: "salah satu data kosong / data tidak diisi"})
    }
  
    const cek_kk = await prisma.kartu_keluarga.findFirst({
      where: {
        id : Number(Data.id)
      }
    })
  
    if (!cek_kk){
      return NextResponse.json({
        status : "failed",
        reason : "id was not correct"
      })
    }
  
    const save = await prisma.anggota_keluarga.create({
      data:{
        hubungan : Data.hubungan,
        jenis_kelamin : Data.jenis_kelamin,
        kelompok_kesehatan : Data.kelompok_kesehatan,
        nama : Data.nama,
        nik : Data.nik,
        pekerjaan : Data.pekerjaan,
        pendidikan : Data.pendidikan,
        umur : Data.umur,
        no_kk_id : Number(Data.id)
      }
    })
    
    if (!save){
      return NextResponse.json({
        status : "failed",
        reason : "something happend while saving data"
      })
    }
  
    return NextResponse.json({
      status : "success"
    });
  }
  catch(err){
    return NextResponse.json({
      status : "failed",
      reason : err
    })
  }

  

}