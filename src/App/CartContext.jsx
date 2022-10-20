import React, { useState, useContext, useEffect } from "react";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cartArray, setCartArray] = useState([]);

  //---------------------------------------------------
  const addToCart = (newProdu, nuevaCantidad) => {
    const newCart = cartArray.filter((oldProdu) => oldProdu.id !== newProdu.id);
    newCart.push({ ...newProdu, cantidad: nuevaCantidad });
    setCartArray(newCart);
  };

  useEffect(() => {
    console.log(cartArray);
  }, [cartArray]);

  const deleteCart = () => {
    setCartArray([]);
  };

  const deleteItem = (id) => {
    setCartArray(cartArray.filter((item) => item.id !== id));
  };

  const isInCart = (id) => {
    return cartArray.find((item) => item.id === id) ? true : false;
  };

  const totalPrice = () => {
    return cartArray.reduce(
      (acumulador, valorActual) =>
        acumulador + valorActual.cantidad * valorActual.precio,
      0
    );
  };
  const totalQuantity = () => {
    return cartArray.reduce(
      (acumulador, valorActual) => acumulador + valorActual.cantidad,
      0
    );
  };
  //------------------------------------------

  return (
    <CartContext.Provider
      value={{
        addToCart,
        deleteCart,
        deleteItem,
        isInCart,
        cartArray,
        totalQuantity,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
