import React, { JSX } from 'react';
import Family from '@/components/family/Family';
import teamImage from '../../../public/assets/images/portrait.webp';
import styles from './styles.module.css'


function Landing(): JSX.Element {
  return (
    <section className={`full-width ${styles.section}`}>
      <Family image={teamImage}/>
    </section>
  )
}

export default Landing