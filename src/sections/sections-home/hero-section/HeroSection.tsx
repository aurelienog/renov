import React, { JSX } from 'react';
import styles from '@/sections/sections-home/hero-section/styles.module.css';
import BackgroundImage from "@/components/background-image/BackgroundImage";
import heroImage from '@/../public/assets/images/hero.webp';
import Link from 'next/link';

function HeroSection(): JSX.Element  {
  return (
    <section aria-labelledby='accueil' className={`full-width ${styles.hero}`}>
      <div aria-hidden="true" className={styles.clip}></div>
      <BackgroundImage image={heroImage} overlay={true}/>
      <article className={`${styles.info}`}>
        <h1 id="accueil">Redonnez vie à vos espaces</h1>
        <p>Peintre en bâtiment, j{`'`}embellis et restaure vos intérieurs dans les Yvelines et le Val d{`'`}Oise.</p>
        <Link href={"/#contact"} className='button'>Obtenir un devis gratuit</Link>
      </article>      
    </section>
  )
};

export default HeroSection