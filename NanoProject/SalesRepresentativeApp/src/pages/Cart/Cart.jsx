import React, { useEffect, useState } from "react";
import "./cart.css";
import { Link } from "react-router";
import useCart from "../../hooks/useCart";
import SingleCartItem from "./SingleCartItem/SingleCartItem";
import BottomSticky from "../../components/BottomSticky/BottomSticky";

const Cart = () => {
  const { cartItems } = useCart();
  const [rawTotalProducts, setRawTotalProducts] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [discountAmount, setDiscountAmount] = useState(0);

  useEffect(() => {
    const total = cartItems.reduce(
      (sum, item) => sum + Number(item?.payableAmount),
      0
    );
    console.log(total);
    setTotalPrice(total);
  }, [cartItems]);
  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    setRawTotalProducts(total);
  }, [cartItems]);
  useEffect(() => {
    const total = cartItems.reduce(
      (sum, item) => sum + item?.discountAmount,
      0
    );
    console.log("discount", total);
    setDiscountAmount(total);
  }, [cartItems]);

  return (
    <div id="cart">
      <div className="cartTop">
        <h2>Cart</h2>
        <p>{cartItems?.length} Items</p>
      </div>

      <div className="cartMain marginBottom">
        <table className="cartTable">
          <thead>
            <tr style={{ position: "sticky", top: "0", left: "0" }}>
              <th>Image</th>
              <th>Price (BDT)</th>
              <th>Product ID</th>
              <th>Payment Type</th>
              <th>Discount</th>
              <th>Payable</th>
              <th>Due</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems
              ?.sort((a, b) => a.name.localeCompare(b.name))
              .map((cartItem) => (
                <SingleCartItem
                  key={cartItem.id}
                  cartItem={cartItem}
                  rawTotalProducts={rawTotalProducts}
                />
              ))}
          </tbody>
        </table>
      </div>
      <BottomSticky>
        <>
          {" "}
          <div className="cartSummary">
            <table className="summaryTable">
              <tbody>
                <tr
                  className="upperRow"
                  style={{ backgroundColor: "#245824ff", color: "white" }}
                >
                  <th rowSpan={2} s>
                    Total:
                  </th>
                  <th>Main</th>
                  <th>Discount</th>
                  <th>Payable</th>
                  <th>Due</th>
                </tr>
                <tr>
                  <td>{rawTotalProducts}</td>
                  <td>{isNaN(discountAmount) ? 0 : discountAmount}</td>
                  <td>{isNaN(totalPrice) ? 0 : totalPrice}</td>
                  <td>
                    {isNaN(totalPrice) || isNaN(discountAmount)
                      ? 0
                      : totalPrice - discountAmount}
                  </td>
                </tr>
              </tbody>
            </table>
            <Link
              to={"/checkout"}
              className="btn"
              style={{ display: "inline-block" }}
            >
              Sell Now
            </Link>
          </div>
        </>
      </BottomSticky>
    </div>
  );
};

export default Cart;
