import Head from "next/head";
import Navegation from "@/components/Navegation";


export default function acerca() {
   return <>
      <Head>
          <title>Play Zone</title>
         <meta name="description" content="Proyecto de E-commerce de Play Zone" />
         <meta name="viewport" content="width=device-width, initial-scale=1" />
         <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navegation/>
      </header>
      <main>
        <div>
          <h1>
            Acerca de Playzone
          </h1>
          <p>En Playzone somos fanáticos de los videojuegos y las cartas coleccionables. Arrancamos este proyecto con una idea simple: armar un lugar donde encontrar todo lo que nos gusta sin tener que buscar por todos lados.
            Vendemos cartas Pokémon, Yu-Gi-Oh!, Magic y muchas más, además de videojuegos nuevos y usados, consolas, accesorios y todo lo que te puede faltar para tu colección o para viciar tranquilo.
            Queremos que Playzone sea más que una tienda. Queremos armar comunidad, compartir novedades, torneos, ofertas y ese entusiasmo que solo los que aman este mundo entienden.
            Si sos de los que disfruta abrir sobres, jugar hasta tarde o buscar esa carta que te falta, este es tu lugar.
            Playzone — Donde empieza el juego.</p>
        </div>
      </main>

   </>
}