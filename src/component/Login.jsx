import React from "react";
import Logo from "../assets/svg/lob.svg";
import Hero from "../assets/images/login-hero.png";
import Ring from "../assets/images/Ellipse-2.jpg";

function Login() {
  return (
    <div className="login ">
      <div className="login__wrapper grid">
        <div className="login__content">
          <div className="login__overlay">
            <div className="login__logo-box">
              <a href="/" className="login__link">
                <img
                  src={Logo}
                  alt="Find jobs - for employers"
                  className="login__logo"
                />
              </a>
            </div>
            <h1 className="login__heading text-left">
              <span className="block">Find the best</span>
              <span className="block">candidates for your</span>
              <span className="block">organisation.</span>
            </h1>
            <div className="login__hero">
              <img src={Hero} alt="login hero" className="login__image" />
            </div>
          </div>
        </div>
        <div className="login__form">
          <div className="circle circle--1">
            &nbsp;
            <img src={Ring} alt="ring " />
          </div>
          <div className="circle circle--2">&nbsp;</div>
          <div className="circle circle--3">&nbsp;</div>
          <form action="#" className="form">
            <h1 className="form__header">Login</h1>
            <div className="form__group">
              <label for="email" className="form__label">
                Email
              </label>
              <input
                type="email"
                className="form__input"
                id="email"
                name="email"
              />
            </div>
            <div className="form__group">
              <label for="password" className="form__label">
                Password
              </label>
              <input
                type="password"
                className="form__input"
                id="password"
                name="password"
              />
            </div>
            <div className="form__group">
              <button type="submit" className="btn btn--submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
