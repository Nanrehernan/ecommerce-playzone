import { CartContext } from "@/context/CartProvider"
import { useContext } from "react"

export const useCart = () => {
   const context = useContext(CartContext)

   if (!context) return

   return context
}