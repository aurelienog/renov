import React, { Suspense } from 'react';
import ContactForm from '@/components/contact-form/ContactForm';
import Loader from '@/app/(root)/loading';
import styles from '@/sections/sections-home/contact-section/styles.module.css';

function ContactSection() {
  return (
    <section aria-labelledby="contact" className={`${styles.section} section`}>
      <h2 id="contact">Me contacter</h2>
        <Suspense fallback={<Loader/>}>
          <ContactForm/>
        </Suspense>
    </section>
  )
}

export default ContactSection