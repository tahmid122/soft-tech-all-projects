import React from "react";
import toast from "react-hot-toast";
import { Link } from "react-router";

const SingleMarketProduct = ({ product, setCartItems }) => {
  const addToCart = () => {
    setCartItems((prev) => [
      ...prev,
      {
        ...product,
        discountAmount: 0,
        payableAmount: 0,
        dueAmount: 0,
        paymentType: "",
      },
    ]);
    toast.success("Added to cart");
  };
  return (
    // link url need to  make dynamic

    <div className="singleMarketProduct">
      <Link to={`/market/${product?.id}`}>
        <div className="productImage">
          <img src={product?.image} alt={product?.name} />
        </div>
      </Link>

      <div className="productDescription">
        <h4>BDT {product?.price}</h4>
        <p>{product?.name}</p>
        <div className="actionButtons">
          <button onClick={addToCart}>Add to cart</button>
          <Link to={"/cart"}>
            <button>Sell Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleMarketProduct;
