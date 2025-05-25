'use client'
import React, { JSX } from 'react'
import { BeforeAfterComparison } from '../../lib/models/interfaces';
import ParallaxSlider from './ParallaxSlider';

function ParallaxSliderWrapper({ comparisons }: { comparisons: BeforeAfterComparison[] }): JSX.Element  {
  return (
    <>
      <ParallaxSlider comparisons={ comparisons } />
    </>
  )
}

export default ParallaxSliderWrapper