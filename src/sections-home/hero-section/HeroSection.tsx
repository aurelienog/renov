import React, { JSX } from 'react';
import styles from './styles.module.css';
import Button from '@/components/button/Button';
import BackgroundImage from "@/components/background-image/BackgroundImage";
import heroImage from '../../../public/assets/images/hero.webp';

function HeroSection(): JSX.Element  {
  return (
    <section className={`full-width ${styles.hero}`}>
      <BackgroundImage image={heroImage}/>
      <article className={`${styles.info}`}>
        <h1 className='visually-hidden'>Peintre en bâtiment, expert en peinture et rénovation intérieure/extérieure dans les Yvelines et le Val-d&#39;Oise</h1>
        <h2>Redonnez vie à vos espaces</h2>
        <p>Peintre en bâtiment, j&#39;embellis et restaure vos intérieurs dans les Yvelines et le Val d&#39;Oise.</p>
        <Button>Obtenir un devis gratuit</Button>
      </article>      
    </section>
  )
};

export default HeroSection