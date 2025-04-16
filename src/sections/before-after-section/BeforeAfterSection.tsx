

import Image from 'next/image';
import React from 'react';
import before from '../../../public/assets/beforeBathroom.jpg';
import after from '../../../public/assets/afterBathroom.jpg';
import styles from './styles.module.css';
import arrows from '../../../public/assets/arrowsInLine.svg';


function BeforeAfterSection() {



  return (
    <section className=''>
      <h2>Avant / Après</h2>
      <div className={styles.container}>
        <div className={styles.imagesContainer}>
          <Image src={before} alt='before' className={`${styles.before} ${styles.sliderImage}`} />
          <Image src={after} alt='after' className={`${styles.after} ${styles.sliderImage}`}/>
        </div>
      
      <input type='range' min="0" max="100" value="50" className={styles.slider} aria-label="pourcentage visible de la photo Avant"/>
      
      <div className={styles.sliderLine}></div>
      <div className={styles.sliderBtn} aria-hidden='true'>
        <Image src={arrows} alt=''/>
      </div>
      
      
      </div>

      
    </section>
  )
}

export default BeforeAfterSection