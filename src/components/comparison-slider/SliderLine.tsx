import React from 'react';
import styles from './styles.module.css';

function SliderLine({sliderPosition} : {sliderPosition:number}) {
  return (
    <>
    <div
          className={styles.sliderLine}
          style={{ left: `calc(${sliderPosition}% - 2px)` }}
          role="presentation"
          aria-hidden="true"
        ></div>

        <div
          className={styles.sliderBtn}
          style={{ left: `calc(${sliderPosition}% - 1em)` }}
          role="presentation"
          aria-hidden="true"
        > 
        </div></>
  )
}

export default SliderLine