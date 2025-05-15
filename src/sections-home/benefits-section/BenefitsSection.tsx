import ComparisonChart from '@/components/comparison-chart/ComparisonChart';
import React, { JSX } from 'react';
import styles from './styles.module.css';
import { columns } from '../../data/data';
import MotionInView from '../../components/motion-in-view/MotionInView';
import { fadeInLeft } from '@/animations/variants';


function BenefitsSection(): JSX.Element {

  return (
    <section className={`full-width base-layout section ${styles.benefits}`}>
      <h2>Quel professionnel choisir?</h2>
      <MotionInView 
      once= {false}
      className={styles.container}
      variants={fadeInLeft}
      >
        <ComparisonChart data={columns}/>
      </MotionInView>
    </section>
  )
};

export default BenefitsSection