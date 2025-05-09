'use client'
import React, { JSX } from 'react'
import dynamic from 'next/dynamic';
import { BeforeAfterComparison } from '@/models/interfaces';

const ParallaxSlider = dynamic(() => import('./ParallaxSlider'), {
  ssr: false,
  loading: () => <p>Chargement du slider...</p>,
});

function ParallaxSliderWrapper({ comparisons }: { comparisons: BeforeAfterComparison[] }): JSX.Element  {
  return (
    <>
      <ParallaxSlider comparisons={ comparisons } />
    </>
  )
}

export default ParallaxSliderWrapper