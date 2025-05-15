import React, { JSX } from 'react';
import styles from './styles.module.css';
import MotionInView from '../motion-in-view/MotionInView';
import { fadeInUp } from '@/animations/variants';

function Quote(): JSX.Element {
  return (
    <MotionInView
    variants={fadeInUp}
    once={true}
    className={`full-width ${styles.isolation}`}>
      <q>C’est sur les chantiers que j’ai appris le métier, aux côtés de mon père.</q>
    </MotionInView>
  )
}

export default Quote