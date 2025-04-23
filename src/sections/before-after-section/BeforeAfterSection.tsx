import React from 'react';
import styles from './styles.module.css';
import ParallaxSlider from '@/components/parallax-slider/ParallaxSlider';
import { beforeAfterPhotos } from '../../data/data';

function BeforeAfterSection() {
  return (
    <section className={` ${styles.section}`} >
      <h2>Avant / Après</h2>
      <ParallaxSlider comparisons={ beforeAfterPhotos } />
    </section>
  )
}

export default BeforeAfterSection