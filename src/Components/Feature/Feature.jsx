import React from "react";
import Style from "./Feature.module.css";

export default function Feature() {
  return (
    <>
      <div className={`${Style["feature-section"]}  `}>
        <div className={`${Style["feature-section__bg-layer"]}`}></div>
        <div className={`${Style["feature-section__container"]}`}>
          <div className={`${Style["feature-section__heading"]}`}>
            <h1 className={`${Style["feature-section__heading-content"]} gradient__text`}>
              The Future is Now and You Just Need To Realize It. Step into
              Future Today & Make it Happen.
            </h1>
            <p className={`${Style["feature-section__heading-subtext"]}`}>
              Request Early Access to Get Started
            </p>
          </div>
          <div className={`${Style["feature-section__groups"]}`}>
            <div className={`${Style["feature-section__group"]}`}>
              <div className={`${Style["feature-section__group-heading"]}`}>
                <div
                  className={`${Style["feature-section__group-heading-bar"]} `}
                ></div>
                <h2
                  className={`${Style["feature-section__group-heading-content"]}`}
                >
                  Improving end distrusts instantly
                </h2>
              </div>
              <div className={`${Style["feature-section__group-description"]}`}>
                <p>
                  From they fine john he give of rich he. They age and draw mrs
                  like. Improving end distrusts may instantly was household
                  applauded.
                </p>
              </div>
            </div>
            <div className={`${Style["feature-section__group"]}`}>
              <div className={`${Style["feature-section__group-heading"]}`}>
                <div
                  className={`${Style["feature-section__group-heading-bar"]}`}
                ></div>
                <h2
                  className={`${Style["feature-section__group-heading-content"]}`}
                >
                  Become the tended active
                </h2>
              </div>
              <div className={`${Style["feature-section__group-description"]}`}>
                <p>
                  Considered sympathize ten uncommonly occasional assistance
                  sufficient not. Letter of on become he tended active enable
                  to.
                </p>
              </div>
            </div>
            <div className={`${Style["feature-section__group"]}`}>
              <div className={`${Style["feature-section__group-heading"]}`}>
                <div
                  className={`${Style["feature-section__group-heading-bar"]}`}
                ></div>
                <h2
                  className={`${Style["feature-section__group-heading-content"]}`}
                >
                  Message or am nothing
                </h2>
              </div>
              <div className={`${Style["feature-section__group-description"]}`}>
                <p>
                  Led ask possible mistress relation elegance eat likewise
                  debating. By message or am nothing amongst chiefly address.
                </p>
              </div>
            </div>
            <div className={`${Style["feature-section__group"]}`}>
              <div className={`${Style["feature-section__group-heading"]}`}>
                <div
                  className={`${Style["feature-section__group-heading-bar"]}`}
                ></div>
                <h2
                  className={`${Style["feature-section__group-heading-content"]}`}
                >
                  Really boy law county
                </h2>
              </div>
              <div className={`${Style["feature-section__group-description"]}`}>
                <p>
                  Really boy law county she unable her sister. Feet you off its
                  like like six. Among sex are leave law built now. In built
                  table in an rapid blush.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
