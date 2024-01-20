import { NextResponse } from "next/server"
import prisma from "../../../../../lib/prisma";

export async function POST(request: Request) {
    const Data = await request.json()
    try{
        if (!Data.nama){
            throw new Error("request body kosong")
        }

        const upForm = await prisma.wilayah.create({
            data:{
                nama : Data.nama
            }
        })

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

export async function PUT(request: Request) {
    const Data = await request.json()
    try{
        if (!Data.nama || !Data.id){
            throw new Error("request body kosong")
        }

        const upForm = await prisma.wilayah.update({
            where:{
                id : Number(Data.id)
            },
            data:{
                nama : Data.nama
            }
        })

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

export async function GET() {
    try{
        const Data = await prisma.wilayah.findMany({})

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

export async function DELETE(request: Request) {
    const Data = await request.json()
    try{
        if (!Data.id){
            throw new Error("request body kosong")
        }

        const upForm = await prisma.wilayah.delete({
            where:{
                id:Number(Data.id)
            }
        })

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