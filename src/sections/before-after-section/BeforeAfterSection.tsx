import Slider from '@/components/slider/Slider';
import React from 'react';
import styles from './styles.module.css';
import beforeBathroom from '../../../public/assets/beforeBathroom.webp';
import afterBathroom from '../../../public/assets/afterBathroom.webp';
import beforeLiving from '../../../public/assets/livingBefore.webp';
import afterliving from '../../../public/assets/livingAfter.webp';
import bedroomBefore from '../../../public/assets/bedroomBefore.webp';
import bedroomAfter from '../../../public/assets/bedroomAfter.webp';

function BeforeAfterSection() {
  return (
    <section className={`section full-width ${styles.section}`} >
      <h2>Avant / Après</h2>
      <article>
        <div className={styles.info}>
          <h3>Rénovation</h3>
          <p>description</p>
        </div>
        <Slider before={beforeBathroom} after= {afterBathroom} title={"de bain"}/>
      </article>
      <article className={styles.reverse}>
        <div className={styles.info}>
          <h3>Rénovation</h3>
          <p>description</p>
        </div>
        <Slider before={beforeLiving} after= {afterliving} title={"à manger"}/>
      </article>
      <article>
        <div className={styles.info}>
          <h3>Rénovation</h3>
          <p>description</p>
        </div>
        <Slider before={bedroomBefore} after= {bedroomAfter} title={"chambre"}/>
      </article>
    </section>
  )
}

export default BeforeAfterSection