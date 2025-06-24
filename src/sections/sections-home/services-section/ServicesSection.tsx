import React, { JSX } from 'react';
import styles from './styles.module.css';
import Gallery from '@/components/gallery/Gallery';
import { services } from '../../../data/data';
import MotionInView from '@/components/motion-in-view/MotionInView';
import { fadeInRight } from '../../../animations/variants'

function ServicesSection(): JSX.Element {
  return (
    <section className={`section full-width ${styles.section}`}>
      <MotionInView
      once={true}
      variants={fadeInRight}
      >
        <h2>Mes prestations</h2>
      </MotionInView>  
      <Gallery services={services} />
    </section>
  )
}

export default ServicesSection