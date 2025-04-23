import React, { JSX } from 'react';
import styles from './styles.module.css'
import Image from 'next/image';
import AnimatedCounter from '@/components/animated-counter/AnimatedCounter';

function TrustSection(): JSX.Element {

  return (
    <section className={`full-width ${styles.section}`}>
      <article className={styles.article}>
        <Image src="/assets/icons/medal.svg" width={48} height={48} alt='' className='glassmorphism'/>
        <h3><AnimatedCounter prefix={'+'} target={10} duration={1.5}/>ans d'expérience</h3>
      </article>
      <article  className={styles.article}>      
        <Image src="/assets/icons/paint.svg" width={48} height={48} alt='' className='glassmorphism'/>
        <h3><AnimatedCounter prefix={'+'} target={150} duration={2} character={4}/>projets réalisés</h3>
      </article>
      <article className={styles.article}> 
        <div className={styles.stars}>
          <Image src="/assets/icons/star.svg" width={48} height={48} alt='5 stars' className='glassmorphism'/>
          <Image src="/assets/icons/star.svg" width={48} height={48} alt='' className='glassmorphism'/>
          <Image src="/assets/icons/star.svg" width={48} height={48} alt='' className='glassmorphism'/>
          <Image src="/assets/icons/star.svg" width={48} height={48} alt='' className='glassmorphism'/>
          <Image src="/assets/icons/star-half.svg" width={48} height={48} alt='' className='glassmorphism'/>
        </div>
        <h3><AnimatedCounter target={98} suffix={'%'} duration={2.5}/> de clients satisfaits</h3> 
      </article>
      <article  className={styles.article}>
        <Image src="/assets/icons/hourglass.svg" width={48} height={48} alt='' className='glassmorphism'/>
        <h3><AnimatedCounter target={100} suffix={'%'} duration={3} character={4}/> des chantiers livrés à temps</h3>
      </article>
    </section>
  )
}

export default TrustSection