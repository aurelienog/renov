import Quote from '@/components/quote/Quote';
import React from 'react';
import styles from './styles.module.css';

function QuoteSection() {
  return (
    <section aria-labelledby='quote' className={`${styles.section} section breakout`}>
      <Quote/>
    </section>
  )
}

export default QuoteSection