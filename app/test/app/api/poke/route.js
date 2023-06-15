import { NextResponse } from "next/server";



export async function POST(request) {
/*     const body = await request.json();

    //   better error handling
    if (!body.prompt || body.prompt.length === 0) {
        return NextResponse.error(new Error("You must provide a prompt"), {
            status: 400,
        });
    } */


    try {

         const res = await fetch(`http://api:3000/api/bbdd`);
		const data = await res.json();
        console.log(data);
        return NextResponse.json(data);
         
/*         const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 301)}/`);
        const data = await res.json();
        const res2 = await fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 301)}/`);
        const data2 = await res2.json();
        console.log(data);
        console.log(data2); 
    
        return NextResponse.json({ pk1: data, pk2: data2 }); */
        //return NextResponse.json({ pk1:'mensaje'});

    } catch (error) {
        console.log(error)
        return NextResponse.error(error, { status: 500 });
    }
}