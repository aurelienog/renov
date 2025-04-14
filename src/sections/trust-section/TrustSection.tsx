import React, { JSX } from 'react';
import styles from './styles.module.css'
import Image from 'next/image';

function TrustSection(): JSX.Element {
  return (
    <section className={`full-width ${styles.section}`}>
      <article className={styles.article}>
        <Image src="/assets/medal.svg" width={48} height={48} alt=''/>
        <h3>+10 ans d'expérience</h3>
      </article>
      <article  className={styles.article}>      
        <Image src="/assets/paint.svg" width={48} height={48} alt=''/>
        <h3>+150 projets réalisés</h3>
      </article>
      <article className={styles.article}> 
        <div className={styles.icons}>
          <Image src="/assets/star.svg" width={48} height={48} alt='5 stars'/>
          <Image src="/assets/star.svg" width={48} height={48} alt=''/>
          <Image src="/assets/star.svg" width={48} height={48} alt=''/>
          <Image src="/assets/star.svg" width={48} height={48} alt=''/>
          <Image src="/assets/star-half.svg" width={48} height={48} alt=''/>
        </div>
        <h3>98% de clients satisfaits</h3> 
      </article>
      <article  className={styles.article}>
        <Image src="/assets/hourglass.svg" width={48} height={48} alt=''/>
        <h3>100% des chantiers livrés à temps</h3>
      </article>
    </section>
  )
}

export default TrustSection