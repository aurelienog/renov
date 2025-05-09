import React, { JSX } from 'react';
import styles from './styles.module.css';
import { beforeAfterPhotos } from '../../data/data';
import ParallaxSliderWrapper from '@/components/parallax-slider/ParallaxSliderWrapper';


function BeforeAfterSection(): JSX.Element {
  return (
    <section className={`section full-width ${styles.section}`} >
      <h2>Avant / Après</h2>
      <ParallaxSliderWrapper comparisons={ beforeAfterPhotos } />
    </section>
  )
}

export default BeforeAfterSection