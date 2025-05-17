import FAQItem from '@/components/FAQ-item/FAQItem';
import React, { JSX, Suspense } from 'react';
import { faqEntries } from '@/data/data';
import styles from './styles.module.css';
import MotionInView from '@/components/motion-in-view/MotionInView';
import { staggerContainer } from '../../animations/variants';
import Loader from '../../app/(root)/loading';

function FAQSection(): JSX.Element {
  return (
    <section className={`section ${styles.section}`}>
      <MotionInView
      variants={staggerContainer}
      once = {true}
      >
        <h2>Questions fréquentes</h2>
        <Suspense fallback={<Loader/>}>
        { faqEntries.map((entry, index )=> (
          <FAQItem key={index} entry={entry}/>
        ))}
        </Suspense>
      </MotionInView>   
      <div className={styles.illustration}>
        Aqui va una photo
      </div>      
    </section>
  )
};

export default FAQSection