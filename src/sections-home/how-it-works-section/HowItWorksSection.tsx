import React, { JSX, Suspense } from 'react';
import styles from './styles.module.css';
import { workSteps } from '../../data/data';
import TimelineWrapper from '@/components/timeline/timeline-wrapper/TimelineWrapper';
import Loader from '../../app/(root)/loading';

function HowItWorksSection(): JSX.Element {

  return (
    <section className={`section breakout ${styles.section}`}>
      <h2>Le processus</h2>
      <Suspense fallback={<Loader/>}>
        <TimelineWrapper workSteps={workSteps} />
      </Suspense>
      
    </section>
  )
}

export default HowItWorksSection