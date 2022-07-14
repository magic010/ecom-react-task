import React from "react";
import { Link } from "react-router-dom";
import { TbTruckDelivery, TbWorld } from "react-icons/tb";
import { AiOutlineDollar } from "react-icons/ai";
import Reviews from "../components/Review";

const Home = () => {
  return (
    <main>
      <header>
        <article className="hero-section">
          <img
            className="hero-img"
            src="https://static.thehoneycombers.com/wp-content/uploads/sites/2/2021/09/Online-furniture-Singapore-900x643.png"
            alt="store"
          />
          <h1 className="title">
            Welcome to our <span>Store</span>
          </h1>
          <div className="hero-text">
            <p className="welcome-msg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
              dolore ipsa repellat repudiandae veniam ab.
            </p>
            <Link to="/products">
              <button to="/products" className="start-btn">
                Let's start
              </button>
            </Link>
          </div>
        </article>
      </header>
      <section className="services">
        <div className="service service-1">
          <TbTruckDelivery className="icon" />
          <h4>Free Shipping</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum,
            minima.
          </p>
        </div>
        <div className="service service-2">
          <TbWorld className="icon" />
          <h4>World Wide</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum,
            minima.
          </p>
        </div>
        <div className="service service-3">
          <AiOutlineDollar className="icon" />
          <h4>Best Offers</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            minus quam eaque voluptatem fuga quasi deserunt deleniti doloremque
            ratione assumenda.
          </p>
        </div>
      </section>
      <Reviews />
    </main>
  );
};

export default Home;
