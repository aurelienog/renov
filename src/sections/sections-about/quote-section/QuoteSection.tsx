import Quote from '@/components/quote/Quote';
import React from 'react';
import styles from './styles.module.css';

function QuoteSection() {
  return (
    <section aria-labelledby='citation' className={`${styles.section} section breakout`}>
      <h2 id="citation" aria-hidden className='visually-hidden'>Mot du fondateur</h2>
      <Quote/>
    </section>
  )
}

export default QuoteSection