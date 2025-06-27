'use client'
import React, { useRef } from 'react';
import { useInView, useScroll, useTransform } from 'framer-motion';
import ParallaxCard from '../parallax-card/ParallaxCard';
import { StaticImageData } from 'next/image';
import Link from 'next/link';

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
      
      {isInView && <Link className='button' href="/realisations">Voir mes réalisations</Link>}
      
    </div>
  )
}

export default SliderWrapper