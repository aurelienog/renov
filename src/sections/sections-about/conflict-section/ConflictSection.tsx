import React, { JSX } from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import portrait from '../../../../public/assets/images/JulienWorking2.webp';

function ConflictSection():JSX.Element {
  return (
    <section className={`breakout section ${styles.section}`}>
      <figure>
        <Image src={portrait} alt='Julien' fill placeholder='blur'/>
      </figure>
      <article>
        <h2>ANJ RENOV,<br></br> une nouvelle étape</h2>
        <p>Quand mon père a approché l{`'`}âge de la retraite, j{`'`}ai décidé de <span className='highlight'>créer ma propre structure</span> et de poursuivre cette belle aventure à mon compte.</p>
        <p><span className='highlight'>ANJ RENOV</span>, cest la volonté de prolonger une tradition familiale, tout en développant mon propre style et mes engagements.</p>  
        <p>Aujourd{`'`}hui, j{`'`}accompagne chaque client avec attention, du premier contact jusquaux finitions, en mettant mon expérience au service de projets durables et soignés.</p>
      </article>
    </section>
  )
}

export default ConflictSection