import React, { useEffect, useState } from "react";
import "./market.css";
import SingleMarketProduct from "./SingleMarketProduct";
import useCart from "../../hooks/useCart";
const categories = [
  "All",
  "Television",
  "Rice Cooker",
  "Blender",
  "Curry Cooker",
  "Multi Cooker",
  "Electric Cooker",
  "Oven",
  "Iron",
  "Geyser",
  "Room Heater",
  "LED Light",
  "Fan",
  "Mini Desktop AC",
  "Mobile",
  "Mini Computer",
  "All in one Computer",
  "Keyboard",
  "Mouse",
  "Keyboard + Mouse (Combo)",
  "Pen Drive",
  "Data Cable",
  "Mobile Charger",
];
const Market = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const { cartItems, setCartItems } = useCart();
  const handleCategoryProducts = (e) => {
    const value = e.target.value;
    if (value === "All") {
      setDisplayedProducts(allProducts);
    } else {
      const filteredProducts = allProducts.filter(
        (product) => product.category === value
      );
      setDisplayedProducts(filteredProducts);
    }
  };
  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setAllProducts(data);
        setDisplayedProducts(data);
      });
  }, []);

  return (
    <div className="mainContainer">
      {/* market category */}

      <div className="marketCategory marginBottom">
        <h2>Category</h2>
        <select onChange={handleCategoryProducts} name="category">
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      {/* Products */}
      <div className="allMarketProducts">
        {displayedProducts?.map((product) => (
          <SingleMarketProduct
            key={product.id}
            product={product}
            setCartItems={setCartItems}
          />
        ))}
      </div>
    </div>
  );
};

export default Market;
