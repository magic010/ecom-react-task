import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/shopping-bags-svgrepo-com.svg";

const Register = () => {
  return (
    <section className="section-center">
      <article className="login container">
        <div className="tab-content">
          <div className="tab-pane fade show active">
            <div className="login-logo">
              <img src={logo} alt="store-logo" width={100} />
            </div>
            <form>
              <div className="form-outline mb-4">
                <input type="name" id="RegisterName" className="form-control" />
                <label className="form-label" htmlFor="RegisterName">
                  Name
                </label>
              </div>

              <div className="form-outline mb-4">
                <input type="email" id="loginEmail" className="form-control" />
                <label className="form-label" htmlFor="loginEmail">
                  Email
                </label>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="RegisterPassword"
                  className="form-control"
                />
                <label className="form-label" htmlFor="RegisterPassword">
                  Password
                </label>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="RegisterPassword"
                  className="form-control"
                />
                <label className="form-label" htmlFor="RegisterPassword">
                  Confirm Password
                </label>
              </div>

              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-dark btn-block mb-4">
                  Sign up
                </button>
              </div>

              <div className="text-center">
                <p>
                  Already a Member?
                  <NavLink className={"btn btn-link"} to={"/Login"}>
                    Login
                  </NavLink>
                </p>
              </div>
            </form>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Register;
