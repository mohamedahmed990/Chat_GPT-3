import React from "react";
import Style from "./Footer.module.css";
import FooterLogo from "../../assets/GPT-3.svg";

export default function Footer() {
  
  return (
    <>
      <footer className={`${Style["footer"]}`}>
        <div className={`${Style["footer__container"]}`}>
          <h2 className={`${Style["footer__heading"]} gradient__text section-heading`}>
            Do you want to step in to the future before others
          </h2>
          <div className={`${Style["footer__button-container"]}`}>
            <button className={`${Style["footer__button"]}`}>
              Request Early Access
            </button>
          </div>
          <div className={`${Style["footer__social"]}`}>
            <div className={`${Style["footer__social-logo"]}`}>
              <div className={`${Style["footer__social-logo-img"]}`}>
                <img src={FooterLogo} alt="logo" />
              </div>
              <p className={`${Style["footer__social-logo-text"]}`}>
                Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
              </p>
            </div>
            <div className={`${Style["footer__social-links"]}`}>
              <h4 className={`${Style["footer__social-links-heading"]}`}>
                Links
              </h4>
              <p className={`${Style["footer__social-links-text"]}`}>Overons</p>
              <p className={`${Style["footer__social-links-text"]}`}>
                Social Media
              </p>
              <p className={`${Style["footer__social-links-text"]}`}>
                Counters
              </p>
              <p className={`${Style["footer__social-links-text"]}`}>Contact</p>
            </div>

            <div className={`${Style["footer__company"]}`}>
              <h4 className={`${Style["footer__company-heading"]}`}>Company</h4>
              <p className={`${Style["footer__company-text"]}`}>
                Terms & Conditions
              </p>
              <p className={`${Style["footer__company-text"]}`}>
                Privacy Policy
              </p>
              <p className={`${Style["footer__company-text"]}`}>Contact</p>
            </div>

            <div className={`${Style["footer__Get-in-touch"]}`}>
              <h4 className={`${Style["footer__Get-in-touch-heading"]}`}>
                Get in Touch
              </h4>
              <p className={`${Style["footer__Get-in-touch-text"]}`}>
                Crechterwoord K12 182 DK Alknjkcb
              </p>
              <p className={`${Style["footer__Get-in-touch-text"]}`}>
                085-132567
              </p>
              <p className={`${Style["footer__Get-in-touch-text"]}`}>
                info@payme.net
              </p>
            </div>
          </div>
          <div className={`${Style["footer__copyright"]}`}>
            <p className={`${Style["footer__copyright-text"]}`}>
              © 2021 GPT-3. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
