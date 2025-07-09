import Head from "next/head";
import Navegacion from "../components/Navegacion.jsx"
import CartasList from "../components/CartasList.jsx"
import Footer from "@/components/Footer.jsx";
import Cart from "@/components/Cart.jsx";
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

      {showCart && <Cart />}

      <main>
         <CartasList />
      </main>

      <Footer />

   </>
}