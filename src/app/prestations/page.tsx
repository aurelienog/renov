import LandingPrestations from '@/sections/sections-prestations/landing/LandingPrestations';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "Mes Prestations"
}

function page() {
  return (
    <main className='base-layout'>
      <LandingPrestations/>
    </main>
  )
}

export default page