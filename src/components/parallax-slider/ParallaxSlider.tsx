'use client'
import { useScroll } from 'framer-motion';
import React, { JSX, useRef } from 'react';
import { BeforeAfterComparison } from '@/models/interfaces';
import ParallaxSlide from './ParallaxSlide';

function ParallaxSlider({ comparisons }: { comparisons: BeforeAfterComparison[] }): JSX.Element {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })
  return (
    <div ref={container} style={{ width: '100%' }}>
      { comparisons.map((project: BeforeAfterComparison, index: number) => { 
        const targetScale = 1 - ((comparisons.length  - index) * 0.05);
          return <ParallaxSlide {...project} index={index} key={index} range={[index * 0.25, 1]} targetScale={targetScale} progress={scrollYProgress}/>
        } )}
    </div>
  )
}

export default ParallaxSlider