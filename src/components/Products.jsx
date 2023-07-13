import React from "react";
import Card from "./Card";

const Products = () => {
  const products = [
    { name: "vest", price: 50 },
    { name: "jacket", price: 30 },
    { name: "sweater", price: 40 },
    { name: "tShirt", price: 70 },
    { name: "jumper", price: 90 },
  ];
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
        {products.map((product, i) => (
          <Card key={i} name={product.name} price={product.price} />
        ))}
      </div>
    </>
  );
};

export default Products;
