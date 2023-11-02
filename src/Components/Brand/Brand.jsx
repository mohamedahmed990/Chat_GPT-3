import React from 'react';
import Style from './Brand.module.css';
import Logo1 from '../../assets/google.png';
import Logo2 from '../../assets/slack.png';
import Logo3 from '../../assets/dropbox.png';
import Logo4 from '../../assets/shopify.png';

export default function Brand() {
  return <>
    <div className={`${Style["brands-container"]}`}>

      <div className={`${Style.brands}`}>
        <div className={`${Style["brands-logo"]}`}>
          <img src={Logo1} alt="" />
        </div>
        <div className={`${Style["brands-logo"]}`}>
          <img src={Logo2} alt="" />
        </div>
        <div className={`${Style["brands-logo"]}`}>
          <img src={Logo3} alt="" />
        </div>
        <div className={`${Style["brands-logo"]}`}>
          <img src={Logo4} alt="" />
        </div>
      </div>
    </div>

  </>
}
