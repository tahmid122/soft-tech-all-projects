import React, { useEffect, useState } from "react";
import "./singleMarketProductDetails.css";

import { useParams } from "react-router";
const SingleMarketProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  // its dummy need to add real fetch with api
  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        const specificProduct = data.filter((product) => product.id == id);
        setProduct(specificProduct[0]);
      });
  }, []);
  return (
    <div className="singleProductBg">
      <div id="singleProduct">
        {/* product top section */}
        <div className="productIntro shadow">
          {/* product image container */}
          <div className="productImageContainer">
            {/* product main image- changeable */}
            <div className="productImage">
              <img src={product?.image} alt={product?.name} />
            </div>
            {/* product main image- changeable */}
            {/* product image previews - while clicking main image will change */}
            {/* <div className="imagePreview">
              <img
                onClick={() => setMainImage("/products/oven.png")}
                src="/products/oven.png"
                alt="productImage"
              />
              <img
                onClick={() => setMainImage("/products/bat.jpg")}
                src="/products/bat.jpg"
                alt="productImage"
              />
              <img
                onClick={() => setMainImage("/products/geyser.png")}
                src="/products/geyser.png"
                alt="productImage"
              />
              <img
                onClick={() => setMainImage("/products/hairdryer.jpg")}
                src="/products/hairdryer.jpg"
                alt="productImage"
              />
            </div> */}
            {/* product image previews */}
          </div>
          {/* product image container */}
          {/* product intro description */}
          <div className="productIntroDescription">
            <div>
              {/* product title */}
              <h4>{product?.name}</h4>
              {/* product model */}
              <p>{product?.model}</p>
              {/* product price */}
              <h4 className="singleProPrice">Price: {product?.price} TK</h4>
              {/* product key features */}
              <div className="key-features">
                <h5>Key Features</h5>
                <ul>
                  {product?.specifications?.slice(0, 5)?.map((spec, index) => (
                    <li key={index}>
                      {spec[0]}: {spec[1]}
                    </li>
                  ))}
                </ul>
              </div>
              {/* product key features */}
            </div>
            {/* action buttons */}
            <div className="singleProButtons">
              <a href="tel:+8801329636890">
                <button className="btnPro">Call Now</button>
              </a>
              {/* <button className="btnPro">Buy now</button> */}
            </div>
            {/* action buttons */}
          </div>
          {/* product intro description */}
        </div>
        {/* product top section */}
        {/* product description section */}
        <div className="productMainDescription shadow">
          {/* section  itle */}
          <h4 style={{ marginBottom: "20px" }}>Description</h4>
          {/* product details div */}
          <div className="specification">
            <h5 className="specification-title">Prouct Infdormation</h5>
            <div className="specificationTable">
              <table>
                <tbody>
                  {product?.specifications?.map((spec, index) => (
                    <tr key={index}>
                      <td style={{ fontWeight: "bold" }}>{spec[0]}:</td>
                      <td>{spec[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {/* product details div */}
        </div>
        {/* product description section */}
      </div>
    </div>
  );
};

export default SingleMarketProductDetails;
