import Head from "next/head";
import Navegation from "@/components/Navegation";
import Footer from "@/components/Footer";
import css from "../styles/privacidad.css";



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
           <section class="privacy-container">
            <h1>Política de Privacidad</h1>
             <p>
                En <strong>Playzone</strong>, valoramos tu privacidad y nos comprometemos a proteger cualquier dato personal que compartas con nosotros.
            </p>
             <p>
                  Toda la información que recopilamos se usa exclusivamente para mejorar tu experiencia en nuestra tienda, ya sea para procesar pedidos, enviarte novedades o brindarte soporte técnico.            
            </p>
             <p>
                  No compartimos tu información con terceros sin tu consentimiento, y aplicamos medidas de seguridad para mantenerla protegida.
            </p>
            <p class="highlight">
                  Usando Playzone, aceptás nuestra política de privacidad. Cuidamos tu data como si fuera nuestra. 🔒🧠
            </p>
            </section>
         
         <Footer/>
      </main>

   </>
}