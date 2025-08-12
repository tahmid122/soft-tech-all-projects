import React from "react";
import "./productcard.css";
import { FaCartPlus } from "react-icons/fa6";
import { Link } from "react-router";
const ProductCard = ({ product = {} }) => {
  return (
    // single product card
    <div className="productCard">
      {/* link for product details */}
      <Link to={`${product.id}`}>
        {/* product image */}
        <div className="card-image">
          <img src={product.image} alt={product.title} />
        </div>
        {/* product description */}
        <div className="productDescription">
          <div className="titleModel">
            {/* product model */}
            <h6>{product.model}</h6>
            {/* product title */}
            <h5>{product.name}</h5>
          </div>
          {/* product price */}
          <span className="productPrice">Price: {product.price}</span>
        </div>
      </Link>
      {/* product action buttons */}
      <div className="productActions">
        {product?.availability === "comingSoon" ? (
          <p>Coming Soon</p>
        ) : (
          <div className="wishlistBtn">
            <FaCartPlus size={18} />
          </div>
        )}

        {/* link for product details */}
        <Link to={`${product.id}`}>
          <button className="btn">Details</button>
        </Link>
      </div>
      {/* product action buttons */}
      {/* coming soon effect */}
      {product?.availability === "comingSoon" && (
        <div className="comingSoon">Coming Soon</div>
      )}
      {/* coming soon effect */}
    </div>
    // single product card
  );
};

export default ProductCard;
