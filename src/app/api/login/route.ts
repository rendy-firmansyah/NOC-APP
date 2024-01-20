import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const data = await request.json()
    if (!data.user || !data.password){
      return NextResponse.json({
        success : "failed",
        message: "pasword atau user tidak ditemukan!"})
    }
    if (data.user != "admin" || data.password != "admin"){
      return NextResponse.json({
        success : "failed",
        message: "pasword atau user salah!"})
    }
    return NextResponse.json({
      success : "success",
      token : "NOCAPP"
    });
  }
  