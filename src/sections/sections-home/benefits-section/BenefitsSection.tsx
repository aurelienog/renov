
import React, { JSX, Suspense } from 'react';
import ComparisonChart from '@/components/comparison-chart/ComparisonChart';
import styles from '@/sections/sections-home/benefits-section/styles.module.css';
import { fadeInLeft } from '@/animations/variants';
import Loader from '@/app/(root)/loading';
import MotionInView from '@/components/motion-in-view/MotionInView';
import { columns } from '@/data/data';

function BenefitsSection(): JSX.Element {

  return (
    <section aria-labelledby="comparatif" className={`full-width base-layout section ${styles.benefits}`}>
      <h2 id="comparatif">Quel professionnel choisir?</h2>
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