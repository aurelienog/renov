import React, { JSX } from 'react';
import styles from './styles.module.css';
import { workSteps } from '../../data/data';
import TimelineWrapper from '@/components/timeline/timeline-wrapper/TimelineWrapper';


function HowItWorksSection(): JSX.Element {

  return (
    <section className={`section breakout ${styles.section}`}>
      <h2>Le processus</h2>
      <TimelineWrapper workSteps={workSteps} />
    </section>
  )
}

export default HowItWorksSection