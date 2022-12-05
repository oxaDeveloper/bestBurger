import React from "react";
import Product from "./Product";
import logo1 from "../../../../img/bestBurger_logo.png";

export default function Main(props) {
  const { products, onAdd } = props;
  return (
    <main className="block col-2 border">
      <a href="/">
        <img className="main_logo1" src={logo1} />
      </a>
      <div className="row">
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </main>
  );
}
