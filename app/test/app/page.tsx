"use client"
import { useState } from "react";

function HomePage() {
  let p1=0;
  let p2=0;
  const onSubmit = async function (e) {
    e.preventDefault();
    const prompt = 1;
    for (let i = 0; i < 10; i++) {

      const response = await fetch("/api/poke", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });
      const data = await response.json();
      console.log('petición:' + prompt);
      console.log(data);
      p1+=data.pk1.stats[0].base_stat-data.pk2.stats[0].base_stat;
      p2+=data.pk2.stats[0].base_stat-data.pk1.stats[0].base_stat;
      pk1.src = data.pk1.sprites.front_default;
      nombre1.innerHTML = data.pk1.forms[0].name + "(F=" + data.pk1.stats[0].base_stat + ", Puntos="+p1+")";
      pk2.src = data.pk2.sprites.front_default;
      nombre2.innerHTML = data.pk2.forms[0].name + "(F=" + data.pk2.stats[0].base_stat + ", Puntos="+p2+")";
    }
  }
  return (
    <div className="bg-zinc-950 h-screen flex justify-center items-center">

      {<form onSubmit={onSubmit}  className="text-center" style={{display:"block"}} >
        <h1 className="text-2xl font-bold text-slate-200 mb-5">
        Ruleta pokemon
        </h1>
        <button className="bg-green-500 p-2 rounded-md disabled:opacity-50 text-white ">Tirar</button>
        <br/>
        <br/>
        <hr />
        <h2 id="nombre1" className="text-2xl font-bold text-slate-200 mb-5">Equipo X (Puntos=0)</h2>
        <img  id="pk1" src="" />
        <hr />
        <h2 id="nombre2" className="text-2xl font-bold text-slate-200 mb-5">Equipo Y (Puntos=0)</h2>
        <img id="pk2" src="" />
        
        
      </form>}
    </div>

  )

}
export default HomePage