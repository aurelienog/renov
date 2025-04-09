import React, { JSX } from 'react';
import styles from './styles.module.css';
import Image from "next/image";
import Button from '@/components/button/Button';

function HeroSection(): JSX.Element  {
  return (
    <section className={`full-width ${styles.hero}`}>
      <div className={styles.info}>
        <h1 className='visually-hidden'>Peintre en bâtiment, expert en peinture et rénovation intérieure/extérieure dans les Yvelines et le Val-d'Oise</h1>
        <h2>Redonnez vie à vos espaces</h2>
        <p>Peintre en bâtiment, je sublime et restaure vos intérieurs dans les Yvelines et le Val d'Oise.</p>
        <Button>Demander un devis gratuit</Button>
      </div>
      
      <div>
        <Image src="/assets/hero.webp" alt='hero' quality={100} fill style={{
        objectFit: 'cover'
      }} />
      </div>

      
      
    </section>
  )
};

export default HeroSection