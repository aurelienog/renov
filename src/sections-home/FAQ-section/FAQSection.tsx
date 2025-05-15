import FAQItem from '@/components/FAQ-item/FAQItem';
import React, { JSX } from 'react';
import { faqEntries } from '@/data/data';
import styles from './styles.module.css';
import MotionInView from '@/components/motion-in-view/MotionInView';
import { staggerContainer } from '../../animations/variants'

function FAQSection(): JSX.Element {
  return (
    <section className={`section ${styles.section}`}>
      <MotionInView
      variants={staggerContainer}
      once = {true}
      >
      <h2>Questions fréquentes</h2>
      { faqEntries.map((entry, index )=> (
      <FAQItem key={index} entry={entry}/>
      ))}
      </MotionInView>   
      <div className={styles.illustration}>
        Aqui va una photo
      </div>      
    </section>
  )
};

export default FAQSection