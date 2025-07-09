import Head from "next/head";
import Navegacion from "../components/Navegacion.jsx"
import VideoJuegosList from "../components/VideojuegosList.jsx"
import Cart from "@/components/Cart.jsx"
import { useCart } from "@/hooks/useCart.js"
import Footer from "@/components/Footer.jsx";


export default function VideoJuegos() {
   const {showCart} = useCart()

   return <>
      <Head>
         <meta name="description" content="Proyecto de E-commerce de Play Zone" />
         <meta name="viewport" content="width=device-width, initial-scale=1" />
         <link rel="icon" href="/favicon.ico" />
         <title>Play Zone</title>
      </Head>

      <header>
         <Navegacion />

      </header>

      {showCart && <Cart />}

      <main>
         <VideoJuegosList />
      </main>

      <Footer />

   </>
}