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
               Política de Privacidad
            </h1>
            <p>En Playzone nos tomamos en serio tu privacidad. Cuando hacés una compra, te registrás o simplemente nos escribís, cuidamos tus datos como si fueran parte de nuestra colección más valiosa.

                ¿Qué datos guardamos?
                Solo lo necesario para brindarte una buena experiencia:

                Nombre y apellido

                Dirección de envío

                Email y teléfono

                Detalles de tu compra

                Nunca compartimos tu información con terceros, salvo lo justo y necesario para completar envíos o procesar pagos.

                ¿Para qué usamos tus datos?
                Para enviarte tus pedidos

                Para contactarte si hay algún problema

                Para avisarte de promos, torneos o lanzamientos (si te suscribís a nuestras novedades)

                ¿Están seguros?
                Sí. Usamos plataformas confiables y protegidas para procesar los pagos y almacenar tu info. No vendemos, regalamos ni prestamos tus datos. Jamás.

                Si alguna vez querés modificar o borrar tu información, escribinos a contacto@playzone.com y lo resolvemos al toque.



            </p>
               
         </div>
      </main>

   </>
}