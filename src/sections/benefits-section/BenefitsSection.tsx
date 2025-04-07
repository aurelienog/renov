import ComparisonChart from '@/components/comparison-chart/ComparisonChart';
import React, { JSX } from 'react';
import styles from './styles.module.css';


function BenefitsSection(): JSX.Element {
  return (
    <section className={`full-width ${styles.benefits}`}>
      <h2>BenefitsSection</h2>
      <p>Les Avantages de Faire Appel à un Artisan Peintre Expérimenté</p>
      <ComparisonChart/>
    </section>
  )
};

export default BenefitsSection