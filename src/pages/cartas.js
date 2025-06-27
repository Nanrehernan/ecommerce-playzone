import Head from "next/head";
import Navegacion from "../components/Navegacion.jsx"
import CartasPage from "../components/CartasPage.jsx"
import Footer from "@/components/Footer.jsx";
import Carrito from "@/components/Carrito.jsx";
import { useCart } from "@/hooks/useCart.js";

export default function Cartas() {
   const {showCart} = useCart()

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

      {showCart && <Carrito />}

      <Footer />

   </>
}