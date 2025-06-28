import Head from "next/head";
import Navegation from "@/components/Navegation";

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
         <div>
            <h1>
               Contacto
            </h1>
            <p>
               ¿Tenés alguna duda, querés hacer un pedido especial o simplemente hablar de cartas y videojuegos? ¡Escribinos!

               📩 Email: contacto@playzone.com
               📱 WhatsApp: +54 9 11 1234-5678
               📷 Instagram: @playzone.gamers
               🎮 Twitch: twitch.tv/Playzone
               
               También podés mandarnos un mensaje directo desde nuestras redes o completar el formulario acá abajo (si tenés uno en tu web).
               Respondemos rápido y siempre con buena onda. ¡Nos encanta hablar con otros gamers!
            </p>
         </div>
      </main>

   </>
}