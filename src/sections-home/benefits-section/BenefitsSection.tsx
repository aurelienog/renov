import ComparisonChart from '@/components/comparison-chart/ComparisonChart';
import React, { JSX } from 'react';
import styles from './styles.module.css';
import { columns } from '../../data/data';


function BenefitsSection(): JSX.Element {

  return (
    <section className={`full-width base-layout section ${styles.benefits}`}>
      <h2>Quel professionnel choisir?</h2>
      <div className={styles.container}>
        <ComparisonChart data={columns}/>
      </div>
    </section>
  )
};

export default BenefitsSection