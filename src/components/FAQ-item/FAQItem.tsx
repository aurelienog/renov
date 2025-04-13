import React, { JSX } from 'react';
import { FaqEntry } from '@/models/interface';
import styles from './styles.module.css';


function FAQItem({ entry }: { entry: FaqEntry }): JSX.Element  {
  const { question, answer } = entry;

  return (
    <details className={styles.details}>
      <summary>{question}</summary>
      <>{answer}</>
    </details>
  );
}

export default FAQItem;