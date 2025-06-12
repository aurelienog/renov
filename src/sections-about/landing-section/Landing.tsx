import React, { JSX } from 'react';
import styles from './styles.module.css'
import LettersReveal from '@/components/letters-reveal/LettersReveal';


function Landing(): JSX.Element {

  return (
    <section className={`full-width base-layout ${styles.section}`}>
      <h1>Une histoire de famille</h1>
      <LettersReveal/>
    </section>
  )
}

export default Landing