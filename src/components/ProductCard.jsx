import React, { useRef, useEffect } from "react"; // Ensure these hooks are imported
import VanillaTilt from "vanilla-tilt";
import "../css/product-card.css";

const ProductCard = ({ img_url, product_name, description }) => {
  const tiltRef = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tiltRef.current, {
      max: 25,
      speed: 300,
    });
  }, []);

  return (
    <div className="container">
      <h2 className="name">{product_name}</h2>
      <div className="box" ref={tiltRef}>
        <h2 className="description">{description}</h2>
        <a href="#" className="add">
          ADD
        </a>
        <div className="circle"></div>
        <img src={img_url} alt="product" className="product" />{" "}
      </div>
    </div>
  );
};

export default ProductCard;
