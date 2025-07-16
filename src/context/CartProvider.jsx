import {useState, useEffect, createContext} from "react"
import { api } from "@/utilities/api.axios"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
   const [showCart, setShowCart] = useState(false)
   const [cartProducts, setCartProducts] = useState([])

   useEffect(() => {
      getCartProducts()
   }, [])

   useEffect(() => {
      if (showCart) {
         window.document.body.style.overflowY = "hidden"
      }

      return () => {
         window.document.body.style.overflowY = "auto"
      }

   }, [showCart])

   const getCartProducts = async () => {
      const {data} = await api.get("/carrito")
      setCartProducts(data)
   }

   const addToCart = async (product) => {
      const {id} = product

      try {
         const {data: item} = await api.get(`/carrito/${id}`)
         if (!item) return
         const {status} = await api.patch(`/carrito/${id}`, {cantidad: item.cantidad + 1})
         if (status !== 200) return
         console.log("Producto modificado")
      } catch (error) {
         const data = {
            ...product,
            cantidad: 1
         }
         const {status} = await api.post("/carrito", data)
         if (status !== 201){
            console.log("No se pudo agregar al carrito, error desconocido")
            return
         }

         console.log("Agregado al carrito con exito")
      }

      getCartProducts()
   }

   const removeOneFromCart = async ({id}) => {
      const {status} = await api.delete(`/carrito/${id}`)
      if (status !== 200){
         console.log("No se pudo quitar del carrito")
         return
      }
      getCartProducts()
      console.log("Eliminado con exito")
   }

   const deleteFromCart = async () => {
      const {data: items} = await api.get("/carrito", [])

      for(let item of items){
         await api.delete(`/carrito/${item.id}`)
      }

      getCartProducts()
      console.log("Carrito vacio")
   }

   const addToQuantity = async ({id}) => {
      try {
         const {data: item} = await api.get(`/carrito/${id}`)
         await api.patch(`/carrito/${id}`, {cantidad: item.cantidad + 1})
      } catch (error) {
         
      }

      getCartProducts()
   }

   const quantityDiscount = async ({id}) => {
      try {
         const {data: item} = await api.get(`/carrito/${id}`)
         const cantidad = item.cantidad - 1
         if (cantidad < 1){
            await api.delete(`/carrito/${id}`)
         }else{
            await api.patch(`/carrito/${id}`, {cantidad})
         }
      } catch (error) {
         
      }

      getCartProducts()
   }

   const getQuantity = () => {
      return cartProducts.reduce( (total, item) => total += item.cantidad, 0)
   }

   const getTotal = () => {
      return cartProducts.reduce( (total, item) => total += item.price * item.cantidad, 0)
   }

   const value = {
      showCart,
      setShowCart,
      cartProducts,
      addToCart,
      removeOneFromCart,
      deleteFromCart,
      addToQuantity,
      quantityDiscount,
      getQuantity,
      getTotal
   }

   return <>
      <CartContext.Provider value={value}>
         {children}
      </CartContext.Provider>
   </>
}