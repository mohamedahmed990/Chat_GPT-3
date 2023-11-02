import React from "react";
import Style from "./WhatGPT3.module.css";

export default function WhatGpt3() {
  return <>
      <div className={`${Style["what-gpt3"]}`}>
        <div className={`${Style["what-gpt3__header-section"]}`}>
          <div className={`${Style["what-gpt3__heading-container"]}`}>
            <div className={`${Style["what-gpt3__heading-line"]}`}></div>
            <h2 className={`${Style["what-gpt3__heading-content"]}`}>What is GPT-3</h2>
          </div>
          <p className={`${Style["what-gpt3__header-description"]}`}>
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought. His defective nor convinced residence own.
            Connection has put impossible own apartments boisterous. At jointure
            ladyship an insisted so humanity he. Friendly bachelor entrance to
            on by.
          </p>
        </div>
        <div className={`${Style["what-gpt3__explore"]}`}>
          <p className={`${Style["what-gpt3__explore-content"]} gradient__text`} >The possibilities are beyond your imagination</p>
          <p className={`${Style["what-gpt3__explore-link"]}`}>
            <a href="">Explore The Library</a>
          </p>
        </div>
        <div className={`${Style["what-gpt3__features"]}`}>
          <div className={`${Style["what-gpt3__features-chatbots"]} ${Style["what-gpt3__feature"]}`}>
            <div className={`${Style.header}`}>
              <div className={`${Style["what-gpt3__header-line"]}`}></div>
              <h2 className={`${Style["what-gpt3__header-content"]}`}>Chatbots</h2>
            </div>
            <div className={`${Style.description}`}>
              We so opinion friends me message as delight. Whole front do of
              plate heard oh ought.
            </div>
          </div>
          <div className={`${Style["what-gpt3__features-Knowledgebase"]} ${Style["what-gpt3__feature"]}`}>
            <div className={`${Style.header}`}>
              <div className={`${Style["what-gpt3__header-line"]}`}></div>
              <h2 className={`${Style["what-gpt3__header-content"]}`}>Knowledgebase</h2>
            </div>
            <div className={`${Style.description}`}>
              At jointure ladyship an insisted so humanity he. Friendly bachelor
              entrance to on by. As put impossible own apartments. 
            </div>
          </div>
          <div className={`${Style["what-gpt3__features-Education"]} ${Style["what-gpt3__feature"]}`}>
            <div className={`${Style.header}`}>
              <div className={`${Style["what-gpt3__header-line"]}`}></div>
              <h2 className={`${Style["what-gpt3__header-content"]}`}>Education</h2>
            </div>
            <div className={`${Style.description}`}>
              At jointure ladyship an insisted so humanity he. Friendly bachelor
              entrance to on by. As put impossible own apartments. 
            </div>
          </div>
        </div>
      </div>
    </>
  ;
}
