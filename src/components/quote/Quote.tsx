import React, { JSX } from 'react';
import styles from './styles.module.css';

function Quote(): JSX.Element {
  return (
    <div className={`full-width ${styles.isolation}`}>
      <q>C’est sur les chantiers que j’ai appris le métier, aux côtés de mon père.</q>
    </div>
  )
}

export default Quote