import React, { JSX } from 'react';
import styles from './styles.module.css';
import Gallery from '@/components/gallery/Gallery';
import { services } from '../../data/data';
import MotionInView from '@/components/motion-in-view/MotionInView';
import { fadeInUp } from '../../animations/variants'

function ServicesSection(): JSX.Element {
  return (
    <section className={`section full-width ${styles.section}`}>
      <MotionInView
      once= {false}
      variants={fadeInUp}
      >
        <h2>Mes prestations</h2>
        <Gallery services={services} />
      </MotionInView>

    </section>
  )
}

export default ServicesSection