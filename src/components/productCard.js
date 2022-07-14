import React from "react";

const ProductCard = ({ title, img, price, addToCart, id }) => {
  return (
    <section className="product-container d-flex flex-column">
      <img className="product-img" src={img} alt={title} />
      <div className="product-info">
        <p className="product-name">{title}</p>
        <p className="product-price">${price}</p>
      </div>
      <button
        type="button"
        class="btn btn-outline-primary"
        onClick={() => addToCart({ id, title, img, price })}
      >
        Add to cart
      </button>
    </section>
  );
};

export default ProductCard;
