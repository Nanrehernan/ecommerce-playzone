import Head from "next/head";
import Navegation from "@/components/Navegation";
import Footer from "@/components/Footer";
import css from "../styles/contacto.css"

export default function contacto() {
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
         
         <Footer/>
      </main>

   </>
}