import ContactForm from '@/components/contact-form/ContactForm';
import React, { Suspense } from 'react';
import Loader from '../../app/(root)/loading';

function ContactSection() {
  return (
    <section className={`section`}>
      <h2>Formulaire de contact</h2>
      <Suspense fallback={<Loader/>}>
        <ContactForm/>
      </Suspense>
    </section>
  )
}

export default ContactSection