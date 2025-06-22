import ComparisonChart from '@/components/comparison-chart/ComparisonChart';
import React, { JSX, Suspense } from 'react';
import styles from './styles.module.css';
import { columns } from '../../data/data';
import MotionInView from '../../components/motion-in-view/MotionInView';
import { fadeInLeft } from '@/animations/variants';
import Loader from '../../app/(root)/loading';


function BenefitsSection(): JSX.Element {

  return (
    <section className={`full-width base-layout section ${styles.benefits}`}>
      <h2>Quel professionnel choisir?</h2>
      <p>Chaque prestataire dispose de ses propres forces et contraintes. Comparer ses options est essentiel pour faire le bon choix.</p>
      <MotionInView 
      once= {true}
      className={styles.container}
      variants={fadeInLeft}
      >
        <Suspense fallback={<Loader/>}>
          <ComparisonChart data={columns}/>
        </Suspense>
      </MotionInView>
    </section>
  )
};

export default BenefitsSection