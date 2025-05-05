import React, { JSX } from 'react';
import styles from './styles.module.css';

function StorySection(): JSX.Element {
  return (
    <section className={`section ${styles.section}`}>
      <div>
        <h2>Une passion transmise de père en fils</h2>
        <p>Depuis tout jeune, j’ai grandi dans l’univers des pinceaux, des enduits et des finitions parfaites.</p>  
        <p>Mon père, peintre depuis plusieurs décennies, m’a transmis plus qu’un savoir-faire : <span className='highlight'>une véritable exigence du travail bien fait</span>.
        </p>  
        <p>Pendant plusieurs années, j’ai travaillé à ses côtés, au sein de son entreprise, au contact direct des clients, des matières et des détails qui font la différence.
        </p>
      </div>
      <figure>

      </figure>
      

      

    </section>
  )
}

export default StorySection