import React, { JSX } from 'react';
import styles from './styles.module.css';
import Image from "next/image";

function HeroSection(): JSX.Element  {
  return (
    <section className={`full-width section ${styles.hero}`}>
      <div>
        <h1 className='visually-hidden'>Votre expert en peinture et rénovation intérieure/extérieure dans les Yvelines et le Val-d'Oise</h1>
        <h2>Redonnez vie à vos espaces</h2>
        <p>Peintre de père en fils, je sublime et restaure vos intérieurs dans les Yvelines et le Val d'Oise.</p>
      </div>
      
      <div>
        <Image src="/assets/hero.webp" alt='hero' quality={100} width={800} height={600} style={{
        objectFit: 'contain'
      }} />
      </div>
      
    </section>
  )
};

export default HeroSection