import FAQItem from '@/components/FAQ-item/FAQItem';
import React, { JSX } from 'react';
import { faqEntries } from '@/data/data';
import styles from './styles.module.css';

function FAQSection(): JSX.Element {
  return (
    <section className={`section ${styles.section}`}>
      <h2>Frequently asked questions</h2>
      <div>
      { faqEntries.map((entry, index )=> (
      <FAQItem key={index} entry={entry}/>
      ))}
      </div>      
    </section>
  )
};

export default FAQSection