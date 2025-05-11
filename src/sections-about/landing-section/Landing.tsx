import React, { JSX } from 'react';
import Family from '@/components/family/Family';
import teamImage from '../../../public/assets/images/portrait.webp';
import styles from './styles.module.css'


function Landing(): JSX.Element {

  return (
    <section className={`full-width ${styles.section}`}>
      <Family image={teamImage}/>
      <div className={styles.titles}>
        <h1>Une histoire de famille</h1>
        <h2 className={styles.a}>A</h2>
        <h2 className={styles.n}>N</h2>
        <h2 className={styles.j}>J</h2>
      </div>
    </section>
  )
}

export default Landing