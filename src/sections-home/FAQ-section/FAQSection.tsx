import FAQItem from '@/components/FAQ-item/FAQItem';
import React, { JSX } from 'react';
import { faqEntries } from '@/data/data';
import styles from './styles.module.css';

function FAQSection(): JSX.Element {
  return (
    <section className={`section ${styles.section}`}>
      <div>
      <h2>Questions fréquentes</h2>
      { faqEntries.map((entry, index )=> (
      <FAQItem key={index} entry={entry}/>
      ))}
      </div>   
      <div className={styles.illustration}>
        Aqui va una photo
      </div>      
    </section>
  )
};

export default FAQSection