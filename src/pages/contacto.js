import Head from "next/head";
import Navegacion from "../components/Navegacion.jsx"
import Footer from "@/components/Footer.jsx";
import Cart from "@/components/Cart.jsx";
import { useCart } from "@/hooks/useCart.js";
import "../styles/contacto.css"

export default function Contacto() {
   const { showCart } = useCart()

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

      <main>
         <section class="contact-container">
            <h1>Contacto</h1>
            <p>
               ¿Tenés alguna duda, sugerencia o simplemente querés saludarnos?
               Estamos para ayudarte.
            </p>
            <p>
               Podés comunicarte con nosotros por los siguientes medios:
            </p>
            <ul>
               <li><strong>Email:</strong> contacto@playzone.com</li>
               <li><strong>Instagram:</strong> @playzone.ar</li>
               <li><strong>WhatsApp:</strong> +54 9 11 1234 5678</li>
            </ul>
            <p class="highlight">
               Respondemos rápido y con buena onda. ¡Hablá con nosotros! 📩💬
            </p>
         </section>
      </main>

      {showCart && <Cart />}

      <Footer />

   </>
}