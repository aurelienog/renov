import React, { JSX } from 'react';
import styles from './styles.module.css'
import LettersReveal from '@/components/letters-reveal/LettersReveal';
import BackgroundImage from '@/components/background-image/BackgroundImage';
import texture from '@/../public/assets/images/backgroundWood.webp'


function Landing(): JSX.Element {

  return (
    <section className={`full-width base-layout ${styles.section}`}>
      <h1>Une histoire de famille</h1>
      <LettersReveal/>
      <BackgroundImage image={texture}/> 
    </section>
  )
}

export default Landing