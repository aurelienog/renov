import FAQItem from '@/components/FAQ-item/FAQItem';
import React, { JSX } from 'react';
import { faqEntries } from '@/data/data';


function FAQSection(): JSX.Element {
  return (
    <section>
      <h2>Frequently asked questions</h2>
      { faqEntries.map((entry, index )=> (
        <FAQItem key={index} entry={entry}/>
      ))}
      
    </section>
  )
};

export default FAQSection