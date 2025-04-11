import React from 'react';
import styles from './styles.module.css'
import Image from 'next/image';

function TrustSection() {
  return (
    <section className={`section ${styles.section} glassmorphism`}>
      <article>10+ ans d'expérience</article>
      <article>+150 projets réalisés</article>
      <article> 
        <div className={styles.icons}>
          <Image src="/assets/star.svg" width={24} height={24} alt='5 stars'/>
          <Image src="/assets/star.svg" width={24} height={24} alt=''/>
          <Image src="/assets/star.svg" width={24} height={24} alt=''/>
          <Image src="/assets/star.svg" width={24} height={24} alt=''/>
          <Image src="/assets/star.svg" width={24} height={24} alt=''/>
        </div>
        
        <h3>98% de clients satisfaits</h3> 
      </article>
      <article>+150 projets réalisés </article>
    </section>
  )
}

export default TrustSection