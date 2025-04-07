import React, { JSX } from 'react';
import styles from './styles.module.css';

function HeroSection(): JSX.Element  {
  return (
    <section className={`full-width base-layout ${styles.hero}`}>
      <h1>Votre expert en peinture et rénovation intérieure/extérieure</h1>
    </section>
  )
};

export default HeroSection