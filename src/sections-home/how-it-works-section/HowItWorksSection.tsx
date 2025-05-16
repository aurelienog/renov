import React, { JSX, Suspense } from 'react';
import styles from './styles.module.css';
import { workSteps } from '../../data/data';
import TimelineWrapper from '@/components/timeline/timeline-wrapper/TimelineWrapper';

function HowItWorksSection(): JSX.Element {

  return (
    <section className={`section breakout ${styles.section}`}>
      <h2>Le processus</h2>
      <Suspense>
        <TimelineWrapper workSteps={workSteps} />
      </Suspense>
      
    </section>
  )
}

export default HowItWorksSection