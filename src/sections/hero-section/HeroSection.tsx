import React, { JSX } from 'react';
import styles from './styles.module.css';
import Image from "next/image";
import Button from '@/components/button/Button';

function HeroSection(): JSX.Element  {
  return (
    <section className={`full-width ${styles.hero}`}>
      <div className={`${styles.info} glassmorphism`}>
        <h1 className='visually-hidden'>Peintre en bâtiment, expert en peinture et rénovation intérieure/extérieure dans les Yvelines et le Val-d'Oise</h1>
        <h2>Redonnez vie à vos espaces</h2>
        <p>Peintre en bâtiment, j'embellis et restaure vos intérieurs dans les Yvelines et le Val d'Oise.</p>
        <Button>Obtenir un devis gratuit</Button>
      </div>      
      <div>
        <Image src="/assets/hero.webp" priority quality={100} fill style={{
        objectFit: 'cover'
      }} alt="montre une cuisine spacieuse et lumineuse. L'esthétique générale est épurée, élégante et moderne. Il y a un îlot de cuisine avec quatre chaises en bois. La cuisine est éclairée par des suspensions et dispose d'une grande fenêtre avec des stores blancs." />
      </div>
    </section>
  )
};

export default HeroSection