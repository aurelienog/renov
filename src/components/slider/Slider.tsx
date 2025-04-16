"use client"

import Image from 'next/image';
import React, { useState } from 'react';
import styles from './styles.module.css'
import before from '../../../public/assets/beforeBathroom.jpg';
import after from '../../../public/assets/afterBathroom.jpg';
import arrowsIcon from '../../../public/assets/arrowsInLine.svg'

function Slider() {
  const [sliderPosition, setSliderPosition] = useState(35);

  const handleMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));

    setSliderPosition(percent);
  }

  return (
    <article className={styles.wrapper} aria-label="Comparación de imágenes antes y después del baño">
      <figcaption className="visually-hidden">Mueve el cursor para comparar el estado del baño antes y después.</figcaption>
      <figure className={`${styles.afterContainer} ${styles.imagesContainer}`} 
        onMouseMove={handleMove}>
          
        <Image src={after} alt='after' fill/>
      
        <span className={`${styles.beforeContainer} ${styles.imagesContainer}`}  style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
          <Image src={before} alt='before' fill/>
        </span>

        <div className={styles.sliderLine} style={{ left: `calc(${sliderPosition}% - 4px)`}} role="presentation" aria-hidden="true"></div>
  
        <div className={styles.sliderBtn} style={{ left: `calc(${sliderPosition}% - 18px)`}} role="presentation" aria-hidden='true'>
          <Image src={arrowsIcon} alt=''/>
        </div>
      </figure>
    </article>
  )
}

export default Slider