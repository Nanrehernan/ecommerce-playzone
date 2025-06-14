import Head from "next/head";
import Navegation from "@/components/Navegation";
import FigurasPage from "@/components/FigurasPage";

export default function figuras() {
   return <>
      <Head>
         <title>Play Zone</title>
         <meta name="description" content="Proyecto de E-commerce de Play Zone" />
         <meta name="viewport" content="width=device-width, initial-scale=1" />
         <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
         <Navegation />
      </header>
      <main>
         <FigurasPage />
      </main>

   </>
}