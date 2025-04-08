import React from 'react'
import { FaqEntry } from '@/models/interface';
import styles from './styles.module.css'


function FAQItem({ entry }: { entry: FaqEntry }) {
  const { question, answer } = entry;

  return (
    <details className={styles.details}>
      <summary>{question}</summary>
      <>{answer}</>
    </details>
  );
}

export default FAQItem;