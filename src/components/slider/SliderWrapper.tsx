'use client'
import React, { useRef } from 'react';
import { useInView, useScroll, useTransform } from 'framer-motion';
import ParallaxCard from '../parallax-card/ParallaxCard';
import { StaticImageData } from 'next/image';
import Button from '../button-cta/Button';
import TransitionLink from '@/lib/TransitionLink';

function SliderWrapper({lastProjects}: {lastProjects: StaticImageData[]}) {
  const scrollRef= useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start 20%', '15% 15%']
  })
  const maskScale = useTransform(scrollYProgress, [0, 1], ['30%', '100%'])

  // show CTA Button
  const isInView = useInView(scrollRef, { amount: 0.16, once: false})
  
  return (
    <div ref={scrollRef}>
      { lastProjects.map((project: StaticImageData, index:number) => {
          const isFirst = index === 0; 
          return <ParallaxCard project={ project } key={ index } maskSize={isFirst? maskScale : undefined}/>
        })
      }
      
      {isInView && <TransitionLink href="/realisations"><Button>Voir mes réalisations</Button></TransitionLink>}
      
    </div>
  )
}

export default SliderWrapper