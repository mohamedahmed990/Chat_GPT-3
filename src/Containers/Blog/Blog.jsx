import React from "react";
import Style from "./Blog.module.css";
import MainArticleImg from "../../assets/Rectangle 22.svg";
import SubArticleImg1 from "../../assets/Rectangle 23.svg";
import SubArticleImg2 from "../../assets/Rectangle 24.svg";
import SubArticleImg3 from "../../assets/Rectangle 25.svg";
import SubArticleImg4 from "../../assets/Rectangle 26.svg";

export default function Blog() {
  return (
    <>
      <div className={`${Style["blog"]}`}>
        <h1 className={`${Style["blog__heading"]} gradient__text section-heading` }>
          A lot is happening, We are blogging about it.
        </h1>
        <div className={`${Style["blog__articles"]}`}>
          <div className={`${Style["blog__main-article-container"]}`}>
            <div className={`${Style["blog__main-article"]}`}>
              <div className={`${Style["blog__main-article-img"]}`}>
                <img src={MainArticleImg} alt="" />
              </div>
              <div className={`${Style["blog__main-article-content"]}`}>
                <p className={`${Style["blog__main-article-date"]}`}>Sep 26, 2021</p>
                <p className={`${Style["blog__main-article-description"]}`}>
                  GPT-3 and Open AI is the future. Let us exlore how it is?
                </p>
                <p className={`${Style["blog__read-more"]}`}>Read Full Article</p>
              </div>
            </div>
          </div>
          <div className={`${Style["blog__sub-articles"]}`}>
            <div className={`${Style["blog__article-container"]}`}>
              <div className={`${Style["blog__article"]}`}>
                <div className={`${Style["blog__article-img"]}`}>
                  <img src={SubArticleImg1} alt="" />
                </div>
                <div className={`${Style["blog__article-content"]}`}>
                  <p className={`${Style["blog__article-date"]}`}>Sep 26, 2021</p>
                  <p className={`${Style["blog__article-description"]}`}>
                    GPT-3 and Open AI is the future. Let us exlore how it is?
                  </p>
                  <p className={`${Style["blog__read-more"]}`}>Read Full Article</p>
                </div>
              </div>
            </div>
            <div className={`${Style["blog__article-container"]}`}>
              <div className={`${Style["blog__article"]}`}>
                <div className={`${Style["blog__article-img"]}`}>
                  <img src={SubArticleImg2} alt="" />
                </div>
                <div className={`${Style["blog__article-content"]}`}>
                  <p className={`${Style["blog__article-date"]}`}>Sep 26, 2021</p>
                  <p className={`${Style["blog__article-description"]}`}>
                    GPT-3 and Open AI is the future. Let us exlore how it is?
                  </p>
                  <p className={`${Style["blog__read-more"]}`}>Read Full Article</p>
                </div>
              </div>
            </div>
            <div className={`${Style["blog__article-container"]}`}>
              <div className={`${Style["blog__article"]}`}>
                <div className={`${Style["blog__article-img"]}`}>
                  <img src={SubArticleImg3} alt="" />
                </div>
                <div className={`${Style["blog__article-content"]}`}>
                  <p className={`${Style["blog__article-date"]}`}>Sep 26, 2021</p>
                  <p className={`${Style["blog__article-description"]}`}>
                    GPT-3 and Open AI is the future. Let us exlore how it is?
                  </p>
                  <p className={`${Style["blog__read-more"]}`}>Read Full Article</p>
                </div>
              </div>
            </div>
            <div className={`${Style["blog__article-container"]}`}>
              <div className={`${Style["blog__article"]}`}>
                <div className={`${Style["blog__article-img"]}`}>
                  <img src={SubArticleImg4} alt="" />
                </div>
                <div className={`${Style["blog__article-content"]}`}>
                  <p className={`${Style["blog__article-date"]}`}>Sep 26, 2021</p>
                  <p className={`${Style["blog__article-description"]}`}>
                    GPT-3 and Open AI is the future. Let us exlore how it is?
                  </p>
                  <p className={`${Style["blog__read-more"]}`}>Read Full Article</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
