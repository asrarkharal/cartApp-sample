import React from "react";
import { AiFillShopping } from "react-icons/ai";
import { IoShirtOutline } from "react-icons/io5";
import { useContext } from "react";
import CartContext from "../CartContext";
const Card = ({ name, price }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <div
      style={{
        width: "150px",
        backgroundColor: "lightpink",
        margin: "5px",
        textAlign: "center",
        padding: "5px",
        borderRadius: "7px",
      }}
      className="card"
    >
      <div
        style={{
          fontSize: "120px",
          backgroundColor: "lightsalmon",
        }}
        className="product-box"
      >
        <IoShirtOutline />
      </div>
      <div className="purchase">
        <h3>{name}</h3>
        <AiFillShopping onClick={() => addToCart(name, price)} />
      </div>
      <h4>${price}</h4>
    </div>
  );
};

export default Card;
