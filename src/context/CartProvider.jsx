const { createContext, useState, useEffect } = require("react");

const CART_KEY = "mi-carrito"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
   const [showCart, setShowCart] = useState(false)
   const [cartProducts, setCartProducts] = useState([])

   useEffect(() => {
      const localItem = window.localStorage.getItem(CART_KEY)

      if (!localItem){
         setCartProducts([])
         return
      }

      try {
         setCartProducts(JSON.parse(localItem))
      } catch (error) {
         setCartProducts([])
      }

   }, [])

   useEffect(() => {
      window.localStorage.setItem(CART_KEY, JSON.stringify(cartProducts))
   }, [cartProducts])

   useEffect(() => {
      if (showCart) {
         window.document.body.style.overflowY = "hidden"
      }

      return () => {
         window.document.body.style.overflowY = "auto"
      }

   }, [showCart])

   const addToCart = (product) => {
      setCartProducts(prevCartProducts => {
         const existe = prevCartProducts.find(item => item.id === product.id)

         if (existe) {
            return prevCartProducts.map(item => {
               if (item.id === product.id){
                  return {
                     ...item,
                     cantidad: item.cantidad + 1
                  }
               }else{
                  return item
               }
            })
         }

         return [...prevCartProducts, {
            ...product,
            cantidad: 1
         }]
      })
   }

   const removeOneFromCart = ({id}) => {
      setCartProducts(prevCartProducts => prevCartProducts.filter(item => item.id !== id))
   }

   const deleteFromCart = () => {
      setCartProducts([])
   }

   const addToQuantity = ({id}) => {
      setCartProducts(prevCartProducts => {
         return prevCartProducts.map(item => item.id === id ? {...item, cantidad: item.cantidad + 1} : item)
      })
   }

   const quantityDiscount = ({id}) => {
      setCartProducts(prevCartProducts => {
         const product = prevCartProducts.find(item => item.id === id)

         if (!product) return

         const cantidad = product.cantidad - 1

         if (cantidad > 0){
            return prevCartProducts.map(item => item.id === id ? {...item, cantidad} : item)
         }

         return prevCartProducts.filter(item => item.id !== id)
           
         })
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