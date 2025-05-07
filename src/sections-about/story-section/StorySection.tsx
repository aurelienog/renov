import React, { JSX } from 'react';
import styles from './styles.module.css';
import workingImage from '../../../public/assets/images/working.webp';
import Image from 'next/image';

function StorySection(): JSX.Element {
  return (
    <section className={`section breakout ${styles.section}`}>
      <article>
        <h2>Une passion transmise de père en fils</h2>
        <p>Depuis tout jeune, j’ai grandi dans l’univers des pinceaux, des enduits et des finitions parfaites.</p>  
        <p>Mon père, peintre depuis plusieurs décennies, m’a transmis plus qu’un savoir-faire : <span className='highlight'>une véritable exigence du travail bien fait</span>.
        </p>  
        <p>Pendant plusieurs années, j’ai travaillé à ses côtés, au sein de son entreprise, au contact direct des clients, des matières et des détails qui font la différence.
        </p>         
      </article>
      <figure>
        <Image src={workingImage} alt='de Julien qui peint un mur' fill placeholder='blur' style={{objectFit: 'cover'}}/>
      </figure>

      
    </section>
  )
}

export default StorySection