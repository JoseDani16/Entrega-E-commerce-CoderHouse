import React from "react";
import ItemCart from "./components/ItemCart";
import { useCartContext } from "../../App/CartContext";
import {
  ICSContainer,
  StyledButtonCart,
  StyledCartCheckIcon,
} from "../../Styles/CartStyled";
import { StyledTrashIcon } from "../../Styles/CartStyled";
import { createOrder, updateItem } from "../../Services/api";
import Swal from "sweetalert2";

const CartList = () => {
  const { cartArray, deleteCart, totalPrice, totalQuantity } = useCartContext();
  const ordenCompra = {
    comprador: {
      nombre: "usuario",
      correo: "alguien@example.com",
      telefono: "123456789",
      direccion: "qwerty 123, Esq. ytrewq",
    },
    productos: cartArray.map((item) => ({
      nombre: item.nombre,
      precio: item.precio,
      cantidad: item.cantidad,
    })),
    precioFinal: totalPrice(),
  };

  const updateCatalog = () => {
    //me tiene que devolver un objeto con la cantidad actualizada
    cartArray.forEach((item) => {
      const aux = item;
      console.log(aux);
      aux.stock = aux.stock - aux.cantidad;
      updateItem(item.id, aux);
    });
  };

  const issueOrder = () => {
    if (totalQuantity() !== 0) {
      createOrder(ordenCompra);
      updateCatalog();
      deleteCart();
    }
  };

  const confirmSendOrder = () => {
    Swal.fire({
      title: "¡Oye!",
      text: "¿Seguro deseas confirmar la compra?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, continuar",
      cancelButtonText: "Cancelar",
      cancelButtonColor: "#CB997E",
      confirmButtonColor: "#6B705C",
    }).then((resultado) => {
      if (resultado.value) {
        issueOrder();
      }
    });
  };

  return (
    <>
      <ICSContainer W="100%">
        El carrito tiene un total de:<strong> {totalQuantity()} </strong>{" "}
        productos y su total es: <strong>UYU {totalPrice()} </strong>
      </ICSContainer>
      <ICSContainer W="100%">
        <StyledButtonCart onClick={deleteCart}>
          Eliminar Todos los items <StyledTrashIcon />
        </StyledButtonCart>
        <StyledButtonCart onClick={confirmSendOrder}>
          Finalizar compra <StyledCartCheckIcon />
        </StyledButtonCart>
      </ICSContainer>
      <ItemCart products={cartArray} />
    </>
  );
};

export default CartList;
