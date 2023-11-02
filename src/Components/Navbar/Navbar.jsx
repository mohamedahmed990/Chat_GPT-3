import React from "react";
import Style from "./Navbar.module.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import Logo from "../../assets/GPT-3.svg";

function Menu() {
  return (
    <>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#wgpt3">What is GPT3?</a>
      </p>
      <p>
        <a href="#possibility">Open AI</a>
      </p>
      <p>
        <a href="#features">Case Studies</a>
      </p>
      <p>
        <a href="#blog">Library</a>
      </p>
    </>
  );
}
export default function Navbar() {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <>
      <div className={`${Style["gpt3__navbar"]} `}>
        <div className={`${Style["gpt3__navbar-links"]}`}>
          <span className={`${Style["gpt3__navbar-links_logo"]}`}>
            <img src={Logo} alt="logo" />
          </span>
          <div className={`${Style["gpt3__navbar-links_container"]}`}>
            <p>
              <a href="#home">Home</a>
            </p>
            <p>
              <a href="#wgpt3">What is GPT3?</a>
            </p>
            <p>
              <a href="#possibility">Open AI</a>
            </p>
            <p>
              <a href="#features">Case Studies</a>
            </p>
            <p>
              <a href="#blog">Library</a>
            </p>
          </div>
        </div>
        <div className={`${Style["gpt3__navbar-menu-sign-container"]}`}>
          <div className={`${Style["gpt3__navbar-sign"]}`}>
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
          <div className={`${Style["gpt3__navbar-menu"]}`}>
            {toggleMenu ? (
              <RiCloseLine
                color="#fff"
                size={27}
                onClick={() => setToggleMenu(false)}
              />
            ) : (
              <RiMenu3Line
                color="#fff"
                size={27}
                onClick={() => setToggleMenu(true)}
              />
            )}
            {toggleMenu && (
              <div
                className={`${Style["gpt3__navbar-menu_container"]} scale-up-center`}
              >
                <div className={`${Style["gpt3__navbar-menu_container-links"]}`}>
                  <p>
                    <a href="#home">Home</a>
                  </p>
                  <p>
                    <a href="#wgpt3">What is GPT3?</a>
                  </p>
                  <p>
                    <a href="#possibility">Open AI</a>
                  </p>
                  <p>
                    <a href="#features">Case Studies</a>
                  </p>
                  <p>
                    <a href="#blog">Library</a>
                  </p>
                </div>
                <div className={`${Style["gpt3__navbar-menu_container-links-sign"]}`}>
                  <p>Sign in</p>
                  <button type="button">Sign up</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
