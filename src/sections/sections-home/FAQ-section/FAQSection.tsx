import React, { JSX, Suspense } from 'react';
import FAQItem from '@/components/FAQ-item/FAQItem';
import { faqEntries } from '@/data/data';
import styles from '@/sections/sections-home/FAQ-section/styles.module.css';
import MotionInView from '@/components/motion-in-view/MotionInView';
import { staggerContainer } from '@/animations/variants';
import Loader from '@/app/(root)/loading';

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
    </section>
  )
};

export default FAQSection