import React from "react";
import Style from "./Cta.module.css";

export default function Cta() {
  return (
    <>
      <div className={`${Style["cta"]}`}>
        <div className={`${Style["cta__text"]}`}>
          <p>Request Early Access to Get Started</p>
          <h2>Register today & start exploring the endless possiblities.</h2>
        </div>
        <button className={`${Style["cta__btn"]}`}>Get Started</button>
      </div>
    </>
  );
}
