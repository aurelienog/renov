import React, { JSX } from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import portrait from '../../../../public/assets/images/JulienWorking2.webp';
import MotionInView from '@/components/motion-in-view/MotionInView';
import { fadeInUp } from '@/animations/variants';

function ConflictSection():JSX.Element {
  return (
    <section aria-labelledby='le-declencheur' className={`breakout section ${styles.section}`}>
      <figure>
        <Image src={portrait} alt='Julien' fill placeholder='blur'/>
      </figure>
      <MotionInView variants={fadeInUp} once={true}>
        <article>
          <h2 id="le-declencheur">ANJ RENOV,<br></br> une nouvelle étape</h2>
          <p>Quand mon père a approché l{`'`}âge de la retraite, j{`'`}ai décidé de <span className='highlight'>créer ma propre structure</span> et de poursuivre cette belle aventure à mon compte.</p>
          <p><span className='highlight'>ANJ RENOV</span>, cest la volonté de prolonger une tradition familiale, tout en développant mon propre style et mes engagements.</p>  
          <p>Aujourd{`'`}hui, j{`'`}accompagne chaque client avec attention, du premier contact jusqu{`'`}aux finitions, en mettant mon expérience au service de projets durables et soignés.</p>
        </article>
      </MotionInView>
    </section>
  )
}

export default ConflictSection