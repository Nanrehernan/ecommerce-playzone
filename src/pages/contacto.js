import Head from "next/head";
import Button from "@/components/Button/Button"
import Navegation from "@/components/Navegation";

export default function contacto() {
    return <>
        <Head>
            <title>Play Zone</title>
            <meta name="description" content="Proyecto de E-commerce de Play Zone" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

    <body>
        <header>
            <h1>PlayZone</h1>
            <Navegation/>
        </header>
    </body>

    </>
}