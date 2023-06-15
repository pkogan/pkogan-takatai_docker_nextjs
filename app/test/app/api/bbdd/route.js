import { NextResponse } from "next/server";

export async function GET(request) {


  try {

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 301)}/`);
    const data = await res.json();
    const res2 = await fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 301)}/`);
    const data2 = await res2.json();
    console.log(data);
    console.log(data2);

    return NextResponse.json({ pk1: data, pk2: data2 });
  } catch (error) {
    console.log(error)
    return NextResponse.error(error, { status: 500 });
  }
}