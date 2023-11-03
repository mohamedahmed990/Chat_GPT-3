import React from "react";
import Style from "./Header.module.css";
import HeaderPhoto from "../../assets/Header Illustration.png";
import client1 from "../../assets/Ellipse 31.svg";
import client2 from "../../assets/Ellipse 33.svg";
import client3 from "../../assets/Ellipse 35.svg";
import client4 from "../../assets/Ellipse 36.svg";

export default function Header() {
  return (
    <>
      <header className={`${Style["header"]}`}>
        <div className={`${Style["header__content"]}`}>
          <h1
            className={`${Style["header__heading"]} gradient__text section-heading`}
          >
            Let’s Build Something amazing with GPT-3 OpenAI
          </h1>
          <p className={`${Style["header__description"]}`}>
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <div className={`${Style["header__input"]}`}>
            <input type="text" placeholder="Your Email Address" />
            <button>Get Started</button>
          </div>
          <div className={`${Style["header__clients"]}`}>
            <div className={`${Style["header__clients-imgs"]}`}>
              <img
                className={`${Style["clients"]}`}
                src={client1}
                alt="client1"
              />
              <img
                className={`${Style["clients"]}`}
                src={client2}
                alt="client2"
              />
              <img
                className={`${Style["clients"]}`}
                src={client3}
                alt="client3"
              />
              <img
                className={`${Style["clients"]}`}
                src={client4}
                alt="client4"
              />
              <p>1.6K+</p>
            </div>
            <p className={`${Style["header__clients-text"]}`}>
              1,600 people requested access a visit in last 24 hours
            </p>
          </div>
        </div>
        <div className={`${Style["header__photo"]}`}>
          <img src={HeaderPhoto} alt="openAi" />
        </div>
      </header>
    </>
  );
}
