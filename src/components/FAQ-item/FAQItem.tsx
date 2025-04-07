import React from 'react'
import { FaqEntry } from '@/models/interface';
import styles from './styles.module.css'


function FAQItem({ entry }: { entry: FaqEntry }) {
  const { question, answer } = entry;

  return (
    <details className={styles.details}>
      <summary className={styles.details__summary}>{question}</summary>
      <div className={styles.details__content}>{answer}</div>
    </details>
  );
}

export default FAQItem;