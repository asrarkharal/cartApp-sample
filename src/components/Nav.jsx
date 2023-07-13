import React from "react";
import { AiFillShopping } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../CartContext";

const Nav = () => {
  const { items } = useContext(CartContext);

  const stdStyle = {
    backgroundColor: "lightblue",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  };
  return (
    <nav style={stdStyle}>
      <Link to={"/"}>
        <h1 style={{}}>Product</h1>
      </Link>
      <Link to={"/checkout"}>
        <div
          style={{
            fontSize: "25px",
            display: "flex",
            alignItems: "center",
          }}
          className="cart"
        >
          <AiFillShopping />
          <span style={{ marginLeft: "5px" }}>{items ? items.length : 0}</span>
        </div>
      </Link>
    </nav>
  );
};

export default Nav;
