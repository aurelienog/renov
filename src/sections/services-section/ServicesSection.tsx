import React, { JSX } from 'react';
import styles from './styles.module.css';
import Gallery from '@/components/gallery/Gallery';


function ServicesSection(): JSX.Element {
  
  return (
    <section className={`section full-width ${styles.section}`}>
      <h2>Mes prestations</h2>
      <Gallery />
    </section>
  )
}

export default ServicesSection