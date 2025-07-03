'use client'
import React, { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import ParallaxCard from '../parallax-card/ParallaxCard';
import { Project } from '@/lib/models/interfaces';

function SliderWrapper({lastProjects}: {lastProjects: Project[]}) {
  const scrollRef= useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start 20%', '15% 15%']
  })
  const maskScale = useTransform(scrollYProgress, [0, 1], ['30%', '100%'])

  return (
    <div ref={scrollRef}>
      { lastProjects.map((project: Project, index:number) => {
          const isFirst = index === 0; 
          const isInvisible = [1, 3].includes(index);
          return <ParallaxCard image={ project.image } aria-hidden={isInvisible ? 'true' : undefined} description={ project.description } key={ index } maskSize={isFirst? maskScale : undefined}/>
        })
      }
    </div>
  )
}

export default SliderWrapper