import React, { JSX } from 'react';
import styles from './styles.module.css';
import up from '../../../../public/assets/images/JulienWorking.webp';
import Image from 'next/image';

function StorySection(): JSX.Element {
  return (
    <section className={`breakout section ${styles.section}`}>
      <article>
        <h2>Une passion transmise de père en fils</h2>
        <p>Depuis tout jeune, j{`'`}ai grandi dans l{`'`}univers des pinceaux, des enduits et des finitions parfaites.</p>  
        <p>Mon père, chef d{`'`}entreprise dans le batiment, m{`'`}a transmis plus qu{`'`}un savoir-faire : <span className='highlight'>une véritable exigence du travail bien fait</span>.
        </p>  
        <p>Pendant plus de 10 ans, j{`'`}ai travaillé à ses côtés, au contact direct des clients, des matières et des détails qui font la différence.
        </p>
      </article>
      <figure>
        <Image src={up} alt='de Julien qui peint un mur' fill placeholder='blur'/>
      </figure>
    </section>
  )
}

export default StorySection