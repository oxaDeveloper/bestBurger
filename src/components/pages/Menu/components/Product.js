import React from "react";

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div className="product">
      <img className="small" src={product.image} alt={product.name} />
      <div className="pro_info">
        <h3 className="pro_text">{product.name}</h3>
        <div className="pro_text">UZS {product.price}</div>
        <div>
          <button className="add_cart" onClick={() => onAdd(product)}>
            QO'SHISH!
          </button>
        </div>
      </div>
    </div>
  );
}
