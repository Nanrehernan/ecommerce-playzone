const { createContext, useState, useEffect } = require("react");

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
   const [showCart, setShowCart] = useState(false)
   const [cartProducts, setCartProducts] = useState([])

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
         const existe = prevCartProducts.find(item => item.title === product.title)

         if (existe) {
            return prevCartProducts.map(item => {
               if (item.title === product.title){
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

   const removeOneFromCart = ({title}) => {
      setCartProducts(prevCartProducts => prevCartProducts.filter(item => item.title !== title))
   }

   const deleteFromCart = () => {
      setCartProducts([])
   }

   const addToQuantity = ({title}) => {
      setCartProducts(prevCartProducts => {
         return prevCartProducts.map(item => item.title === title ? {...item, cantidad: item.cantidad + 1} : item)
      })
   }

   const quantityDiscount = ({title}) => {
      setCartProducts(prevCartProducts => {
         const product = prevCartProducts.find(item => item.title === title)

         const cantidad = product.cantidad - 1

         if (cantidad > 0){
            return prevCartProducts.map(item => item.title === title ? {...item, cantidad} : item)
         }

         return prevCartProducts.filter(item => item.title !== title)
           
         })
   }

   const getQuantity = () => {
      return cartProducts.reduce( (total, item) => total += item.cantidad, 0)
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
      getQuantity
   }

   return <>
      <CartContext.Provider value={value}>
         {children}
      </CartContext.Provider>
   </>
}