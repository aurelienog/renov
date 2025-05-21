import ContactForm from '@/components/contact-form/ContactForm';
import React, { Suspense } from 'react';
import Loader from '../../app/(root)/loading';


function ContactSection() {
  return (
    <section className={`section`}>
      <h2>Me contacter</h2>
      <div>
        <Suspense fallback={<Loader/>}>
          <ContactForm/>
        </Suspense>
      </div>

      
    </section>
  )
}

export default ContactSection