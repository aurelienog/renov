import React, { JSX } from 'react';
import styles from './styles.module.css';
import workingImage from '../../../public/assets/images/antonio-working.webp';
import antonio from '../../../public/assets/images/antonio.webp';
import up from '../../../public/assets/images/antonio-up.webp';
import Image from 'next/image';

function StorySection(): JSX.Element {
  return (
    <section className={`full-width ${styles.section}`}>
      <article>
        <h2>Une passion transmise de père en fils</h2>
        <p>Depuis tout jeune, j’ai grandi dans l’univers des pinceaux, des enduits et des finitions parfaites.</p>  
        <p>Mon père, chef d&#39;entreprise dans le batiment, m’a transmis plus qu’un savoir-faire : <span className='highlight'>une véritable exigence du travail bien fait</span>.
        </p>  
        <p>Pendant plus de 10 ans, j’ai travaillé à ses côtés, au contact direct des clients, des matières et des détails qui font la différence.
        </p>
      </article>
      <div className={styles.wrapper}>
        <figure>
          <Image src={workingImage} alt='de Julien qui peint un mur' fill placeholder='blur' style={{objectFit: 'cover'}}/>
        </figure>
        <figure style={{ overflow: 'hidden', position: 'relative'}}>
          <Image src={up} alt='de Julien qui peint un mur' fill placeholder='blur' style={{objectFit: 'cover', scale: '1.5'}}/>
        </figure>
        <figure>
          <Image src={antonio} alt='de Julien qui peint un mur' fill placeholder='blur' style={{objectFit: 'cover'}}/>
        </figure>
      </div>

    </section>
  )
}

export default StorySection