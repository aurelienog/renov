import React, { JSX } from 'react';
import styles from './styles.module.css';

function ConflictSection():JSX.Element {
  return (
    <section className={`${styles.section}`}>
      <figure>

      </figure>
      <div>
        <h2>Un passage de relais naturel</h2>
        <p>Quand mon père a approché l’âge de la retraite, il a choisi de fermer son entreprise, non sans émotion, mais avec une idée claire : me transmettre le flambeau.</p>
        <p>Il m’a encouragé à <span className='highlight'>créer ma propre structure</span>, pour continuer cette belle aventure artisanale, en conservant les mêmes valeurs de proximité, d’engagement et de qualité.</p>
        <p>C’est ainsi qu’est née <span className='highlight'>ANJ RENOV</span>, avec la volonté de prolonger une tradition familiale, tout en développant mon propre style et mes engagements.</p>  
      </div>
      
    </section>
  )
}

export default ConflictSection