import React from "react";
import { useContext } from "react";
import CartContext from "../CartContext";
import Card from "./Card";

const Checkout = () => {
  const { items } = useContext(CartContext);
  console.log(items);
  return (
    <>
      <div
        className="product-list"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {items.map((product, i) => (
          <Card key={i} name={product.name} price={product.price} />
        ))}
      </div>
    </>
  );
};

export default Checkout;
