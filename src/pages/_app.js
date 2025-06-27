import "@/styles/variables.css"
import "@/styles/globals.css";
import { CartProvider } from "@/context/CartProvider";

export default function App({ Component, pageProps }) {
   return <>
      <CartProvider>
         <Component {...pageProps} />
      </CartProvider>
   </>
}
