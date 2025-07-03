'use client'
import React, { useRef } from 'react';
import { useInView, useScroll, useTransform } from 'framer-motion';
import ParallaxCard from '../parallax-card/ParallaxCard';
import Link from 'next/link';
import { Project } from '@/lib/models/interfaces';

function SliderWrapper({lastProjects}: {lastProjects: Project[]}) {
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
      { lastProjects.map((project: Project, index:number) => {
          const isFirst = index === 0; 
          const isInvisible = [1, 3].includes(index);
          return <ParallaxCard image={ project.image } aria-hidden={isInvisible ? 'true' : undefined} description={ project.description } key={ index } maskSize={isFirst? maskScale : undefined}/>
        })
      }
      
      {isInView && <Link className='button' href="/realisations">Voir mes réalisations</Link>}
      
    </div>
  )
}

export default SliderWrapper