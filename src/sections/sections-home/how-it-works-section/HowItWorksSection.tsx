import React, { JSX, Suspense } from 'react';
import styles from '@/sections/sections-home/how-it-works-section/styles.module.css';
import { workSteps } from '@/data/data';
import TimelineWrapper from '@/components/timeline/timeline-wrapper/TimelineWrapper';
import Loader from '@/app/(root)/loading';
import Link from 'next/link';
import MotionInView from '@/components/motion-in-view/MotionInView';
import { fadeInLeft } from '@/animations/variants';


function HowItWorksSection(): JSX.Element {

  return (
    <section className={`section breakout ${styles.section}`}>
      <MotionInView variants={fadeInLeft} once={true}><h2>Le processus</h2></MotionInView>
      <Suspense fallback={<Loader/>}>
        <TimelineWrapper workSteps={workSteps} />
      </Suspense>
      <Link href="/#contact" className='button'>Demander un devis</Link>
    </section>
  )
}

export default HowItWorksSection