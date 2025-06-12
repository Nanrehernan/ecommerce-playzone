import Head from "next/head";
import Button from "@/components/Button/Button";
import Navegation from "@/components/Navegation";
import ButtonSecundario from "@/components/Button/ButtonSecundario";
import Card from "@/components/Card";



export default function Home() {
   return <>
      <Head>
         <title>Play Zone</title>
         <meta name="description" content="Proyecto de E-commerce de Play Zone" />
         <meta name="viewport" content="width=device-width, initial-scale=1" />
         <link rel="icon" href="/favicon.ico" />
      </Head>

   <body>
      <header>
         <Navegation/>
      </header>

      <main>
            <div className="home-container">
               <div className="filtro">
                  <h2>Atrapa tus mundos favoritos</h2>
                  <p>Videojuegos, cartas y figuras coleccionables al mejor precio.</p>
               </div>
                  <img className="pj" src="/b130d187-8f3f-44e7-9f06-18e2c8942636.png"/>
            </div>

            //Pongan carrusel//


      </main>
   </body>
</>
}