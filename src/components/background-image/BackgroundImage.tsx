import React, { JSX }  from 'react';
import heroImage from '../../../public/assets/images/hero.webp';
import Image from "next/image";
import styles from './styles.module.css';

function BackgroundImage(): JSX.Element  {
  return (
    <div className={styles.wrapper}>
      <Image src={heroImage} placeholder='blur' priority sizes='100vw' quality={100} fill style={{
        objectFit: 'cover'
      }} alt="montre une cuisine spacieuse et lumineuse. L'esthétique générale est épurée, élégante et moderne. Il y a un îlot de cuisine avec quatre chaises en bois. La cuisine est éclairée par des suspensions et dispose d'une grande fenêtre avec des stores blancs." />
    </div>
  )
}

export default BackgroundImage