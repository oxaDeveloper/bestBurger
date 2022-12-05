import Main from "./components/Main";
import Basket from "./components/Basket";
import data from "./data";
import React, { useState } from "react";
import "./Menu.css";

function Menu({ user }) {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }

    document.getElementById("alert").style.display = "block";
  };

  return (
    <div className="Menu">
      <div className="row">
        <Main products={products} onAdd={onAdd}></Main>
        <Basket
          user={user}
          cartItems={cartItems}
          products={products}
          onRemove={onRemove}
        ></Basket>
      </div>
    </div>
  );
}

export default Menu;
