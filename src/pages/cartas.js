import Head from "next/head";
import Navegacion from "../components/Navegacion.jsx"
import CartasPage from "../components/CartasPage.jsx"


export default function Cartas() {
   return <>
      <Head>
         <meta name="description" content="Proyecto de E-commerce de Play Zone" />
         <meta name="viewport" content="width=device-width, initial-scale=1" />
         <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
         <Navegacion />
      </header>

      <main>
         <CartasPage />
      </main>

   </>
}