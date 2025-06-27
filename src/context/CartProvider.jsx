const { createContext, useState, useEffect } = require("react");

export const CartContext = createContext()

export const CartProvider = ({children}) => {
   const [showCart, setShowCart] = useState(false)

   useEffect(() => {
      if (showCart){
         window.document.body.style.overflowY = "hidden"
      }

      return () => {
         window.document.body.style.overflowY = "auto"
      }

   }, [showCart])

   const value = {
      showCart,
      setShowCart
   }

   return <>
      <CartContext.Provider value={value}>
         {children}
      </CartContext.Provider>
   </>
}