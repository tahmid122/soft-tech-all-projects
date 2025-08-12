import React, { useEffect, useState } from "react";
import "./products.css";
import {
  FaBars,
  FaCartPlus,
  FaMagnifyingGlass,
  FaXmark,
} from "react-icons/fa6";
import ProductCard from "./ProductCard/ProductCard";
// categories
const categories = [
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

// static products information

// static products information
const Products = () => {
  const [categoryShow, setCategoryShow] = useState(false);
  const [isSearchShow, setIsSearchShow] = useState(false);
  const [allNonChangeProducts, setAllNonChangeProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [selectedCat, setSelectedCat] = useState("");
  const handleFilter = (selectedCategory) => {
    setSelectedCat(selectedCategory);
    if (selectedCategory) {
      console.log(selectedCategory);
      const filteredProducts = allNonChangeProducts.filter(
        (product) => product.category === selectedCategory
      );
      console.log(filteredProducts.length);
      setAllProducts(filteredProducts);
    } else {
      setAllProducts(allNonChangeProducts);
    }
  };
  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        setAllNonChangeProducts(data);
        setAllProducts(data);
      });
  }, []);
  const categoriesList = (radioName) => (
    <ul className="categories">
      <li style={{ cursor: "pointer" }} onClick={() => handleFilter(null)}>
        <input
          onChange={() => handleFilter(null)}
          type="radio"
          name={radioName}
          defaultChecked
          checked={selectedCat == null}
        />
        All
      </li>
      {categories?.map((category, index) => (
        <li
          key={index}
          style={{ cursor: "pointer" }}
          onClick={() => handleFilter(category)}
        >
          <input
            onChange={() => {
              handleFilter(category);
            }}
            type="radio"
            name={radioName}
            checked={selectedCat === category}
          />

          {category}
        </li>
      ))}
    </ul>
  );

  console.log("hello", allNonChangeProducts);
  console.log("all", allProducts);
  return (
    // products page
    <div className="productionSectionBg">
      <div id="productsSection">
        {/* products page top */}
        <div className="productsSectionTop">
          {/* category button */}
          <div id="catBtnLarge" className="category-button">
            <FaBars />
            Shop By Category
          </div>
          <div
            id="mobileCatBtn"
            onClick={() => setCategoryShow(!categoryShow)}
            className="category-button"
          >
            {categoryShow ? <FaXmark /> : <FaBars />}
            Shop By Category
          </div>
          {/* category button */}
          {/* Search box */}
          <div className="searchBox">
            <input type="text" placeholder="Search here..." />
            <button>Search</button>
          </div>
          {/* Search box */}
          {/* Animated search box for mobile */}
          <div
            className={`animatedSearchBox ${
              isSearchShow && "animatedSearchBoxAnimation"
            }`}
            // style={{ display: `${isSearchShow ? "flex" : "none"}` }}
          >
            <input type="text" placeholder="Search here..." />
            <button>
              <FaMagnifyingGlass />
            </button>
          </div>
          {/* search icon only for mobile */}
          <div
            className="searchIcon"
            onClick={() => setIsSearchShow(true)}
            style={{ display: `${isSearchShow ? "none" : ""}` }}
          >
            <FaMagnifyingGlass />
          </div>
          {/* Animated search box for mobile */}
          {/* wishlist and cart buttons */}
          <div className="wishCart">
            <div>
              <FaCartPlus size={18} />
            </div>
          </div>
          {/* wishlist and cart buttons */}
        </div>
        {/* products page top */}
        {/* products page main section */}
        <div className="productMainSection">
          {/* products section left side categories list */}
          <div className="pmsLeft">
            <div>
              <p className="pmsLeft-title">Categories</p>
              {categoriesList("productCategory")}
            </div>
          </div>
          {/* products section left side categories list */}
          {/* products section left side categories list for mobile */}
          <div
            id="mobileCategoriesList"
            className="pmsLeft"
            style={{ display: `${categoryShow ? "block" : "none"}` }}
          >
            <div>
              <p className="pmsLeft-title">Categories</p>
              {categoriesList("category")}
              {/* <button onClick={() => handleFilter()} className="btn">
                Filter
              </button>
              <button
                onClick={() => setAllProducts(allNonChangeProducts)}
                style={{ backgroundColor: "red", marginLeft: "10px" }}
                className="btn"
              >
                Reset
              </button> */}
            </div>
          </div>
          {/* products section left side categories list for mobile */}
          {/* products cards container */}
          <div className="pmsRight">
            {allProducts?.length > 0 ? (
              <>
                {allProducts?.map((product) => (
                  // single product card
                  // hover ProductCard and press  control and click to enter to the component
                  <ProductCard key={product.id} product={product} />
                  // single product card
                ))}
              </>
            ) : (
              "There is no product to show"
            )}
          </div>
          {/* products cards container */}
        </div>
        {/* products page main section */}
      </div>
    </div>
    // products page
  );
};

export default Products;
