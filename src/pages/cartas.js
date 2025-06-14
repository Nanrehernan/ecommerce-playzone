import Head from "next/head";
import Navegation from "@/components/Navegation";
import CartasPage from "@/components/CartasPage";


export default function cartas() {
   return <>
      <Head>
         <meta name="description" content="Proyecto de E-commerce de Play Zone" />
         <meta name="viewport" content="width=device-width, initial-scale=1" />
         <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
         <Navegation />
      </header>

      <main>
         <CartasPage />
      </main>

   </>
}